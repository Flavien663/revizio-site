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

type Plan = {
  name: string;
  price: string;
  cadence: string;
  yearly?: string;
  tag: string | null;
  tone: "neutral" | "accent" | "gold";
  promise: string;
  included: string[];
  excluded: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "0 €",
    cadence: "pour toujours",
    tag: null,
    tone: "neutral",
    promise: "Une base solide, pas une démo.",
    included: [
      "2 sujets, 5 chapitres par sujet",
      "Pendu, Bingo, Mots croisés",
      "Planning, niveaux, séries",
      "Toutes les récompenses gratuites",
    ],
    excluded: [
      "Mémo visuel",
      "Quiz",
      "Mémo structuré",
      "Examen blanc",
      "Rappels intelligents",
    ],
  },
  {
    name: "Premium",
    price: "3,99 €",
    cadence: "/mois",
    yearly: "29,99 €/an",
    tag: "Le plus populaire",
    tone: "accent",
    promise: "Les outils intelligents pour réviser sérieusement.",
    included: [
      "Sujets et chapitres illimités",
      "50 cerveaux chaque mois",
      "Mémo visuel",
      "Quiz",
      "Banques de 30 questions",
      "Pendu, Bingo, Mots croisés",
      "−20 % sur les jeux IA",
    ],
    excluded: [
      "Mémo structuré",
      "Examen blanc",
      "Rappels intelligents",
    ],
  },
  {
    name: "Max",
    price: "7,99 €",
    cadence: "/mois",
    yearly: "59,99 €/an",
    tag: "Le plus complet",
    tone: "gold",
    promise: "La meilleure expérience qu’on puisse t’offrir.",
    included: [
      "Sujets et chapitres illimités",
      "150 cerveaux chaque mois",
      "Mémo visuel",
      "Quiz",
      "Mémo structuré",
      "Examen blanc noté sur 20",
      "Rappels intelligents",
      "Pendu, Bingo, Mots croisés",
      "−40 % sur les jeux IA",
    ],
    excluded: [],
  },
];

const costs: Array<{
  tool: string;
  free: string;
  premium: string;
  max: string;
  dot: string;
}> = [
  { tool: "Pendu", free: "5", premium: "4", max: "3", dot: "bg-hangman" },
  { tool: "Bingo", free: "5", premium: "4", max: "3", dot: "bg-bingo" },
  { tool: "Mots croisés", free: "5", premium: "4", max: "3", dot: "bg-crossword" },
  { tool: "Mémo visuel", free: "—", premium: "7", max: "7", dot: "bg-memovisuel" },
  { tool: "Quiz", free: "—", premium: "7", max: "7", dot: "bg-quiz" },
  { tool: "Mémo structuré", free: "—", premium: "—", max: "9", dot: "bg-memostruct" },
  { tool: "Examen blanc", free: "—", premium: "—", max: "9", dot: "bg-exam" },
  { tool: "Rappels intelligents", free: "—", premium: "—", max: "7", dot: "bg-notifs" },
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
              const cardLook =
                p.tone === "accent"
                  ? "ring-2 ring-accent-deep/30 border-accent-deep/40 bg-gradient-to-br from-white via-white to-accent-soft/40"
                  : p.tone === "gold"
                  ? "ring-2 ring-gold/30 border-gold/40 bg-gradient-to-br from-white via-white to-gold-soft/60"
                  : "border-line bg-white";
              return (
                <article
                  key={p.name}
                  className={`flex flex-col rounded-3xl border p-8 shadow-card transition-transform hover:-translate-y-1 ${cardLook}`}
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
                    {p.included.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-text-body">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {p.excluded.length > 0 && (
                    <>
                      <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Non inclus
                      </p>
                      <ul className="mt-3 space-y-2.5 text-sm">
                        {p.excluded.map((f) => (
                          <li
                            key={`x-${f}`}
                            className="flex items-start gap-2 text-text-muted"
                          >
                            <CrossIcon />
                            <span className="line-through decoration-danger/40 decoration-1">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
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
              palette={{
                topBorder: "before:bg-accent",
                pill: "bg-accent-soft text-accent-deep",
                glow: "from-accent-soft",
              }}
            />
            <ConceptCard
              index="2"
              title="Cerveaux = énergie"
              body="Chaque outil IA consomme quelques cerveaux. Ton plan en recharge tous les mois (50 en Premium, 150 en Max). Les cerveaux mensuels s’accumulent si tu ne les utilises pas."
              palette={{
                topBorder: "before:bg-memovisuel",
                pill: "bg-memovisuel-tintStrong text-memovisuel-deep",
                glow: "from-memovisuel-tint",
              }}
            />
            <ConceptCard
              index="3"
              title="Packs = recharge"
              body="Les packs ajoutent des cerveaux à ton compteur, ponctuellement. Ils ne changent jamais ton plan et ne débloquent jamais un outil. Acheter un pack en Free reste Free."
              palette={{
                topBorder: "before:bg-hangman",
                pill: "bg-hangman-tintStrong text-hangman-deep",
                glow: "from-hangman-tint",
              }}
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
                    <tr key={c.tool} className="transition-colors hover:bg-surface-soft">
                      <td className="px-5 py-3 font-medium text-ink">
                        <span className="inline-flex items-center gap-2.5">
                          <span
                            aria-hidden
                            className={`h-2 w-2 shrink-0 rounded-full ${c.dot}`}
                          />
                          {c.tool}
                        </span>
                      </td>
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
  palette,
}: {
  index: string;
  title: string;
  body: string;
  palette: { topBorder: string; pill: string; glow: string };
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft before:absolute before:left-0 before:right-0 before:top-0 before:h-1 ${palette.topBorder}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${palette.glow} to-transparent opacity-50 blur-2xl transition-opacity group-hover:opacity-90`}
      />
      <span
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-semibold ${palette.pill}`}
      >
        {index}
      </span>
      <h3 className="relative mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="relative mt-3 text-text-body">{body}</p>
    </article>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
      <svg
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 10l4 4 8-8" />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-danger-soft text-danger">
      <svg
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 5l10 10M15 5L5 15" />
      </svg>
    </span>
  );
}
