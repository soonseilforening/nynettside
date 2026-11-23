import { Newspaper, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { newsItems } from '@/siteConfig';

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nyheter"
        title="Nyheter fra foreningen"
        description="Hold deg oppdatert på hva som skjer i Soon Seilforening – fra regattaer og kurs til havnearbeid og medlemsnytt."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h2 className="mt-2 font-display text-lg font-700 text-slate-900 leading-snug group-hover:text-[#0C1C8C] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C]">
                    Les mer <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 text-sm text-slate-500">
              <Newspaper className="h-4 w-4" />
              Flere nyheter kommer snart.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
