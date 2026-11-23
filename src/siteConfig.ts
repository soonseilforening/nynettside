// Central place for external links and content data.
// Swap these URLs for the real Manage2Sail / Rubic links when ready.

export const siteConfig = {
  name: 'Soon Seilforening',
  shortName: 'Soon SF',
  email: 'kontoret@soonsf.no',
  bryggeEmail: 'brygge@soonsf.no',
  address: 'Storgata 29B, 1555 Son',
  profileColor: '#0C1C8C',
};

export const externalLinks = {
  rubicLogin: 'https://rubic.no/',
  rubicMembership: 'https://rubic.no/',
  rubicSignup:
    'https://app.rubic.no/Account/Signup?organizationID=47373',
  manage2sail: 'https://www.manage2sail.com/',
  weatherWindy: 'https://www.windy.com/?59.221,10.684,8',
  weatherYr: 'https://www.yr.no/nb/v%C3%A6rvarsel/grafikk/1-9205/Son',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
};

export type NavLink = {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
};

export const navLinks: NavLink[] = [
  { label: 'Hjem', path: '/' },
  {
    label: 'Aktiviteter',
    path: '/aktiviteter',
    children: [{ label: 'Seilkurs', path: '/aktiviteter/seilkurs' }],
  },
  { label: 'Utleielokale', path: '/utleielokale' },
  { label: 'Gjestebrygge', path: '/gjestebrygge' },
  { label: 'Medlemskap', path: '/medlemskap' },
  { label: 'Nyheter', path: '/nyheter' },
  {
    label: 'Om oss',
    path: '/om-oss',
    children: [
      { label: 'Jolle', path: '/om-oss/jolle' },
      { label: 'Kjølbåt-Sport', path: '/om-oss/kjolbat-sport' },
      { label: 'Ladies Sailing', path: '/om-oss/ladies-sailing' },
      { label: 'Drake', path: '/om-oss/drake' },
    ],
  },
];

export type GroupInfo = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  targetGroup: string;
  schedule: string;
  location: string;
  contactName: string;
  contactEmail: string;
  example?: boolean;
};

export const groups: GroupInfo[] = [
  {
    slug: 'jolle',
    name: 'Jolle',
    shortDescription: '[EKSEMPEL – må fylles inn] Kort beskrivelse av jollegruppen.',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av jollegruppen, hva man driver med, hvilke båttyper som brukes og nivå på seilerne.',
    targetGroup: '[EKSEMPEL – må fylles inn] Hvem gruppen passer for (alder, nivå).',
    schedule: '[EKSEMPEL – må fylles inn] Når gruppen møtes (ukedag, tidspunkt, sesong).',
    location: '[EKSEMPEL – må fylles inn] Hvor gruppen møtes (klubbhus, brygge, område).',
    contactName: '[EKSEMPEL – må fylles inn] Navn på kontaktperson',
    contactEmail: '[EKSEMPEL – må fylles inn] E-postadresse',
    example: true,
  },
  {
    slug: 'kjolbat-sport',
    name: 'Kjølbåt-Sport',
    shortDescription: '[EKSEMPEL – må fylles inn] Kort beskrivelse av kjølbåt-sportgruppen.',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av kjølbåt-sportgruppen, hva man driver med, hvilke båttyper som brukes og nivå på seilerne.',
    targetGroup: '[EKSEMPEL – må fylles inn] Hvem gruppen passer for (alder, nivå).',
    schedule: '[EKSEMPEL – må fylles inn] Når gruppen møtes (ukedag, tidspunkt, sesong).',
    location: '[EKSEMPEL – må fylles inn] Hvor gruppen møtes (klubbhus, brygge, område).',
    contactName: '[EKSEMPEL – må fylles inn] Navn på kontaktperson',
    contactEmail: '[EKSEMPEL – må fylles inn] E-postadresse',
    example: true,
  },
  {
    slug: 'ladies-sailing',
    name: 'Ladies Sailing',
    shortDescription: '[EKSEMPEL – må fylles inn] Kort beskrivelse av Ladies Sailing.',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av Ladies Sailing, hvor damer i alle aldre kommer sammen for å lære praktisk seiling og teori.',
    targetGroup: '[EKSEMPEL – må fylles inn] Damer i alle aldre.',
    schedule: '[EKSEMPEL – må fylles inn] Når gruppen møtes (ukedag, tidspunkt, sesong).',
    location: '[EKSEMPEL – må fylles inn] Hvor gruppen møtes (klubbhus, brygge, område).',
    contactName: '[EKSEMPEL – må fylles inn] Navn på kontaktperson',
    contactEmail: '[EKSEMPEL – må fylles inn] E-postadresse',
    example: true,
  },
  {
    slug: 'drake',
    name: 'Drake',
    shortDescription: '[EKSEMPEL – må fylles inn] Kort beskrivelse av Drake-gruppen.',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av Drake-gruppen, hva man driver med, hvilke båttyper som brukes og nivå på seilerne.',
    targetGroup: '[EKSEMPEL – må fylles inn] Hvem gruppen passer for (alder, nivå).',
    schedule: '[EKSEMPEL – må fylles inn] Når gruppen møtes (ukedag, tidspunkt, sesong).',
    location: '[EKSEMPEL – må fylles inn] Hvor gruppen møtes (klubbhus, brygge, område).',
    contactName: '[EKSEMPEL – må fylles inn] Navn på kontaktperson',
    contactEmail: '[EKSEMPEL – må fylles inn] E-postadresse',
    example: true,
  },
];

