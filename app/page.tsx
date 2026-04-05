import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";
import heroScan from "@/public/images/feature-scan.webp";
import heroFiche from "@/public/images/feature-fiche.png";
import heroQuiz from "@/public/images/feature-quiz.webp";
import heroMascotRewards from "@/public/images/hero-mascot-rewards.webp";
import featureExam from "@/public/images/feature-exam.png";
import featureNotif from "@/public/images/feature-notif.png";
import onboarding from "@/public/images/onboarding.webp";

const steps = [
  {
    n: "01",
    title: "Organise tes matières et chapitres",
    body: "Ajoute tes matières, découpe tes chapitres et pose une base claire pour ton travail.",
  },
  {
    n: "02",
    title: "Planifie tes sessions",
    body: "Transforme tes objectifs en sessions de révision concrètes et plus faciles à suivre.",
  },
  {
    n: "03",
    title: "Révise avec les bons outils",
    body: "Utilise quiz, fiches et autres outils disponibles selon ton niveau d’accès.",
  },
  {
    n: "04",
    title: "Garde le rythme",
    body: "Suis ton historique, ton avancement et ta régularité dans une interface claire.",
  },
];

const features = [
  {
    title: "Planning de révision",
    body: "Construis un rythme de travail lisible et cohérent.",
  },
  {
    title: "Matières, chapitres et sessions",
    body: "Découpe ta charge de travail étape par étape.",
  },
  {
    title: "Quiz et fiches assistés par IA",
    body: "Gagne du temps pour créer des supports de révision.",
  },
  {
    title: "Historique et archive",
    body: "Retrouve ce que tu as déjà travaillé.",
  },
  {
    title: "Progression et motivation",
    body: "Reste engagé grâce à une expérience moderne et structurée.",
  },
  {
    title: "Outils avancés selon l’offre",
    body: "Accède à davantage d’outils avec Premium ou Max.",
  },
];

const plans = [
  {
    name: "Free",
    description: "Découverte de l’expérience Revizio.",
    items: [
      "Scan inclus",
      "Fonctionnalités de base",
      "Découverte de l’expérience Revizio",
    ],
  },
  {
    name: "Premium",
    description: "Expérience de révision enrichie.",
    highlighted: true,
    items: [
      "Quiz IA",
      "Fiches IA",
      "Expérience de révision enrichie",
    ],
  },
  {
    name: "Max",
    description: "Accès plus complet pour préparer des examens.",
    items: [
      "Tout Premium",
      "Examens blancs",
      "Mots croisés",
      "Notifications intelligentes",
    ],
  },
];

const transparency = [
  "Pas de promesse de résultat scolaire garanti.",
  "Abonnements et achats intégrés présentés clairement.",
  "Liens vers confidentialité, conditions et support.",
  "Possibilité de restaurer les achats dans l’application.",
  "Possibilité de supprimer son compte depuis l’application.",
];

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,107,58,0.08),transparent_60%)]"
        />
        <div className="container-x relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Application mobile de révision</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Révise avec une méthode
              <br />
              <span className="text-primary">plus claire.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
              Revizio t’aide à organiser tes matières, planifier tes sessions, créer des quiz et des fiches avec l’aide de l’IA, et suivre ta progression sans te disperser.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <StoreButtons size="lg" />
              <Link
                href="#how"
                className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Composition screenshots */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-3 items-end gap-3 sm:gap-6">
              <div className="translate-y-6 opacity-90 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10">
                  <Image
                    src={heroFiche}
                    alt="Fiche de révision générée dans Revizio"
                    sizes="(max-width: 640px) 30vw, 300px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="-translate-y-2 sm:-translate-y-4">
                <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/15 ring-1 ring-primary/20">
                  <Image
                    src={heroMascotRewards}
                    alt="Récompenses de cerveaux gagnées dans Revizio"
                    sizes="(max-width: 640px) 36vw, 360px"
                    className="h-auto w-full"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="translate-y-6 opacity-90 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10">
                  <Image
                    src={heroQuiz}
                    alt="Quiz de révision dans Revizio"
                    sizes="(max-width: 640px) 30vw, 300px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section id="how" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Comment ça marche</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Une révision structurée,
              <br className="hidden sm:block" />
              {" "}du chapitre à la progression.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card">
                <div className="text-sm font-semibold text-primary">{s.n}</div>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURES ============== */}
      <section className="border-y border-border bg-surface/50 py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Fonctionnalités</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Pensé pour réviser avec plus de clarté.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card">
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Screens preview */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: heroScan, alt: "Écran Scan de cours dans Revizio", label: "Scan" },
              { src: heroQuiz, alt: "Écran Quiz dans Revizio", label: "Quiz" },
              { src: featureExam, alt: "Écran Examens blancs dans Revizio", label: "Examens blancs" },
              { src: featureNotif, alt: "Écran Notifications intelligentes dans Revizio", label: "Notifications" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/10">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    sizes="(max-width: 640px) 90vw, 260px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== IA BLOCK ============== */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-prose rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <p className="eyebrow mb-3">Intelligence artificielle</p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Une aide à la révision, pas une promesse magique.
            </h2>
            <p className="mt-4 text-text-secondary">
              Les fonctionnalités assistées par IA de Revizio sont conçues pour aider à préparer des supports de révision plus rapidement. Les contenus générés doivent être relus et vérifiés par l’utilisateur.
            </p>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT PROOF ============== */}
      <section className="border-t border-border bg-surface/50 py-20 sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Expérience produit</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Une app pensée pour aider à avancer.
              </h2>
              <p className="mt-4 text-text-secondary">
                Onboarding clair, planning lisible, historique retrouvable. Chaque écran est là pour aider à se poser, planifier et revenir à ce qu’on a déjà travaillé.
              </p>
            </div>
            <div>
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/15">
                <Image
                  src={onboarding}
                  alt="Écran d’onboarding de Revizio"
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="h-auto w-full"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PLANS ============== */}
      <section id="plans" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Offres</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Choisis l’accès qui correspond à ton usage.
            </h2>
            <p className="mt-4 text-text-secondary">
              Revizio propose une version Free ainsi que des accès Premium et Max via abonnement. Certaines fonctionnalités nécessitent un abonnement actif.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`card flex flex-col ${
                  p.highlighted ? "border-primary/60 ring-1 ring-primary/40" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.highlighted && (
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                      Recommandé
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-text-secondary">{p.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cerveaux */}
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="eyebrow mb-3">À propos des cerveaux</p>
            <p className="text-text-secondary">
              Les cerveaux correspondent à une consommation dans l’application. Les packs de cerveaux sont des recharges de consommation uniquement. Ils ne débloquent jamais l’accès Premium ou Max.
            </p>
          </div>
        </div>
      </section>

      {/* ============== TRANSPARENCE ============== */}
      <section className="border-t border-border bg-surface/50 py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Transparence</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Une expérience claire et transparente.
            </h2>
          </div>
          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {transparency.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-text-secondary">
                <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== DOWNLOAD CTA ============== */}
      <section id="download" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Télécharger</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Commence à réviser plus clairement.
            </h2>
            <p className="mt-4 text-text-secondary">
              Disponible sur iOS et Android.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" />
            </div>
            <p className="mt-6 text-xs text-text-secondary">
              Besoin d’aide ?{" "}
              <Link href="/support" className="text-primary underline-offset-2 hover:underline">
                Contacter le support
              </Link>{" "}
              ·{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-primary underline-offset-2 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
