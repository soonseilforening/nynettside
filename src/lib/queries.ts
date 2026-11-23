import { sanityClient } from './sanity';

export type SanityCategory = {
  _id: string;
  title: string;
  slug: { current: string };
};

export type SanityPostSummary = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: { _ref: string };
    alt: string;
  } | null;
  categories: SanityCategory[];
};

export type SanityImageBlock = {
  _type: 'image';
  asset: { _ref: string };
  alt?: string;
  caption?: string;
};

export type SanityPost = SanityPostSummary & {
  body: unknown[];
};

const postFields = `
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage { alt, asset { _ref } },
  categories[]->{ _id, title, slug }
`;

export async function fetchLatestPosts(limit = 3): Promise<SanityPostSummary[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${postFields} }`;
  return sanityClient.fetch(query, { limit });
}

export async function fetchAllPosts(): Promise<SanityPostSummary[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`;
  return sanityClient.fetch(query);
}

export async function fetchPostsByCategory(categorySlug: string): Promise<SanityPostSummary[]> {
  const query = `*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) { ${postFields} }`;
  return sanityClient.fetch(query, { categorySlug });
}

export async function fetchCategoriesWithPosts(): Promise<SanityCategory[]> {
  const query = `*[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0] | order(title asc) { _id, title, slug }`;
  return sanityClient.fetch(query);
}

export async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] { ${postFields}, body }`;
  return sanityClient.fetch(query, { slug });
}