export type SailingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Seilas' | 'Trening' | 'Dugnad' | 'Regatta' | 'Sosialt';
  description: string;
  example?: boolean;
};

export const upcomingEvents: SailingEvent[] = [
  {
    id: 'tirsdagsseilas',
    title: 'Tirsdagsseilas',
    date: '[EKSEMPEL – må fylles inn]',
    time: '[EKSEMPEL – må fylles inn]',
    category: 'Seilas',
    description: '[EKSEMPEL – må fylles inn] Beskrivelse av seilas.',
    example: true,
  },
  {
    id: 'jolletrening-optimist',
    title: 'Jolletrening Optimist',
    date: '[EKSEMPEL – må fylles inn]',
    time: '[EKSEMPEL – må fylles inn]',
    category: 'Trening',
    description: '[EKSEMPEL – må fylles inn] Beskrivelse av trening.',
    example: true,
  },
  {
    id: 'dugnad-havna',
    title: 'Dugnad i havna',
    date: '[EKSEMPEL – må fylles inn]',
    time: '[EKSEMPEL – må fylles inn]',
    category: 'Dugnad',
    description: '[EKSEMPEL – må fylles inn] Beskrivelse av dugnad.',
    example: true,
  },
  {
    id: 'hostregatta',
    title: 'Høstregatta Son',
    date: '[EKSEMPEL – må fylles inn]',
    time: '[EKSEMPEL – må fylles inn]',
    category: 'Regatta',
    description: '[EKSEMPEL – må fylles inn] Beskrivelse av regatta.',
    example: true,
  },
];

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  example?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: 'ny-medlem-rekord',
    title: '[EKSEMPEL – må fylles inn] Nyhetstittel',
    excerpt: '[EKSEMPEL – må fylles inn] Kort sammendrag av nyheten.',
    date: '[EKSEMPEL – må fylles inn]',
    category: 'Nyheter',
    image:
      'https://images.pexels.com/photos/32991360/pexels-photo-32991360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    example: true,
  },
  {
    id: 'optimist-camp',
    title: '[EKSEMPEL – må fylles inn] Nyhetstittel',
    excerpt: '[EKSEMPEL – må fylles inn] Kort sammendrag av nyheten.',
    date: '[EKSEMPEL – må fylles inn]',
    category: 'Junior',
    image:
      'https://images.pexels.com/photos/29679810/pexels-photo-29679810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    example: true,
  },
  {
    id: 'havneprojekt',
    title: '[EKSEMPEL – må fylles inn] Nyhetstittel',
    excerpt: '[EKSEMPEL – må fylles inn] Kort sammendrag av nyheten.',
    date: '[EKSEMPEL – må fylles inn]',
    category: 'Anlegg',
    image:
      'https://images.pexels.com/photos/6155544/pexels-photo-6155544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    example: true,
  },
];

