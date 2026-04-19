import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";
import mascotMax from "@/public/images/mascot-max.webp";

export const metadata: Metadata = {
  title: "Offres et packs",
  description:
    "Free, Premium (3,99 €/mois), Max (7,99 €/mois). Comprends le rôle de l’abonnement, des cerveaux et des packs. Achat via App Store ou Google Play, résiliable à tout moment.",
  alternates: { canonical: "/subscriptions" },
  openGraph: {
    title: `Offres et packs · ${site.name}`,
    description:
      "Abonnement = accès. Cerveaux = énergie. Packs = recharge. Trois choses claires, sans piège.",
    url: `${site.url}/subscriptions`,
  },
};

const plans = [
  {
    name: "Free",
    price: "0 €",
    cadence: "pour toujours",
    tag: null as string | null,
    tone: "neutral" as const,
    promise: "Une base solide, pas une démo.",
    features: [
      "2 sujets, 5 chapitres par sujet",
      "Pendu, Bingo, Mots croisés",
      "Planning, niveaux, séries",
      "Toutes les récompenses gratuites",
    ],
    not: ["Mémo visuel, Quiz, Mémo structuré, Examen blanc, Rappels intelligents"],
  },
  {
    name: "Premium",
    price: "3,99 €",
    cadence: "/mois",
    yearly: "29,99 €/an",
    tag: "Le plus populaire",
    tone: "accent" as const,
    promise: "Les outils intelligents pour réviser sérieusement.",
    features: [
      "Sujets et chapitres illimités",
      "50 cerveaux chaque mois",
      "Mémo visuel et Quiz",
      "Tarifs dégressifs sur les jeux",
      "Banques de 30 questions",
    ],
    not: ["Mémo structuré, Examen blanc, Rappels intelligents (réservés à Max)"],
  },
  {
    name: "Max",
    price: "7,99 €",
    cadence: "/mois",
    yearly: "59,99 €/an",
    tag: "Le plus complet",
    tone: "gold" as const,
    promise: "La meilleure expérience qu’on puisse t’offrir.",
    features: [
      "Tout Premium",
      "150 cerveaux chaque mois",
      "Mémo structuré",
      "Examen blanc noté sur 20",
      "Rappels intelligents",
      "Mots croisés à tarif réduit",
      "Planning calé sur ton échéance",
    ],
    not: [],
  },
];

const costs = [
  { tool: "Pendu", free: "5", premium: "4", max: "3" },
  { tool: "Bingo", free: "5", premium: "4", max: "3" },
  { tool: "Mots croisés", free: "5", premium: "4", max: "3" },
  { tool: "Mémo visuel", free: "—", premium: "7", max: "7" },
  { tool: "Quiz", free: "—", premium: "7", max: "7" },
  { tool: "Mémo structuré", free: "—", premium: "—", max: "9" },
  { tool: "Examen blanc", free: "—", premium: "—", max: "9" },
  { tool: "Rappels intelligents", free: "—", premium: "—", max: "7" },
];

const packs = [
  { name: "Starter", brains: "50", note: "De quoi tenir ta semaine." },
  { name: "Boost", brains: "125", note: "Le choix des habitués." },
  { name: "Pro", brains: "335", note: "De la marge pour des mois entiers." },
  { name: "Ultime", brains: "670", note: "Le meilleur prix au cerveau." },
];

