# Beslutninger

Her føres alle beslutninger om nettsiden og de digitale løsningene, med nyeste øverst. Beslutninger fra før 23. november 2026 står i `docs/arkitektur.md`.

| Dato | Beslutning | Begrunnelse |
|---|---|---|
| 2026-11-25 | Nettsideansvarlig skriver gruppetekstene selv før styremøtet, i stedet for å be gruppelederne | Nettsiden er eget initiativ og skal forankres i styret først. Gruppelederne sitter i styret og går gjennom tekstene der |
| 2026-11-24 | Testsiden holdes skjult bak Netlifys innlogging til styremøtet 9. desember 2026 | Siden skal presenteres for styret først, ferdig utfylt. Erstatter beslutningen fra 23.11 om at testversjonen er offentlig |
| 2026-11-24 | GitHub-repoet `nynettside` er offentlig | Netlifys gratisplan bygger ikke private repoer som eies av en organisasjon. Repoet inneholder ingen hemmeligheter. Styrelisten i `src/siteConfig.ts` står allerede på nettsiden |
| 2026-11-24 | Netlify-prosjektet `soonseilforening` (team «Soon Seilforening's team», kontoret@soonsf.no) bygger fra `main` | Byggeinnstillingene ligger i `netlify.toml`. Pull requests får egen forhåndsvisning |
| 2026-11-24 | Rubic-aktiviteter hentes med egen kode, ikke Rubics embed-skript | Embed-skriptet virker ikke med sidebytte uten ny lasting. Se `docs/integrasjoner/rubic.md` |
| 2026-11-23 | Videre utvikling gjøres av Claude direkte i GitHub, ikke i Bolt | Gratiskvoten i Bolt er brukt opp. Det er planlagt steg 2 i arkitekturen, og det koster ingenting ekstra |
| 2026-11-23 | Netlify (gratisplan) brukes som forhåndsvisning på en netlify.app-adresse før lansering | Erstatter forhåndsvisningen i Bolt. Domenet berøres ikke |
| 2026-11-23 | Testversjonen har «Under arbeid»-stripe og blokkerer søkemotorer | Siden er offentlig på netlify.app, men har fortsatt eksempeltekst. Fjernes ved lansering (`docs/lansering.md`) |
| 2026-11-23 | Styresiden viser bare navn, rolle, bilde og funksjonsadresser på soonsf.no | Private e-postadresser publiseres ikke (GDPR). Adressene blir stående når styret skiftes ut |
| 2026-11-23 | Kjølbåt og sportsbåt er én gruppe, Kjølbåt-Sport, med én side | Gruppesiden viser begge kontaktpersonene |
| 2026-11-23 | Ingen Facebook-lenker på nettsiden foreløpig | Skal vurderes senere |
| 2026-11-23 | Innhold fra Wix hentes til `content/tekster/` og `content/bilder/` før det brukes på nettsiden | Gir én fasit for innholdet, uavhengig av Bolt |
| 2026-11-23 | Undergruppene Jolle, Kjølbåt-Sport, Ladies Sailing og Drake får egne sider under Om oss | Hver gruppe får sin egen side. Gruppelederne skriver tekstene |
| 2026-11-23 | Seilkurs ligger under Aktiviteter, ikke under Jolle | Kursene er for både barn og voksne |
| 2026-11-23 | «Utleie av lokalet» heter «Utleielokale» (`/utleielokale`), og «Om oss / Kontakt» heter «Om oss» | Kortere og tydeligere menynavn |
| 2026-11-23 | Innhold uten fasit merkes «[EKSEMPEL – må fylles inn]» | Bolt diktet opp tall og fakta. Merkingen hindrer at feil opplysninger publiseres |
| 2026-11-23 | Bolt Database brukes ikke | Databasen styres via Bolt-kontoen. Foreningen skal eie sitt eget Supabase-prosjekt, så andre frivillige kan overta |
| 2026-11-23 | Nyheter og arrangementer ligger midlertidig i en konfigurasjonsfil | Holder første versjon enkel. Innholdet flyttes til Sanity når det er satt opp |
| 2026-11-23 | Nettsiden deles opp i egne sider med React Router | Hver side får sin egen adresse. Det er lettere å lenke til og bedre for søkemotorer |
| 2026-11-23 | Medlemsinnlogging og innmelding går via Rubic | Rubic er foreningens medlemssystem. Nettsiden lagrer ingen medlemsdata |
