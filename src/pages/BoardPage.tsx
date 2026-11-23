import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { boardMembers, boardIntro } from '@/siteConfig';

export default function BoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Styret og kontoret"
        description={boardIntro}
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.email}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={`Portrett av ${member.name}, ${member.role}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-600">
                    {member.role}
                  </p>
                  <h3 className="mt-1 font-display text-base font-700 text-slate-900 leading-snug">
                    {member.name}
                  </h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/om-oss"
              className="inline-flex items-center gap-1.5 text-sm font-600 text-[#0C1C8C] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til Om oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
