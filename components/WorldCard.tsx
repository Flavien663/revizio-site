type WorldColor = "culture" | "words" | "logic";

type Props = {
  color: WorldColor;
  name: string;
  tagline: string;
  levelsLabel: string;
};

const colorClasses: Record<
  WorldColor,
  { bg: string; ink: string; border: string }
> = {
  culture: {
    bg: "bg-culture-tint",
    ink: "text-culture-deep",
    border: "border-culture/30",
  },
  words: {
    bg: "bg-words-tint",
    ink: "text-words-deep",
    border: "border-words/30",
  },
  logic: {
    bg: "bg-logic-tint",
    ink: "text-logic-deep",
    border: "border-logic/30",
  },
};

export function WorldCard({ color, name, tagline, levelsLabel }: Props) {
  const c = colorClasses[color];
  return (
    <article
      className={`flex flex-col gap-3 rounded-3xl border ${c.border} ${c.bg} p-7 transition-all hover:-translate-y-1`}
    >
      <span
        className={`inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${c.ink}`}
      >
        {levelsLabel}
      </span>
      <h3 className={`text-xl font-semibold ${c.ink}`}>{name}</h3>
      <p className="text-sm text-ink/80">{tagline}</p>
    </article>
  );
}
