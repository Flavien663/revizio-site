import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "@/public/images/logo.webp";

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
          className="flex items-center gap-2 font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — Accueil`}
        >
          <Image
            src={logo}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-xl object-contain"
            priority
          />
          <span className="text-lg">{site.name}</span>
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