export type QuickLink = {
  id: string;
  label: string;
  description: string;
  icon: 'Trophy' | 'Anchor' | 'ClipboardList' | 'FolderArchive';
  href: string;
};

export const quickLinks: QuickLink[] = [
  {
    id: 'm2s',
    label: 'Manage2Sail (Resultater)',
    description: 'Se resultater, påmeldinger og starts-lister for regattaer.',
    icon: 'Trophy',
    href: externalLinks.manage2sail,
  },
  {
    id: 'gjestebrygge',
    label: 'Gjestebrygge',
    description: 'Informasjon for besøkende båter.',
    icon: 'Anchor',
    href: '/gjestebrygge',
  },
  {
    id: 'medlemskap',
    label: 'Medlemskap',
    description: ' Kontingent, innmelding og utmelding.',
    icon: 'ClipboardList',
    href: '/medlemskap',
  },
  {
    id: 'dokumentarkiv',
    label: 'Om oss',
    description: 'Om foreningen, styret og vedtekter.',
    icon: 'FolderArchive',
    href: '/om-oss',
  },
];

export type CourseItem = {
  id: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  price: string;
  example?: boolean;
};

export const courses: CourseItem[] = [
  {
    id: 'optimist-nybegynner',
    title: '[EKSEMPEL – må fylles inn] Kurstittel',
    level: '[EKSEMPEL – må fylles inn]',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av kurset, hvem det er for og hva man lærer.',
    duration: '[EKSEMPEL – må fylles inn]',
    price: '[EKSEMPEL – må fylles inn]',
    example: true,
  },
  {
    id: 'jolle-viderekommen',
    title: '[EKSEMPEL – må fylles inn] Kurstittel',
    level: '[EKSEMPEL – må fylles inn]',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av kurset, hvem det er for og hva man lærer.',
    duration: '[EKSEMPEL – må fylles inn]',
    price: '[EKSEMPEL – må fylles inn]',
    example: true,
  },
  {
    id: 'kjolbat-kurs',
    title: '[EKSEMPEL – må fylles inn] Kurstittel',
    level: '[EKSEMPEL – må fylles inn]',
    description:
      '[EKSEMPEL – må fylles inn] Beskrivelse av kurset, hvem det er for og hva man lærer.',
    duration: '[EKSEMPEL – må fylles inn]',
    price: '[EKSEMPEL – må fylles inn]',
    example: true,
  },
];

export type VenuePriceRow = {
  label: string;
  price: string;
};

export type VenueGalleryImage = {
  src: string;
  alt: string;
};

export type VenueInfo = {
  name: string;
  intro: string[];
  aboutParagraphs: string[];
  capacity: string[];
  equipment: string[];
  tableware: string[];
  kitchenInfo: string;
  ageLimit: string;
  priceRows: VenuePriceRow[];
  priceNote: string;
  memberDiscount: string;
  timing: string;
  reservation2027: string;
  contactEmail: string;
  galleryImages: VenueGalleryImage[];
  heroImage: string;
};

