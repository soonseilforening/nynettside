import { Wind, CalendarCheck } from 'lucide-react';
import { externalLinks } from '@/siteConfig';

const heroImg =
  'https://images.pexels.com/photos/13214267/pexels-photo-13214267.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export default function Hero() {
  return (
    <section id="hjem" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Seilbåter i regatta på Oslofjorden"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/65 to-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-px mx-auto max-w-7xl w-full pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-500 uppercase tracking-[0.16em] text-white backdrop-blur-sm animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-400 animate-pulse" />
            Est. 1934 · Son ved Oslofjorden
          </span>

          <h1
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-700 leading-[1.08] tracking-tight text-white animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            Seilglede og fellesskap i Son
          </h1>

          <p
            className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: '0.16s' }}
          >
            Velkommen til Soon Seilforening – for seilere i alle aldre.
          </p>

          {/* Dual CTAs */}
          <div
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.24s' }}
          >
            <a
              href={externalLinks.rubicMembership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-500 px-6 py-3.5 text-base font-600 text-white shadow-xl shadow-crimson-500/30 hover:bg-crimson-400 hover:shadow-crimson-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Bli medlem (Rubic)
            </a>
            <a
              href={externalLinks.weatherYr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-600 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-200"
            >
              <Wind className="h-5 w-5" />
              Se værvarsel
            </a>
          </div>

          {/* Quick stat strip */}
          <div
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            {[
              { value: '90+', label: 'år med seilglede' },
              { value: '120', label: 'aktive medlemmer' },
              { value: '4', label: 'ukentlige seilaser' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-700 text-white">{s.value}</span>
                <span className="mt-1 text-xs sm:text-sm text-slate-300 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#vær"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors animate-floaty"
        aria-label="Bla ned"
      >
        <CalendarCheck className="h-4 w-4" />
        <span className="text-[11px] uppercase tracking-[0.18em]">Live vær</span>
      </a>
    </section>
  );
}
