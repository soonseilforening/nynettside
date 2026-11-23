import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Tag, ArrowUpRight, Anchor } from 'lucide-react';
import { upcomingEvents, externalLinks, type SailingEvent } from '@/siteConfig';

const categoryStyles: Record<SailingEvent['category'], string> = {
  Seilas: 'bg-ocean-50 text-ocean-700 ring-ocean-200',
  Trening: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Dugnad: 'bg-amber-50 text-amber-700 ring-amber-200',
  Regatta: 'bg-crimson-50 text-crimson-700 ring-crimson-200',
  Sosialt: 'bg-navy-50 text-navy-700 ring-navy-200',
};

export default function Activities() {
  return (
    <section id="aktiviteter" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-ocean-600">
            <Anchor className="h-4 w-4" />
            Aktiviteter
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-navy-900 tracking-tight">
            Kommende aktiviteter
          </h2>
          <p className="mt-2 text-slate-600">
            Seilas, trening, dugnad og regatta. Påmelding og vaktlister går via Rubic – vår
            frivilligportal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-navy-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-600 ring-1 ${categoryStyles[event.category]}`}
                  >
                    <Tag className="h-3 w-3" />
                    {event.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-700 text-navy-900">
                    {event.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-navy-50 px-3 py-2 text-navy-800 min-w-[64px]">
                  <span className="text-[10px] uppercase tracking-wider font-500">Snart</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{event.description}</p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-navy-400" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-navy-400" />
                  {event.time}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href={externalLinks.rubicSignup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0C1C8C] px-4 py-3 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 group-hover:bg-crimson-500 group-hover:shadow-lg group-hover:shadow-crimson-500/25 transition-all duration-200"
                >
                  Gå til påmelding i Rubic
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Regatta highlight banner */}
        <div id="regatta" className="mt-8 scroll-mt-24 rounded-2xl bg-navy-900 overflow-hidden">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-6 p-6 sm:p-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-crimson-500/15 px-3 py-1 text-xs font-600 uppercase tracking-wider text-crimson-300 ring-1 ring-crimson-500/30">
                Regatta
              </span>
              <h3 className="mt-3 font-display text-2xl font-700 text-white">
                Høstregatta Son – 9. november
              </h3>
              <p className="mt-2 text-slate-300 max-w-2xl">
                Årets store høstregatta med klasser for seiljolle, kjølbåt og jolle.
                Startliste og resultater publiseres i Manage2Sail.
              </p>
            </div>
            <a
              href={externalLinks.manage2sail}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-600 text-navy-900 hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Se resultater (Manage2Sail)
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
