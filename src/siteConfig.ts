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
  rubicSignup: 'https://rubic.no/',
  manage2sail: 'https://www.manage2sail.com/',
  weatherWindy: 'https://www.windy.com/?59.221,10.684,8',
  weatherYr: 'https://www.yr.no/nb/v%C3%A6rvarsel/grafikk/1-9205/Son',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
};

export const navLinks = [
  { label: 'Hjem', path: '/' },
  { label: 'Aktiviteter', path: '/aktiviteter' },
  { label: 'Seilkurs', path: '/seilkurs' },
  { label: 'Utleie av lokalet', path: '/utleie' },
  { label: 'Gjestebrygge', path: '/gjestebrygge' },
  { label: 'Nyheter', path: '/nyheter' },
  { label: 'Om oss / Kontakt', path: '/om-oss' },
];

export type SailingEvent = {
  id: string;
  title: string;
  date: string; // ISO-ish display string
  time: string;
  category: 'Seilas' | 'Trening' | 'Dugnad' | 'Regatta' | 'Sosialt';
  description: string;
};

export const upcomingEvents: SailingEvent[] = [
  {
    id: 'tirsdagsseilas',
    title: 'Tirsdagsseilas',
    date: 'Tirsdag 28. okt',
    time: '18:00 – 21:00',
    category: 'Seilas',
    description: 'Ukentlig seilas for alle båttyper i Oslofjorden. Møt ved brygga kl. 17:30.',
  },
  {
    id: 'jolletrening-optimist',
    title: 'Jolletrening Optimist',
    date: 'Lørdag 1. nov',
    time: '10:00 – 12:30',
    category: 'Trening',
    description: 'Trening for de yngste seilerne i Optimist-jolle. Instruksjon og lek på vannet.',
  },
  {
    id: 'dugnad-havna',
    title: 'Dugnad i havna',
    date: 'Søndag 2. nov',
    time: '11:00 – 15:00',
    category: 'Dugnad',
    description: 'Felles dugnad for klargjøring av brygge, klubbhus og båtplasser før vinteren.',
  },
  {
    id: 'høstregatta',
    title: 'Høstregatta Son',
    date: 'Søndag 9. nov',
    time: '11:00 – 16:00',
    category: 'Regatta',
    description: 'Årets store høstregatta. Klasser for seiljolle, kjølbåt og jolle. Påmelding i Rubic.',
  },
];

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 'ny-medlem-rekord',
    title: 'Rekordmange nye medlemmer i 2026',
    excerpt: 'I år har vi tatt imot over 40 nye seilere – fra Optimist-barn til erfarne kjølbåtskipper.',
    date: '22. okt 2026',
    category: 'Medlemsskap',
    image: 'https://images.pexels.com/photos/32991360/pexels-photo-32991360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'optimist-camp',
    title: 'Optimist-camp en stor suksess',
    excerpt: 'Solskinn, seilglede og nye venner. Se bildene fra ukas treningcamp for våre yngste.',
    date: '14. okt 2026',
    category: 'Junior',
    image: 'https://images.pexels.com/photos/29679810/pexels-photo-29679810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'havneprojekt',
    title: 'Nytt klubbhus og forbedret havn',
    excerpt: 'Styret har vedtatt oppgradering av klubbhuset og nye fortøyningssøyler før sesong 2027.',
    date: '8. okt 2026',
    category: 'Anlegg',
    image: 'https://images.pexels.com/photos/6155544/pexels-photo-6155544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
    id: 'havneutleie',
    label: 'Havneutleie',
    description: 'Bestill gjesteplass eller bok båtplass for sesongen.',
    icon: 'Anchor',
    href: '/gjestebrygge',
  },
  {
    id: 'vaktlister',
    label: 'Vaktlister',
    description: 'Se havnevakta og dugnadsvakter – og meld deg på i Rubic.',
    icon: 'ClipboardList',
    href: externalLinks.rubicLogin,
  },
  {
    id: 'dokumentarkiv',
    label: 'Dokumentarkiv',
    description: 'Vedtekter, retningslinjer, regler og årsrapporter.',
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
};

export const courses: CourseItem[] = [
  {
    id: 'optimist-nybegynner',
    title: 'Optimist – nybegynner',
    level: 'Barn 8–12 år',
    description: 'En trygg og morsom introduksjon til seiling for de yngste. Vi lærer grunnlegende teknikk, balanse og sikkerhet på vannet.',
    duration: '5 dager (mandag–fredag)',
    price: '1 500 kr',
  },
  {
    id: 'jolle-viderekommen',
    title: 'Jolle – viderekommen',
    level: 'Ungdom og voksne',
    description: 'For deg som har litt erfaring og vil bli sikrere i båten. Vender, kryss, slør og spinnaker introduseres.',
    duration: 'Helgekurs (lørdag–søndag)',
    price: '1 200 kr',
  },
  {
    id: 'kjølbåt-kurs',
    title: 'Kjølbåt – grunnkurs',
    level: 'Voksne',
    description: 'Lær å føre kjølbåt med manøvrering, seiltrim, navigasjon og havnegangs. Gir godt grunnlag for kystseiling.',
    duration: '3 kvelder + helg',
    price: '2 000 kr',
  },
  {
    id: 'sikkerhet-vann',
    title: 'Sikkerhet på vannet',
    level: 'Alle aldre',
    description: 'Praktisk sikkerhetskurs: redningsvest, mann over bord, bruk av VHF og førstehjelp. Obligatorisk for vakter.',
    duration: '1 dag',
    price: '600 kr',
  },
];

export type VenueInfo = {
  title: string;
  description: string;
  capacity: string;
  features: string[];
  price: string;
};

export const venueInfo: VenueInfo = {
  title: 'Lei klubbhuset i Son',
  description:
    'Soon Seilforenings klubbhus ligger idyllisk til ved havna i Son, med utsikt over Oslofjorden. Klubbhuset passer perfekt for kurs, selskap, møter og arrangementer – opptil 60 personer.',
  capacity: 'Opptil 60 personer',
  features: [
    'Stort fellesareal med kjøkken',
    'Prosjektor og lydanlegg',
    'Utsikt over havna og fjorden',
    'Egen parkering',
    'Toaletter og garderober',
    'Tilgang til utendørs bryggeområde',
  ],
  price: 'Fra 2 500 kr / dag',
};

export type GuestBerthInfo = {
  title: string;
  description: string;
  details: string[];
};

export const guestBerthInfo: GuestBerthInfo = {
  title: 'Gjestebrygge i Son',
  description:
    'Seilere og båtgjester er hjertelig velkommen til Soon Seilforenings gjestebrygge. Vi tilbyr fortøyning for besøkende båter i kortere eller lengre perioder, med tilgang til klubbhusets fasiliteter.',
  details: [
    'Gjesteplasser for båt opptil 12 meter',
    'Tilgang til strøm og vann på brygga',
    'Toaletter og dusj i klubbhuset',
    'Kort avstand til Sentralbadet og sentrum av Son',
    'Meld ankomst på forhånd via kontoret@soonsf.no',
    'Pris: 200 kr / natt · Sesongrabatt tilgjengelig',
  ],
};
