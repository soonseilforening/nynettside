/**
 * Apps Script for regnearket «Neptun forespørsel» (eies av kontoret@soonsf.no).
 * Dette er en kopi av skriptet som ligger i regnearket (Utvidelser → Apps Script).
 * Endres skriptet der, skal denne filen oppdateres også. Se docs/utleie.md.
 *
 * Kolonner i «Ark 1»:
 *  A Mottatt i ark   B Ønsket dato (fra)   C Navn   D Adresse   E E-post   F Telefon
 *  G Formål          H Antall deltakere    I Medlem?  J Status  K Referanse
 *  L Leietype        M Til dato
 *
 * Status: Ny → Reservert / Venteliste → Godkjent. «Ledig» brukes av admin ved behov.
 *
 * Hemmelig nøkkel: ligger i Prosjektinnstillinger → Skriptegenskaper som NETTSIDE_SECRET.
 * Samme verdi ligger i Netlify som APPS_SCRIPT_SECRET. Den skal aldri stå i koden.
 */

var SHEET_ID = '1zM-yr03H1kWHxnGNC2DznF36az6hvbSe-oIC5u_A2m4';
var SHEET_NAME = 'Ark 1';
var ADMIN_EPOST = 'kontoret@soonseilforening.no'; // Midlertidig: soonsf.no går til Office 365 til Google Workspace er i full drift
var BCC_EPOST = 'kontoret@soonsf.no';
var AVSENDER_ALIAS = 'utleie@soonseilforening.no';
var SIGNATUR = '\n\nVennlig hilsen\nUtleieansvarlig\nSoon Seilforening';

// Statuser som sperrer en dato for andre leietakere
var SPERRENDE_STATUSER = ['reservert', 'godkjent'];

function hentArk() {
  return SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
}

