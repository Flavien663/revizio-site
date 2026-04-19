import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supprimer mon compte",
  description:
    "Procédure officielle pour supprimer son compte Revizio : étape par étape depuis l’application, contact support en cas de blocage, conséquences sur les données et l’abonnement.",
  alternates: { canonical: "/delete-account" },
  robots: { index: true, follow: true },
};

export default function DeleteAccountPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-10 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Compte</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Supprimer mon compte Revizio
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-text-body">
              Tu peux initier la suppression de ton compte directement depuis l’application. Cette page t’explique comment et ce qui se passe ensuite.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-3">
            {/* Procédure */}
            <div className="lg:col-span-2 rounded-3xl border border-line bg-white p-8 shadow-card">
              <h2 className="text-xl font-semibold text-ink">Procédure (in-app)</h2>
              <ol className="mt-5 space-y-4">
                {[
                  "Ouvre l’application Revizio sur ton téléphone.",
                  "Va dans Réglages (onglet en bas à droite).",
                  "Ouvre la section Compte.",
                  "Sélectionne « Supprimer mon compte ».",
                  "Suis les étapes de confirmation. La suppression est définitive après validation.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                      {i + 1}
                    </span>
                    <span className="text-text-body">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Alternative */}
            <div className="rounded-3xl border border-line bg-surface-soft p-8">
              <h2 className="text-base font-semibold text-ink">
                Tu n’as plus l’app ?
              </h2>
              <p className="mt-3 text-sm text-text-body">
                Écris à{" "}
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="text-accent-deep underline-offset-2 hover:underline"
                >
                  {site.supportEmail}
                </a>{" "}
                depuis l’adresse email associée à ton compte. Indique ton pseudo si tu le connais. Nous traitons la demande {site.supportDelay}.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-base font-semibold text-ink">Ce qui est supprimé</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-body">
                <li>Ton profil (pseudo, objectif, niveau, préférences).</li>
                <li>Tes sujets, chapitres, sessions et planning.</li>
                <li>Tes contenus générés par l’IA (fiches, quiz, examens, grilles, rappels).</li>
                <li>Ton historique de cerveaux et de transactions.</li>
                <li>Tes photos de cours et tes notes écrites.</li>
                <li>Tes préférences de notifications et tokens push.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-base font-semibold text-ink">
                Ce qui peut subsister temporairement
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-body">
                <li>
                  Des données minimales conservées pour obligations légales ou comptables, pendant la durée imposée par la loi.
                </li>
                <li>Des entrées dans des sauvegardes techniques, pour une durée limitée.</li>
                <li>Des logs de sécurité anonymisés.</li>
                <li>
                  Les notes vocales que tu avais enregistrées : elles restent sur ton appareil.
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-warning/30 bg-warning-soft p-6">
            <h2 className="text-base font-semibold text-ink">
              Important : ton abonnement n’est pas annulé automatiquement
            </h2>
            <p className="mt-2 text-sm text-text-body">
              Si tu as un abonnement Premium ou Max actif, il continue de se renouveler tant que tu ne le résilies pas dans les réglages de ton compte Apple ou Google. Pense à le faire <strong>avant ou après</strong> la suppression de ton compte Revizio.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Tu bloques à une étape ?
            </h2>
            <p className="mt-3 text-text-body">
              On peut t’aider à débloquer la situation rapidement.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.supportEmail}`} className="btn-primary">
                Écrire à {site.supportEmail}
              </a>
              <Link href="/faq" className="btn-ghost">
                Voir la FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
