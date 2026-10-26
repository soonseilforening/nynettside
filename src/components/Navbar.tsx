import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, externalLinks } from '@/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-transparent'
      }`}>
      <nav className="container-px mx-auto max-w-7xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#hjem" className="flex items-center group" aria-label="Soon Seilforening">
            <img
              src="/logo_ssf_soon_seilforening.jpg"
              alt="Soon Seilforening"
              className="h-9 sm:h-11 w-auto rounded-lg object-contain ring-1 ring-white/20 group-hover:ring-white/50 group-hover:scale-[1.02] transition-all duration-200 bg-white/5"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-500 text-slate-100 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={externalLinks.rubicLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-crimson-500 px-5 py-2.5 text-sm font-600 text-white shadow-lg shadow-crimson-500/25 hover:bg-crimson-400 hover:shadow-crimson-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Logg inn (Rubic)
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Meny"
            aria-expanded={open}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-navy-950 transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[480px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px mx-auto max-w-7xl flex flex-col py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-500 text-slate-100 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={externalLinks.rubicLogin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-crimson-500 px-4 py-3 text-center text-base font-600 text-white hover:bg-crimson-400 transition-colors"
            >
              Logg inn (Rubic)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
