import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Aide, FAQ et contact du support Revizio : abonnements, restauration d’achats, authentification, suppression de compte.",
};

const faqs = [
  {
    q: "Comment restaurer mes achats ?",
    a: "Depuis l’app, ouvre l’écran d’abonnement et utilise « Restaurer les achats ». Si le problème persiste, contacte-nous par email.",
  },
  {
    q: "J’ai un problème avec mon abonnement",
    a: "Vérifie d’abord l’état de l’abonnement dans les réglages Apple ou Google. Si l’achat n’est pas reconnu dans l’app, essaie « Restaurer les achats » puis contacte le support si nécessaire.",
  },
  {
    q: "Je n’arrive pas à me connecter avec Apple / Google",
    a: "Assure-toi d’utiliser le même compte qu’à l’inscription. Un redémarrage de l’app peut aider. Si le problème continue, contacte-nous.",
  },
  {
    q: "Comment supprimer mon compte ?",
    a: "La suppression peut être initiée depuis l’app. Voir la page Suppression de compte pour les détails.",
  },
  {
    q: "Une génération IA est très longue, que faire ?",
    a: "Tu peux quitter l’écran pendant la génération. Une notification intra-app t’informe à la fin du traitement.",
  },
];

export default function SupportPage() {
  return (
    <div className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Support</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Besoin d’aide ?
        </h1>
        <p className="mt-4 text-text-secondary">
          L’équipe support répond aux demandes par email. Réponse sous quelques jours ouvrés.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-text-secondary">
              Contact
            </span>
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-lg font-semibold text-primary hover:text-primary-dark"
            >
              {site.supportEmail}
            </a>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-semibold">FAQ</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="text-text-secondary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-text-secondary">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link href="/delete-account" className="card hover:border-text-secondary transition-colors">
            <h3 className="text-base font-semibold">Suppression de compte</h3>
            <p className="mt-2 text-sm text-text-secondary">Procédure et informations utiles.</p>
          </Link>
          <Link href="/privacy" className="card hover:border-text-secondary transition-colors">
            <h3 className="text-base font-semibold">Confidentialité</h3>
            <p className="mt-2 text-sm text-text-secondary">Comment les données sont traitées.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
