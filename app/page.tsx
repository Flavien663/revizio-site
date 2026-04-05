import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";
import heroScan from "@/public/images/feature-scan.png";
import heroFiche from "@/public/images/feature-fiche.png";
import heroQuiz from "@/public/images/feature-quiz.webp";
import featureExam from "@/public/images/feature-exam.png";
import featureNotif from "@/public/images/feature-notif.png";
import onboarding from "@/public/images/onboarding.webp";

const valueProps = [
  {
    title: "Une révision structurée",
    body: "Cours, chapitres, sessions : un cadre clair pour travailler sans s’éparpiller.",
  },
  {
    title: "Une progression visible",
    body: "Historique, streaks et cerveaux pour voir concrètement ce qui avance.",
  },
  {
    title: "Des outils IA utiles",
    body: "Scan de cours, quiz, fiches : des assistants pensés pour la révision, pas des gadgets.",
  },
  {
    title: "Motivation sans infantilisation",
    body: "Une gamification sobre qui aide à tenir le rythme, sans virer en jeu.",
  },
];

const steps = [
  { n: "01", title: "Crée tes cours", body: "Ajoute tes matières et tes chapitres en quelques secondes." },
  { n: "02", title: "Organise tes sessions", body: "Planifie ton travail selon ton rythme et tes priorités." },
  { n: "03", title: "Révise avec les outils", body: "Scan, quiz, fiches : lance l’outil adapté à l’étape." },
  { n: "04", title: "Suis ta progression", body: "Historique et archive pour garder le fil et la motivation." },
];

const tools = [
  {
    name: "Scan de cours",
    body: "Prends ton cours en photo, l’IA structure la matière en contenu exploitable.",
    image: heroScan,
    badge: null,
  },
  {
    name: "Quiz",
    body: "Des quiz générés à partir de tes chapitres pour tester tes connaissances.",
    image: heroQuiz,
    badge: "Premium",
  },
  {
    name: "Fiches intelligentes",
    body: "Des fiches de révision synthétiques construites sur tes propres contenus.",
    image: heroFiche,
    badge: "Premium",
  },
  {
    name: "Examens blancs",
    body: "Des examens blancs pour se préparer dans des conditions proches du réel.",
    image: featureExam,
    badge: "Max",
  },
  {
    name: "Notifications intelligentes",
    body: "Des rappels calés sur ton planning pour ne plus rien laisser tomber.",
    image: featureNotif,
    badge: "Max",
  },
];

