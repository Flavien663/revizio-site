import { site } from "@/lib/site";

type Props = {
  size?: "md" | "lg";
  layout?: "row" | "stack";
};

export function StoreButtons({ size = "md", layout = "row" }: Props) {
  const isLg = size === "lg";
  const base =
    "inline-flex items-center gap-3 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const dimensions = isLg ? "px-5 py-3.5 min-w-[200px]" : "px-4 py-3 min-w-[180px]";

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        layout === "stack" ? "flex-col sm:flex-row" : "flex-row"
      }`}
    >
      <a
        href={site.appStoreUrl}
        aria-label="Télécharger Revizio sur l’App Store"
        className={`${base} ${dimensions} border-transparent bg-white text-black hover:bg-neutral-200`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.43 2.23-1.2 3.03-.83.86-2.2 1.52-3.3 1.43-.13-1.12.42-2.29 1.18-3.06.84-.87 2.27-1.52 3.32-1.4ZM20.5 17.27c-.5 1.16-.74 1.68-1.4 2.7-.92 1.42-2.22 3.19-3.84 3.2-1.44.02-1.81-.94-3.77-.93-1.96.01-2.36.95-3.8.93-1.62-.02-2.85-1.62-3.77-3.04C1.3 16.2.44 11 2.32 7.48c1.34-2.49 3.45-4.07 5.43-4.07 1.77 0 2.88 1 4.34 1 1.42 0 2.29-.99 4.33-.99 1.54 0 3.18.84 4.34 2.29-3.82 2.09-3.2 7.55.14 8.56-.35.98-.74 1.93-1.4 3.0Z"/>
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">Télécharger sur l’</span>
          <span className={`${isLg ? "text-lg" : "text-base"} font-semibold`}>App Store</span>
        </span>
      </a>

      <a
        href={site.playStoreUrl}
        aria-label="Télécharger Revizio sur Google Play"
        className={`${base} ${dimensions} border-border bg-surface text-text-primary hover:border-text-secondary`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
          <path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3Z" fill="#34A853"/>
          <path d="m17.2 12.9 2.9-1.7c.9-.5.9-1.4 0-1.9l-2.9-1.7-3.2 3.4 3.2 3.3Z" fill="#FBBC04"/>
          <path d="M12.7 12 3.6 21.7c.4.4 1 .4 1.7 0l11-6.4-3.6-3.3Z" fill="#EA4335"/>
          <path d="M12.7 12 16.3 8.7l-11-6.4c-.7-.4-1.3-.4-1.7 0L12.7 12Z" fill="#4285F4"/>
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider text-text-secondary">Télécharger sur</span>
          <span className={`${isLg ? "text-lg" : "text-base"} font-semibold`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
