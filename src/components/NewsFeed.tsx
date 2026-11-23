import { Link } from 'react-router-dom';
import { Newspaper, ArrowUpRight } from 'lucide-react';
import { newsItems } from '@/siteConfig';

export default function NewsFeed() {
  return (
    <section id="nytt" className="section-py bg-slate-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-ocean-600">
              <Newspaper className="h-4 w-4" />
              Siste nytt
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-navy-900 tracking-tight">
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
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-600 text-navy-800 shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs text-slate-400 font-500">{item.date}</span>
                <h3 className="mt-2 font-display text-lg font-700 text-navy-900 leading-snug group-hover:text-navy-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{item.excerpt}</p>
                <Link
                  to="/nyheter"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-crimson-600 hover:text-crimson-700 transition-colors"
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
