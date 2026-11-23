# Project memory

## Product intent & audience

- Single-page application for **Son Seilforening** (Norwegian sailing club).
- Audience: club members and prospective members; public-facing site with member portal links.
- Sections: Hjem (Hero), Værinformasjon (WeatherConditions), Aktiviteter, Nyheter (NewsFeed), Medlemsportal (MemberPortal), Om oss/Footer, Navbar.
- Content (events, news, links) is currently hardcoded in a config file.

## Brand personality & voice

- Norwegian-language UI.
- Community-oriented, maritime/sailing context; practical and welcoming tone.

## Visual design & UX direction

- Single long page with top navbar and section-based layout.
- Components inferred: Navbar, Hero, WeatherConditions, Activities, NewsFeed, MemberPortal, Footer.
- Weather section links out to Windy/Yr; member portal links to external Rubic system.
- Styling via Tailwind; icons via Lucide React.

## Decisions, constraints & rationale

- Stack: React + TypeScript, Vite, Tailwind CSS, Lucide React.
- Supabase client (`@supabase/supabase-js`) installed as dependency but not yet wired into code; no DB account configured.
- All data hardcoded in config — rationale: simple MVP, Supabase available for future persistence.
- Path alias `@/` maps to `src/` (authoritative in `.bolt/prompt`).

## Open questions & assumptions

- Should Supabase be connected so news/events persist in DB instead of hardcoded config?
- No backend/auth currently; member portal relies on external Rubic links.
- Assumption: site remains a single-page app; routing not introduced yet.