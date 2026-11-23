export function formatNorwegianDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
