import { Link } from 'react-router-dom';
import { Newspaper, ArrowUpRight, AlertCircle } from 'lucide-react';
import { newsItems } from '@/siteConfig';

export default function NewsFeed() {
  return (
    <section id="nytt" className="section-py bg-slate-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-[#0C1C8C]">
              <Newspaper className="h-4 w-4" />
              Siste nytt
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-slate-900 tracking-tight">
              Nyheter fra foreningen
            </h2>
          </div>
          <Link
            to="/nyheter"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:text-crimson-600 transition-colors"
          >
            Alle nyheter <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Example notice */}
        <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Nyhetene nedenfor er eksempeltekst og vil bli fylt inn når innhold er klart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-600 text-slate-800 shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs text-slate-400 font-500">{item.date}</span>
                <h3 className="mt-2 font-display text-lg font-700 text-slate-900 leading-snug group-hover:text-[#0C1C8C] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{item.excerpt}</p>
                <Link
                  to="/nyheter"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:text-crimson-600 transition-colors"
                >
                  Les mer <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
