"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { altLangHref } from "@/lib/i18n";

export function LanguageSwitch({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname() || "/";
  const { lang, href } = altLangHref(pathname, currentLang);
  const labels = { fr: "Français", en: "English" } as const;
  const langLabel = currentLang === "fr" ? "Langue" : "Language";

  return (
    <div className="inline-flex items-center gap-2 text-xs text-text-muted">
      <span className="uppercase tracking-wider">{langLabel}</span>
      <span className="text-ink">{labels[currentLang]}</span>
      <span aria-hidden>/</span>
      <Link
        href={href}
        className="text-text-muted underline-offset-2 hover:text-ink hover:underline"
      >
        {labels[lang]}
      </Link>
    </div>
  );
}