export default function SubscriptionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-12 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Les offres</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
              Clair. Sans piège. Sans expiration cachée.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-body">
              Un Free permanent pour commencer. Deux abonnements pour débloquer les outils intelligents. Des packs pour recharger ton énergie — sans jamais remplacer un accès.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-10 sm:py-14">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => {
              const ring =
                p.tone === "accent"
                  ? "ring-2 ring-accent-deep/30 border-accent-deep/40"
                  : p.tone === "gold"
                  ? "ring-2 ring-gold/30 border-gold/40"
                  : "border-line";
              return (
                <article
                  key={p.name}
                  className={`flex flex-col rounded-3xl border bg-white p-8 shadow-card ${ring}`}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-ink">{p.name}</h2>
                    {p.tag && (
                      <span className={p.tone === "gold" ? "pill-gold" : "pill-accent"}>
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-text-muted">{p.promise}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-ink">
                      {p.price}
                    </span>
                    <span className="text-sm text-text-muted">{p.cadence}</span>
                  </div>
                  {p.yearly && (
                    <p className="mt-1 text-xs text-text-muted">ou {p.yearly}</p>
                  )}

                  <ul className="mt-7 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-text-body">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {p.not.length > 0 && (
                    <ul className="mt-5 space-y-2 text-sm text-text-muted">
                      {p.not.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
                          <span>Non inclus : {f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8">
                    <StoreButtons size="md" variant={p.tone === "accent" ? "dark" : "light"} />
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-text-muted">
            Les abonnements sont souscrits via l’App Store ou Google Play. Renouvellement automatique. Résiliable à tout moment depuis les réglages de ton compte Apple ou Google.
          </p>
        </div>
      </section>

      {/* Schéma business */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Comment ça marche</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Trois mots à ne pas confondre.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ConceptCard
              index="1"
              title="Abonnement = accès"
              body="Ton plan (Free, Premium, Max) détermine les outils que tu peux lancer. Free = jeux + 2 sujets. Premium ajoute Mémo visuel et Quiz. Max ajoute Mémo structuré, Examen blanc et Rappels intelligents."
            />
            <ConceptCard
              index="2"
              title="Cerveaux = énergie"
              body="Chaque outil IA consomme quelques cerveaux. Ton plan en recharge tous les mois (50 en Premium, 150 en Max). Les cerveaux mensuels s’accumulent si tu ne les utilises pas."
            />
            <ConceptCard
              index="3"
              title="Packs = recharge"
              body="Les packs ajoutent des cerveaux à ton compteur, ponctuellement. Ils ne changent jamais ton plan et ne débloquent jamais un outil. Acheter un pack en Free reste Free."
            />
          </div>
        </div>
      </section>

      {/* Coûts outils détail */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Pour les curieux</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Coût en cerveaux par outil.
            </h2>
            <p className="mt-4 text-text-body">
              Les jeux ont un tarif dégressif selon ton plan. Les outils Premium et Max ont un coût fixe.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-soft text-xs uppercase tracking-wider text-text-muted">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Outil</th>
                    <th className="px-5 py-3 font-semibold">Free</th>
                    <th className="px-5 py-3 font-semibold">Premium</th>
                    <th className="px-5 py-3 font-semibold">Max</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {costs.map((c) => (
                    <tr key={c.tool}>
                      <td className="px-5 py-3 font-medium text-ink">{c.tool}</td>
                      <td className="px-5 py-3 text-text-body">{c.free}</td>
                      <td className="px-5 py-3 text-text-body">{c.premium}</td>
                      <td className="px-5 py-3 text-text-body">{c.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              Valeurs en cerveaux consommés par utilisation. « — » indique un outil non inclus dans ce plan.
            </p>
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="border-y border-line bg-ink py-20 text-white sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Packs de cerveaux
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Recharge ton énergie, sans engagement.
              </h2>
              <p className="mt-5 max-w-2xl text-white/70">
                Les packs sont des achats ponctuels disponibles dans l’app. Ils ajoutent des cerveaux à ton compteur. Ils ne remplacent pas un abonnement et ne débloquent aucun outil par eux-mêmes.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {packs.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white">
                        {p.name}
                      </h3>
                      <span className="text-sm font-semibold text-accent">
                        +{p.brains} cerveaux
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/70">{p.note}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-white/50">
                Les prix exacts des packs sont affichés dans l’App Store et sur Google Play. Ils peuvent varier selon la région.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <Image
                  src={mascotMax}
                  alt="Mascotte Revizio"
                  width={320}
                  height={320}
                  className="mx-auto h-auto w-full max-w-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentions */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface-soft p-6 text-sm text-text-body">
            <h2 className="text-base font-semibold text-ink">Bon à savoir</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>
                Les abonnements sont prélevés par l’App Store ou Google Play. Le renouvellement est automatique tant que tu ne résilies pas dans les réglages de ton compte Apple ou Google.
              </li>
              <li>
                Les cerveaux n’ont aucune valeur monétaire, ne sont pas transférables et ne peuvent pas être remboursés en euros.
              </li>
              <li>
                Tu peux restaurer tes achats à tout moment depuis les réglages de l’app (section Aide).
              </li>
              <li>
                Supprimer ton compte n’annule pas un abonnement actif — pense à le résilier séparément.
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <Link href="/terms" className="text-accent-deep hover:underline">
                Conditions d’utilisation
              </Link>
              <Link href="/privacy" className="text-accent-deep hover:underline">
                Politique de confidentialité
              </Link>
              <Link href="/support" className="text-accent-deep hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ConceptCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <article className="relative rounded-3xl border border-line bg-white p-8 shadow-card">
      <span className="pill-accent">{index}</span>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-text-body">{body}</p>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 10l4 4 8-8" />
    </svg>
  );
}
