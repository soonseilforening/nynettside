# Rubic – aktiviteter på nettsiden

Sist oppdatert: 24.11.2026

## Hva det er
Klubbens aktiviteter registreres i medlemssystemet **Rubic**. Nettsiden henter aktivitetene automatisk. Når en aktivitet legges inn, endres eller slettes i Rubic, vises endringen på nettsiden neste gang siden lastes. Ingenting må oppdateres på selve nettsiden.

Kostnad: gratis. Det brukes ingen API-nøkler eller personopplysninger.

## Hvor aktivitetene vises
| Sted | Variant | Innhold |
|---|---|---|
| Forsiden, «Kommende aktiviteter» | `compact`, 3 per gruppe | Gruppenavn, dato og aktivitetsnavn. Grupper uten aktiviteter skjules. |
| Gruppesidene under «Om oss» | `full`, opptil 10 | Dato, tid, aktivitetsnavn, sted og beskrivelse |

Aktivitetsnavnet lenker til aktiviteten i Rubic, der man melder seg på.

## Grupper og token
Hver gruppe i Rubic har et eget nummer (token). Disse er offentlige og ikke hemmelige.

| id | Navn | Token | Vises på gruppeside |
|---|---|---|---|
| `klubb` | Seilforeningen | 47373 | (bare forsiden) |
| `jolle` | Jolle | 47678 | Jolle |
| `ladies` | Ladies Sailing | 47681 | Ladies Sailing |
| `kjolbat` | Kjølbåt | 47679 | Kjølbåt/Sportsbåt |
| `sportsbat` | Sportsbåt | 47680 | Kjølbåt/Sportsbåt |

**Drake** har ikke eget token i Rubic. Drake-siden viser derfor en kort tekst med lenke til forsiden i stedet for en aktivitetsliste.

## Filer i koden
- `src/config/rubicGroups.ts` – listen over grupper og token. Det er den eneste filen som inneholder token.
- `src/lib/rubic.ts` – henter og tolker dataene fra Rubic.
- `src/components/RubicActivities.tsx` – viser listen (`compact` eller `full`).
- Gruppesidenes konfigurasjon har feltet `rubicGroupIds`, som sier hvilke Rubic-grupper hver side skal vise.

## Slik gjør du vanlige endringer
**Legge til en ny gruppe (eller gi Drake et token):**
1. Finn gruppens token i Rubic (samme nummer som brukes i Rubics embed-kode, `data-rToken`).
2. Legg til en linje i `src/config/rubicGroups.ts`, for eksempel `{ id: "drake", name: "Drake", token: "12345" }`.
3. Legg id-en inn i `rubicGroupIds` for riktig gruppeside, for eksempel `drake → ["drake"]`.
4. Gruppen kommer automatisk med på forsiden.

**Endre antall aktiviteter:** endre `pageSize` der komponenten brukes (forsiden: 3, gruppesider: 10).

## Teknisk forklaring
- Data hentes fra `https://app.rubic.no/embed/embed.ashx?component=activities&rToken={token}&pageSize={antall}&callback={funksjon}`.
- Rubic støtter ikke CORS, så hentingen gjøres med **JSONP**: koden legger inn en `<script>`-tag, og Rubic svarer med `funksjon({"html": "..."})`.
- HTML-en i svaret er **kodet** (`&lt;tr&gt;` i stedet for `<tr>`). Den må derfor dekodes én gang (`DOMParser` → `textContent`) før den tolkes som HTML. Uten dette finner koden 0 aktiviteter, uten feilmelding.
- Svaret er en HTML-tabell med kolonnene Dato (`dd.mm.yyyy`), Tid, Tittel (med lenke), Beskrivelse og Lokasjon. Merk at Lokasjon ligger i en `<th>`, ikke en `<td>`.
- Tabellen tolkes med `DOMParser`. All tekst vises som ren tekst (aldri `dangerouslySetInnerHTML`), så kode i en aktivitetsbeskrivelse blir aldri kjørt.
- Henting avbrytes etter 10 sekunder og viser da «Kunne ikke hente aktiviteter akkurat nå».

## Hvorfor vi ikke bruker Rubics eget embed-skript
Rubic tilbyr `https://app.rubic.no/scripts/embed.js` med `<rubic-embed>`-tagger (brukt på den gamle Wix-siden). Skriptet leter bare etter taggene én gang, når siden lastes. Nettsiden vår bytter side uten å laste på nytt, og da blir listene tomme. Skriptet laster også inn jQuery-avhengig kode og egen CSS, slik at vi ikke kan styre utseendet.

## Risiko og nødløsning
Adressen over er den Rubics embed-skript bruker, men den er **ikke et dokumentert API**. Hvis Rubic endrer formatet, kan listene bli tomme eller vise feilmelding.

Feilsøking:
1. Åpne adressen over i nettleseren (uten `&callback=...`) og se om svaret fortsatt er en tabell med de samme kolonnene.
2. Har kolonnene endret seg, oppdateres `parseRubicHtml` i `src/lib/rubic.ts`.
3. Nødløsning: legg Rubics embed-kode inn på en egen side som lastes helt på nytt (vanlig lenke, ikke ruting).

