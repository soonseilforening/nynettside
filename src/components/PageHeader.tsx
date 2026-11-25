type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  heroImage?: string;
  /** Vis bildet tydelig (bærende bilde), ikke bare som svak bakgrunn */
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
          ? 'flex flex-col justify-end min-h-[70vh] sm:min-h-[65vh] lg:min-h-[72vh] pt-32 pb-12 sm:pb-16'
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
                ? 'bg-gradient-to-t from-[#0C1C8C]/90 via-[#0C1C8C]/25 to-transparent sm:bg-gradient-to-tr sm:from-[#0C1C8C]/85 sm:via-[#0C1C8C]/20 sm:to-transparent'
                : 'bg-gradient-to-r from-[#0C1C8C]/90 to-[#0C1C8C]/60'
            }`}
          />
        </div>
      )}
      <div className="relative container-px mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.16em] text-white/70">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-white tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
