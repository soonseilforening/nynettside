// Supabase setter gratisprosjekter på pause etter en uke uten aktivitet.
// Denne funksjonen kjører automatisk én gang i uken og gjør et lite oppslag,
// slik at utleieskjemaet alltid virker. Se docs/utleie.md.

export const config = { schedule: '@weekly' };

export default async () => {
  const url = Netlify.env.get('SUPABASE_URL');
  const key = Netlify.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) {
    console.warn('Supabase er ikke satt opp – hopper over keepalive');
    return;
  }
  const res = await fetch(`${url}/rest/v1/rental_requests?select=id&limit=1`, {
    headers: supabaseAuthHeaders(key),
  });
  console.log('Supabase keepalive', res.status);
};

// Supabase har to typer nøkler: nye «secret keys» (sb_secret_...) og eldre «service_role» (JWT, starter med eyJ).
// Nye nøkler sendes bare som apikey. Eldre nøkler sendes også som Authorization.
function supabaseAuthHeaders(key: string): Record<string, string> {
  return key.startsWith('eyJ') ? { apikey: key, Authorization: `Bearer ${key}` } : { apikey: key };
}