export const venueInfo: VenueInfo = {
  name: 'Neptun',
  intro: [
    'Vårt lokale Neptun leies ut til selskaper, møter og konferanser. Foreningen bruker lokalet selv et par helger i året, men ellers er det tilgjengelig for utleie. Det store og åpne lokalet ble totalrenovert i januar 2021 og ligger på bryggen med flott utsikt utover havnen.',
    'Hos oss kan du tilberede mat og ha med egen drikke.',
    'Et stort og moderne kjøkken hører til lokalet og ble pusset opp i 2020. Se vår bookingkalender om din ønskede dato er ledig, og send oss en forespørsel via skjemaet nedenfor.',
    'Kontoret er kun bemannet én dag per uke. Det kan derfor ta noen dager før din forespørsel blir besvart.',
  ],
  aboutParagraphs: [
    'Selskapslokalet Neptun består av et stort rom som kan deles av med skillevegg. Det er et tilhørende stort, lyst og moderne kjøkken med egen inngang fra festlokalet og med serveringsluke i veggen mellom rommene.',
    'Lokalet egner seg godt til selskaper og store begivenheter som dåp, konfirmasjon eller bryllup. Det er også godt egnet til møter og konferanser.',
    'Selskapslokalet ligger i andre etasje i huset og har egen veranda ut mot bryggen med fantastisk utsikt over fjorden.',
    'Det er direkte tilgang til lokalet fra bakkeplan. Lokalet er universelt utformet og har HC-toalett.',
  ],
  capacity: [
    'Maks 80 personer (pga. plass)',
    'Kinooppsett: 90 personer',
  ],
  equipment: [
    '19 bord, 75 x 122 cm',
    '80 konferansestoler',
    'Projektor',
    'Lerret',
    'Lydanlegg',
    'Dimbar belysning med tre ulike fargetoner',
  ],
  tableware: [
    'Små tallerkener',
    'Store middagstallerkener',
    'Dype skåler',
    'Vannglass',
    'Champagneglass',
    'Hvitvinsglass',
    'Rødvinsglass',
    'Bestikk',
  ],
  kitchenInfo:
    'Kjøkkenet er utstyrt med en stekeovn med induksjonsplate og en industrioppvaskmaskin med bakker. Det finnes diverse kjøkkenutstyr som kjeler, sleiver, former, serveringsfat og serveringsbestikk.',
  ageLimit:
    'Vi leier ikke ut til grupper der alderen på deltakerne generelt er under 25 år (unntatt barnedåp og konfirmasjoner).',
  priceRows: [
    { label: 'Mandag–torsdag', price: '5 800 kr' },
    { label: 'Mandag–torsdag, halv dag uten kjøkken', price: '3 900 kr' },
    { label: 'Helg, én dag', price: '8 400 kr' },
    { label: 'Helg, to dager', price: '11 000 kr' },
    { label: 'Helg, tre dager', price: '13 600 kr' },
  ],
  priceNote: 'Alle priser er inkludert utvask.',
  memberDiscount:
    'Medlemmer av Soon Seilforening har 1 000 kr i rabatt ved leie til privat arrangement (selskap, konfirmasjon osv.).',
  timing:
    'Leietaker har tilgang til lokalet fra klokken 11:00 den dagen de skal leie og frem til klokken 09:00 neste dag, om ikke annet er avtalt. Det er ikke tillatt å oppholde seg i lokalet mellom klokken 02:00 og 06:00.',
  reservation2027:
    'For datoer i 2027 åpner vi for booking i desember 2026, etter at foreningens egne arrangementer i 2027 er fastsatt. Alle forespørsler som kommer innen desember, blir satt på venteliste, og det vil bli gitt beskjed i desember om lokalet er ledig på ønsket dato.',
  contactEmail: 'kontoret@soonsf.no',
  heroImage: '/bilder/utleielokale/utleielokale-neptun-04.jpg',
  galleryImages: [
    { src: '/bilder/utleielokale/utleielokale-neptun-01.jpg', alt: 'Langbord dekket til selskap, med oransje tulipaner i forgrunnen' },
    { src: '/bilder/utleielokale/utleielokale-neptun-02.jpg', alt: 'Lokalet med enkeltbord og lerret, møteoppsett' },
    { src: '/bilder/utleielokale/utleielokale-neptun-03.jpg', alt: 'Stoler i rader foran lerretet, kinooppsett' },
    { src: '/bilder/utleielokale/utleielokale-neptun-04.jpg', alt: 'Hesteskobord dekket til middag' },
    { src: '/bilder/utleielokale/utleielokale-neptun-05.jpg', alt: 'Langt, dekket bord med blomster og stearinlys' },
    { src: '/bilder/utleielokale/utleielokale-neptun-06.jpg', alt: 'Nærbilde av vinglass og tallerken med Soon Seilforening-logo' },
    { src: '/bilder/utleielokale/utleielokale-neptun-07.jpg', alt: 'Kollasje av kjøkkenet: komfyr, oppvaskbenk og kjøkkenbenk' },
    { src: '/bilder/utleielokale/utleielokale-neptun-08.jpg', alt: 'Skipsklokke på veggen i lokalet' },
    { src: '/bilder/utleielokale/utleielokale-neptun-09.jpg', alt: 'Verandaen mot havnen i solnedgang' },
    { src: '/bilder/utleielokale/utleielokale-neptun-10.jpg', alt: 'Lokalet pyntet til bryllup eller stort selskap' },
  ],
};

