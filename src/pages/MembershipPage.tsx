import { Link } from 'react-router-dom';
import { Check, ExternalLink, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { membershipContent, siteConfig } from '@/siteConfig';

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Medlemskap"
        title="Medlemskap i Soon Seilforening"
        description="Som aktiv seiler eller leietaker hos oss er det en forutsetning at du er medlem."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-3xl">
          {/* Intro */}
          <div className="space-y-4">
            {membershipContent.intro.map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Yearly contingent */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-700 text-slate-900">
              {membershipContent.yearTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {membershipContent.yearItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {membershipContent.yearNote}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {membershipContent.yearNote2}
            </p>
          </div>

          {/* Signup */}
          <div className="mt-10">
            <h2 className="font-display text-xl font-700 text-slate-900">
              {membershipContent.signupTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {membershipContent.signupItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0C1C8C]/10 text-[#0C1C8C]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">{membershipContent.signupNote}</p>

            <a
              href={membershipContent.signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C1C8C] px-6 py-3.5 text-sm font-600 text-white shadow-lg hover:bg-[#0C1C8C]/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Meld inn skjema
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Exit */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-700 text-slate-900">
              {membershipContent.exitTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {membershipContent.exitText}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              {siteConfig.email}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              to="/om-oss"
              className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              Les mer om foreningen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
