import Image from "next/image";

type GameColor =
  | "quiz"
  | "hangman"
  | "bingo"
  | "crossword"
  | "true-false"
  | "tri"
  | "chrono"
  | "memo";

type Props = {
  color: GameColor;
  name: string;
  tagline: string;
  cost: string;
  mascotSrc: string;
  alt: string;
};

const colorClasses: Record<
  GameColor,
  { bg: string; pill: string; ring: string }
> = {
  quiz: {
    bg: "bg-quiz-tint",
    pill: "bg-quiz-tintStrong text-quiz-deep",
    ring: "hover:ring-quiz/40",
  },
  hangman: {
    bg: "bg-hangman-tint",
    pill: "bg-hangman-tintStrong text-hangman-deep",
    ring: "hover:ring-hangman/40",
  },
  bingo: {
    bg: "bg-bingo-tint",
    pill: "bg-bingo-tintStrong text-bingo-deep",
    ring: "hover:ring-bingo/40",
  },
  crossword: {
    bg: "bg-crossword-tint",
    pill: "bg-crossword-tintStrong text-crossword-deep",
    ring: "hover:ring-crossword/40",
  },
  "true-false": {
    bg: "bg-true-false-tint",
    pill: "bg-true-false-tintStrong text-true-false-deep",
    ring: "hover:ring-true-false/40",
  },
  tri: {
    bg: "bg-tri-tint",
    pill: "bg-tri-tintStrong text-tri-deep",
    ring: "hover:ring-tri/40",
  },
  chrono: {
    bg: "bg-chrono-tint",
    pill: "bg-chrono-tintStrong text-chrono-deep",
    ring: "hover:ring-chrono/40",
  },
  memo: {
    bg: "bg-memo-tint",
    pill: "bg-memo-tintStrong text-memo-deep",
    ring: "hover:ring-memo/40",
  },
};

export function GameCard({ color, name, tagline, cost, mascotSrc, alt }: Props) {
  const c = colorClasses[color];
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all hover:-translate-y-1 hover:ring-2 ${c.ring}`}
    >
      <div
        className={`flex aspect-square items-center justify-center overflow-hidden ${c.bg}`}
      >
        <Image
          src={mascotSrc}
          alt={alt}
          width={420}
          height={420}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
          className="h-3/4 w-3/4 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{name}</h3>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.pill}`}
          >
            {cost}
          </span>
        </div>
        <p className="text-sm text-text-muted">{tagline}</p>
      </div>
    </article>
  );
}
