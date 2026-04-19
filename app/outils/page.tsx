import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";
import heroScan from "@/public/images/feature-scan.webp";
import heroQuiz from "@/public/images/feature-quiz.webp";
import featureExam from "@/public/images/feature-exam.png";
import featureNotif from "@/public/images/feature-notif.png";
import featureMemoStructured from "@/public/images/feature-memo-structured.png";
import featureHangman from "@/public/images/feature-hangman.png";
import featureBingo from "@/public/images/feature-bingo.webp";
import featureCrossword from "@/public/images/feature-crossword.png";

export const metadata: Metadata = {
  title: "Les 8 outils Revizio",
  description:
    "Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, Pendu, Bingo, Mots croisés. Huit outils, huit livrables concrets sur n’importe quel sujet.",
  alternates: { canonical: "/outils" },
  openGraph: {
    title: `Les 8 outils · ${site.name}`,
    description:
      "Un sujet, un livrable. Découvre chaque outil de Revizio, ce qu’il fabrique, pour qui c’est utile.",
    url: `${site.url}/outils`,
  },
};

type Tool = {
  slug: string;
  group: string;
  name: string;
  tier: string;
  cost: string;
  promise: string;
  body: string;
  deliverable: string;
  image: any;
  alt: string;
};

const tools: Tool[] = [
  {
    slug: "memo-visuel",
    group: "Apprendre et retenir",
    name: "Mémo visuel",
    tier: "Premium et Max",
    cost: "7 cerveaux",
    promise: "Photographie un document. Tu récupères une fiche nette en dix secondes.",
    body: "Photographie un document — une page de cours, un schéma, une notice, un article. Revizio en extrait les points clés, les définitions, les repères essentiels et les pièges classiques. Tu relis, tu gardes, tu reviens dessus quand tu veux.",
    deliverable: "Une fiche structurée, consultable et ré-utilisable dans tes outils suivants.",
    image: heroScan,
    alt: "Mémo visuel généré dans Revizio",
  },
  {
    slug: "memo-structure",
    group: "Apprendre et retenir",
    name: "Mémo structuré",
    tier: "Max",
    cost: "9 cerveaux",
    promise: "Un dossier clair et complet sur ton sujet, prêt à réviser.",
    body: "Choisis un sujet — libre, vaste ou ciblé. Revizio te renvoie un dossier en plusieurs sections : synthèse, concepts clés, dates, comparaisons, timelines, pièges classiques, ressources. Enrichi par le web, avec de vraies sources.",
    deliverable: "Un dossier long-format, en sections nettes, archivable dans Mes savoirs.",
    image: featureMemoStructured,
    alt: "Mémo structuré Revizio",
  },
  {
    slug: "quiz",
    group: "Se tester",
    name: "Quiz",
    tier: "Premium et Max",
    cost: "7 cerveaux",
    promise: "30 questions ciblées pour voir ce que tu maîtrises — et ce qu’il reste à ancrer.",
    body: "Trente questions réparties en trois sessions de dix. Chaque réponse est corrigée avec une explication pédagogique. Tu rejoues autant que tu veux, et tu vois ton meilleur score.",
    deliverable: "Une banque de 30 questions replayable, avec score et correction.",
    image: heroQuiz,
    alt: "Quiz en cours dans Revizio",
  },
  {
    slug: "examen-blanc",
    group: "Se tester",
    name: "Examen blanc",
    tier: "Max",
    cost: "9 cerveaux",
    promise: "Une épreuve notée sur 20, corrigée comme par un examinateur.",
    body: "Dix questions sérieuses. Tu passes l’épreuve, Revizio te rend une note sur 20 avec correction détaillée, bilan global et conseils de progression.",
    deliverable: "Une note sur 20, un retour par question, un plan pour progresser.",
    image: featureExam,
    alt: "Examen blanc noté sur 20 dans Revizio",
  },
  {
    slug: "rappels-intelligents",
    group: "Ne plus oublier",
    name: "Rappels intelligents",
    tier: "Max",
    cost: "7 cerveaux",
    promise: "L’essentiel de ton sujet, livré à tes horaires. Tu progresses sans y penser.",
    body: "Trente micro-notions sur un sujet, livrées à heures fixes sur environ dix jours. Un fait, une question, un piège. Trois par jour, pas plus. Tu actives, tu oublies, ton cerveau apprend.",
    deliverable: "Une série de rappels sur ton sujet, trois par jour, sur dix jours.",
    image: featureNotif,
    alt: "Rappels intelligents Revizio",
  },
  {
    slug: "pendu",
    group: "Jouer pour ancrer",
    name: "Pendu",
    tier: "Tous les plans",
    cost: "5 / 4 / 3 cerveaux selon le plan",
    promise: "Retiens un vocabulaire utile en y jouant cinq minutes.",
    body: "Dix mots à deviner, avec un indice contextuel sur ton sujet. Cinq minutes, un vocabulaire solide qui reste.",
    deliverable: "Un pack de 10 parties de pendu.",
    image: featureHangman,
    alt: "Pendu Revizio",
  },
  {
    slug: "bingo",
    group: "Jouer pour ancrer",
    name: "Bingo",
    tier: "Tous les plans",
    cost: "5 / 4 / 3 cerveaux selon le plan",
    promise: "Ancre une dizaine de notions clés en une partie.",
    body: "Trois grilles 3×3 avec appels. Trouve les neuf termes clés de chaque grille. Mémorise en jouant, pas en subissant.",
    deliverable: "Trois grilles jouables avec appels dynamiques.",
    image: featureBingo,
    alt: "Bingo Revizio",
  },
  {
    slug: "mots-croises",
    group: "Jouer pour ancrer",
    name: "Mots croisés",
    tier: "Tous les plans",
    cost: "5 / 4 / 3 cerveaux selon le plan",
    promise: "Consolide tes notions dans une grille qui te fait réfléchir.",
    body: "Une grille générée sur ton sujet, avec définitions horizontales et verticales. Ancre ce que tu as appris, grille après grille.",
    deliverable: "Une grille + ses définitions + ton score.",
    image: featureCrossword,
    alt: "Mots croisés Revizio",
  },
];

