import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support Revizio : contact, FAQ et liens utiles pour abonnements, restauration d’achats, authentification et suppression de compte.",
};

const faqs = [
  {
    q: "Comment restaurer mes achats ?",
    a: "Ouvrez l’application, accédez aux paramètres ou au paywall, puis utilisez l’option « Restaurer les achats ». Si le problème persiste, contactez le support avec l’adresse Apple utilisée pour l’achat.",
  },
  {
    q: "Comment gérer ou résilier mon abonnement ?",
    a: "Les abonnements souscrits via Apple se gèrent depuis les réglages du compte Apple de l’utilisateur.",
  },
  {
    q: "Un pack de cerveaux donne-t-il accès à Premium ou Max ?",
    a: "Non. Les packs de cerveaux sont des recharges de consommation uniquement.",
  },
  {
    q: "Comment supprimer mon compte ?",
    a: "La suppression doit être initiée depuis l’application, dans les paramètres du compte. La page /delete-account explique le fonctionnement général.",
  },
  {
    q: "Je n’arrive pas à me connecter avec Apple ou Google.",
    a: "Vérifiez le compte utilisé, relancez l’application, puis contactez le support si nécessaire.",
  },
  {
    q: "Les contenus générés par IA sont-ils toujours exacts ?",
    a: "Non. Ils doivent être relus et vérifiés.",
  },
];

export default function SupportPage() {
  return (
    <div className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-prose">
        <p className="eyebrow mb-3">Support</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Support Revizio
        </h1>
        <p className="mt-4 text-text-secondary">
          Nous faisons le nécessaire pour vous aider rapidement sur les sujets liés au compte,
          aux abonnements, à l’utilisation de l’app et à la suppression de compte.
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
            <p className="mt-2 text-xs text-text-secondary">
              Délai indicatif de réponse : sous [X] jours ouvrés.
            </p>
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

        <h2 className="mt-12 text-xl font-semibold">Liens utiles</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href="/privacy" className="card hover:border-text-secondary transition-colors">
            <h3 className="text-sm font-semibold">Politique de confidentialité</h3>
          </Link>
          <Link href="/terms" className="card hover:border-text-secondary transition-colors">
            <h3 className="text-sm font-semibold">Conditions d’utilisation</h3>
          </Link>
          <Link href="/delete-account" className="card hover:border-text-secondary transition-colors">
            <h3 className="text-sm font-semibold">Suppression de compte</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
