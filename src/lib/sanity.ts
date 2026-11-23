import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2025-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}

export function urlForWidth(source: string, width: number) {
  return builder.image(source).width(width).auto('format').url();
}