const groups = [
  {
    name: "Apprendre et retenir",
    description: "Les livrables qui t’aident à comprendre un sujet et à fixer l’essentiel.",
  },
  {
    name: "Se tester",
    description: "De vrais tests, corrigés, pour savoir où tu en es.",
  },
  {
    name: "Ne plus oublier",
    description: "Des rappels qui travaillent pour toi, à tes horaires.",
  },
  {
    name: "Jouer pour ancrer",
    description: "Trois mini-jeux générés sur ton sujet, accessibles à tous les plans.",
  },
];

export default function OutilsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-14 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Les outils</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
              Huit outils. Un sujet. Des livrables concrets.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-body">
              Pas de chat flou, pas de génération hasardeuse. Chaque outil produit quelque chose que tu peux lire, passer, jouer ou recevoir.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="#tools" className="btn-primary">
                Voir les outils
              </Link>
              <Link href="/subscriptions" className="btn-ghost">
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire par groupe */}
      <section id="tools" className="py-14 sm:py-16">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <div key={g.name} className="card-soft">
                <h2 className="text-base font-semibold text-ink">{g.name}</h2>
                <p className="mt-2 text-sm text-text-body">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des outils */}
      <section className="pb-12">
        <div className="container-x">
          <div className="space-y-20">
            {tools.map((t, idx) => (
              <article
                key={t.slug}
                id={t.slug}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                <div
                  className={`lg:col-span-6 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                    {t.group}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    {t.name}
                  </h3>
                  <p className="mt-5 text-lg text-text-body">{t.promise}</p>
                  <p className="mt-4 text-text-body">{t.body}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="pill-accent">{t.tier}</span>
                    <span className="pill">Coût : {t.cost}</span>
                  </div>

                  <div className="mt-6 rounded-2xl border border-line bg-surface-soft p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Ce que tu obtiens
                    </p>
                    <p className="mt-2 text-sm text-text-body">{t.deliverable}</p>
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative mx-auto max-w-md">
                    <div
                      aria-hidden
                      className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-accent-soft to-background-strong blur-2xl opacity-60"
                    />
                    <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                      <Image
                        src={t.image}
                        alt={t.alt}
                        sizes="(max-width: 1024px) 80vw, 460px"
                        className={`h-auto w-full ${
                          t.slug === "pendu" ? "scale-[0.7]" : ""
                        }`}
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rappel business */}
      <section className="border-t border-line bg-surface-soft py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">À savoir</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">
              Abonnement, cerveaux, packs : trois choses différentes.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="card">
                <h3 className="text-base font-semibold text-ink">
                  Abonnement = accès
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Ton plan (Free, Premium, Max) décide des outils auxquels tu peux accéder.
                </p>
              </div>
              <div className="card">
                <h3 className="text-base font-semibold text-ink">
                  Cerveaux = énergie
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Les cerveaux font tourner les outils. Chaque utilisation en consomme quelques-uns.
                </p>
              </div>
              <div className="card">
                <h3 className="text-base font-semibold text-ink">
                  Packs = recharge
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Les packs ajoutent des cerveaux à ton compteur. Ils ne débloquent jamais un accès.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/subscriptions" className="btn-primary">
                Voir le détail des offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-x text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Essaie un outil sur ton sujet du moment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-body">
            Gratuit pour commencer. Deux sujets, trois jeux, tout le système de progression.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
