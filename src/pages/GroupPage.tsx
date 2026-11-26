import { useParams, Link } from 'react-router-dom';
import { Users, CalendarDays, MapPin, Mail, ArrowLeft, AlertCircle, Anchor } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import RubicActivities from '@/components/RubicActivities';
import { groups } from '@/siteConfig';
import { rubicGroups } from '@/config/rubicGroups';

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
        heroImage={group.heroImage}
        heroAlt={group.heroAlt}
        heroPosition={group.heroPosition}
        heroProminent
      />

      {/* Kortere luft over «Om gruppen», så tittelen nederst i bildet og teksten henger sammen */}
      <section className="pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-28 bg-white">
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
                <h3 className="mt-3 text-sm font-600 text-slate-900">Når og hvor</h3>
                <p className="mt-1 text-sm text-slate-600 whitespace-pre-line">{group.schedule}</p>
                {group.location && (
                  <p className="mt-2 flex items-start gap-1.5 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#0C1C8C]" />
                    {group.location}
                  </p>
                )}
              </div>
            </div>

            {/* Sportsbåt section */}
            {group.sportsboatText && (
              <div>
                <h2 className="font-display text-xl font-700 text-slate-900">Sportsbåt</h2>
                {group.sportsboatExample && (
                  <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      Innholdet for sportsbåt er eksempeltekst og må fylles inn av gruppeleder.
                    </p>
                  </div>
                )}
                {group.sportsboatImage && (
                  <img
                    src={group.sportsboatImage}
                    alt={group.sportsboatImageAlt ?? ''}
                    className="mt-4 w-full aspect-[3/2] object-cover rounded-2xl shadow-sm"
                    loading="lazy"
                  />
                )}
                <p className="mt-4 text-slate-600 leading-relaxed">{group.sportsboatText}</p>
              </div>
            )}

            {/* Upcoming activities from Rubic */}
            <div>
              <h2 className="font-display text-xl font-700 text-slate-900 mb-4">
                Kommende aktiviteter
              </h2>
              {group.rubicGroupIds && group.rubicGroupIds.length > 0 ? (
                <div className="space-y-8">
                  {group.rubicGroupIds.map((rubicId) => {
                    const rubicGroup = rubicGroups.find((g) => g.id === rubicId);
                    if (!rubicGroup) return null;
                    return (
                      <RubicActivities
                        key={rubicId}
                        token={rubicGroup.token}
                        title={rubicGroup.name}
                        variant="full"
                        pageSize={10}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-start gap-3">
                  <Anchor className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">
                    {group.name} har ikke egen aktivitetsliste ennå. Se klubbens{' '}
                    <Link
                      to="/#aktiviteter"
                      className="font-600 text-[#0C1C8C] hover:underline"
                    >
                      kommende aktiviteter på forsiden
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Contacts */}
            <div>
              <h2 className="font-display text-xl font-700 text-slate-900">Kontakt</h2>
              {group.contacts && group.contacts.length > 0 ? (
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {group.contacts.map((c) => (
                    <div key={c.email} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <Mail className="h-5 w-5 text-[#0C1C8C]" />
                      <p className="mt-3 text-xs uppercase tracking-wider text-slate-400 font-600">{c.role}</p>
                      <p className="mt-1 text-sm font-700 text-slate-900">{c.name}</p>
                      <a
                        href={`mailto:${c.email}`}
                        className="mt-1 inline-block text-sm font-600 text-[#0C1C8C] hover:underline"
                      >
                        {c.email}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Mail className="h-5 w-5 text-[#0C1C8C]" />
                  <p className="mt-3 text-sm font-700 text-slate-900">{group.contactName}</p>
                  <a
                    href={`mailto:${group.contactEmail}`}
                    className="mt-1 inline-block text-sm font-600 text-[#0C1C8C] hover:underline"
                  >
                    {group.contactEmail}
                  </a>
                </div>
              )}
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
