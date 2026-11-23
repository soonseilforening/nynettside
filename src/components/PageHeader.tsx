type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header
      className="pt-32 pb-12 sm:pt-36 sm:pb-16"
      style={{ backgroundColor: '#0C1C8C' }}
    >
      <div className="container-px mx-auto max-w-7xl">
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
