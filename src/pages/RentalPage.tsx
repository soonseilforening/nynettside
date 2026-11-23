import { useState } from 'react';
import { Building2, Check, ArrowRight, Users, Clock, Calendar, Wrench, Wine, Info, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { venueInfo, siteConfig } from '@/siteConfig';

export default function RentalPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + venueInfo.galleryImages.length) % venueInfo.galleryImages.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % venueInfo.galleryImages.length));

  return (
    <>
      <PageHeader
        eyebrow="Utleielokale"
        title={`Selskapslokalet ${venueInfo.name}`}
        description="Book selskapslokale på Sons flotteste eiendom – på bryggen med utsikt over havnen."
        heroImage={venueInfo.heroImage}
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-5xl">
          {/* Intro */}
          <div className="max-w-3xl space-y-4">
            {venueInfo.intro.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* 2027 reservation notice */}
          <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#0C1C8C]/5 border border-[#0C1C8C]/15 px-4 py-3">
            <Calendar className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">{venueInfo.reservation2027}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-700 text-slate-900 mb-6">Bilder av lokalet</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {venueInfo.galleryImages.map((img, i) => (
              <button
                key={img.src}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About the venue */}
      <section className="section-py bg-slate-50">
        <div className="container-px mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <h2 className="font-display text-2xl font-700 text-slate-900">Om lokalet</h2>
          </div>
          <div className="mt-5 max-w-3xl space-y-4">
            {venueInfo.aboutParagraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Equipment */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Capacity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="font-display text-lg font-700 text-slate-900">Kapasitet</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {venueInfo.capacity.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Wrench className="h-5 w-5 text-[#0C1C8C]" />
                <h3 className="font-display text-lg font-700 text-slate-900">Utstyr</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {venueInfo.equipment.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tableware */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5">
              <Wine className="h-5 w-5 text-[#0C1C8C]" />
              <h3 className="font-display text-lg font-700 text-slate-900">Servise til 80 personer</h3>
            </div>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {venueInfo.tableware.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {venueInfo.kitchenInfo}
            </p>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="section-py bg-slate-50">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-700 text-slate-900">Priser dagsleie 2026</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0C1C8C] text-white">
                  <th className="px-5 py-3.5 text-left font-600">Leie</th>
                  <th className="px-5 py-3.5 text-right font-600">Pris</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {venueInfo.priceRows.map((row) => (
                  <tr key={row.label} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 text-slate-700">{row.label}</td>
                    <td className="px-5 py-3.5 text-right font-600 text-slate-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3">
              <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800">{venueInfo.priceNote}</p>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl bg-[#0C1C8C]/5 border border-[#0C1C8C]/15 px-4 py-3">
              <Users className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">{venueInfo.memberDiscount}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl space-y-6">
          {/* Timing */}
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <Clock className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-700 text-slate-900">Tidspunkter</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{venueInfo.timing}</p>
            </div>
          </div>

          {/* Age limit */}
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <Info className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-700 text-slate-900">25 års aldersgrense</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{venueInfo.ageLimit}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / booking request */}
      <section className="section-py bg-slate-50">
        <div className="container-px mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center">
            <h2 className="font-display text-xl font-700 text-slate-900">Send forespørsel</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kontakt oss for å sjekke tilgjengelighet og boke lokalet. Bookingskjemaet kommer snart – foreløpig sender du en e-post.
            </p>
            <a
              href={`mailto:${venueInfo.contactEmail}?subject=Forespørsel om leie av ${venueInfo.name}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-6 py-3.5 text-sm font-600 text-white shadow-lg hover:bg-[#0C1C8C]/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              Send e-post til {venueInfo.contactEmail}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs text-slate-400">
              {siteConfig.address}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Lukk"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-6 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Forrige bilde"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <img
            src={venueInfo.galleryImages[lightboxIndex].src}
            alt={venueInfo.galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-6 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Neste bilde"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70 px-4 text-center">
            {lightboxIndex + 1} / {venueInfo.galleryImages.length} · {venueInfo.galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
