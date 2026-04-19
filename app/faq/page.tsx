import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses claires sur Revizio : pour qui l’app est faite, comment fonctionnent les cerveaux, les abonnements, les packs, la confidentialité, les notifications, la suppression de compte.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ · ${site.name}`,
    description:
      "Tout ce que tu veux savoir avant d’installer Revizio : offres, cerveaux, IA, données, notifications, compte.",
    url: `${site.url}/faq`,
  },
};

type Q = { q: string; a: string };
type Category = { id: string; title: string; intro?: string; items: Q[] };

const categories: Category[] = [
  {
    id: "produit",
    title: "Le produit",
    intro: "Ce que Revizio fait, et ce que Revizio n’est pas.",
    items: [
      {
        q: "Faut-il être étudiant pour utiliser Revizio ?",
        a: "Non. Revizio est conçu pour toute personne qui veut comprendre ou retenir un sujet — étudiants, adultes en reconversion, autodidactes, curieux. Pendant l’onboarding, tu choisis un objectif (Étudiant ou Curieux) et l’app adapte ses libellés et ses suggestions.",
      },
      {
        q: "Sur quels sujets ça marche ?",
        a: "Sur n’importe quel sujet. Tu importes un cours (photo, texte) ou tu pars d’un sujet libre — La Renaissance, le Système solaire, les protocoles réseau, le code de la route, une procédure métier. Tu indiques ton niveau, Revizio calibre.",
      },
      {
        q: "Comment Revizio adapte les contenus à mon niveau ?",
        a: "Tu renseignes ton niveau en onboarding (par exemple Lycée, Culture générale, Prépa, Formation pro). Revizio règle ensuite le vocabulaire, la difficulté et la densité des contenus générés en fonction.",
      },
      {
        q: "Comment fonctionne le planning automatique ?",
        a: "Revizio crée un planning de révision basé sur tes cours, tes chapitres, tes dates d’examen et tes jours disponibles. Il répartit les séances de manière équilibrée.",
      },
      {
        q: "L’IA est-elle fiable ?",
        a: "Les contenus générés avec l’aide de l’IA doivent être relus et vérifiés. Compare toujours avec tes cours officiels. L’IA est une aide à la révision, pas une autorité académique.",
      },
      {
        q: "Est-ce que c’est une app de chat IA ?",
        a: "Non. Revizio ne propose pas de chat libre avec l’IA. Tu choisis un outil (Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, jeux) et l’IA produit un livrable concret.",
      },
    ],
  },
  {
    id: "offres",
    title: "Cerveaux, abonnements, packs",
    intro: "Trois choses différentes. Pas de confusion.",
    items: [
      {
        q: "Que sont les cerveaux ?",
        a: "Les cerveaux sont l’énergie qui fait tourner les outils IA (Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, jeux). Ton abonnement décide des outils auxquels tu peux accéder. Les cerveaux décident combien d’utilisations tu peux te permettre.",
      },
      {
        q: "Un pack de cerveaux débloque-t-il des outils ?",
        a: "Non. Un pack ne débloque jamais un accès. Seul ton abonnement détermine les outils disponibles. Les packs rechargent ton compteur de cerveaux, c’est tout.",
      },
      {
        q: "Quelle est la différence entre Free, Premium et Max ?",
        a: "Free : 2 sujets max, 5 chapitres par sujet, jeux Pendu / Bingo / Mots croisés. Zéro cerveau offert par mois. Premium (3,99 €/mois) : sujets et chapitres illimités, 50 cerveaux/mois, Mémo visuel et Quiz. Max (7,99 €/mois) : 150 cerveaux/mois, tout Premium + Mémo structuré + Examen blanc + Rappels intelligents + planning calé sur tes échéances.",
      },
      {
        q: "Est-ce qu’il y a un essai gratuit ?",
        a: "Revizio ne propose pas de période d’essai payante. Le Free est un vrai tier permanent — avec les trois jeux, deux sujets, le planning, la progression et toutes les récompenses.",
      },
      {
        q: "Les cerveaux de mon abonnement expirent-ils à la fin du mois ?",
        a: "Non. Les cerveaux mensuels s’accumulent d’un mois sur l’autre si tu ne les utilises pas.",
      },
      {
        q: "Comment gérer ou résilier mon abonnement ?",
        a: "L’abonnement est géré par l’App Store ou Google Play. Ouvre la gestion des abonnements dans les réglages de ton compte Apple ou Google pour résilier à tout moment.",
      },
      {
        q: "Si je résilie, je perds mes contenus ?",
        a: "Non. Ton compte et ton historique restent accessibles. Tu reviens simplement au Free, avec ses limites sur le nombre de sujets et les outils accessibles.",
      },
      {
        q: "Si je passe de Max à Premium, qu’est-ce que je perds ?",
        a: "Tu perds l’accès aux outils exclusifs Max (Examen blanc, Mémo structuré, Rappels intelligents, planning calé sur l’échéance). Les contenus déjà générés restent consultables dans ton historique. Tes cerveaux mensuels passent à 50/mois.",
      },
      {
        q: "Les cerveaux gagnés par parrainage ont-ils une valeur monétaire ?",
        a: "Non. Les cerveaux sont une énergie d’usage dans l’app. Ils ne sont pas échangeables contre de l’argent, ne sont pas transférables, et n’ont pas de valeur marchande.",
      },
    ],
  },
  {
    id: "compte",
    title: "Compte et appareils",
    items: [
      {
        q: "Comment créer un compte ?",
        a: "Tu peux te connecter avec Apple, Google, ou un code à 6 chiffres envoyé par email. Pas de mot de passe. Tu peux aussi commencer en mode invité et créer un compte plus tard — tes données sont conservées.",
      },
      {
        q: "Si je crée un compte après avoir utilisé l’app en invité, je perds mes données ?",
        a: "Non. Quand tu lies un compte à ton profil invité, ton historique, tes cerveaux, tes sujets et tes contenus sont conservés.",
      },
      {
        q: "Puis-je utiliser Revizio sur plusieurs appareils ?",
        a: "Oui, à partir du moment où tu t’es connecté avec Apple, Google ou Email. En mode invité, les données restent liées à l’appareil.",
      },
      {
        q: "Que se passe-t-il si je change de téléphone ?",
        a: "Reconnecte-toi avec Apple, Google ou Email sur le nouvel appareil. Tes données sont restaurées depuis le serveur.",
      },
      {
        q: "Comment supprimer mon compte ?",
        a: "Ouvre Paramètres > Supprimer mon compte. Le compte et les données associées seront supprimés ou anonymisés côté serveur.",
      },
      {
        q: "La suppression de mon compte annule mon abonnement ?",
        a: "Non. Un abonnement actif doit être résilié séparément depuis les réglages de ton compte Apple ou Google, avant ou après la suppression.",
      },
    ],
  },
  {
    id: "parrainage",
    title: "Parrainage",
    items: [
      {
        q: "Comment fonctionne le parrainage ?",
        a: "Partage ton code REV-XXXXX avec un ami. Quand il complète sa première séance de révision valide (au moins 10 minutes), vous gagnez tous les deux +5 cerveaux.",
      },
      {
        q: "Mon code est-il unique ?",
        a: "Oui. Ton code au format REV-XXXXX est généré côté serveur et rattaché à ton compte. Il est stable d’un appareil à l’autre.",
      },
    ],
  },
  {
    id: "donnees",
    title: "Confidentialité et données",
    items: [
      {
        q: "Où sont stockées mes données ?",
        a: "Sur notre infrastructure Supabase : base de données chiffrée et stockage privé pour les images. Les contenus générés par l’IA passent par nos serveurs qui appellent OpenAI de façon sécurisée.",
      },
      {
        q: "Mes photos de cours sont-elles publiques ?",
        a: "Non. Les photos que tu ajoutes à un sujet sont stockées dans un espace privé, accessibles uniquement via des URLs signées pour ton compte.",
      },
      {
        q: "Mes notes vocales sont-elles envoyées sur un serveur ?",
        a: "Non. Les notes vocales que tu enregistres en fin de séance restent sur ton appareil. Elles ne sont pas synchronisées multi-appareils.",
      },
      {
        q: "OpenAI reçoit-il le contenu de mes cours ?",
        a: "Oui, dans la mesure où tu lances un outil IA sur ce contenu. Les prompts envoyés à OpenAI sont nécessaires à la génération. Ces données ne sont pas utilisées pour entraîner des modèles tiers.",
      },
      {
        q: "Puis-je supprimer un contenu IA généré ?",
        a: "Oui. Dans l’historique IA ou sur chaque outil, tu peux supprimer chaque contenu individuellement (corbeille + confirmation).",
      },
      {
        q: "Puis-je exporter mes données ?",
        a: "Oui, sur demande écrite. Écris à support@revizioapp.com depuis l’adresse email associée à ton compte et nous traiterons la demande dans un délai raisonnable.",
      },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    items: [
      {
        q: "Quelles notifications Revizio envoie ?",
        a: "Trois types : rappels de séance selon ton planning, notifications IA quand une génération est prête (mémo, quiz, examen), et Rappels intelligents (Max) — 30 micro-notions livrées sur environ 10 jours à tes horaires choisis.",
      },
      {
        q: "Comment désactiver les notifications ?",
        a: "Depuis les réglages de Revizio (onglet Réglages > Notifications) ou depuis les réglages système de ton téléphone.",
      },
      {
        q: "Combien de notifications par jour au maximum ?",
        a: "Maximum 3 notifications par jour par utilisateur, anti-spam intégré côté serveur. Les Rappels intelligents en Max : 3 par jour sur une série active.",
      },
    ],
  },
  {
    id: "technique",
    title: "Appareils et achats",
    items: [
      {
        q: "Sur quels appareils Revizio fonctionne ?",
        a: "iOS et Android. L’expérience complète est sur mobile.",
      },
      {
        q: "Faut-il une connexion internet ?",
        a: "Oui pour la génération IA et la synchronisation. Les contenus déjà générés et les séances déjà lancées restent consultables sans réseau.",
      },
      {
        q: "Mes achats sont-ils synchronisés si je change de téléphone ?",
        a: "Oui, tant que tu utilises le même compte Apple ou Google pour l’App Store ou Google Play. L’option « Restaurer mes achats » dans les réglages permet de récupérer les droits sur un autre appareil.",
      },
    ],
  },
  {
    id: "contact",
    title: "Support",
    items: [
      {
        q: "Comment contacter le support ?",
        a: "Par email à support@revizioapp.com. Délai de réponse moyen : sous 3 jours ouvrés.",
      },
    ],
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories
    .flatMap((c) => c.items)
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative pt-16 pb-12 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Des réponses droites. Pas de jargon.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-text-body">
              Tout ce que tu peux vouloir savoir avant d’installer l’app ou pour la configurer comme tu veux.
            </p>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="pb-4">
        <div className="container-x">
          <nav className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="pill hover:border-accent hover:text-accent-deep"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Questions */}
      <section className="pb-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-14">
            {categories.map((c) => (
              <div key={c.id} id={c.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {c.title}
                </h2>
                {c.intro && (
                  <p className="mt-2 text-text-body">{c.intro}</p>
                )}
                <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                  {c.items.map((item, idx) => (
                    <details
                      key={item.q}
                      className={`group px-6 py-5 ${
                        idx > 0 ? "border-t border-line" : ""
                      }`}
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-medium text-ink">
                        <span>{item.q}</span>
                        <span
                          aria-hidden
                          className="mt-0.5 shrink-0 text-text-muted transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-text-body">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface-soft py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ta question n’est pas dans la liste ?
            </h2>
            <p className="mt-3 text-text-body">
              Écris-nous, on répond sous 3 jours ouvrés.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.supportEmail}`} className="btn-primary">
                Écrire à {site.supportEmail}
              </a>
              <Link href="/support" className="btn-ghost">
                Voir la page support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
