-- Tabell for utleieforespørsler (Neptun). Kjøres én gang i Supabase: SQL Editor → New query.
-- Bare Netlify-funksjonen (med service role-nøkkelen) kan lese og skrive.
-- Row Level Security er på og det finnes ingen policyer, så nettleseren har ingen tilgang.
-- Se docs/utleie.md.

create table if not exists public.rental_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  rental_type text not null,
  start_date date not null,
  end_date date not null,
  name text not null,
  address text not null,
  email text not null,
  phone text not null,
  purpose text not null,
  participants integer not null check (participants between 1 and 90),
  is_member boolean not null default false,
  status text not null default 'Ny',
  reference text,
  consent_at timestamptz not null,
  check (end_date >= start_date)
);

alter table public.rental_requests enable row level security;

create index if not exists rental_requests_dates_idx on public.rental_requests (start_date, end_date);
