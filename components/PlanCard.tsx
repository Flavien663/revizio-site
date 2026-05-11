type Props = {
  name: string;
  price: string;
  cadence: string;
  priceYear?: string;
  cadenceYear?: string;
  promise: string;
  features: string[];
  tag?: string | null;
  highlight?: boolean;
};

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
      <svg
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 10l4 4 8-8" />
      </svg>
    </span>
  );
}

export function PlanCard({
  name,
  price,
  cadence,
  priceYear,
  cadenceYear,
  promise,
  features,
  tag,
  highlight,
}: Props) {
  const containerClass = highlight
    ? "border-accent/40 bg-gradient-to-br from-white via-white to-accent-soft/40 ring-2 ring-accent/15"
    : "border-line bg-white";

  return (
    <article
      className={`flex flex-col rounded-3xl border p-8 shadow-card ${containerClass}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-ink">{name}</h3>
        {tag && <span className="pill-accent">{tag}</span>}
      </div>
      <p className="mt-2 text-sm text-text-muted">{promise}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-ink">
          {price}
        </span>
        <span className="text-sm text-text-muted">{cadence}</span>
      </div>
      {priceYear && (
        <p className="mt-1 text-xs text-text-muted">
          ou {priceYear} {cadenceYear}
        </p>
      )}
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-text-body">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