function svar(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Tar imot forespørsler. Støtter to formater:
 *  - Den nye nettsiden (source = "nettside"), sendt fra Netlify-funksjonen med hemmelig nøkkel.
 *  - Wix-skjemaet (data.submissions), til Wix-siden stenges ved lansering. Fjern da wix-delen.
 */
function doPost(e) {
  try {
    var json = JSON.parse(e.postData.contents);
    var rad;

    if (json.source === 'nettside') {
      var forventet = PropertiesService.getScriptProperties().getProperty('NETTSIDE_SECRET');
      if (!forventet || json.secret !== forventet) {
        return svar({ status: 'avvist' });
      }
      rad = {
        dato: json.startDate || '',
        tilDato: json.endDate || '',
        leietype: json.rentalType || '',
        navn: json.name || '',
        adresse: json.address || '',
        epost: json.email || '',
        telefon: json.phone || '',
        formal: json.purpose || '',
        deltakere: json.participants || '',
        medlem: json.isMember || '',
      };
    } else {
      // Wix-formatet
      var felter = {};
      (json.data && json.data.submissions ? json.data.submissions : []).forEach(function (felt) {
        if (felt.label && felt.value) felter[felt.label.trim()] = felt.value;
      });
      rad = {
        dato: felter['Velg en dato'] || '',
        tilDato: '',
        leietype: '',
        navn: ((felter['Fornavn'] || '') + ' ' + (felter['Etternavn'] || '')).trim(),
        adresse: felter['Adresse'] || '',
        epost: felter['E-post'] || '',
        telefon: felter['Telefon'] || '',
        formal: felter['Hva skal lokalet brukes til?'] || '',
        deltakere: felter['Antall deltakere'] || '',
        medlem: felter['Medlem av Soon Seilforening?'] || '',
      };
    }

    // Ledighet sjekkes ikke her, men når admin kjører «Sjekk og oppdater status».
    hentArk().appendRow([
      new Date(), rad.dato, rad.navn, rad.adresse, rad.epost, rad.telefon,
      rad.formal, rad.deltakere, rad.medlem, 'Ny', '', rad.leietype, rad.tilDato,
    ]);

    var periode = rad.tilDato && rad.tilDato !== rad.dato ? rad.dato + ' – ' + rad.tilDato : rad.dato;
    MailApp.sendEmail(
      ADMIN_EPOST,
      'NY UTLEIEFORESPØRSEL: ' + rad.navn + ' (' + periode + ')',
      'En ny forespørsel om leie av Neptun har kommet inn.\n\n' +
        'Periode: ' + periode + '\n' +
        (rad.leietype ? 'Leietype: ' + rad.leietype + '\n' : '') +
        'Navn: ' + rad.navn + '\n' +
        'E-post: ' + rad.epost + '\n\n' +
        'Åpne regnearket og velg Neptun → Sjekk og oppdater status.'
    );

    return svar({ status: 'suksess' });
  } catch (error) {
    hentArk().appendRow([new Date(), 'FEIL', error.toString()]);
    return svar({ status: 'feil', message: error.toString() });
  }
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Neptun')
    .addItem('Sjekk og oppdater status', 'behandleNyeForesporsler')
    .addToUi();
}

/**
 * Går gjennom alle rader med status «Ny»:
 *  - Overlapper perioden med en rad som er Reservert eller Godkjent → Venteliste
 *  - Ellers → Reservert
 * Lager referanse og sender e-post til kunden.
 */
function behandleNyeForesporsler() {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  var tz = spreadsheet.getSpreadsheetTimeZone();

  for (var i = 1; i < data.length; i++) {
    var status = String(data[i][9] || '').trim().toLowerCase();
    if (status !== 'ny') continue;

    var periodeI = periode(data[i], tz);
    if (!periodeI.fra) continue; // Rader uten dato (f.eks. feilrader) hoppes over

    var opptatt = false;
    for (var j = 1; j < data.length; j++) {
      if (i === j) continue;
      var statusJ = String(data[j][9] || '').trim().toLowerCase();
      if (SPERRENDE_STATUSER.indexOf(statusJ) === -1) continue;
      var periodeJ = periode(data[j], tz);
      // To perioder overlapper hvis den ene starter før den andre slutter
      if (periodeJ.fra && periodeI.fra <= periodeJ.til && periodeJ.fra <= periodeI.til) {
        opptatt = true;
        break;
      }
    }

    var referanse = genererRandomStreng(8);
    var nyStatus = opptatt ? 'Venteliste' : 'Reservert';
    var navn = String(data[i][2] || '').trim() || 'deg';
    var epost = data[i][4];
    var leietype = String(data[i][11] || '').trim();
    var visning = periodeI.fra === periodeI.til
      ? formaterVisning(periodeI.fra)
      : formaterVisning(periodeI.fra) + '–' + formaterVisning(periodeI.til);
    var hva = leietype ? leietype.toLowerCase() + ', ' + visning : visning;

    var tekst = opptatt
      ? 'Hei ' + navn + ',\n\nPerioden du forespør (' + hva + ') er dessverre opptatt, men du er foreløpig satt opp på en venteliste. ' +
        'Hvis du fortsatt ønsker å stå på ventelisten, svar JA på denne e-posten.' + SIGNATUR
      : 'Hei ' + navn + ',\n\nPerioden du forespør (' + hva + ') er ledig. ' +
        'Hvis du er interessert i lokalet, kan du svare JA på denne e-posten.' + SIGNATUR;

    data[i][9] = nyStatus; // Oppdaterer i minnet, så neste rad ser endringen
    sheet.getRange(i + 1, 10).setValue(nyStatus);
    sheet.getRange(i + 1, 11).setValue(referanse);

    if (epost) {
      var tittel = 'Forespørsel om leie. REF: ' + referanse;
      try {
        GmailApp.sendEmail(epost, tittel, tekst, { from: AVSENDER_ALIAS, bcc: BCC_EPOST });
      } catch (feil) {
        // Hvis aliaset ikke er verifisert i Gmail ennå, sendes fra standardadressen
        GmailApp.sendEmail(epost, tittel, tekst, { bcc: BCC_EPOST });
      }
    }
  }
}

// Fra- og til-dato for en rad som "yyyy-MM-dd". Mangler til-dato (Wix-rader), er det én dag.
function periode(rad, tz) {
  var fra = formaterDatoSikkert(rad[1], tz);
  var til = formaterDatoSikkert(rad[12], tz) || fra;
  return { fra: fra, til: til };
}

function formaterDatoSikkert(verdi, tz) {
  if (!verdi) return '';
  if (verdi instanceof Date) return Utilities.formatDate(verdi, tz, 'yyyy-MM-dd');
  var s = String(verdi).trim();
  // Godta også dd.MM.yyyy
  var m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (m) return m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2);
  return s;
}

function formaterVisning(isoDato) {
  var d = isoDato.split('-');
  return d.length === 3 ? d[2] + '.' + d[1] + '.' + d[0] : isoDato;
}

function genererRandomStreng(lengde) {
  var tegn = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Uten tegn som ligner hverandre (0/O, 1/I/l)
  var resultat = '';
  for (var i = 0; i < lengde; i++) {
    resultat += tegn.charAt(Math.floor(Math.random() * tegn.length));
  }
  return resultat;
}
