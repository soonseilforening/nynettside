import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Newspaper } from 'lucide-react';
import { fetchPostBySlug, type SanityPost } from '@/lib/queries';
import { urlForWidth } from '@/lib/sanity';
import { formatNorwegianDate } from '@/lib/date';
import PortableTextContent from '@/components/PortableTextContent';

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    setNotFound(false);
    fetchPostBySlug(slug)
      .then((data) => {
        if (!data) {
          setNotFound(true);
        } else {
          setPost(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <header
          className="relative pt-32 pb-12 sm:pt-36 sm:pb-16"
          style={{ backgroundColor: '#0C1C8C' }}
        >
          <div className="container-px mx-auto max-w-3xl">
            <div className="h-4 w-24 bg-white/20 rounded animate-pulse" />
            <div className="mt-4 h-8 w-3/4 bg-white/20 rounded animate-pulse" />
            <div className="mt-3 h-4 w-32 bg-white/20 rounded animate-pulse" />
          </div>
        </header>
        <section className="section-py bg-white">
          <div className="container-px mx-auto max-w-3xl space-y-4">
            <div className="h-64 bg-slate-200 rounded-xl animate-pulse" />
            <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse" />
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <header
          className="relative pt-32 pb-12 sm:pt-36 sm:pb-16"
          style={{ backgroundColor: '#0C1C8C' }}
        >
          <div className="container-px mx-auto max-w-3xl">
            <span className="text-sm font-600 uppercase tracking-[0.16em] text-white/70">
              Nyheter
            </span>
          </div>
        </header>
        <section className="section-py bg-white">
          <div className="container-px mx-auto max-w-3xl">
            <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Klarte ikke å hente nyheten akkurat nå. Prøv igjen senere.
              </p>
            </div>
            <Link
              to="/nyheter"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til nyheter
            </Link>
          </div>
        </section>
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <header
          className="relative pt-32 pb-12 sm:pt-36 sm:pb-16"
          style={{ backgroundColor: '#0C1C8C' }}
        >
          <div className="container-px mx-auto max-w-3xl">
            <span className="text-sm font-600 uppercase tracking-[0.16em] text-white/70">
              Nyheter
            </span>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-white tracking-tight">
              Nyheten finnes ikke
            </h1>
          </div>
        </header>
        <section className="section-py bg-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <Newspaper className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-slate-600">
              Vi fant ikke nyheten du leter etter. Den kan være flyttet eller fjernet.
            </p>
            <Link
              to="/nyheter"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til nyheter
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <header
        className="relative pt-32 pb-12 sm:pt-36 sm:pb-16"
        style={{ backgroundColor: '#0C1C8C' }}
      >
        <div className="container-px mx-auto max-w-3xl">
          <span className="text-sm font-600 uppercase tracking-[0.16em] text-white/70">
            Nyheter
          </span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-white tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            {formatNorwegianDate(post.publishedAt)}
          </p>
        </div>
      </header>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl">
          <Link
            to="/nyheter"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til nyheter
          </Link>

          {post.mainImage && (
            <figure className="mb-8 -mx-4 sm:mx-0">
              <img
                src={urlForWidth(post.mainImage.asset._ref, 1600)}
                alt={post.mainImage.alt}
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </figure>
          )}

          {post.excerpt && (
            <p className="mb-8 text-lg text-slate-700 leading-relaxed font-500">
              {post.excerpt}
            </p>
          )}

          {post.categories && post.categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-600 text-slate-600"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <div className="prose-content">
            <PortableTextContent value={post.body} />
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <Link
              to="/nyheter"
              className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til nyheter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