export type GuestBerthInfo = {
  heroImage: string;
  heroAlt: string;
  guestIntro: string;
  guestWelcome: string;
  greenSign: string;
  redSign: string;
  greenSignDate: string;
  guestPlacement: string;
  paymentIntro: string;
  vippsNumber: string;
  goMarinaName: string;
  paymentNote: string;
  priceNote: string;
  electricity: string;
  rules: string[];
  responsibility: string;
  memberIntro: string;
  memberPurpose: string;
  memberCriteria: string[];
  winterMooring: string;
  mooringIntro: string;
  mooringRules: string[];
  mooringFigure: string;
  mooringFigureAlt: string;
  contactEmail: string;
};

export const guestBerthInfo: GuestBerthInfo = {
  heroImage: '/bilder/gjestebrygge/gjestebrygge-01.jpg',
  heroAlt:
    'Seilbåter fortøyd ved Soon Seilforenings brygge en solrik dag, med Son i bakgrunnen',
  guestIntro:
    'Soon Seilforening har egen brygge utenfor klubbhuset, der medlemmer har faste bryggeplasser. Når medlemmene er ute på tur, leies disse ut som gjesteplasser. I tillegg er det 140 meter med longside-plasser for gjester på sørsiden av bølgebryteren.',
  guestWelcome:
    'Denne bryggen eies og drives av Soon Seilforening på dugnad. Vi håper du vil trives her og bidra til at anlegget vårt er et hyggelig sted å være. Vi har noen enkle kjøreregler:',
  greenSign: 'Plassen er ledig til neste morgen.',
  redSign: 'Du kan ikke ligge der.',
  greenSignDate:
    'Står det en dato under det grønne skiltet, kan du ikke ligge lenger enn til morgenen den datoen som er skrevet.',
  guestPlacement:
    'Gjester kan også ligge longside på utsiden av bryggen eller på enden. Båsene er reservert for dem som skal overnatte. Båter på dagbesøk kan ligge longside eller bruke den kommunale gjestehavnen, med mindre man blir tildelt en plass av havneverten.',
  paymentIntro:
    'Det koster å drive en brygge. Alle gjester må være med på dugnaden ved å betale for å ligge her. Blir det et overskudd, går det til arbeidet for å trygge barn og unge i vann og på sjøen, og til aktiviteten i jollegruppen vår.',
  vippsNumber: '609056',
  goMarinaName: 'Soon Seilforening Gjestebrygge',
  paymentNote:
    'Billettene fra automaten til Vestby kommune er ikke gyldige her. De gjelder bare for den kommunale gjestehavnen lenger inn.',
  priceNote: 'Prisene står oppslått på bryggen.',
  electricity:
    'Strøm er inkludert i leieprisen. Du kan fylle vann fra slangene på strømstolpene. Søppel kastes i søppelkassene ved landgangen.',
  rules: [
    'Det skal være ro i havnen fra kl. 23:00.',
    'Hunder skal holdes i bånd, også snille hunder.',
    'Det er ikke lov å fiske på bryggen. Fiskesøl tiltrekker seg måker, og kroker som fester seg i bryggefortøyningen, gjør vedlikeholdet vanskeligere for oss. For at det skal være enkelt for alle, gjør vi ingen unntak.',
  ],
  responsibility: 'All tillegging og fortøyning skjer på eget ansvar.',
  memberIntro:
    'Soon Seilforenings bryggeanlegg har som formål å bidra til utøvelse av idrett og fremme seilsportinteressen i Soon, jf. SSFs lover § 1.',
  memberPurpose:
    'SSF har som ambisjon at bryggeanlegget skal brukes av båter som eies av aktive medlemmer i foreningen. Bryggeanlegget skal fungere som et aktivitetssenter der aktive medlemmer møtes for trening, erfaringsutveksling, konkurranse, andre seilsportrelaterte aktiviteter og sosialt samvær.',
  memberCriteria: [
    'Er aktiv regattaseiler, enten i foreningens onsdagsseilaser, i andre regattaer på OAS eller NSFs terminliste, eller i internasjonale mesterskap',
    'Har et verv i foreningen',
    'Deltar som frivillig på minst to av SSFs arrangementer',
  ],
  winterMooring:
    'Leietaker i sommersesongen har fortrinnsrett til den samme plassen i vintersesongen, og må varsle bryggekomiteen innen 15. september om han eller hun ønsker vinterplass. Hvis ikke, kan bryggekomiteen leie ut plassen til andre for vintersesongen. I vintersesongen kan bryggekomiteen fravike kravene over for å fylle plassene.',
  mooringIntro:
    'Havna ligger utsatt til for vær og vind. Det er derfor viktig at alle fortøyer båtene slik at vi unngår skader. Eieren er ansvarlig for skader på anlegget og andre båter som skyldes utilstrekkelig fortøyning.',
  mooringRules: [
    'Alle båter skal fortøyes i henhold til figuren, med minst 2 fortøyninger i baug og akter, i tillegg til 4 spring.',
    'Alle fortøyninger skal dimensjoneres for verst tenkelige vær (over 25 m/s), minimum 14 mm.',
    'Alle tau skal ha strekkavlastere i gummi.',
    'Alle båter over 1 tonn skal bruke spring begge veier. Disse skal festes i «padlock» direkte i betongen der de er montert.',
    'Alle tau skal ha dynamiske egenskaper som egner seg til fortøyning. Gamle fall og skjøter egner seg IKKE til fortøyning.',
    'Alle båter skal bruke fendere av riktig størrelse.',
    'Båter skal ikke forlates i lengre tid med akterenden inn mot bryggen. Ved uvær skal alle båter ligge med baugen mot bryggen (sør).',
    'Kontroller båt og fortøyning før varslet uvær. Er det meldt skikkelig uvær, kan det være lurt å ha dobbelt opp med fortøyninger.',
  ],
  mooringFigure: '/bilder/gjestebrygge/fortoyning-figur.jpg',
  mooringFigureAlt:
    'Figur som viser riktig fortøyning i bås: to fortøyninger i baug og akter, og fire spring',
  contactEmail: 'brygge@soonsf.no',
};

