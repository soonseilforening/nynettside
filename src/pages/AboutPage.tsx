import { MapPin, Mail, Users, Calendar, ClipboardList, FolderArchive, Trophy, Anchor, ArrowUpRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { siteConfig, quickLinks, aboutText, groups } from '@/siteConfig';

const iconMap = { Trophy, Anchor, ClipboardList, FolderArchive } as const;

const stats = [
  { value: '1919', label: 'stiftet 18. februar', icon: Calendar },
  { value: '400', label: 'ca. medlemmer', icon: Users },
  { value: '100+', label: 'år med seilglede', icon: Trophy },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Soon Seilforening"
        description="En frivillig ideell organisasjon for seilere i alle aldre i Son ved Oslofjorden."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* About text from content/tekster/om-oss.txt */}
          <div className="max-w-2xl space-y-4">
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          {/* Our groups */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-700 text-slate-900">Våre grupper</h2>
            <p className="mt-2 text-slate-600">
              Soon Seilforening er inndelt i ulike undergrupper. Les mer om hver gruppe nedenfor.
            </p>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Beskrivelsene av gruppene er eksempeltekst og vil bli fylt inn når innhold er klart.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {groups.map((group) => (
                <Link
                  key={group.slug}
                  to={`/om-oss/${group.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-[#0C1C8C]/30 transition-all duration-200"
                >
                  <h3 className="font-display text-lg font-700 text-slate-900 group-hover:text-[#0C1C8C] transition-colors">
                    {group.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {group.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] group-hover:text-crimson-600 transition-colors">
                    Les mer <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Quick links */}
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
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={link.id}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
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
                      ) : (
                        <Link
                          to={link.href}
                          className="group flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-[#0C1C8C]/30 hover:bg-slate-50 transition-colors"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C1C8C] text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="flex-1 text-sm font-600 text-slate-700">
                            {link.label}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#0C1C8C] transition-colors" />
                        </Link>
                      )}
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
