import { Anchor } from 'lucide-react';
import RubicActivities from '@/components/RubicActivities';
import { rubicGroups } from '@/config/rubicGroups';

export default function Activities() {
  return (
    <section id="aktiviteter" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-[#0C1C8C]">
            <Anchor className="h-4 w-4" />
            Aktiviteter
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-slate-900 tracking-tight">
            Kommende aktiviteter
          </h2>
          <p className="mt-2 text-slate-600">
            Seilas, trening, dugnad og regatta. Påmelding og vaktlister går via Rubic – vår
            frivilligportal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rubicGroups.map((group) => (
            <RubicActivities
              key={group.id}
              token={group.token}
              title={group.name}
              pageSize={3}
              variant="compact"
              hideWhenEmpty
            />
          ))}
        </div>
      </div>
    </section>
  );
}
