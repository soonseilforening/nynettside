// Central place for external links and content data.
// Swap these URLs for the real Manage2Sail / Rubic links when ready.

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
  { label: 'Hjem', href: '#hjem' },
  { label: 'Aktiviteter', href: '#aktiviteter' },
  { label: 'Regatta', href: '#regatta' },
  { label: 'Medlemsskap', href: '#medlemsportal' },
  { label: 'Om oss', href: '#om-oss' },
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
    href: '#medlemsportal',
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
    href: '#medlemsportal',
  },
];
