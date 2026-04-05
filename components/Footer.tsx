import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "@/public/images/logo.webp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-semibold">
              <Image
                src={logo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-md object-contain"
              />
              <span>{site.name}</span>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Application mobile de révision. Structurer ses cours, planifier son travail, avancer sérieusement.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            <Link className="text-text-secondary hover:text-text-primary" href="/">Accueil</Link>
            <Link className="text-text-secondary hover:text-text-primary" href="/support">Support</Link>
            <Link className="text-text-secondary hover:text-text-primary" href="/privacy">Confidentialité</Link>
            <Link className="text-text-secondary hover:text-text-primary" href="/terms">Conditions</Link>
            <Link className="text-text-secondary hover:text-text-primary" href="/delete-account">Suppression de compte</Link>
            <Link className="text-text-secondary hover:text-text-primary" href="/subscriptions">Abonnements</Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalEntity} — Tous droits réservés.
          </p>
          <p>
            Support : <a className="hover:text-text-primary" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
