import { GraduationCap, Clock, Users, Tag, ArrowUpRight, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { courses, externalLinks, siteConfig } from '@/siteConfig';

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktiviteter · Seilkurs"
        title="Seilkurs for alle aldre og nivåer"
        description="Vi arrangerer egne nybegynnerkurs for barn og unge, seiltrening med instruktør for viderekommende og regattaseilere, samt LadiesSailing for damer i alle aldre."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Example notice */}
          <div className="mb-6 flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              Kursdetaljer, priser og tidspunkt nedenfor er eksempeltekst og vil bli fylt inn når innhold er klart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#0C1C8C]/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0C1C8C]/5 px-3 py-1 text-xs font-600 text-[#0C1C8C] ring-1 ring-[#0C1C8C]/15">
                      <Users className="h-3 w-3" />
                      {course.level}
                    </span>
                    <h2 className="mt-3 font-display text-xl font-700 text-slate-900">
                      {course.title}
                    </h2>
                  </div>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C1C8C] text-white">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-slate-400" />
                    {course.price}
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <a
                    href={externalLinks.rubicSignup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0C1C8C] px-4 py-3 text-sm font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
                  >
                    Meld deg på kurs
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center">
            <h3 className="font-display text-lg font-700 text-slate-900">
              Spørsmål om kurs?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
              Kontakt oss på {siteConfig.email} for mer informasjon om kurs, utstyr og påmelding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
