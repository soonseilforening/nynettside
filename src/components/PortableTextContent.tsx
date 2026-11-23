import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForWidth } from '@/lib/sanity';
import type { SanityImageBlock } from '@/lib/queries';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageBlock }) => {
      const alt = value.alt || '';
      const caption = value.caption;
      const src = value.asset?._ref ? urlForWidth(value.asset._ref, 1600) : '';
      if (!src) return null;
      return (
        <figure className="my-8">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
          {caption && (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 font-display text-2xl font-700 text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 font-display text-xl font-700 text-slate-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-slate-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#0C1C8C] pl-5 italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href;
      if (!href) return <>{children}</>;
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[#0C1C8C] font-600 underline hover:no-underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextContent({ value }: { value: unknown[] }) {
  return <PortableText value={value as never} components={components} />;
}
