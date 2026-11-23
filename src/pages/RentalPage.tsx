import { Building2, Check, ArrowRight, Users, Tag } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { venueInfo, siteConfig } from '@/siteConfig';

export default function RentalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utleie av lokalet"
        title="Lei klubbhuset i Son"
        description="Vårt klubbhus ved havna er perfekt for kurs, selskap, møter og arrangementer – med utsikt over Oslofjorden."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
                <Building2 className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-700 text-slate-900">
                {venueInfo.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {venueInfo.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <span className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <Users className="h-5 w-5 text-[#0C1C8C]" />
                  {venueInfo.capacity}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <Tag className="h-5 w-5 text-[#0C1C8C]" />
                  {venueInfo.price}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-base font-700 text-slate-900">
                  Fasiliteter
                </h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {venueInfo.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:sticky lg:top-28">
              <h3 className="font-display text-lg font-700 text-slate-900">
                Send forespørsel
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Kontakt oss for å sjekke tilgjengelighet og boke klubbhuset.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-400 font-500">
                    E-post
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-600 text-[#0C1C8C] hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-400 font-500">
                    Adresse
                  </dt>
                  <dd className="mt-1 text-sm text-slate-700">
                    {siteConfig.address}
                  </dd>
                </div>
              </div>

              <a
                href={`mailto:${siteConfig.email}?subject=Forespørsel om leie av klubbhuset`}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0C1C8C] px-5 py-3.5 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
              >
                Send forespørsel
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
