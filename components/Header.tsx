import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang: Lang };

export function Header({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href={prefix || "/"}
          className="text-base font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — ${t.footer.home}`}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link
            href={`${prefix}/#games`}
            className="text-text-muted hover:text-ink"
          >
            {t.nav.games}
          </Link>
          <Link
            href={`${prefix}/#adventure`}
            className="text-text-muted hover:text-ink"
          >
            {t.nav.adventure}
          </Link>
          <Link
            href={`${prefix}/#plans`}
            className="text-text-muted hover:text-ink"
          >
            {t.nav.plans}
          </Link>
          <Link
            href={`${prefix}/support`}
            className="text-text-muted hover:text-ink"
          >
            {t.footer.support}
          </Link>
        </nav>
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-4 !py-2"
        >
          {t.nav.download}
        </a>
      </div>
    </header>
  );
}
