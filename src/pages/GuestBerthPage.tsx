import { Anchor, Check, Info, Mail, ArrowRight, Snowflake, ShieldCheck, Volume2, Dog, Fish, Zap, Droplets, Trash2, KeyRound } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { guestBerthInfo } from '@/siteConfig';

export default function GuestBerthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gjestebrygge"
        title="Brygge og gjestehavn"
        description="Velkommen som gjest til Soon Seilforenings brygge i Son."
        heroImage={guestBerthInfo.heroImage}
      />

      {/* =================== DEL 1: FOR GJESTER =================== */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
              <Anchor className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-400 font-600">Del 1</span>
              <h2 className="font-display text-2xl font-700 text-slate-900">For gjester</h2>
            </div>
          </div>

          {/* Intro */}
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-600 leading-relaxed">{guestBerthInfo.guestIntro}</p>
            <p className="text-slate-600 leading-relaxed">
              Ledige plasser er merket med grønt skilt. Det er mulig å legge seg longside på sørsiden av bryggen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Vi har dessverre ikke mulighet for å reservere enkeltplasser.
            </p>
          </div>

          {/* Welcome */}
          <div className="mt-10 max-w-3xl">
            <h3 className="font-display text-xl font-700 text-slate-900">
              Velkommen som gjest hos Soon Seilforening
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{guestBerthInfo.guestWelcome}</p>
          </div>

          {/* Where can you dock – sign guide */}
          <div className="mt-8 max-w-3xl">
            <h3 className="font-display text-lg font-700 text-slate-900">Hvor kan du ligge?</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Alle båsene er faste plasser som er leid ut. Når eieren er på tur, kan gjester låne plassen. Da snur vi skiltet i båsen fra rødt til grønt.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {/* Green sign */}
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white text-xs font-700">
                    OK
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-600 text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Grønt skilt
                  </span>
                </div>
                <p className="mt-3 text-sm text-emerald-900 leading-relaxed">{guestBerthInfo.greenSign}</p>
                <p className="mt-2 text-sm text-emerald-700 leading-relaxed">{guestBerthInfo.greenSignDate}</p>
              </div>

              {/* Red sign */}
              <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white text-xs font-700">
                    NEI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-xs font-600 text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Rødt skilt
                  </span>
                </div>
                <p className="mt-3 text-sm text-red-900 leading-relaxed">{guestBerthInfo.redSign}</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600 leading-relaxed">{guestBerthInfo.guestPlacement}</p>
          </div>

          {/* Payment box */}
          <div className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="font-display text-lg font-700 text-slate-900">Betaling</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{guestBerthInfo.paymentIntro}</p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-600">Vipps</p>
                <p className="mt-2 font-display text-2xl font-700 text-[#0C1C8C]">#{guestBerthInfo.vippsNumber}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-600">GoMarina-appen</p>
                <p className="mt-2 text-sm font-600 text-slate-900">{guestBerthInfo.goMarinaName}</p>
                <p className="mt-1 text-xs text-slate-500">Søk opp «Soon Seilforening Gjestebrygge»</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">{guestBerthInfo.paymentNote}</p>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-4 py-3">
                <span className="text-sm font-600 text-white">{guestBerthInfo.priceNote}</span>
              </div>
            </div>
          </div>

          {/* Service building */}
          <div className="mt-8 max-w-3xl">
            <h3 className="font-display text-lg font-700 text-slate-900">Toalett, dusj og servicebygg</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Gjestene våre kan kjøpe adgang til servicebygget i den kommunale gjestehavnen. Servicebygget ligger til venstre for klubbhuset vårt, langs parkeringsplassen. Kode til servicebygget kan kjøpes på dockspot.com.
            </p>
          </div>

          {/* Utilities */}
          <div className="mt-6 max-w-3xl grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Zap className="h-5 w-5 text-[#0C1C8C]" />
              <h4 className="mt-2 text-sm font-600 text-slate-900">Strøm</h4>
              <p className="mt-1 text-xs text-slate-500">Inkludert i leieprisen</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Droplets className="h-5 w-5 text-[#0C1C8C]" />
              <h4 className="mt-2 text-sm font-600 text-slate-900">Vann</h4>
              <p className="mt-1 text-xs text-slate-500">Fylles fra slangene på strømstolpene</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Trash2 className="h-5 w-5 text-[#0C1C8C]" />
              <h4 className="mt-2 text-sm font-600 text-slate-900">Søppel</h4>
              <p className="mt-1 text-xs text-slate-500">Kastes i kassene ved landgangen</p>
            </div>
          </div>

          {/* Rules */}
          <div className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-lg font-700 text-slate-900">Ordensregler</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Volume2 className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
                Det skal være ro i havnen fra kl. 23:00.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Dog className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
                Hunder skal holdes i bånd, også snille hunder.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Fish className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
                Det er ikke lov å fiske på bryggen. Fiskesøl tiltrekker seg måker, og kroker som fester seg i bryggefortøyningen, gjør vedlikeholdet vanskeligere for oss. For at det skal være enkelt for alle, gjør vi ingen unntak.
              </li>
            </ul>
          </div>

          {/* Responsibility */}
          <div className="mt-6 max-w-3xl flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">{guestBerthInfo.responsibility}</p>
          </div>
        </div>
      </section>

      {/* =================== DEL 2: FASTE BRYGGEPLASSER =================== */}
      <section className="section-py bg-slate-50">
        <div className="container-px mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
              <Anchor className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-400 font-600">Del 2</span>
              <h2 className="font-display text-2xl font-700 text-slate-900">Faste bryggeplasser for medlemmer</h2>
            </div>
          </div>

          {/* Intro */}
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-slate-600 leading-relaxed">{guestBerthInfo.memberIntro}</p>
            <p className="text-slate-600 leading-relaxed">{guestBerthInfo.memberPurpose}</p>
          </div>

          {/* Criteria */}
          <div className="mt-8 max-w-3xl">
            <h3 className="font-display text-lg font-700 text-slate-900">Krav for båtplass</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Kriteriet for båtplass ved SSFs bryggeanlegg er at båteieren er medlem og aktiv i foreningen. Med aktiv menes at båteieren oppfyller minst ett av disse kravene:
            </p>
            <ol className="mt-4 space-y-3">
              {guestBerthInfo.memberCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C] text-white font-600 text-xs">
                    {i + 1}
                  </span>
                  <span className="mt-0.5 leading-relaxed">{c}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Winter mooring */}
          <div className="mt-8 max-w-3xl flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <Snowflake className="h-5 w-5 text-[#0C1C8C] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-700 text-slate-900">Vinterplasser</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{guestBerthInfo.winterMooring}</p>
            </div>
          </div>

          {/* Mooring instructions with figure */}
          <div className="mt-8 max-w-5xl">
            <h3 className="font-display text-xl font-700 text-slate-900">
              Fortøyningsinstruks for Soon Seilforenings brygge
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">{guestBerthInfo.mooringIntro}</p>

            <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
              {/* Figure */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm overflow-hidden">
                <img
                  src={guestBerthInfo.mooringFigure}
                  alt={guestBerthInfo.mooringFigureAlt}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
                <p className="mt-3 text-xs text-slate-500 text-center">{guestBerthInfo.mooringFigureAlt}</p>
              </div>

              {/* Rules list */}
              <ul className="space-y-3">
                {guestBerthInfo.mooringRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center">
            <h3 className="font-display text-lg font-700 text-slate-900">Kontakt for faste plasser</h3>
            <p className="mt-2 text-sm text-slate-600">Spørsmål om faste bryggeplasser rettes til bryggekomiteen.</p>
            <a
              href={`mailto:${guestBerthInfo.contactEmail}`}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-6 py-3.5 text-sm font-600 text-white shadow-lg hover:bg-[#0C1C8C]/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              {guestBerthInfo.contactEmail}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
