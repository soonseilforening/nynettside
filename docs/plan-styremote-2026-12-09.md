# Plan fram til styremøtet 9. desember 2026

Mål: Nettsiden presenteres for styret 9. desember, ferdig utfylt og uten «[EKSEMPEL – må fylles inn]». Siden er skjult bak Netlify-innlogging fram til da.

Status 24.11: Siden bygges på https://soonseilforening.netlify.app. Rubic-aktiviteter og nyheter fra Sanity virker. Det er 49 plassholdere igjen i `src/siteConfig.ts` og 1 i `content/tekster/`.

Status 26.11: Gruppesidene har tekster og toppbilder (flettet inn i `main`). Det er 15 plassholdere igjen, og alle ligger på kurssiden (se under).

## Plassholdere som gjenstår (26.11)
| Hvor | Hva mangler | Hvem kan svare |
|---|---|---|
| Kurssiden (`courses` i `src/siteConfig.ts`), 3 kurs × 5 felt | Kurstittel, nivå, beskrivelse, varighet og pris | Kursansvarlig, eller gruppeleder Jolle (barnekurs og seilskole) og gruppeleder Kjølbåt (voksenkurs) |
| Kurssiden (`src/pages/CoursesPage.tsx`) | Gul advarsel om eksempeltekst. Fjernes når kursene er fylt inn | Claude |
| Kjølbåt-Sport, sportsbåt-delen | Gul advarsel vises hvis `sportsboatExample` settes. Ikke i bruk nå | – |

## Uke 48 (25.–29. november): Samle inn innhold
| Oppgave | Hvem | Frist |
|---|---|---|
| Tekster til gruppesidene (Jolle, Sportsbåt, Ladies Sailing, Drake) skrives av nettsideansvarlig. Gruppelederne (alle i styret) får se dem på styremøtet | Ansvarlig + Claude | 25.11 ✅ |
| Fjerne de faste arrangementene i koden (erstattet av Rubic) | Claude | 26.11 ✅ |
| Hente kursinformasjon (kurs, nivå, varighet, pris) fra dagens side eller kursansvarlig | Claude + ansvarlig | 27.11 |
| Bestemme omfanget av utleie/booking til 9.12: forespørselsskjema | Ansvarlig | 24.11 ✅ |

## Uke 49 (30. november–4. desember): Bygge og fylle inn
| Oppgave | Hvem | Frist |
|---|---|---|
| Utleie: forespørselsskjema med Supabase og regneark | Claude | 24.11 ✅ |
| Gå gjennom nyhetene i Sanity (kategorier, alt-tekst på viktige bilder) | Ansvarlig | 4.12 |

## 5.–8. desember: Kvalitetssikring
| Oppgave | Hvem | Frist |
|---|---|---|
| Gå gjennom alle sider på mobil og PC, notere feil | Ansvarlig | 6.12 |
| Rette feil, sjekke at det ikke finnes plassholdere | Claude | 7.12 |
| Gi styret tilgang til testsiden (skru av innlogging eller invitere) | Ansvarlig | 8.12 |
| Kort presentasjon til styremøtet (hva er laget, kostnader, neste steg) | Claude | 8.12 |

## Saker til styremøtet 9.12
- Godkjenning av nettsiden og dato for lansering (flytting av domenet fra Wix).
- Netlify gratis med offentlig kode, eller Pro (20 USD/mnd) med privat kode.
- Hvem i styret skal kunne skrive nyheter i Sanity.
- Gruppelederne går gjennom tekstene til sin gruppe.
- Neste fase: bookingløsningen for utleie.
