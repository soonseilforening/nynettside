import { Anchor, Check, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { guestBerthInfo, siteConfig } from '@/siteConfig';

export default function GuestBerthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gjestebrygge"
        title="Velkommen til gjestebrygga i Son"
        description="Seilere og båtgjester er hjertelig velkommen. Vi tilbyr fortøyning for besøkende båter med tilgang til klubbhusets fasiliteter."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Example notice */}
          <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              Detaljer om plasser, fasiliteter og priser nedenfor er eksempeltekst og vil bli fylt inn når innhold er klart.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
                <Anchor className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-700 text-slate-900">
                {guestBerthInfo.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {guestBerthInfo.description}
              </p>

              <div className="mt-8">
                <h3 className="font-display text-base font-700 text-slate-900">
                  Praktisk informasjon
                </h3>
                <ul className="mt-4 space-y-3">
                  {guestBerthInfo.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:sticky lg:top-28">
              <h3 className="font-display text-lg font-700 text-slate-900">
                Meld ankomst
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Vi anbefaler å melde fra på forhånd slik at vi kan reservere plass til deg.
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
                href={`mailto:${siteConfig.email}?subject=Gjestebrygge – meld ankomst`}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0C1C8C] px-5 py-3.5 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Meld ankomst
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
