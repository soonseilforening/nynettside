type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  heroImage?: string;
  /** Vis bildet tydelig (bærende bilde): tittelen står nede til venstre, med overtoning bare i det hjørnet */
  heroProminent?: boolean;
  heroAlt?: string;
  /** Hvor i bildet motivet er (CSS object-position), f.eks. 'center 80%' = nederst på midten */
  heroPosition?: string;
};

export default function PageHeader({ eyebrow, title, description, heroImage, heroProminent, heroAlt, heroPosition }: PageHeaderProps) {
  return (
    <header
      className={`relative overflow-hidden ${
        heroImage && heroProminent
          ? 'flex flex-col justify-end min-h-[62vh] sm:min-h-[56vh] lg:min-h-[64vh] pt-28 sm:pt-32 pb-8 sm:pb-10 lg:pb-12'
          : 'pt-32 pb-12 sm:pt-36 sm:pb-16'
      }`}
      style={{ backgroundColor: '#0C1C8C' }}
    >
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroProminent ? heroAlt ?? '' : ''}
            className={`h-full w-full object-cover ${heroProminent ? '' : 'opacity-30'}`}
            style={heroPosition ? { objectPosition: heroPosition } : undefined}
            loading="eager"
          />
          <div
            className={`absolute inset-0 ${
              heroProminent
                ? 'bg-gradient-to-t from-[#0C1C8C]/85 via-[#0C1C8C]/30 via-35% to-transparent to-60% sm:bg-gradient-to-tr sm:from-[#0C1C8C]/80 sm:via-[#0C1C8C]/25 sm:via-30% sm:to-transparent sm:to-55%'
                : 'bg-gradient-to-r from-[#0C1C8C]/90 to-[#0C1C8C]/60'
            }`}
          />
        </div>
      )}
      <div className="relative container-px mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-white/70">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-white tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-white/90 max-w-2xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
