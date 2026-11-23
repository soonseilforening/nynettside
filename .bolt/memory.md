# Project memory

## Product intent & audience

- Single-page application for **Son Seilforening** (Norwegian sailing club).
- Audience: club members and prospective members; public-facing site with member portal links.
- Sections: Hjem (Hero), Værinformasjon (WeatherConditions), Aktiviteter, Nyheter (NewsFeed), Medlemsportal (MemberPortal), Om oss/Footer, Navbar.
- News content sourced from Sanity CMS (replacing hardcoded config for news).

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
- **Sanity CMS** integrated for news content (`@sanity/client`); requires `projectId` and `dataset` env vars.
- Env vars must use `VITE_` prefix (e.g. `VITE_SANITY_PROJECT_ID`) for Vite to expose them to the browser.
- `.env` file is not persisted across sessions — must be recreated if missing; Sanity client includes hardcoded fallback values to avoid crash when env vars absent.
- Sanity setup instructions in `docs/sanity.md`.
- Supabase (`@supabase/supabase-js`) still installed but not wired in; may be used for future persistence of events/auth.
- Path alias `@/` maps to `src/` (authoritative in `.bolt/prompt`).

## Open questions & assumptions

- CORS origins must be configured in Sanity dashboard for browser requests to succeed (see `docs/sanity.md`).
- Should events/activities also move to Sanity, or remain hardcoded config?
- Supabase role unclear now that Sanity is used for news — keep or remove?
- No backend/auth currently; member portal relies on external Rubic links.
- Assumption: site remains a single-page app; routing not introduced yet.