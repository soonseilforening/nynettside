// Central place for external links and content data.
// Swap these URLs for the real Manage2Sail / Rubic links when ready.

export const siteConfig = {
  name: 'Soon Seilforening',
  shortName: 'Soon SF',
  email: 'kontoret@soonsf.no',
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
  { label: 'Om oss', path: '/om-oss' },
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

export type VenueInfo = {
  title: string;
  description: string;
  capacity: string;
  features: string[];
  price: string;
  example?: boolean;
};

export const venueInfo: VenueInfo = {
  title: 'Lei klubbhuset Neptun i Son',
  description:
    'Soon Seilforenings klubbhus Neptun ligger idyllisk til ved havna i Son, med utsikt over Oslofjorden. Klubbhuset passer for kurs, selskap, møter og arrangementer.',
  capacity: '[EKSEMPEL – må fylles inn]',
  features: [
    '[EKSEMPEL – må fylles inn] Fasilitet',
    '[EKSEMPEL – må fylles inn] Fasilitet',
    '[EKSEMPEL – må fylles inn] Fasilitet',
    '[EKSEMPEL – må fylles inn] Fasilitet',
  ],
  price: '[EKSEMPEL – må fylles inn]',
  example: true,
};

export type GuestBerthInfo = {
  title: string;
  description: string;
  details: string[];
  example?: boolean;
};

export const guestBerthInfo: GuestBerthInfo = {
  title: 'Gjestebrygge i Son',
  description:
    'Seilere og båtgjester er hjertelig velkommen til Soon Seilforenings gjestebrygge. Vi tilbyr fortøyning for besøkende båter, med tilgang til klubbhusets fasiliteter.',
  details: [
    '[EKSEMPEL – må fylles inn] Detalj om plasser',
    '[EKSEMPEL – må fylles inn] Detalj om strøm/vann',
    '[EKSEMPEL – må fylles inn] Detalj om toalett/dusj',
    'Meld ankomst på forhånd via kontoret@soonsf.no',
    '[EKSEMPEL – må fylles inn] Pris per natt',
  ],
  example: true,
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
