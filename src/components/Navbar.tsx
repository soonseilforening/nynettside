import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, externalLinks, siteConfig } from '@/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change & scroll to top
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // On the home page the hero is dark, so transparent works. On sub-pages, always use solid bg.
  const isHome = location.pathname === '/';
  const useSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolid
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label={siteConfig.name}>
            <img
              src="/logo_ssf_soon_seilforening.jpg"
              alt={siteConfig.name}
              className="h-9 sm:h-11 w-auto rounded-lg object-contain ring-1 ring-slate-200 group-hover:ring-[#0C1C8C]/40 group-hover:scale-[1.02] transition-all duration-200 bg-white"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-500 transition-colors rounded-lg ${
                      isActive
                        ? isHome && !useSolid
                          ? 'text-white bg-white/15'
                          : 'text-[#0C1C8C] bg-[#0C1C8C]/8'
                        : isHome && !useSolid
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-slate-700 hover:text-[#0C1C8C] hover:bg-slate-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={externalLinks.rubicLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0C1C8C] px-5 py-2.5 text-sm font-600 text-white shadow-lg hover:bg-[#0C1C8C]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Logg inn (Rubic)
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Meny"
            aria-expanded={open}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              useSolid
                ? 'text-slate-800 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[560px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px mx-auto max-w-7xl flex flex-col py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base font-500 transition-colors ${
                    isActive
                      ? 'text-[#0C1C8C] bg-[#0C1C8C]/8'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0C1C8C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={externalLinks.rubicLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-[#0C1C8C] px-4 py-3 text-center text-base font-600 text-white hover:bg-[#0C1C8C]/90 transition-colors"
            >
              Logg inn (Rubic)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
