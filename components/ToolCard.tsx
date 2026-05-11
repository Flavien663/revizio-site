type Props = {
  name: string;
  tagline: string;
  cost: string;
  isIncluded?: boolean;
  includedLabel: string;
  brainsLabel: (n: number) => string;
};

export function ToolCard({
  name,
  tagline,
  cost,
  isIncluded,
  includedLabel,
  brainsLabel,
}: Props) {
  const pill = isIncluded
    ? "bg-success-soft text-success"
    : "bg-accent-soft text-accent-deep";
  const pillLabel = isIncluded ? includedLabel : brainsLabel(parseInt(cost, 10));

  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/30">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{name}</h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${pill}`}
        >
          {pillLabel}
        </span>
      </div>
      <p className="text-sm text-text-muted">{tagline}</p>
    </article>
  );
}
