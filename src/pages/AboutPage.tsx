import { MapPin, Mail, Users, Anchor, Trophy, Calendar, ClipboardList, FolderArchive, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { siteConfig, quickLinks } from '@/siteConfig';

const iconMap = { Trophy, Anchor, ClipboardList, FolderArchive } as const;

const stats = [
  { value: '90+', label: 'år med seilglede', icon: Calendar },
  { value: '120', label: 'aktive medlemmer', icon: Users },
  { value: '4', label: 'ukentlige seilaser', icon: Anchor },
  { value: '1934', label: 'stiftet', icon: Trophy },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss / Kontakt"
        title="Soon Seilforening"
        description="En aktiv seilforening i Son ved Oslofjorden – for seilere i alle aldre, fra Optimist-jolle til kjølbåt."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* About text */}
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-700 text-slate-900">
              Om foreningen
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Soon Seilforening ble stiftet i 1934 og er en av de eldste seilforeningene
              rundt Oslofjorden. Vi er en felleskapdrevet klubb med fokus på seilglede,
              inkludering og aktivitet på vannet for alle aldre.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Vi arrangerer ukentlige seilaser, kurs for nybegynnere og viderekomne,
              regattaer og sosiale arrangementer gjennom hele sesongen. Vårt klubbhus
              og havneområde i Son er samlingspunkt for medlemmer og gjester.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-[#0C1C8C]" />
                  <div className="mt-3 font-display text-2xl font-700 text-slate-900">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-700 text-slate-900">
                Kontakt oss
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Har du spørsmål om medlemskap, kurs eller utleie? Ta gjerne kontakt.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C1C8C] text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-slate-400 font-500">
                      E-post
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-600 text-[#0C1C8C] hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C1C8C] text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-slate-400 font-500">
                      Adresse
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-700">
                      {siteConfig.address}
                    </dd>
                  </div>
                </li>
              </ul>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-5 py-3 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
              >
                Send e-post
              </a>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-700 text-slate-900">
                Snarveier
              </h2>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-[#0C1C8C]/30 hover:bg-slate-50 transition-colors"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C1C8C] text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-sm font-600 text-slate-700">
                          {link.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#0C1C8C] transition-colors" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
