type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group p-6 open:bg-surface-soft">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink list-none">
            {item.q}
            <span
              aria-hidden
              className="text-text-muted transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-text-body leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
