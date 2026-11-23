import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Tag, ArrowUpRight, Anchor, GraduationCap, AlertCircle } from 'lucide-react';
import { upcomingEvents, externalLinks, type SailingEvent } from '@/siteConfig';

const categoryStyles: Record<SailingEvent['category'], string> = {
  Seilas: 'bg-ocean-50 text-ocean-700 ring-ocean-200',
  Trening: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Dugnad: 'bg-amber-50 text-amber-700 ring-amber-200',
  Regatta: 'bg-crimson-50 text-crimson-700 ring-crimson-200',
  Sosialt: 'bg-slate-100 text-slate-700 ring-slate-300',
};

export default function Activities() {
  return (
    <section id="aktiviteter" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-[#0C1C8C]">
            <Anchor className="h-4 w-4" />
            Aktiviteter
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-slate-900 tracking-tight">
            Kommende aktiviteter
          </h2>
          <p className="mt-2 text-slate-600">
            Seilas, trening, dugnad og regatta. Påmelding og vaktlister går via Rubic – vår
            frivilligportal.
          </p>
        </div>

        {/* Example notice */}
        <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Aktivitetene nedenfor er eksempeltekst og vil bli fylt inn når innhold er klart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#0C1C8C]/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-600 ring-1 ${categoryStyles[event.category]}`}
                  >
                    <Tag className="h-3 w-3" />
                    {event.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-700 text-slate-900">
                    {event.title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{event.description}</p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {event.time}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href={externalLinks.rubicSignup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0C1C8C] px-4 py-3 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
                >
                  Gå til påmelding i Rubic
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Link to courses */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-700 text-slate-900 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[#0C1C8C]" />
              Seilkurs
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Vi arrangerer nybegynnerkurs for barn og unge, seiltrening for viderekomne og LadiesSailing.
            </p>
          </div>
          <Link
            to="/aktiviteter/seilkurs"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-5 py-3 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors whitespace-nowrap"
          >
            Se alle kurs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
