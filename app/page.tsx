import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";
import heroScan from "@/public/images/feature-scan.webp";
import heroFiche from "@/public/images/feature-fiche.png";
import heroQuiz from "@/public/images/feature-quiz.webp";
import heroMascotRewards from "@/public/images/hero-mascot-rewards.webp";
import featureExam from "@/public/images/feature-exam.png";
import featureNotif from "@/public/images/feature-notif.png";
import featureMemoStructured from "@/public/images/feature-memo-structured.png";
import featureHangman from "@/public/images/feature-hangman.png";
import featureBingo from "@/public/images/feature-bingo.webp";
import featureCrossword from "@/public/images/feature-crossword.png";
import mascotHello from "@/public/images/mascot-hello.webp";
import mascotFire from "@/public/images/mascot-fire.webp";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
};

const profiles = [
  {
    title: "Étudiants",
    body: "Lycée, fac, prépa, concours. Importe un cours, génère une fiche, passe un examen blanc noté sur 20.",
    icon: "cap",
  },
  {
    title: "Adultes",
    body: "Reconversion, certification, permis, formation pro. Apprends à ton rythme, sur les sujets qui comptent.",
    icon: "briefcase",
  },
  {
    title: "Curieux",
    body: "Culture générale, passion, projet perso. Transforme n’importe quel sujet en contenu clair et jouable.",
    icon: "compass",
  },
];

const pillars = [
  {
    title: "Comprends vite",
    body: "Photographie un document. Tu récupères une fiche nette en dix secondes, avec les points clés, les définitions et les pièges.",
    highlight: "Mémo visuel",
  },
  {
    title: "Teste-toi sérieusement",
    body: "30 questions ciblées pour voir ce que tu maîtrises, ou un vrai examen noté sur 20 avec correction détaillée.",
    highlight: "Quiz et Examen blanc",
  },
  {
    title: "Retiens sans y penser",
    body: "Trente micro-notions livrées à tes horaires, sur dix jours. Ton cerveau travaille pendant que tu vis ta journée.",
    highlight: "Rappels intelligents",
  },
];

const tools = [
  {
    name: "Mémo visuel",
    tier: "Premium et Max",
    body: "Photographie un document, obtiens une fiche claire avec points clés, définitions et pièges.",
    image: heroScan,
    alt: "Scan de cours transformé en fiche Revizio",
  },
  {
    name: "Mémo structuré",
    tier: "Max",
    body: "Un dossier complet sur ton sujet : synthèse, concepts, dates, pièges, ressources. Enrichi par le web.",
    image: featureMemoStructured,
    alt: "Mémo structuré Revizio",
  },
  {
    name: "Quiz",
    tier: "Premium et Max",
    body: "30 questions réparties en trois sessions, avec correction pédagogique pour chaque réponse.",
    image: heroQuiz,
    alt: "Quiz Revizio en cours",
  },
  {
    name: "Examen blanc",
    tier: "Max",
    body: "10 questions sérieuses, note sur 20, correction détaillée avec bilan et conseils de progression.",
    image: featureExam,
    alt: "Examen blanc noté sur 20 dans Revizio",
  },
  {
    name: "Rappels intelligents",
    tier: "Max",
    body: "30 micro-notions sur ton sujet, livrées à tes horaires sur environ dix jours. Zéro spam.",
    image: featureNotif,
    alt: "Rappels intelligents Revizio",
  },
  {
    name: "Pendu",
    tier: "Tous les plans",
    body: "Dix mots à deviner avec indice sur ton sujet. Cinq minutes, un vocabulaire solide.",
    image: featureHangman,
    alt: "Pendu Revizio",
  },
  {
    name: "Bingo",
    tier: "Tous les plans",
    body: "Trois grilles 3×3, neuf termes clés par grille. Mémorise en jouant.",
    image: featureBingo,
    alt: "Bingo Revizio",
  },
  {
    name: "Mots croisés",
    tier: "Tous les plans",
    body: "Une grille générée sur ton sujet, avec définitions horizontales et verticales.",
    image: featureCrossword,
    alt: "Mots croisés Revizio",
  },
];

const plans = [
  {
    name: "Free",
    price: "0 €",
    cadence: "pour toujours",
    tag: null as string | null,
    promise: "Un vrai tier permanent pour commencer.",
    features: [
      "2 sujets, 5 chapitres par sujet",
      "Pendu, Bingo, Mots croisés",
      "Planning et progression complets",
      "Récompenses, niveaux, séries",
    ],
  },
  {
    name: "Premium",
    price: "3,99 €",
    cadence: "par mois",
    tag: "Le plus populaire",
    promise: "Les outils intelligents pour réviser sérieusement.",
    features: [
      "Sujets et chapitres illimités",
      "50 cerveaux chaque mois",
      "Mémo visuel et Quiz",
      "Tarifs dégressifs sur les jeux",
    ],
  },
  {
    name: "Max",
    price: "7,99 €",
    cadence: "par mois",
    tag: "Le plus complet",
    promise: "La meilleure expérience qu’on puisse t’offrir.",
    features: [
      "Tout Premium",
      "150 cerveaux chaque mois",
      "Mémo structuré, Examen blanc, Rappels intelligents",
      "Planning calé sur ton échéance",
    ],
  },
];

