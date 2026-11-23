import { useParams, Link } from 'react-router-dom';
import { Users, CalendarDays, MapPin, Mail, ArrowLeft, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { groups } from '@/siteConfig';

export default function GroupPage() {
  const { groupSlug } = useParams<{ groupSlug: string }>();
  const group = groups.find((g) => g.slug === groupSlug);

  if (!group) {
    return (
      <>
        <PageHeader
          eyebrow="Om oss"
          title="Gruppe ikke funnet"
          description="Denne siden finnes ikke."
        />
        <section className="section-py bg-white">
          <div className="container-px mx-auto max-w-3xl text-center">
            <p className="text-slate-600">Vi fant ikke gruppen du leter etter.</p>
            <Link
              to="/om-oss"
              className="mt-6 inline-flex items-center gap-2 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til Om oss
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Om oss · Gruppe"
        title={group.name}
        description={group.shortDescription}
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl">
          {group.example && (
            <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Innholdet på denne siden er eksempeltekst og vil bli fylt inn når innhold er klart.
              </p>
            </div>
          )}

          <div className="space-y-8">
            {/* About the group */}
            <div>
              <h2 className="font-display text-xl font-700 text-slate-900">Om gruppen</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{group.description}</p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Users className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="mt-3 text-sm font-600 text-slate-900">Hvem det passer for</h3>
                <p className="mt-1 text-sm text-slate-600">{group.targetGroup}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarDays className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="mt-3 text-sm font-600 text-slate-900">Når vi møtes</h3>
                <p className="mt-1 text-sm text-slate-600">{group.schedule}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <MapPin className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="mt-3 text-sm font-600 text-slate-900">Hvor vi møtes</h3>
                <p className="mt-1 text-sm text-slate-600">{group.location}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Mail className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="mt-3 text-sm font-600 text-slate-900">Kontaktperson</h3>
                <p className="mt-1 text-sm text-slate-600">{group.contactName}</p>
                <a
                  href={`mailto:${group.contactEmail}`}
                  className="mt-1 inline-block text-sm font-600 text-[#0C1C8C] hover:underline"
                >
                  {group.contactEmail}
                </a>
              </div>
            </div>

            {/* Back link */}
            <div>
              <Link
                to="/om-oss"
                className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Tilbake til Om oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
