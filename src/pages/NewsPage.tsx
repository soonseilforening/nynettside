import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowUpRight, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  fetchAllPosts,
  fetchCategoriesWithPosts,
  type SanityPostSummary,
  type SanityCategory,
} from '@/lib/queries';
import { urlForWidth } from '@/lib/sanity';
import { formatNorwegianDate } from '@/lib/date';

export default function NewsPage() {
  const [posts, setPosts] = useState<SanityPostSummary[]>([]);
  const [categories, setCategories] = useState<SanityCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([fetchAllPosts(), fetchCategoriesWithPosts()])
      .then(([postData, catData]) => {
        setPosts(postData);
        setCategories(catData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredPosts = activeCategory
    ? posts.filter((p) =>
        p.categories?.some((c) => c.slug.current === activeCategory)
      )
    : posts;

  return (
    <>
      <PageHeader
        eyebrow="Nyheter"
        title="Nyheter fra foreningen"
        description="Hold deg oppdatert på hva som skjer i Soon Seilforening."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm animate-pulse"
                >
                  <div className="aspect-[16/10] bg-slate-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-20 bg-slate-200 rounded" />
                    <div className="h-5 w-full bg-slate-200 rounded" />
                    <div className="h-4 w-3/4 bg-slate-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Klarte ikke å hente nyheter akkurat nå. Prøv igjen senere.
              </p>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* Category filter */}
              {categories.length > 0 && (
                <div className="mb-8 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`rounded-full px-4 py-2 text-sm font-600 transition-colors ${
                      activeCategory === null
                        ? 'bg-[#0C1C8C] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Alle
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat._id}
                      onClick={() => setActiveCategory(cat.slug.current)}
                      className={`rounded-full px-4 py-2 text-sm font-600 transition-colors ${
                        activeCategory === cat.slug.current
                          ? 'bg-[#0C1C8C] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <p className="text-sm text-slate-500">
                  {posts.length === 0
                    ? 'Ingen nyheter er publisert enda.'
                    : 'Ingen nyheter i denne kategorien.'}
                </p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post._id}
                      to={`/nyheter/${post.slug.current}`}
                      className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                        {post.mainImage ? (
                          <img
                            src={urlForWidth(post.mainImage.asset._ref, 800)}
                            alt={post.mainImage.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full bg-slate-200" />
                        )}
                        {post.categories && post.categories.length > 0 && (
                          <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-600 text-slate-800 shadow-sm">
                            {post.categories[0].title}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <span className="text-xs text-slate-400 font-500">
                          {formatNorwegianDate(post.publishedAt)}
                        </span>
                        <h2 className="mt-2 font-display text-lg font-700 text-slate-900 leading-snug group-hover:text-[#0C1C8C] transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] group-hover:text-crimson-600 transition-colors">
                          Les mer <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {posts.length > 0 && filteredPosts.length > 0 && (
                <div className="mt-10 text-center">
                  <p className="inline-flex items-center gap-2 text-sm text-slate-500">
                    <Newspaper className="h-4 w-4" />
                    Flere nyheter kommer fortløpende.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