// Content from content/tekster/om-oss.txt
export const aboutText = {
  paragraphs: [
    'Soon Seilforening er en frivillig ideell organisasjon. Foreningens formål er å drive idrett og fritidstilbud (seiling) for barn, ungdom og voksne. Soon Seilforening er organisert i Norges idrettsforbund og olympiske og paralympiske komité (NIF).',
    'Soon Seilforening ble stiftet 18. februar 1919. Foreningens klubbhus var i mange år det kjente utestedet Klubben i Son. I 1986 ble det nybygde klubbhuset Neptun tatt i bruk, med tilhørende nybygd bryggeanlegg. Foreningen har i dag ca 400 medlemmer.',
    'Aktiviteter i foreningen spenner fra jolleseiling for barn, til havseiling med store seilbåter. Foreningen har arrangert og arrangerer jevnlig større arrangementer som Norgesmesterskap, Norgescuper og Hollænderen.',
    'Soon Seilforening har seilere på alle nivåer og foreningen er inndelt i ulike undergrupper. Soon Seilforening arrangerer egne nybegynnerkurs for barn og unge som har lyst til å begynne å seile og vi har seiltrening med instruktør for viderekommende og regattaseilere. Soon Seilforening har egen damesatsing med LadiesSailing hvor damer i alle aldre kommer sammen for å lære praktisk seiling og teori.',
    'Hver onsdag gjennom sesongen arrangeres foreningens egne onsdagsseilas for medlemmer med kjølbåt.',
    'Foreningen har også fostret flere berømte seilere, som f.eks Espen og Thomas Guttormsen, Siren og Christopher Sundby, m.fl. Soon Seilforening er tilknyttet og underlagt Norges Seilforbund, NSF.',
  ],
};

