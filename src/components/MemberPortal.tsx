import { Link } from 'react-router-dom';
import { Trophy, Anchor, ClipboardList, FolderArchive, ArrowUpRight, KeyRound } from 'lucide-react';
import { quickLinks, externalLinks } from '@/siteConfig';

const iconMap = {
  Trophy,
  Anchor,
  ClipboardList,
  FolderArchive,
} as const;

export default function MemberPortal() {
  return (
    <section id="medlemsportal" className="section-py bg-white scroll-mt-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-ocean-600">
            <KeyRound className="h-4 w-4" />
            Medlemsportal
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-navy-900 tracking-tight">
            Snarveier for medlemmer
          </h2>
          <p className="mt-2 text-slate-600">
            Direkte tilgang til resultater, havneutleie, vaktlister og dokumenter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => {
            const Icon = iconMap[link.icon];
            const isExternal = link.href.startsWith('http');
            const content = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C1C8C] text-white group-hover:bg-crimson-500 group-hover:shadow-lg group-hover:shadow-crimson-500/25 transition-all duration-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-700 text-slate-900 leading-snug">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] group-hover:text-crimson-600 transition-colors">
                  Åpne <ArrowUpRight className="h-4 w-4" />
                </span>
              </>
            );
            return isExternal ? (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm hover:shadow-lg hover:border-[#0C1C8C]/30 hover:-translate-y-1 transition-all duration-200"
              >
                {content}
              </a>
            ) : (
              <Link
                key={link.id}
                to={link.href}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm hover:shadow-lg hover:border-[#0C1C8C]/30 hover:-translate-y-1 transition-all duration-200"
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Login strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-navy-50 border border-navy-100 p-5 sm:p-6">
          <div>
            <h3 className="font-display text-lg font-700 text-navy-900">
              Logg inn i Rubic frivilligportal
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Påmelding til seilaser, vaktlister og dugnad – alt samlet på ett sted.
            </p>
          </div>
          <a
            href={externalLinks.rubicLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-500 px-5 py-3 text-sm font-600 text-white shadow-lg shadow-crimson-500/25 hover:bg-crimson-400 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Logg inn (Rubic) <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
