import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

type Props = {
  size?: "md" | "lg";
  layout?: "row" | "stack";
  variant?: "dark" | "light";
  lang?: Lang;
};

const labels = {
  fr: {
    downloadOn: "Télécharger sur",
    appStore: "App Store",
    androidSoon: "Android — bientôt",
    soonBadge: "Bientôt",
    playStore: "Google Play",
  },
  en: {
    downloadOn: "Download on",
    appStore: "App Store",
    androidSoon: "Android — soon",
    soonBadge: "Soon",
    playStore: "Google Play",
  },
};

export function StoreButtons({
  size = "md",
  layout = "row",
  variant = "dark",
  lang = "fr",
}: Props) {
  const isLg = size === "lg";
  const dimensions = isLg ? "px-6 py-3.5" : "px-5 py-3";
  const base =
    "inline-flex items-center gap-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const primary =
    variant === "dark"
      ? "bg-ink text-white hover:bg-[#1a1d24]"
      : "bg-white text-ink border border-line hover:border-accent";

  const playSoonBase =
    variant === "dark"
      ? "bg-white/70 text-ink/70 border border-line"
      : "bg-ink/5 text-ink/70 border border-line";

  const L = labels[lang];

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        layout === "stack" ? "flex-col sm:flex-row" : "flex-row"
      }`}
    >
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${L.downloadOn} ${L.appStore}`}
        className={`${base} ${dimensions} ${primary}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0"
          aria-hidden
          fill="currentColor"
        >
          <path d="M16.365 1.43c0 1.14-.43 2.23-1.2 3.03-.83.86-2.2 1.52-3.3 1.43-.13-1.12.42-2.29 1.18-3.06.84-.87 2.27-1.52 3.32-1.4ZM20.5 17.27c-.5 1.16-.74 1.68-1.4 2.7-.92 1.42-2.22 3.19-3.84 3.2-1.44.02-1.81-.94-3.77-.93-1.96.01-2.36.95-3.8.93-1.62-.02-2.85-1.62-3.77-3.04C1.3 16.2.44 11 2.32 7.48c1.34-2.49 3.45-4.07 5.43-4.07 1.77 0 2.88 1 4.34 1 1.42 0 2.29-.99 4.33-.99 1.54 0 3.18.84 4.34 2.29-3.82 2.09-3.2 7.55.14 8.56-.35.98-.74 1.93-1.4 3.0Z" />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-70">
            {L.downloadOn}
          </span>
          <span className={`${isLg ? "text-base" : "text-sm"} font-semibold`}>
            {L.appStore}
          </span>
        </span>
      </a>

      <div
        role="note"
        aria-label={L.androidSoon}
        className={`${base} ${dimensions} ${playSoonBase} relative cursor-default select-none`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 opacity-60" aria-hidden>
          <path
            d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3Z"
            fill="#34A853"
          />
          <path
            d="m17.2 12.9 2.9-1.7c.9-.5.9-1.4 0-1.9l-2.9-1.7-3.2 3.4 3.2 3.3Z"
            fill="#FBBC04"
          />
          <path
            d="M12.7 12 3.6 21.7c.4.4 1 .4 1.7 0l11-6.4-3.6-3.3Z"
            fill="#EA4335"
          />
          <path
            d="M12.7 12 16.3 8.7l-11-6.4c-.7-.4-1.3-.4-1.7 0L12.7 12Z"
            fill="#4285F4"
          />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-70">
            {L.androidSoon}
          </span>
          <span className={`${isLg ? "text-base" : "text-sm"} font-semibold`}>
            {L.playStore}
          </span>
        </span>
        <span className="ml-1 inline-flex items-center rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-deep">
          {L.soonBadge}
        </span>
      </div>
    </div>
  );
}
