import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/outils", label: "Outils" },
  { href: "/subscriptions", label: "Offres" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — Accueil`}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            className="btn-primary !px-4 !py-2"
            aria-label="Télécharger l’application Revizio"
          >
            Télécharger
          </Link>
        </div>
      </div>
    </header>
  );
}
