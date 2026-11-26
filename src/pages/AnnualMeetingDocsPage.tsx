import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, FileText, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { annualMeetings, annualMeetingsIntro, siteConfig } from '@/siteConfig';

export default function AnnualMeetingDocsPage() {
  return (
    <>
      <PageHeader eyebrow="Om oss" title="Årsmøtedokumenter" description={annualMeetingsIntro} />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl">
          <div className="space-y-6">
            {annualMeetings.map((meeting) => (
              <article
                key={meeting.year}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl font-700 text-slate-900">
                    Årsmøte {meeting.year}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4 text-[#0C1C8C]" />
                    {meeting.date}
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-slate-100">
                  {meeting.documents.map((doc) => (
                    <li key={doc.url}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 py-3 text-sm font-600 text-[#0C1C8C] hover:underline"
                      >
                        <FileText className="h-5 w-5 shrink-0" />
                        <span className="flex-1">{doc.label}</span>
                        <span className="text-xs font-500 text-slate-400 no-underline">PDF</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#0C1C8C]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Spørsmål om årsmøtet kan sendes til{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-600 text-[#0C1C8C] hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>

          <Link
            to="/om-oss"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til Om oss
          </Link>
        </div>
      </section>
    </>
  );
}