const trustPoints = [
  {
    title: "Sans mot de passe",
    body: "Connexion par Apple, Google ou code à 6 chiffres par email.",
  },
  {
    title: "Pas d’essai piège",
    body: "Le Free est un vrai tier permanent, pas une démo qui expire.",
  },
  {
    title: "Les cerveaux ne se perdent pas",
    body: "Ils s’accumulent d’un mois sur l’autre si tu ne les utilises pas.",
  },
  {
    title: "Sans publicité",
    body: "Pas de pub, pas de vente de données. Jamais.",
  },
];

const mobileAppLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationApplication",
  description: site.description,
  inLanguage: site.language,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: site.legalEntity,
    url: site.url,
  },
  url: site.url,
  image: `${site.url}/opengraph-image`,
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-mobileapp"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppLd) }}
      />

      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="pill-accent">Nouveau — disponible iOS et Android</span>
              </div>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Comprends.
                <br />
                Teste-toi.
                <br />
                <span className="text-accent-deep">Retiens.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-body sm:text-xl">
                Revizio transforme un sujet en fiche, quiz, examen ou rappels.
                En quelques secondes. Sur mobile. Pour étudiants, adultes en reconversion, et tous ceux qui veulent vraiment apprendre.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <StoreButtons size="lg" />
                <Link
                  href="#pillars"
                  className="text-sm font-medium text-text-muted underline-offset-4 hover:text-ink hover:underline"
                >
                  Voir ce que Revizio fabrique pour toi
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-text-muted">
                <span>Sans publicité</span>
                <span className="text-line">·</span>
                <span>Sans mot de passe</span>
                <span className="text-line">·</span>
                <span>Résiliable à tout moment</span>
              </div>
            </div>

            {/* Visuel */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-accent-soft via-white to-background-strong blur-2xl opacity-70"
                />
                <div className="relative grid grid-cols-6 gap-3">
                  <div className="col-span-4 col-start-1 row-start-1">
                    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                      <Image
                        src={heroFiche}
                        alt="Fiche générée dans Revizio"
                        sizes="(max-width: 1024px) 60vw, 340px"
                        className="h-auto w-full"
                        placeholder="blur"
                        priority
                      />
                    </div>
                  </div>
                  <div className="col-span-3 col-start-4 row-start-1 translate-y-20">
                    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card ring-1 ring-accent/10">
                      <Image
                        src={heroMascotRewards}
                        alt="Récompense de cerveaux Revizio"
                        sizes="(max-width: 1024px) 40vw, 220px"
                        className="h-auto w-full"
                        placeholder="blur"
                        priority
                      />
                    </div>
                  </div>
                  <div className="col-span-3 col-start-2 row-start-2 translate-y-6">
                    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                      <Image
                        src={heroQuiz}
                        alt="Quiz Revizio"
                        sizes="(max-width: 1024px) 40vw, 220px"
                        className="h-auto w-full"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== POUR QUI ============== */}
      <section className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Pour qui</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              Un compagnon d’apprentissage pour toutes les têtes.
            </h2>
            <p className="mt-4 text-text-body">
              Revizio ne t’enferme pas dans un moule scolaire. Tu choisis ton objectif, ton niveau, ton rythme. L’app suit.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {profiles.map((p) => (
              <div key={p.title} className="card">
                <ProfileIcon variant={p.icon as "cap" | "briefcase" | "compass"} />
                <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TROIS PROMESSES ============== */}
      <section id="pillars" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Ce que Revizio fait pour toi</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              Trois choses. Bien faites.
            </h2>
            <p className="mt-4 text-text-body">
              Pas un chat IA. Pas un tuteur vidéo. Pas une énième to-do. Revizio fabrique du concret à partir de tes sujets.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pillars.map((p, idx) => (
              <article
                key={p.title}
                className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card"
              >
                <div className="flex items-start justify-between">
                  <span className="pill-accent">0{idx + 1}</span>
                  <span className="pill">{p.highlight}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-text-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== OUTILS ============== */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Huit outils, un produit cohérent</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
                Chaque outil produit un livrable concret.
              </h2>
              <p className="mt-4 text-text-body">
                Tu choisis un sujet. Tu lances un outil. Tu récupères une fiche, une grille, une note, une série de rappels. C’est tout. C’est le but.
              </p>
            </div>
            <Link
              href="/outils"
              className="btn-ghost whitespace-nowrap"
            >
              Découvrir chaque outil
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t) => (
              <article key={t.name} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-transform hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-surface-soft">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    sizes="(max-width: 640px) 45vw, 260px"
                    className="h-full w-full object-cover"
                    placeholder={typeof t.image === "string" ? undefined : "blur"}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-ink">
                      {t.name}
                    </h3>
                    <span className="pill shrink-0 !py-0.5 text-[10px]">{t.tier}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-body">{t.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== EXEMPLE CONCRET ============== */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Exemple concret</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
                Un sujet. Un livrable.
                <br />
                Pas un chat.
              </h2>
              <p className="mt-5 text-text-body">
                Lance un Mémo structuré sur n’importe quoi — La Renaissance, les protocoles réseau, le Système solaire, le code de la route. Revizio te renvoie un dossier prêt à réviser : synthèse, concepts clés, dates, pièges, ressources, comparaisons. Enrichi par le web.
              </p>
              <p className="mt-4 text-text-body">
                Tu préfères te tester ? Demande un Quiz. Ou un Examen blanc noté sur 20, avec correction détaillée pour chaque question.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/outils" className="btn-primary">
                  Voir tous les outils
                </Link>
                <Link href="/subscriptions" className="btn-ghost">
                  Comparer les offres
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-accent-soft to-background-strong blur-2xl opacity-70"
              />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                  <Image
                    src={featureMemoStructured}
                    alt="Mémo structuré généré dans Revizio"
                    sizes="(max-width: 1024px) 45vw, 260px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                  <Image
                    src={featureExam}
                    alt="Examen blanc noté sur 20"
                    sizes="(max-width: 1024px) 45vw, 260px"
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROGRESSION ============== */}
      <section className="border-y border-line bg-ink py-20 text-white sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Une progression qui se voit
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ta série, ton niveau, tes cerveaux. Visibles. Zéro dark pattern.
              </h2>
              <p className="mt-5 max-w-2xl text-white/70">
                Tu vois ce que tu maîtrises et ce qu’il reste à ancrer. Ton historique conserve chaque fiche, chaque quiz, chaque rappel. Les cerveaux s’accumulent d’un mois sur l’autre — ils ne disparaissent jamais.
              </p>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-left">
                <Stat n="10" label="niveaux" />
                <Stat n="30" label="questions par quiz" />
                <Stat n="/20" label="note d’examen blanc" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <Image
                  src={mascotFire}
                  alt="Mascotte Revizio en série"
                  width={360}
                  height={360}
                  className="mx-auto h-auto w-full max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== OFFRES TEASER ============== */}
      <section id="plans" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Les offres</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              Un Free solide. Deux abonnements simples.
            </h2>
            <p className="mt-4 text-text-body">
              L’abonnement décide des outils que tu peux lancer. Les cerveaux sont l’énergie qui les fait tourner. Les packs rechargent ton énergie, jamais ton accès.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p, idx) => (
              <article
                key={p.name}
                className={`flex flex-col rounded-3xl border p-8 shadow-card ${
                  idx === 1
                    ? "border-accent-deep/40 bg-white ring-2 ring-accent-deep/15"
                    : idx === 2
                    ? "border-gold/40 bg-white ring-1 ring-gold/20"
                    : "border-line bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-ink">{p.name}</h3>
                  {p.tag && (
                    <span className={idx === 2 ? "pill-gold" : "pill-accent"}>
                      {p.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-text-muted">{p.promise}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-ink">
                    {p.price}
                  </span>
                  <span className="text-sm text-text-muted">{p.cadence}</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-text-body">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/subscriptions"
                    className={idx === 1 ? "btn-primary w-full" : "btn-ghost w-full"}
                  >
                    {idx === 0 ? "Commencer gratuitement" : `Découvrir ${p.name}`}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-text-muted">
            Abonnement géré par l’App Store ou Google Play. Renouvellement automatique, résiliable à tout moment depuis ton compte Apple ou Google. Les offres annuelles existent à ≈ 2,50 €/mois (Premium) et ≈ 5,00 €/mois (Max).
          </p>
        </div>
      </section>

      {/* ============== CONFIANCE ============== */}
      <section className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Sans piège</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              On joue franc-jeu.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t) => (
              <div key={t.title} className="card-soft">
                <h3 className="text-base font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm text-text-body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== DOWNLOAD CTA ============== */}
      <section id="download" className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl rounded-[36px] border border-line bg-white p-10 text-center shadow-card sm:p-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft">
              <Image
                src={mascotHello}
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 object-contain"
              />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Choisis un sujet. Revizio fait le reste.
            </h2>
            <p className="mt-5 text-text-body">
              Disponible sur iOS et Android. Tu peux commencer en mode invité, sans mot de passe, en moins d’une minute.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" />
            </div>
            <p className="mt-8 text-xs text-text-muted">
              Une question ?{" "}
              <Link href="/faq" className="text-accent-deep underline-offset-2 hover:underline">
                Consulter la FAQ
              </Link>{" "}
              ou{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-accent-deep underline-offset-2 hover:underline"
              >
                écrire à {site.supportEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-white">{n}</p>
      <p className="mt-1 text-xs text-white/60">{label}</p>
    </div>
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

function ProfileIcon({ variant }: { variant: "cap" | "briefcase" | "compass" }) {
  const common = "h-8 w-8";
  if (variant === "cap") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden>
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
      </div>
    );
  }
  if (variant === "briefcase") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-[#8a6620]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E2F7EF] text-[#24A57A]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="m9 15 3-7 3 7-3-2-3 2Z" />
      </svg>
    </div>
  );
}