// Content from content/tekster/medlemskap.md
export const membershipContent = {
  intro: [
    'Som aktiv seiler eller leietaker hos oss er det en forutsetning at du er medlem. Som i alle idrettslag kreves det at man er medlem av foreningen for å kunne delta på treninger i regi av foreningen. Medlemsavgift til foreningen kommer i tillegg til treningsavgiften.',
    'Medlemskontingent blir fastsatt ved foregående års årsmøte. SSF benytter Rubic medlemssystem.',
  ],
  yearTitle: 'Årskontingent for 2026',
  yearItems: [
    'Familiemedlemskap: kr 1000,- for hele familien',
    'Enkeltmedlem junior: kr 570,- (0–20 år)',
    'Enkeltmedlem senior: kr 800,-',
    'Studentmedlemskap: kr 570,- (21–25 år. Studentbevis må kunne fremvises – ta kontakt med kontoret hvis du ønsker studentmedlemskap)',
  ],
  yearNote:
    'Det aller triveligste er å la hele familien være en del av fellesskapet. Kontingenten er den samme, uansett antall familiemedlemmer. Obs: gjelder familiemedlemmer i rett opp- og nedadstigende retning.',
  yearNote2: 'Medlemmer som melder seg inn etter 1. august betaler halv pris.',
  signupTitle: 'Innmelding',
  signupUrl:
    'https://app.rubic.no/Account/Signup?organizationID=47373',
  signupItems: [
    'Skjemaet brukes til nye medlemmer, både enkeltmedlem (junior, student, senior) og familiemedlemskap.',
    'Vi bruker Rubic medlemssystem – du må akseptere deres personvernpolicy for å bli medlem hos oss. Det er Soon Seilforening som styrer kommunikasjonen mot deg, og du kan selv påvirke hvor mye informasjon du vil ha fra oss.',
    'Du kan også selv endre medlemskapet ditt gjennom skjemaet.',
    'Velger du feil type medlemskap vil vi kunne hjelpe deg etterpå.',
  ],
  signupNote: 'Ved spørsmål til skjemaet kontakt kontoret@soonsf.no.',
  exitTitle: 'Utmelding',
  exitText:
    'Utmelding må skje skriftlig på e-post til kontoret@soonsf.no. Utmelding kan også skje direkte gjennom MinSide i Rubic.',
};
