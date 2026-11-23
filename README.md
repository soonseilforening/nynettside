# Soon Seilforening – nettside

Kildekode, dokumentasjon og Claude-skills for den nye nettsiden til Soon Seilforening, [soonseilforening.no](https://soonseilforening.no).

Nettsiden skal erstatte dagens side i Wix Classic. Den gjør det mulig for styret og medlemmene å publisere innlegg og bilder selv, og har bookingløsningen for utleie av selskapslokalet.

## Innhold i repoet

| Mappe / fil | Hva den inneholder |
|---|---|
| `src/` | Koden til nettsiden (startet i Bolt.new, videre arbeid med Claude Code) |
| `docs/` | Dokumentasjon: arkitektur, bookingflyt, datamodell, drift og beslutninger |
| `skills/` | Kopier av Claude-skills som brukes i prosjektet, én mappe per skill |
| `content/` | Midlertidig: tekster og bilder fra dagens Wix-side som skal flyttes over |
| `.env.example` | Navn på miljøvariabler, aldri de ekte verdiene |

Les [`docs/arkitektur.md`](docs/arkitektur.md) først. Den gir et samlet bilde av hvordan løsningen henger sammen.

## Tjenester og eierskap

Alle kontoer skal eies av foreningen og ha minst to administratorer fra styret.

| Tjeneste | Brukes til | Administratorer |
|---|---|---|
| GitHub (organisasjonen `soonseilforening`) | Kode, versjoner, dokumentasjon | [navn], [navn] |
| Netlify | Hosting og publisering | [navn], [navn] |
| Supabase | Database for booking | [navn], [navn] |
| Sanity | Publisering av innlegg og bilder | [navn], [navn] |
| Google Workspace | Kalender, Sheets, Drive, e-post | [navn], [navn] |
| Domene soonseilforening.no | DNS | [registrar], [navn] |

## Slik kommer du i gang som ny frivillig

1. Be en av administratorene om tilgang til GitHub-organisasjonen og til tjenestene du trenger.
2. Les `docs/arkitektur.md`, og deretter dokumentet for det området du skal jobbe med.
3. Jobber du med Claude, bruker du prosjektet **Soon Seilforening**. Der ligger instruksjonene og dokumentasjonen fra `docs/` og `skills/`.
4. Gjør endringer i en egen branch og lag en pull request. Alt som kommer inn i `main`, publiseres automatisk til nettsiden.

## Regler

- **Ingen hemmeligheter i repoet.** Passord, API-nøkler og tokens skal ligge i miljøvariabler i Netlify og Supabase, aldri i koden eller i `docs/`.
- **Personvern.** Medlems- og leietakerdata skal ikke ligge i repoet. Behandlingen skal følge GDPR.
- **Dokumenter endringer.** Endrer du arkitekturen, datamodellen eller en arbeidsflyt, skal dokumentet i `docs/` oppdateres. Viktige valg føres inn i `docs/beslutninger.md`.
- **Velg det enkle.** Løsningen skal kunne overtas av andre frivillige.

## Kontakt

Ansvarlig for nettsiden: [navn, e-post]
