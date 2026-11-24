import { useMemo, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import {
  MEMBER_DISCOUNT_NOK,
  endDateFor,
  formatDateNo,
  formatPriceNok,
  getRentalType,
  rentalTypes,
  validStartDaysText,
  validateRentalRequest,
  type RentalRequestInput,
} from '@/lib/rental';

const empty: RentalRequestInput = {
  rentalType: '',
  startDate: '',
  name: '',
  address: '',
  email: '',
  phone: '',
  purpose: '',
  participants: '',
  isMember: false,
  consent: false,
  website: '',
};

function todayLocal(): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Oslo' }).format(new Date());
}

const inputClass =
  'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#0C1C8C] focus:outline-none focus:ring-2 focus:ring-[#0C1C8C]/20';
const labelClass = 'block text-sm font-600 text-slate-800';

type Props = { contactEmail: string };

export default function RentalRequestForm({ contactEmail }: Props) {
  const [form, setForm] = useState<RentalRequestInput>(empty);
  const [error, setError] = useState<{ field: string; message: string } | null>(null);
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const set = <K extends keyof RentalRequestInput>(key: K, value: RentalRequestInput[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (error?.field === key) setError(null);
  };

  const type = getRentalType(form.rentalType);

  // Oppsummering med sluttdato og pris når leietype og gyldig dato er valgt
  const summary = useMemo(() => {
    if (!type || !form.startDate) return null;
    const check = validateRentalRequest(
      { ...form, name: 'xx', address: 'xxx', email: 'a@b.no', phone: '12345678', purpose: 'xxx', participants: '1', consent: true },
      todayLocal()
    );
    if (!check.ok && check.field === 'startDate') return { error: check.message };
    const end = endDateFor(type, form.startDate);
    const period = end === form.startDate ? formatDateNo(form.startDate) : `${formatDateNo(form.startDate)} – ${formatDateNo(end)}`;
    return { period, price: formatPriceNok(type.priceNok) };
  }, [type, form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const check = validateRentalRequest(form, todayLocal());
    if (!check.ok) {
      setError({ field: check.field, message: check.message });
      document.getElementById(`rental-${check.field}`)?.focus();
      return;
    }
    setState('sending');
    setError(null);
    try {
      const res = await fetch('/api/utleie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setError({ field: data.field ?? 'form', message: data.message ?? 'Noe gikk galt. Prøv igjen senere.' });
        setState('idle');
        return;
      }
      setState('sent');
    } catch {
      setError({ field: 'form', message: 'Fikk ikke kontakt. Sjekk nettforbindelsen og prøv igjen.' });
      setState('idle');
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h3 className="mt-3 font-display text-lg font-700 text-slate-900">Takk for forespørselen!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Vi har mottatt forespørselen din og sender svar på e-post. Kontoret er bemannet én dag i uken, så det kan ta noen
          dager før du hører fra oss.
        </p>
      </div>
    );
  }

  const fieldError = (field: keyof RentalRequestInput) =>
    error?.field === field ? (
      <p id={`rental-${field}-error`} className="mt-1 text-sm text-red-600">
        {error.message}
      </p>
    ) : null;

  const aria = (field: keyof RentalRequestInput) => ({
    id: `rental-${field}`,
    'aria-invalid': error?.field === field || undefined,
    'aria-describedby': error?.field === field ? `rental-${field}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 text-left">
      <div>
        <label htmlFor="rental-rentalType" className={labelClass}>
          Leietype
        </label>
        <select {...aria('rentalType')} className={inputClass} value={form.rentalType} onChange={(e) => set('rentalType', e.target.value)}>
          <option value="">Velg …</option>
          {rentalTypes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label} – {formatPriceNok(t.priceNok)}
            </option>
          ))}
        </select>
        {type && <p className="mt-1 text-xs text-slate-500">Kan starte på: {validStartDaysText(type)}.</p>}
        {fieldError('rentalType')}
      </div>

      <div>
        <label htmlFor="rental-startDate" className={labelClass}>
          {type && type.days > 1 ? 'Første dag' : 'Dato'}
        </label>
        <input
          {...aria('startDate')}
          type="date"
          className={inputClass}
          min={todayLocal()}
          value={form.startDate}
          onChange={(e) => set('startDate', e.target.value)}
        />
        {fieldError('startDate')}
        {summary && 'error' in summary && error?.field !== 'startDate' && (
          <p className="mt-1 text-sm text-amber-700">{summary.error}</p>
        )}
        {summary && 'period' in summary && (
          <div className="mt-3 rounded-lg bg-[#0C1C8C]/5 border border-[#0C1C8C]/15 px-4 py-3 text-sm text-slate-700">
            <p>
              <span className="font-600">{summary.period}</span> · {summary.price}
            </p>
            {form.isMember && (
              <p className="mt-1 text-xs text-slate-600">
                Medlemmer får {formatPriceNok(MEMBER_DISCOUNT_NOK)} i rabatt ved privat arrangement.
              </p>
            )}
            <p className="mt-1 text-xs text-slate-500">Vi bekrefter om datoen er ledig når vi har behandlet forespørselen.</p>
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rental-name" className={labelClass}>
            Navn
          </label>
          <input {...aria('name')} className={inputClass} autoComplete="name" value={form.name} onChange={(e) => set('name', e.target.value)} />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="rental-phone" className={labelClass}>
            Telefon
          </label>
          <input {...aria('phone')} type="tel" className={inputClass} autoComplete="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          {fieldError('phone')}
        </div>
      </div>

      <div>
        <label htmlFor="rental-email" className={labelClass}>
          E-post
        </label>
        <input {...aria('email')} type="email" className={inputClass} autoComplete="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
        {fieldError('email')}
      </div>

      <div>
        <label htmlFor="rental-address" className={labelClass}>
          Adresse <span className="font-400 text-slate-500">(til faktura)</span>
        </label>
        <input {...aria('address')} className={inputClass} autoComplete="street-address" value={form.address} onChange={(e) => set('address', e.target.value)} />
        {fieldError('address')}
      </div>

      <div className="grid gap-5 sm:grid-cols-[1fr_10rem]">
        <div>
          <label htmlFor="rental-purpose" className={labelClass}>
            Hva skal lokalet brukes til?
          </label>
          <textarea {...aria('purpose')} rows={3} className={inputClass} value={form.purpose} onChange={(e) => set('purpose', e.target.value)} />
          {fieldError('purpose')}
        </div>
        <div>
          <label htmlFor="rental-participants" className={labelClass}>
            Antall deltakere
          </label>
          <input
            {...aria('participants')}
            type="number"
            inputMode="numeric"
            min={1}
            max={90}
            className={inputClass}
            value={form.participants}
            onChange={(e) => set('participants', e.target.value)}
          />
          {fieldError('participants')}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#0C1C8C]" checked={form.isMember} onChange={(e) => set('isMember', e.target.checked)} />
        Jeg er medlem av Soon Seilforening
      </label>

      {/* Honeypot: skjult for mennesker, fanger opp spam-roboter */}
      <div className="hidden" aria-hidden="true">
        <label>
          Nettside
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set('website', e.target.value)} />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            {...aria('consent')}
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-[#0C1C8C]"
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
          />
          <span>
            Jeg godtar at Soon Seilforening lagrer opplysningene for å behandle forespørselen. Opplysningene brukes bare til
            utleie og fakturering, og slettes når de ikke lenger trengs.
          </span>
        </label>
        {fieldError('consent')}
      </div>

      {error?.field === 'form' && (
        <p className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error.message} Du kan også skrive til{' '}
          <a className="underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-6 py-3.5 text-sm font-600 text-white shadow-lg hover:bg-[#0C1C8C]/90 disabled:opacity-60 transition-all duration-200"
      >
        {state === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send forespørsel
      </button>
    </form>
  );
}
