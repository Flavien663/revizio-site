import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Besoin d’aide avec Revizio ? Contacte-nous, consulte la FAQ, ou règle rapidement un problème d’abonnement, de connexion ou de suppression de compte.",
  alternates: { canonical: "/support" },
  robots: { index: true, follow: true },
};

const quickActions = [
  {
    title: "Restaurer un achat",
    body: "Ouvre Revizio > Réglages > Aide > « Restaurer mes achats ». Utile si tu changes de téléphone ou si un abonnement n’apparaît pas.",
  },
  {
    title: "Gérer ou résilier un abonnement",
    body: "Les abonnements se gèrent dans les réglages de ton compte Apple ou Google, pas dans l’app. Tu peux résilier à tout moment.",
  },
  {
    title: "Supprimer mon compte",
    body: "Ouvre Revizio > Réglages > Compte > « Supprimer mon compte ». La procédure est détaillée sur la page dédiée.",
    link: { href: "/delete-account", label: "Voir la procédure" },
  },
  {
    title: "Me connecter à nouveau",
    body: "Reconnecte-toi avec la même méthode (Apple, Google, Email) pour retrouver ton historique, tes cerveaux et tes sujets.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-10 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Support</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Besoin d’un coup de main ?
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-text-body">
              Écris-nous, consulte la FAQ, ou règle toi-même les cas les plus courants. On répond généralement {site.supportDelay}.
            </p>
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="pb-10">
        <div className="container-x">
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
            <a
              href={`mailto:${site.supportEmail}`}
              className="group flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Écrire au support
              </p>
              <p className="mt-2 text-xl font-semibold text-ink group-hover:text-accent-deep">
                {site.supportEmail}
              </p>
              <p className="mt-3 text-sm text-text-muted">
                Délai indicatif : {site.supportDelay}.
              </p>
            </a>
            <Link
              href="/faq"
              className="group flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Foire aux questions
              </p>
              <p className="mt-2 text-xl font-semibold text-ink group-hover:text-accent-deep">
                Consulter la FAQ
              </p>
              <p className="mt-3 text-sm text-text-muted">
                Plus de 25 réponses classées par catégorie.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Règle ça en deux minutes
            </h2>
            <p className="mt-3 text-text-body">
              Quatre cas fréquents et leurs solutions directes.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickActions.map((a) => (
                <div key={a.title} className="card">
                  <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm text-text-body">{a.body}</p>
                  {a.link && (
                    <Link
                      href={a.link.href}
                      className="mt-3 inline-block text-sm font-semibold text-accent-deep hover:underline"
                    >
                      {a.link.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="border-t border-line bg-surface-soft py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-base font-semibold text-ink">Liens utiles</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/privacy"
                className="rounded-2xl border border-line bg-white px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Confidentialité
              </Link>
              <Link
                href="/terms"
                className="rounded-2xl border border-line bg-white px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Conditions d’utilisation
              </Link>
              <Link
                href="/delete-account"
                className="rounded-2xl border border-line bg-white px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Supprimer mon compte
              </Link>
              <Link
                href="/subscriptions"
                className="rounded-2xl border border-line bg-white px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Offres et packs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
