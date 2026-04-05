import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-text-primary"
          aria-label={`${site.name} — Accueil`}
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/support"
            className="hidden text-text-secondary hover:text-text-primary sm:inline"
          >
            Support
          </Link>
          <Link
            href="/#download"
            className="btn-primary !px-4 !py-2"
            aria-label="Télécharger l’application Revizio"
          >
            Télécharger
          </Link>
        </nav>
      </div>
    </header>
  );
}
