import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "@/public/images/logo.webp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
          aria-label={`${site.name} — Accueil`}
        >
          <Image
            src={logo}
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12"
          />
          <span className="text-lg text-text-primary sm:text-xl">{site.name}</span>
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
