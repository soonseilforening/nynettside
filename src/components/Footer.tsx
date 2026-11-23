import { Link } from 'react-router-dom';
import { MapPin, Mail, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { externalLinks, navLinks, siteConfig } from '@/siteConfig';

const aboutLinks = [
  { label: 'Bli medlem', href: externalLinks.rubicMembership, external: true },
  { label: 'Manage2Sail', href: externalLinks.manage2sail, external: true },
  { label: 'Vedtekter', path: '/om-oss' },
  { label: 'Styret', path: '/om-oss' },
];

export default function Footer() {
  return (
    <footer
      className="relative text-slate-300 scroll-mt-20"
      style={{ backgroundColor: '#0C1C8C' }}
    >
      <div className="container-px mx-auto max-w-7xl pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Contact */}
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <img
                src="/logo_ssf_soon_seilforening.jpg"
                alt={`${siteConfig.name} logo`}
                className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/20"
              />
              <span className="font-display text-lg font-600">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              En aktiv seilforening i Son ved Oslofjorden – for seilere i alle aldre,
              fra Optimist-jolle til kjølbåt.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-white/60" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/60" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-[0.16em] text-white">
              Lenker
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link to={l.path!} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-[0.16em] text-white">
              Følg oss
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Få med deg seilaser, resultater og bilder fra havna.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={externalLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <a
              href={externalLinks.rubicMembership}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-600 text-[#0C1C8C] hover:bg-white/90 transition-colors"
            >
              Bli medlem (Rubic) <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Alle rettigheter forbeholdt.</p>
          <p>Laget med kjærlighet for seilglede i Son.</p>
        </div>
      </div>
    </footer>
  );
}
