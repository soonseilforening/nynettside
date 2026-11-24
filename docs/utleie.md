# Utleie av Neptun – forespørselsskjema

Sist oppdatert: 24.11.2026

## Kort fortalt
Kunden fyller ut skjemaet på `/utleielokale`. Forespørselen lagres i Supabase og havner som en ny rad i regnearket **«Neptun forespørsel»** med status *Ny*. Admin får e-post og behandler forespørselen i regnearket som før, med menyen **Neptun → Sjekk og oppdater status**.

```
Skjema (nettleser) → Netlify-funksjon /api/utleie → Supabase (rental_requests)
                                                  → Apps Script → Google Sheet → e-post til admin
```

Kostnad: gratis (Netlify, Supabase og Google Apps Script på gratisnivå).

## Leietyper og priser
Reglene ligger i `src/lib/rental.ts` og brukes både av skjemaet og av funksjonen.

| Leietype | Gyldige startdager | Dager | Pris |
|---|---|---|---|
| Ukedag, hel dag | man–tor | 1 | 5 800 kr |
| Ukedag, halv dag (uten kjøkken) | man–tor | 1 (sperrer hele datoen) | 3 900 kr |
| Helg, 1 dag | fre, lør, søn | 1 | 8 400 kr |
| Helg, 2 dager | fre (fre–lør) eller lør (lør–søn) | 2 | 11 000 kr |
| Helg, 3 dager | fre (fre–søn) | 3 | 13 600 kr |

Medlemmer får 1 000 kr rabatt ved privat arrangement. Halv dag skiller ikke mellom formiddag og ettermiddag, og det leies ikke ut to halve dager samme dato.

**Endre priser:** oppdater både `priceNok` i `src/lib/rental.ts` og `priceRows` i `src/siteConfig.ts` (prislisten på siden).

## Regnearket «Neptun forespørsel»
Eies av kontoret@soonsf.no. Kolonner i «Ark 1»:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mottatt i ark | Ønsket dato (fra) | Navn | Adresse | E-post | Telefon | Formål | Antall deltakere | Medlem? | Status | Referanse | Leietype | Til dato |

Status: **Ny → Reservert / Venteliste → Godkjent**. *Ledig* brukes av admin ved behov. *Reservert* og *Godkjent* sperrer datoene.

Kopi av skriptet: `apps-script/neptun-foresporsel.gs`. Endres skriptet i regnearket, skal kopien oppdateres.

## Supabase
- Prosjekt: `soonseilforening` (eies av kontoret@soonsf.no), region i EU.
- Tabell: `rental_requests`, opprettet med `docs/sql/rental_requests.sql`.
- Row Level Security er på uten policyer. Bare Netlify-funksjonen, med service role-nøkkelen, kan lese og skrive.
- Gratisprosjekter settes på pause etter en uke uten aktivitet. `netlify/functions/supabase-keepalive.mts` gjør et lite oppslag hver uke for å hindre det.

## Miljøvariabler i Netlify (alle som Secret)
| Navn | Hvor du finner verdien |
|---|---|
| `SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → `service_role` |
| `APPS_SCRIPT_URL` | Apps Script → Implementer → Administrer implementeringer → Nettapp-URL |
| `APPS_SCRIPT_SECRET` | En lang tilfeldig tekst. Samme verdi som skriptegenskapen `NETTSIDE_SECRET` i Apps Script |

Etter endring av miljøvariabler må siden bygges på nytt (Deploys → Trigger deploy).

## Personvern (GDPR)
- Vi lagrer bare det som trengs for utleie og faktura: navn, adresse, e-post, telefon, formål, antall deltakere og medlemskap.
- Kunden må krysse av for samtykke. Tidspunktet lagres i `consent_at`.
- Opplysningene skal slettes når leieforholdet og faktureringen er avsluttet. Rutine for sletting avtales i styret.
- Skjemaet har et skjult felt (honeypot) som stopper enkle spam-roboter.

## Feilsøking
- **Skjemaet sier «Vi klarte ikke å ta imot forespørselen»:** både Supabase og Apps Script feilet. Se Netlify → Logs → Functions → `utleie-foresporsel`.
- **Raden kommer ikke i arket:** sjekk at `APPS_SCRIPT_URL` er siste implementering, og at `APPS_SCRIPT_SECRET` er lik `NETTSIDE_SECRET`.
- **Feilrader i arket** (kolonne B = «FEIL») viser feilmeldingen fra skriptet.
