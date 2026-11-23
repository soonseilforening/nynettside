import { Wrench } from 'lucide-react';
import { siteConfig } from '@/siteConfig';

export default function UnderConstructionBanner() {
  if (!siteConfig.underConstruction) return null;

  return (
    <>
      <div className="h-12" aria-hidden="true" />
      <div
        role="status"
        className="fixed bottom-0 left-0 right-0 z-50 bg-amber-400 text-slate-900 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-3 text-center text-sm font-medium">
          <Wrench className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Under arbeid: Dette er en testversjon av Soon Seilforenings nye nettside. Noe innhold er
            eksempeltekst. Gjeldende side er{' '}
            <a href="https://www.soonseilforening.no" className="underline underline-offset-2">
              soonseilforening.no
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
}
