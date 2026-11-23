# Beslutninger

Her føres alle beslutninger om nettsiden og de digitale løsningene, med nyeste øverst. Beslutninger fra før 23. november 2026 står i `docs/arkitektur.md`.

| Dato | Beslutning | Begrunnelse |
|---|---|---|
| 2026-11-23 | Undergruppene Jolle, Kjølbåt-Sport, Ladies Sailing og Drake får egne sider under Om oss | Hver gruppe får sin egen side. Gruppelederne skriver tekstene |
| 2026-11-23 | Seilkurs ligger under Aktiviteter, ikke under Jolle | Kursene er for både barn og voksne |
| 2026-11-23 | «Utleie av lokalet» heter «Utleielokale» (`/utleielokale`), og «Om oss / Kontakt» heter «Om oss» | Kortere og tydeligere menynavn |
| 2026-11-23 | Innhold uten fasit merkes «[EKSEMPEL – må fylles inn]» | Bolt diktet opp tall og fakta. Merkingen hindrer at feil opplysninger publiseres |
| 2026-11-23 | Bolt Database brukes ikke | Databasen styres via Bolt-kontoen. Foreningen skal eie sitt eget Supabase-prosjekt, så andre frivillige kan overta |
| 2026-11-23 | Nyheter og arrangementer ligger midlertidig i en konfigurasjonsfil | Holder første versjon enkel. Innholdet flyttes til Sanity når det er satt opp |
| 2026-11-23 | Nettsiden deles opp i egne sider med React Router | Hver side får sin egen adresse. Det er lettere å lenke til og bedre for søkemotorer |
| 2026-11-23 | Medlemsinnlogging og innmelding går via Rubic | Rubic er foreningens medlemssystem. Nettsiden lagrer ingen medlemsdata |
