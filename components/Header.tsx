import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "@/public/images/logo.webp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label={`${site.name} — Accueil`}>
          <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md object-contain"
          />
          <span className="text-text-primary">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="hidden sm:inline text-text-secondary hover:text-text-primary"
          >
            Accueil
          </Link>
          <Link
            href="/support"
            className="text-text-secondary hover:text-text-primary"
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
