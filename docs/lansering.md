# Sjekkliste for lansering

Sist oppdatert: 24. november 2026

Ting som må gjøres når den nye nettsiden skal erstatte Wix-siden på soonseilforening.no. Spør alltid styret/ansvarlig før DNS endres.

## Fjern testmerking

1. Sett `underConstruction: false` i `src/siteConfig.ts` (fjerner «Under arbeid»-stripen nederst).
2. Fjern `<meta name="robots" content="noindex, nofollow" />` fra `index.html`.
3. Bytt innholdet i `public/robots.txt` til:
   ```
   User-agent: *
   Allow: /
   ```

## Innhold

- Ingen sider skal ha «[EKSEMPEL – må fylles inn]».
- Videresend gamle Wix-adresser i `public/_redirects` (f.eks. `/post/*` → `/nyheter`, `/kontakt` → `/om-oss/styret`, `/brygge-gjestehavn` → `/gjestebrygge`, `/bli-medlem` → `/medlemskap`). Reglene må stå **over** linjen `/*  /index.html  200`.

## E-post (Google Workspace)

Nettsiden lanseres samtidig som foreningen går over til Google Workspace, planlagt rundt årsskiftet 2026/2027.

- Alle funksjonsadresser som står på nettsiden, må virke i Google Workspace før lansering: kontoret@, leder@, nestleder@, brygge@, bygning@, materiell@, sport@, kjolbaat@, ladies@, okonomi@, styremedlem1@, jolle@ og drake@soonsf.no. `jolle@` og `drake@` er nye.
- MX-pekeren for soonsf.no flyttes fra Office 365 til Google. Dette avtales på forhånd, fordi det påvirker all e-post til foreningen.
- I Apps Script (`apps-script/neptun-foresporsel.gs`): bytt `ADMIN_EPOST` fra kontoret@soonseilforening.no til kontoret@soonsf.no når den virker i Google.

## Teknisk

- Miljøvariablene `VITE_SANITY_PROJECT_ID` og `VITE_SANITY_DATASET` er lagt inn i Netlify (gjort 24.11.2026).
- Hvis Netlifys innloggingskrav for besøkende (Visitor access / team login) fortsatt er på, må det skrus av.
- `https://soonseilforening.netlify.app` er lagt inn som CORS-origin i Sanity (for testversjonen).
- `https://www.soonseilforening.no` og `https://soonseilforening.no` er lagt inn som CORS-origin i Sanity.
- Fjern CORS-jokertegnet for Bolt (`*.local-credentialless.webcontainer-api.io`) hvis Bolt ikke brukes lenger.
- Domenet flyttes fra Wix til Netlify (DNS). Dette kan ikke angres raskt, så det avtales på forhånd.
