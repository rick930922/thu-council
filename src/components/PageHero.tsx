export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border-soft bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-xs text-wine mb-3">{eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            {description}
          </p>
        )}
        <div className="rule mt-8 w-24" />
      </div>
    </div>
  );
}