const plans = [
  {
    name: "Free",
    description: "Démarrer et tester.",
    items: [
      "2 cours, 5 chapitres max / cours",
      "Sessions illimitées",
      "Scan de cours inclus",
      "Cerveaux gagnés via onboarding, cours et streaks",
    ],
  },
  {
    name: "Premium",
    description: "Le cadre complet.",
    highlighted: true,
    items: [
      "Cours et chapitres illimités",
      "50 cerveaux / mois",
      "Scan, quiz, fiches, pendu, bingo",
    ],
  },
  {
    name: "Max",
    description: "Pour la préparation d’examens.",
    items: [
      "Tout Premium",
      "150 cerveaux / mois",
      "Examens blancs, mots croisés",
      "Notifications intelligentes",
      "Planning optimisé",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,107,58,0.14),transparent_55%)]"
        />
        <div className="container-x relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Application mobile de révision</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Révise mieux.
              <br />
              <span className="text-primary">Sans t’éparpiller.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary sm:text-xl">
              Revizio structure tes cours, planifie tes sessions et te donne les outils IA qu’il te faut pour avancer sérieusement.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <StoreButtons size="lg" />
              <p className="text-xs text-text-secondary">iOS et Android · Sans publicité</p>
            </div>
          </div>

          {/* Composition screenshots */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-3 items-end gap-3 sm:gap-6">
              <div className="translate-y-6 opacity-90 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/40">
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
                <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/50 ring-1 ring-primary/25">
                  <Image
                    src={heroScan}
                    alt="Scan d’un cours dans Revizio"
                    sizes="(max-width: 640px) 36vw, 360px"
                    className="h-auto w-full"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="translate-y-6 opacity-90 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/40">
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

      {/* ============== VALUE PROPS ============== */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Pourquoi Revizio</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Mieux que l’éparpillement.
            </h2>
            <p className="mt-4 text-text-secondary">
              Une app qui remet du cadre sans devenir rigide, et qui te donne les bons outils au bon moment.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v) => (
              <div key={v.title} className="card">
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Comment ça marche</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Quatre étapes, pas plus.
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

      {/* ============== TOOLS PREVIEW ============== */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Outils</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Des outils pensés pour la révision.
            </h2>
            <p className="mt-4 text-text-secondary">
              Pas de gadget. Chaque outil a un rôle clair dans ton parcours de travail.
            </p>
          </div>

          {/* Tool hero : scan */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                Scan de cours
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Transforme un cours pris en photo en contenu structuré.
              </h3>
              <p className="mt-3 text-text-secondary">
                Photographie tes notes ou ton manuel. L’IA extrait l’essentiel et le structure en matière exploitable directement dans Revizio.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Disponible dès le plan Free
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Vrai cas d’usage image, pas une démo
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40">
                <Image
                  src={heroScan}
                  alt="Écran de scan de cours dans Revizio"
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="h-auto w-full"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* Tools grid */}
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.slice(1).map((t) => (
              <div key={t.name} className="card flex flex-col">
                <div className="mb-5 overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src={t.image}
                    alt={`Écran ${t.name} dans Revizio`}
                    sizes="(max-width: 640px) 90vw, 260px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  {t.badge && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                      {t.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-text-secondary">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PRODUCT PROOF ============== */}
      <section className="border-t border-border bg-surface/30 py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Une app pensée sérieusement</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Onboarding, planning, historique.
                <br />
                Tout est conçu pour avancer.
              </h2>
              <p className="mt-4 text-text-secondary">
                Revizio n’est pas une app gadget. Chaque écran est pensé pour aider à se poser, planifier et revenir à ce qu’on a déjà fait.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-text-secondary">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-text-primary">Onboarding clair</strong> — tu cadres ton projet dès les premières minutes.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-text-primary">Planning</strong> — tes cours et sessions dans un cadre lisible.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-text-primary">Historique & archive</strong> — retrouver ce qui a été fait, reprendre le fil.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-text-primary">IA intégrée comme outil</strong> — pas comme promesse magique.</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40">
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
      <section id="plans" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Offres</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Free, Premium, Max.
            </h2>
            <p className="mt-4 text-text-secondary">
              Les prix des abonnements sont affichés dans l’app au moment de l’achat.
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

          {/* Distinction abo / packs */}
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-primary">Abonnement = accès</div>
                <p className="mt-2 text-sm text-text-secondary">
                  Un abonnement donne accès à des fonctionnalités et à un quota mensuel de cerveaux (50 pour Premium, 150 pour Max).
                </p>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-primary">Pack = recharge</div>
                <p className="mt-2 text-sm text-text-secondary">
                  Un pack de cerveaux recharge uniquement la consommation ou du contenu jouable. <strong className="text-text-primary">Un pack ne débloque jamais un abonnement Premium ou Max.</strong>
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-text-secondary">
                  <li className="rounded-lg border border-border px-3 py-2">50 — 2,99 €</li>
                  <li className="rounded-lg border border-border px-3 py-2">125 — 5,99 €</li>
                  <li className="rounded-lg border border-border px-3 py-2">334 — 12,99 €</li>
                  <li className="rounded-lg border border-border px-3 py-2">670 — 19,99 €</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== DOWNLOAD CTA ============== */}
      <section id="download" className="border-t border-border bg-gradient-to-b from-surface/40 to-background py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Télécharger</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Reprends le contrôle de tes révisions.
            </h2>
            <p className="mt-4 text-text-secondary">
              Disponible sur iOS et Android. Gratuit pour commencer, Premium et Max pour aller plus loin.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
