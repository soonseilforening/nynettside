import { Wind, Compass, Thermometer, Waves, ExternalLink, CloudSun } from 'lucide-react';
import { externalLinks } from '@/siteConfig';

type Metric = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: 'ocean' | 'crimson' | 'navy' | 'emerald';
};

const metrics: Metric[] = [
  {
    id: 'vindstyrke',
    label: 'Vindstyrke',
    value: '14',
    unit: 'knop',
    sub: 'Frisk bris · 7 m/s',
    icon: Wind,
    accent: 'ocean',
  },
  {
    id: 'vindretning',
    label: 'Vindretning',
    value: 'SV',
    sub: 'Sørvest, 220°',
    icon: Compass,
    accent: 'navy',
  },
  {
    id: 'temperatur',
    label: 'Temperatur',
    value: '9°',
    unit: 'C',
    sub: 'Vann: 11°C · Luft: 9°C',
    icon: Thermometer,
    accent: 'crimson',
  },
  {
    id: 'bølgehøyde',
    label: 'Bølgehøyde',
    value: '0,4',
    unit: 'm',
    sub: 'Lav · Oslofjorden indre',
    icon: Waves,
    accent: 'emerald',
  },
];

const accentMap: Record<Metric['accent'], string> = {
  ocean: 'bg-ocean-50 text-ocean-600 ring-ocean-200',
  crimson: 'bg-crimson-50 text-crimson-600 ring-crimson-200',
  navy: 'bg-navy-50 text-navy-600 ring-navy-200',
  emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-200',
};

export default function WeatherConditions() {
  return (
    <section id="vær" className="section-py bg-slate-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-ocean-600">
              <CloudSun className="h-4 w-4" />
              Live vær
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 text-navy-900 tracking-tight">
              Vær og forhold i Son
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Oppdaterte vind- og bølgeforhold for Oslofjorden. Sjekk alltid været før du legger ut.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={externalLinks.weatherWindy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-600 text-navy-700 hover:border-navy-400 hover:bg-navy-50 transition-colors"
            >
              Windy.com <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={externalLinks.weatherYr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-600 text-navy-700 hover:border-navy-400 hover:bg-navy-50 transition-colors"
            >
              Yr.no <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Embedded weather widget mock */}
          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2 text-sm font-600 text-navy-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Windy.com · Son / Oslofjorden
              </div>
              <span className="text-xs text-slate-400">Oppdateres live</span>
            </div>
            <div className="relative aspect-[16/10] bg-navy-950">
              {/* Windy iframe (sandboxed). Falls back to a styled placeholder if blocked. */}
              <iframe
                title="Windy værvarsel Son"
                src="https://embed.windy.com/embed2?type=map&loc=59.221,10.684&zoom=8&level=surface&overlay=wind&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&detailDay=now&metricWind=kt&metricTemp=%C2%B0C"
                className="h-full w-full"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
            <div className="px-5 py-3 text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
              Kart: Windy.com – vindstyrke i knop over Oslofjorden.
            </div>
          </div>

          {/* Metric cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${accentMap[m.accent]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-500">
                      {m.label}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-700 text-navy-900">{m.value}</span>
                    {m.unit && <span className="text-sm font-500 text-slate-500">{m.unit}</span>}
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{m.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
