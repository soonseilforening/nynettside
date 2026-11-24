import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const sanityClient = createClient({
  projectId: projectId || 'dzgfs6fk',
  dataset: dataset || 'production',
  useCdn: true,
  apiVersion: '2025-01-01',
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}

export function urlForWidth(source: string, width: number) {
  return builder.image(source).width(width).auto('format').url();
}
