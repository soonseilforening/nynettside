// Felles regler for utleie av Neptun. Brukes både av skjemaet på nettsiden
// og av Netlify-funksjonen som tar imot forespørselen, så reglene bare
// finnes ett sted. Se docs/utleie.md.

export type RentalType = 'weekday_full' | 'weekday_half' | 'weekend_1' | 'weekend_2' | 'weekend_3';

export type RentalTypeInfo = {
  id: RentalType;
  label: string; // Teksten som vises i skjemaet og lagres i regnearket
  days: number; // Antall datoer leien sperrer
  validStartDays: number[]; // 0 = søndag, 1 = mandag ... 6 = lørdag
  priceNok: number;
};

export const rentalTypes: RentalTypeInfo[] = [
  { id: 'weekday_full', label: 'Ukedag, hel dag', days: 1, validStartDays: [1, 2, 3, 4], priceNok: 5800 },
  { id: 'weekday_half', label: 'Ukedag, halv dag (uten kjøkken)', days: 1, validStartDays: [1, 2, 3, 4], priceNok: 3900 },
  { id: 'weekend_1', label: 'Helg, 1 dag', days: 1, validStartDays: [5, 6, 0], priceNok: 8400 },
  { id: 'weekend_2', label: 'Helg, 2 dager', days: 2, validStartDays: [5, 6], priceNok: 11000 },
  { id: 'weekend_3', label: 'Helg, 3 dager', days: 3, validStartDays: [5], priceNok: 13600 },
];

export const MEMBER_DISCOUNT_NOK = 1000;

export function getRentalType(id: string): RentalTypeInfo | undefined {
  return rentalTypes.find((t) => t.id === id);
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Datoer håndteres som "YYYY-MM-DD" og regnes i UTC, så tidssoner ikke flytter dagen.
function parseDate(date: string): Date | null {
  if (!DATE_RE.test(date)) return null;
  const d = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== date ? null : d;
}

export function weekdayOf(date: string): number | null {
  const d = parseDate(date);
  return d ? d.getUTCDay() : null;
}

export function addDays(date: string, days: number): string {
  const d = parseDate(date);
  if (!d) return date;
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function endDateFor(type: RentalTypeInfo, startDate: string): string {
  return addDays(startDate, type.days - 1);
}

export const WEEKDAY_NAMES = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];

export function validStartDaysText(type: RentalTypeInfo): string {
  return type.validStartDays.map((d) => WEEKDAY_NAMES[d]).join(', ');
}

export function formatDateNo(date: string): string {
  const d = parseDate(date);
  if (!d) return date;
  return new Intl.DateTimeFormat('nb-NO', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

export function formatPriceNok(amount: number): string {
  return `${amount.toLocaleString('nb-NO').replace(/\s/g, ' ')} kr`;
}

export type RentalRequestInput = {
  rentalType: string;
  startDate: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  purpose: string;
  participants: string;
  isMember: boolean;
  consent: boolean;
  website?: string; // Honeypot: skal være tom. Fylles bare ut av spam-roboter.
};

export type ValidationResult = { ok: true } | { ok: false; field: keyof RentalRequestInput | 'form'; message: string };

export function validateRentalRequest(input: RentalRequestInput, today: string): ValidationResult {
  const type = getRentalType(input.rentalType);
  if (!type) return { ok: false, field: 'rentalType', message: 'Velg leietype.' };

  const weekday = weekdayOf(input.startDate);
  if (weekday === null) return { ok: false, field: 'startDate', message: 'Velg en gyldig dato.' };
  if (input.startDate <= today) return { ok: false, field: 'startDate', message: 'Datoen må være fram i tid.' };
  if (!type.validStartDays.includes(weekday)) {
    return {
      ok: false,
      field: 'startDate',
      message: `${type.label} kan starte på: ${validStartDaysText(type)}.`,
    };
  }

  if (input.name.trim().split(/\s+/).length < 2) return { ok: false, field: 'name', message: 'Skriv inn fullt navn (fornavn og etternavn).' };
  if (input.address.trim().length < 3) return { ok: false, field: 'address', message: 'Skriv inn adresse.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    return { ok: false, field: 'email', message: 'Skriv inn en gyldig e-postadresse.' };
  }
  const phoneDigits = input.phone.replace(/\D/g, '');
  if (!/^\+?[\d\s()-]+$/.test(input.phone.trim()) || phoneDigits.length < 8 || phoneDigits.length > 15) {
    return { ok: false, field: 'phone', message: 'Skriv inn et gyldig telefonnummer (minst 8 siffer).' };
  }
  if (input.purpose.trim().length < 3) return { ok: false, field: 'purpose', message: 'Fortell kort hva lokalet skal brukes til.' };
  const participants = Number(input.participants);
  if (!Number.isInteger(participants) || participants < 1 || participants > 90) {
    return { ok: false, field: 'participants', message: 'Antall deltakere må være mellom 1 og 90.' };
  }
  if (!input.consent) return { ok: false, field: 'consent', message: 'Du må godta at vi lagrer opplysningene.' };

  const tooLong = (['name', 'address', 'email', 'phone', 'purpose'] as const).find(
    (f) => input[f].length > (f === 'purpose' ? 1000 : 200)
  );
  if (tooLong) return { ok: false, field: tooLong, message: 'Teksten er for lang.' };

  return { ok: true };
}
