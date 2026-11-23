# Sanity – nyheter

Sist oppdatert: 23. november 2026

## Kort fortalt

Nyhetene skrives i **Sanity Studio**, og nettsiden henter dem derfra. Skribentene trenger verken GitHub, Bolt eller Netlify.

| Del | Hvor |
|---|---|
| Sanity-prosjekt | `soonseilforening` på sanity.io/manage, prosjekt-ID `dzgfs6fk` |
| Dataset | `production` |
| Studio (redigeringssiden) | Koden ligger i `/studio`. Publiseres til soonseilforening.sanity.studio |
| Nettsiden | Henter nyheter fra Sanity (kun lesing, ingen API-nøkkel) |

## Kostnad

Gratisplanen: 0 kr, opptil 20 brukere og 10 000 dokumenter. Datasettene er offentlige, så **personopplysninger skal ikke ligge i Sanity**.

## Innholdstyper

### Nyhet (`post`)

| Felt | Navn i Studio | Påkrevd | Forklaring |
|---|---|---|---|
| `title` | Tittel | Ja | Maks 100 tegn |
| `slug` | Adresse | Ja | Lages fra tittelen. Gir `/nyheter/<adresse>` |
| `publishedAt` | Publiseringsdato | Ja | Brukes til sortering, nyeste først |
| `mainImage` | Hovedbilde | Nei | Med alt-tekst (påkrevd når bilde er lagt inn) |
| `excerpt` | Ingress | Ja | 1–2 setninger, maks 250 tegn. Vises på forsiden og i oversikten |
| `categories` | Kategorier | Nei | Henvisning til én eller flere kategorier |
| `body` | Tekst | Nei | Formatert tekst med mulighet for bilder |

### Kategori (`category`)

| Felt | Navn i Studio | Påkrevd |
|---|---|---|
| `title` | Navn | Ja |
| `slug` | Adresse | Ja |

Foreslåtte kategorier (fra dagens Wix-blogg): Styret, Jolle, Kjølbåt, Regatta, Kurs og utdanning, Neptun, Hollænderseilasen.

## Innhold flyttet fra Wix

23. november 2026 ble alle 27 innleggene fra Wix-bloggen (2024–2026) importert med tekst, hovedbilde og bilder i teksten (43 bilder). Skriptet ligger i `studio/scripts/import-wix-nyheter.mjs`.

- Adressene er nye: `/nyheter/<tittel>` i stedet for `/post/<tittel>`. Ved lansering bør de gamle `/post/...`-adressene videresendes (Netlify `_redirects`).
- Ingressen er laget automatisk fra starten av teksten. Den kan forbedres i Studio.
- Alt-teksten på hovedbildene er generell («Bilde til nyheten …») og bør forbedres for de viktigste nyhetene.
- Innleggene har ikke fått kategori. Kategoriene er opprettet og kan settes i Studio.

## Slik vises nyhetene på nettsiden

- **Forsiden:** de 3 nyeste nyhetene med hovedbilde, tittel, dato, ingress og «Les mer».
- **`/nyheter`:** alle nyheter, nyeste først, med filter på kategori.
- **`/nyheter/<adresse>`:** hele nyheten.

## Miljøvariabler

Prosjekt-ID og dataset er ikke hemmelige, men legges som miljøvariabler så de er samlet ett sted.

| Variabel | Brukes av | Verdi |
|---|---|---|
| `SANITY_STUDIO_PROJECT_ID` | Studio (`/studio/.env`) | `dzgfs6fk` |
| `SANITY_STUDIO_DATASET` | Studio | `production` |
| `VITE_SANITY_PROJECT_ID` | Nettsiden (Netlify/Bolt) | `dzgfs6fk` |
| `VITE_SANITY_DATASET` | Nettsiden | `production` |

## Drift

### Starte Studio lokalt (for utvikler)

```
cd studio
cp .env.example .env   # fyll inn prosjekt-ID
npm install
npm run dev            # åpner http://localhost:3333
```

### Publisere Studio

```
cd studio
npm run deploy
```

Studio blir da tilgjengelig på soonseilforening.sanity.studio. Skribentene logger inn der.

### CORS

Nettsidens adresser må legges inn under **Settings → API → CORS origins** på sanity.io/manage, ellers får ikke nettsiden hente nyheter i nettleseren. Skriv bare protokoll og domene, uten sti (f.eks. `https://www.soonseilforening.no`, ikke `https://www.soonseilforening.no/nyheter`).

**«Allow credentials» skal være avslått** for nettsidens adresser. Nettsiden leser bare offentlig innhold og logger ikke inn. Bare Studio-adressen trenger credentials, og den legges inn automatisk når Studio publiseres.

| Adresse | Når |
|---|---|
| `https://*.local-credentialless.webcontainer-api.io` | Forhåndsvisning i Bolt (adressen til Bolt-editoren, bolt.new/~/…, virker ikke) |
| `http://localhost:5173` | Lokal utvikling |
| Netlify-adressen | Når Netlify er satt opp |
| `https://www.soonseilforening.no` og `https://soonseilforening.no` | Ved lansering |

Jokertegnet for Bolt lar alle forhåndsvisninger i Bolt lese innholdet. Det er greit fordi datasettet uansett er offentlig. Fjern det når Bolt ikke brukes lenger.

### Brukere

- Minst to administratorer fra styret.
- Skribenter inviteres med rollen **Editor** under **Members** på sanity.io/manage.
