import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "@/public/images/logo.webp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-surface-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={logo}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-contain"
              />
              <span className="text-lg text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-muted">
              Un sujet, une fiche, un quiz ou un examen — en quelques secondes. Le compagnon d’apprentissage premium pour tous ceux qui veulent vraiment retenir.
            </p>
            <p className="mt-4 text-xs text-text-muted">
              Disponible sur iOS et Android.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Produit
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href="/outils">
                  Les 8 outils
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href="/subscriptions">
                  Offres et packs
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href="/faq">
                  Questions fréquentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Aide
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href="/support">
                  Support
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href="/delete-account">
                  Supprimer mon compte
                </Link>
              </li>
              <li>
                <a
                  className="text-text-muted hover:text-ink"
                  href={`mailto:${site.supportEmail}`}
                >
                  Écrire au support
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Légal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href="/privacy">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href="/terms">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalEntity} — Tous droits réservés.
          </p>
          <p>
            Support :{" "}
            <a
              className="text-ink hover:text-accent-deep"
              href={`mailto:${site.supportEmail}`}
            >
              {site.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
