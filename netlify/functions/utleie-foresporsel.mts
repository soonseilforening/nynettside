// Tar imot utleieforespørsler fra skjemaet på /utleielokale.
// 1. Sjekker forespørselen med de samme reglene som skjemaet (src/lib/rental.ts).
// 2. Lagrer den i Supabase (tabellen rental_requests).
// 3. Sender den til Apps Script i regnearket «Neptun forespørsel».
// Nøklene ligger som miljøvariabler i Netlify, aldri i koden. Se docs/utleie.md.

import {
  endDateFor,
  getRentalType,
  validateRentalRequest,
  type RentalRequestInput,
} from '../../src/lib/rental';

export const config = { path: '/api/utleie' };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

function todayInOslo(): string {
  // sv-SE gir formatet YYYY-MM-DD
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Oslo' }).format(new Date());
}

export default async (req: Request) => {
  if (req.method !== 'POST') return json({ ok: false, message: 'Method not allowed' }, 405);

  let input: RentalRequestInput;
  try {
    input = (await req.json()) as RentalRequestInput;
  } catch {
    return json({ ok: false, message: 'Ugyldig forespørsel.' }, 400);
  }

  // Honeypot: et skjult felt som bare roboter fyller ut. Svar «ok» uten å lagre.
  if (input.website) return json({ ok: true });

  const result = validateRentalRequest(input, todayInOslo());
  if (!result.ok) return json({ ok: false, field: result.field, message: result.message }, 400);

  const type = getRentalType(input.rentalType)!;
  const request = {
    rentalType: type.label,
    startDate: input.startDate,
    endDate: endDateFor(type, input.startDate),
    name: input.name.trim(),
    address: input.address.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    purpose: input.purpose.trim(),
    participants: Number(input.participants),
    isMember: Boolean(input.isMember),
  };

  const [savedToDb, savedToSheet] = await Promise.all([saveToSupabase(request), sendToSheet(request)]);

  if (!savedToDb && !savedToSheet) {
    return json(
      { ok: false, message: 'Vi klarte ikke å ta imot forespørselen akkurat nå. Prøv igjen senere, eller send en e-post.' },
      502
    );
  }
  return json({ ok: true });
};

type CleanRequest = {
  rentalType: string;
  startDate: string;
  endDate: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  purpose: string;
  participants: number;
  isMember: boolean;
};

async function saveToSupabase(r: CleanRequest): Promise<boolean> {
  const url = Netlify.env.get('SUPABASE_URL');
  const key = Netlify.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) {
    console.warn('Supabase er ikke satt opp (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY mangler)');
    return false;
  }
  try {
    const res = await fetch(`${url}/rest/v1/rental_requests`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        rental_type: r.rentalType,
        start_date: r.startDate,
        end_date: r.endDate,
        name: r.name,
        address: r.address,
        email: r.email,
        phone: r.phone,
        purpose: r.purpose,
        participants: r.participants,
        is_member: r.isMember,
        consent_at: new Date().toISOString(),
      }),
    });
    if (!res.ok) console.error('Supabase-feil', res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error('Supabase-feil', err);
    return false;
  }
}

async function sendToSheet(r: CleanRequest): Promise<boolean> {
  const url = Netlify.env.get('APPS_SCRIPT_URL');
  const secret = Netlify.env.get('APPS_SCRIPT_SECRET');
  if (!url || !secret) {
    console.warn('Apps Script er ikke satt opp (APPS_SCRIPT_URL / APPS_SCRIPT_SECRET mangler)');
    return false;
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'nettside', secret, ...r, isMember: r.isMember ? 'Ja' : 'Nei' }),
      redirect: 'follow',
    });
    const text = await res.text();
    let status = '';
    try {
      status = JSON.parse(text).status;
    } catch {
      /* Apps Script svarte ikke med JSON */
    }
    if (status !== 'suksess') console.error('Apps Script-feil', res.status, text.slice(0, 300));
    return status === 'suksess';
  } catch (err) {
    console.error('Apps Script-feil', err);
    return false;
  }
}
