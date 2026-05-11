# Revizio Website V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refonte totale du site Revizio (Next.js) suite au repositionnement V14 produit : 2 tiers (Free / Plus), Aventure 90 niveaux + 8 jeux IA, outils Premium secondaires. Architecture minimale (home riche + 4 pages légales × 2 langues FR/EN).

**Architecture:** Next.js 16 App Router, statique, TypeScript strict. i18n maison sans librairie (dictionnaire TS + dossier `/en`). Tailwind 3 avec palette repensée (brand orange + 8 jeux + 3 mondes). Pas de tests unitaires (site statique) — vérification par build + dev server.

**Tech Stack:** Next.js 16.2, React 19, Tailwind 3.4, TypeScript 5.6. Spec source : `docs/superpowers/specs/2026-05-11-revizio-website-v2-design.md`.

---

## ⚠️ POST-WRITE AMENDMENTS (priorité sur tout le reste du plan)

Le plan a été rédigé puis amendé par l'utilisateur. Les directives suivantes priment sur tout contenu en aval :

1. **Pas de boost XP en Plus.** Retirer toutes les références à "XP ×1.25" du dictionnaire (`progression.stats.xp.body`, `plans.plus.features`, FAQ).
2. **180+ niveaux, 6+ mondes** (et non 90 niveaux / 3 mondes). Le wording marketing utilise le `+` pour communiquer un produit qui évolue. Les 3 mondes lancés restent affichés dans les World cards avec un teaser "et d'autres à venir".
3. **8+ jeux IA, 5+ outils IA** dans les eyebrows / titres marketing — la grille reste à 8 jeux et 7 outils mais les titres mentionnent "+" pour valoriser.
4. **Aucune mention de plafond "60 brains/mois max"** côté UI publique. Ni dans les features Free, ni dans la FAQ, ni ailleurs.
5. **Pages légales (Privacy, Terms, Delete-Account, Support)** : éviter de figer les valeurs numériques (200 brains, 5/8 vies, durées de timers, nombres de mondes/niveaux, etc.). Utiliser des formulations génériques : "l'allocation mensuelle de cerveaux", "le contenu de l'Aventure", "les outils Premium" sans chiffrer. Raison : ces valeurs évolueront sans nécessiter une mise à jour légale.
6. **Le contenu marketing (home, OG image, hero, plans cards)** peut mentionner 200 brains/mois (engagement actuel concret) mais doit éviter tout autre chiffre fragile.

À chaque section du plan ci-dessous où ces directives s'appliquent, l'implémenteur doit les substituer aux valeurs codées.

---

## Phase 0 — Cleanup & foundation

### Task 1 : Sauvegarder le dictionnaire de strings centralisé (i18n FR/EN)

**Files:**
- Create: `lib/i18n/types.ts`
- Create: `lib/i18n/fr.ts`
- Create: `lib/i18n/en.ts`
- Create: `lib/i18n/index.ts`

- [ ] **Step 1: Créer le type contract**

Fichier `lib/i18n/types.ts` :

```typescript
export type Lang = "fr" | "en";

export type Dict = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    termsTitle: string;
    supportTitle: string;
    deleteAccountTitle: string;
  };
  nav: {
    games: string;
    adventure: string;
    plans: string;
    download: string;
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    ctaSecondary: string;
  };
  games: {
    eyebrow: string;
    title: string;
    intro: string;
    cost: string;
    items: Record<
      "quiz" | "hangman" | "bingo" | "crossword" | "trueFalse" | "tri" | "chrono" | "memo",
      { name: string; tagline: string }
    >;
  };
  adventure: {
    eyebrow: string;
    title: string;
    intro: string;
    levelsLabel: string;
    freeBadge: string;
    starsCaption: string;
    chestsCaption: string;
    bossCaption: string;
    worlds: Record<"culture" | "words" | "logic", { name: string; tagline: string }>;
  };
  tools: {
    eyebrow: string;
    title: string;
    intro: string;
    includedLabel: string;
    brainsLabel: (n: number) => string;
    items: Record<
      "decoder" | "memo" | "exam" | "courseQuiz" | "smartNotifs" | "smartPlan" | "customAdventure",
      { name: string; tagline: string; cost: string }
    >;
  };
  progression: {
    eyebrow: string;
    title: string;
    stats: { xp: { label: string; body: string }; lives: { label: string; body: string }; streak: { label: string; body: string } };
  };
  daily: {
    eyebrow: string;
    title: string;
    daily: { name: string; body: string };
    custom: { name: string; body: string };
  };
  plans: {
    eyebrow: string;
    title: string;
    free: { name: string; price: string; cadence: string; promise: string; features: string[] };
    plus: { name: string; price: string; cadence: string; priceYear: string; cadenceYear: string; promise: string; features: string[]; tag: string };
    explainer: { title: string; body: string };
    fineprint: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
    seeMore: string;
  };
  cta: {
    title: string;
    body: string;
    supportLine: (email: string) => string;
  };
  footer: {
    productHeading: string;
    legalHeading: string;
    helpHeading: string;
    home: string;
    support: string;
    privacy: string;
    terms: string;
    deleteAccount: string;
    contactSupport: string;
    iosAvailable: string;
    rights: string;
    langLabel: string;
  };
  legal: {
    backHome: string;
    lastUpdated: (date: string) => string;
  };
  privacy: { /* sections — to be filled in Task 14 */ };
  terms: { /* sections — to be filled in Task 15 */ };
  support: { /* sections — to be filled in Task 16 */ };
  deleteAccount: { /* sections — to be filled in Task 17 */ };
};
```

- [ ] **Step 2: Squelette FR**

Fichier `lib/i18n/fr.ts` :

```typescript
import type { Dict } from "./types";

export const fr: Dict = {
  meta: {
    homeTitle: "Revizio — Apprends en jouant",
    homeDescription:
      "8 jeux IA générés depuis un thème ou un cours. Une aventure de 90 niveaux. Un défi par jour. Sur iOS.",
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    supportTitle: "Support",
    deleteAccountTitle: "Supprimer mon compte",
  },
  nav: {
    games: "Jeux",
    adventure: "Aventure",
    plans: "Offres",
    download: "Télécharger",
  },
  hero: {
    badge: "Sans publicité — sans tracking",
    headlineLine1: "Apprends ce que tu veux.",
    headlineLine2: "En jouant.",
    subtitle:
      "8 jeux IA générés depuis un thème ou un cours. Une aventure de 90 niveaux. Un défi par jour. Sur iOS.",
    ctaSecondary: "Voir les jeux",
  },
  games: {
    eyebrow: "8 jeux générés depuis ton thème",
    title: "Choisis un sujet. On fabrique le jeu.",
    intro:
      "Chaque jeu se construit à la volée à partir d'un thème libre ou de l'un de tes cours. Une partie coûte un cerveau.",
    cost: "1 cerveau",
    items: {
      quiz: { name: "Quiz", tagline: "15 questions sur n'importe quoi." },
      hangman: { name: "Pendu", tagline: "10 mots à deviner, avec indices." },
      bingo: { name: "Bingo", tagline: "Une grille de 12 termes à entendre." },
      crossword: { name: "Mots Croisés", tagline: "Une grille sur ton sujet." },
      trueFalse: { name: "Vrai/Faux Rush", tagline: "12 affirmations, vrai ou faux, vite." },
      tri: { name: "Tri Express", tagline: "10 cartes à ranger dans les bonnes catégories." },
      chrono: { name: "Classement Chrono", tagline: "7 à 9 événements à remettre dans l'ordre." },
      memo: { name: "Mémo Duo", tagline: "6 à 15 paires à retrouver." },
    },
  },
  adventure: {
    eyebrow: "Une aventure de 90 niveaux",
    title: "Trois mondes. Trente niveaux chacun.",
    intro:
      "Chaque niveau te rapporte de 1 à 3 étoiles selon ton score. Un coffre tous les 5 niveaux, un boss à la fin de chaque monde.",
    levelsLabel: "30 niveaux",
    freeBadge: "Gratuit — tout le monde y a accès",
    starsCaption: "1 à 3 étoiles par niveau",
    chestsCaption: "Coffres tous les 5 niveaux",
    bossCaption: "Boss au niveau 30",
    worlds: {
      culture: { name: "Cap Culture", tagline: "Culture générale, de l'art au sport." },
      words: { name: "Forêt des Mots", tagline: "Vocabulaire, expressions, étymologies." },
      logic: { name: "Tour Logique", tagline: "Raisonnement, déductions, énigmes." },
    },
  },
  tools: {
    eyebrow: "Pour aller plus loin",
    title: "Sept outils pour tes vraies révisions.",
    intro:
      "Réservés à Revizio Plus. Aperçu accessible à tous depuis l'app.",
    includedLabel: "Inclus",
    brainsLabel: (n) => `${n} cerveau${n > 1 ? "x" : ""}`,
    items: {
      decoder: { name: "Décodeur", tagline: "Analyse une photo de cours et obtiens des widgets explicatifs.", cost: "5" },
      memo: { name: "Mémo structuré", tagline: "Une fiche riche multi-sections, prête à réviser.", cost: "10" },
      exam: { name: "Examen blanc", tagline: "Un quiz long format, noté.", cost: "10" },
      courseQuiz: { name: "Quiz sur cours", tagline: "Un quiz ciblé sur l'un de tes cours.", cost: "3" },
      smartNotifs: { name: "Notifications intelligentes", tagline: "Une banque de rappels personnalisés à tes horaires.", cost: "5" },
      smartPlan: { name: "Plan intelligent", tagline: "Un planning de révision qui s'adapte à ton avancée.", cost: "inclus" },
      customAdventure: { name: "Aventure personnalisée", tagline: "Un mini-monde de 10 niveaux sur le thème que tu choisis.", cost: "5" },
    },
  },
  progression: {
    eyebrow: "Une progression qui se voit",
    title: "Ton niveau, tes vies, ta série. Tout est visible.",
    stats: {
      xp: { label: "XP", body: "S'accumule à chaque niveau réussi. Multiplier ×1.25 avec Plus." },
      lives: { label: "Vies", body: "5 vies en Free, 8 en Plus. Régénération automatique." },
      streak: { label: "Série", body: "Une session de 10 minutes par jour suffit pour l'entretenir." },
    },
  },
  daily: {
    eyebrow: "Tous les jours, ou quand tu veux",
    title: "Un défi quotidien. Une aventure perso.",
    daily: {
      name: "Défi du jour",
      body: "Un niveau frais chaque jour. Trois étoiles à décrocher. Les brains gagnés ne sont pas plafonnés.",
    },
    custom: {
      name: "Mini-aventure perso",
      body: "10 niveaux sur le thème que tu choisis, pour 5 cerveaux. 1 par jour en Free, 5 par jour en Plus.",
    },
  },
  plans: {
    eyebrow: "Deux plans. Pas plus.",
    title: "Free pour découvrir. Plus pour pousser.",
    free: {
      name: "Free",
      price: "0 €",
      cadence: "pour toujours",
      promise: "Un vrai tier permanent.",
      features: [
        "Aventure 90 niveaux intégrale",
        "Défi du jour",
        "Tous les jeux accessibles (1 cerveau)",
        "Brains gagnables via le jeu (60/mois max)",
        "5 vies — 1 régénérée toutes les 30 min",
        "Aperçu des outils Premium",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "5,99 €",
      cadence: "par mois",
      priceYear: "49,99 €",
      cadenceYear: "par an (−30 %)",
      promise: "Les outils Premium et 200 brains chaque mois.",
      tag: "Le plus utile",
      features: [
        "200 brains cumulatifs chaque mois",
        "Tous les outils Premium",
        "XP ×1.25",
        "8 vies — 1 régénérée toutes les 15 min",
        "Timers ÷2 sur l'Aventure",
        "Mini-aventure perso 5/jour",
      ],
    },
    explainer: {
      title: "Important",
      body:
        "L'abonnement donne accès aux outils. Les brains sont une monnaie de consommation pour générer du contenu IA. Les packs de cerveaux disponibles dans l'app rechargent cette consommation — ils ne débloquent jamais l'accès Plus.",
    },
    fineprint:
      "Renouvellement automatique géré par l'App Store. Résiliable à tout moment depuis tes réglages Apple. Les achats sont synchronisés via RevenueCat.",
  },
  trust: {
    eyebrow: "Sans piège",
    title: "On joue franc-jeu.",
    items: [
      { title: "Sans publicité", body: "Aucun bandeau, aucune vente de données." },
      { title: "Sans tracking", body: "Pas de Mixpanel, Amplitude, Firebase. Aucun cookie web." },
      { title: "Données en Europe", body: "Hébergées chez Supabase, région eu-west-1." },
      { title: "Sans mot de passe", body: "Connexion par Apple, Google, code email ou invité." },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout ce qu'on nous demande souvent.",
    items: [
      {
        q: "Sur quelles plateformes ?",
        a: "Revizio est disponible sur iOS dès maintenant. La version Android arrive bientôt.",
      },
      {
        q: "Quelle différence entre Free et Plus ?",
        a: "Free donne accès intégral à l'Aventure (90 niveaux) et aux 8 jeux IA, avec des brains gagnables via le jeu jusqu'à 60 par mois. Plus ajoute 200 brains cumulatifs chaque mois, tous les outils Premium, un multiplicateur XP ×1.25, des timers divisés par deux et une mini-aventure perso à volonté.",
      },
      {
        q: "Comment restaurer mes achats ?",
        a: "Ouvre l'app, va dans Réglages puis Restaurer mes achats. Les transactions Apple sont rejouées via RevenueCat.",
      },
      {
        q: "Comment supprimer mon compte ?",
        a: "Réglages → Mon compte → Supprimer mon compte. La suppression est atomique. Détails complets sur la page Supprimer mon compte.",
      },
      {
        q: "Mes contenus IA sont-ils privés ?",
        a: "Oui. Chaque génération est strictement liée à ton compte. Aucun partage entre utilisateurs, aucune réutilisation à des fins commerciales.",
      },
    ],
    seeMore: "Toutes les questions →",
  },
  cta: {
    title: "Choisis un sujet. Revizio fabrique le jeu.",
    body:
      "Tu peux commencer en mode invité, sans mot de passe, en moins d'une minute.",
    supportLine: (email) => `Une question ? Écris à ${email}.`,
  },
  footer: {
    productHeading: "Produit",
    legalHeading: "Légal",
    helpHeading: "Aide",
    home: "Accueil",
    support: "Support",
    privacy: "Confidentialité",
    terms: "Conditions",
    deleteAccount: "Supprimer mon compte",
    contactSupport: "Écrire au support",
    iosAvailable: "Disponible sur iOS. Bientôt sur Android.",
    rights: "Tous droits réservés.",
    langLabel: "Langue",
  },
  legal: {
    backHome: "← Retour à l'accueil",
    lastUpdated: (date) => `Dernière mise à jour : ${date}`,
  },
  privacy: {} as any,
  terms: {} as any,
  support: {} as any,
  deleteAccount: {} as any,
};
```

Note : les champs `privacy`, `terms`, `support`, `deleteAccount` sont stub. Ils seront complétés dans les Tasks 14–17 quand on rédigera chaque page.

- [ ] **Step 3: Squelette EN miroir**

Fichier `lib/i18n/en.ts` — copier la structure de FR avec tous les strings traduits. Important : taglines courtes, ton aligné, headlines fortes.

```typescript
import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    homeTitle: "Revizio — Learn by playing",
    homeDescription:
      "8 AI games generated from a topic or one of your courses. A 90-level adventure. A daily challenge. On iOS.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    supportTitle: "Support",
    deleteAccountTitle: "Delete My Account",
  },
  nav: { games: "Games", adventure: "Adventure", plans: "Plans", download: "Download" },
  hero: {
    badge: "No ads — no tracking",
    headlineLine1: "Learn whatever you want.",
    headlineLine2: "By playing.",
    subtitle:
      "8 AI games generated from a topic or one of your courses. A 90-level adventure. A daily challenge. On iOS.",
    ctaSecondary: "See the games",
  },
  games: {
    eyebrow: "8 games generated from your topic",
    title: "Pick a topic. We build the game.",
    intro:
      "Every game is built on the fly from any topic or one of your courses. A round costs one brain.",
    cost: "1 brain",
    items: {
      quiz: { name: "Quiz", tagline: "15 questions on anything." },
      hangman: { name: "Hangman", tagline: "10 words to guess, with hints." },
      bingo: { name: "Bingo", tagline: "A 12-term grid you hear and find." },
      crossword: { name: "Crossword", tagline: "A grid built on your topic." },
      trueFalse: { name: "True/False Rush", tagline: "12 claims, true or false, fast." },
      tri: { name: "Quick Sort", tagline: "10 cards to drop into the right buckets." },
      chrono: { name: "Chrono Ranking", tagline: "7 to 9 events to put back in order." },
      memo: { name: "Memo Duo", tagline: "6 to 15 pairs to find." },
    },
  },
  adventure: {
    eyebrow: "A 90-level adventure",
    title: "Three worlds. Thirty levels each.",
    intro:
      "Each level scores 1 to 3 stars. A chest every 5 levels, a boss at the end of every world.",
    levelsLabel: "30 levels",
    freeBadge: "Free — open to everyone",
    starsCaption: "1 to 3 stars per level",
    chestsCaption: "Chests every 5 levels",
    bossCaption: "Boss at level 30",
    worlds: {
      culture: { name: "Cap Culture", tagline: "General knowledge, from art to sports." },
      words: { name: "Forest of Words", tagline: "Vocabulary, idioms, etymologies." },
      logic: { name: "Logic Tower", tagline: "Reasoning, deductions, puzzles." },
    },
  },
  tools: {
    eyebrow: "Take it further",
    title: "Seven tools for real study.",
    intro: "Reserved for Revizio Plus. Preview available to everyone in the app.",
    includedLabel: "Included",
    brainsLabel: (n) => `${n} brain${n > 1 ? "s" : ""}`,
    items: {
      decoder: { name: "Decoder", tagline: "Photograph a course page and get explanatory widgets.", cost: "5" },
      memo: { name: "Structured memo", tagline: "A rich multi-section study sheet, ready to review.", cost: "10" },
      exam: { name: "Mock exam", tagline: "A long-form quiz, graded.", cost: "10" },
      courseQuiz: { name: "Course quiz", tagline: "A quiz focused on one of your courses.", cost: "3" },
      smartNotifs: { name: "Smart notifications", tagline: "A bank of personalized reminders, at your hours.", cost: "5" },
      smartPlan: { name: "Smart plan", tagline: "An adaptive review schedule that follows your progress.", cost: "included" },
      customAdventure: { name: "Custom adventure", tagline: "A 10-level mini-world on the topic you choose.", cost: "5" },
    },
  },
  progression: {
    eyebrow: "Progress that shows",
    title: "Your level, your lives, your streak. All visible.",
    stats: {
      xp: { label: "XP", body: "Accumulates with each level cleared. ×1.25 multiplier with Plus." },
      lives: { label: "Lives", body: "5 in Free, 8 in Plus. Auto-regen." },
      streak: { label: "Streak", body: "A 10-minute session a day keeps it alive." },
    },
  },
  daily: {
    eyebrow: "Every day, or whenever",
    title: "A daily challenge. A custom adventure.",
    daily: {
      name: "Daily challenge",
      body: "A fresh level every day. Three stars to grab. The brains you earn here aren't capped.",
    },
    custom: {
      name: "Custom mini-adventure",
      body: "10 levels on the topic you pick, for 5 brains. 1 per day in Free, 5 per day in Plus.",
    },
  },
  plans: {
    eyebrow: "Two plans. That's it.",
    title: "Free to discover. Plus to go further.",
    free: {
      name: "Free",
      price: "€0",
      cadence: "forever",
      promise: "A real, permanent tier.",
      features: [
        "Full 90-level Adventure",
        "Daily challenge",
        "All 8 games (1 brain each)",
        "Earnable brains via play (60/month cap)",
        "5 lives — 1 regens every 30 min",
        "Preview of Premium tools",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "€5.99",
      cadence: "per month",
      priceYear: "€49.99",
      cadenceYear: "per year (−30%)",
      promise: "Premium tools and 200 brains every month.",
      tag: "Most useful",
      features: [
        "200 brains, cumulative every month",
        "All Premium tools",
        "×1.25 XP",
        "8 lives — 1 regens every 15 min",
        "Adventure timers ÷2",
        "Custom mini-adventure 5/day",
      ],
    },
    explainer: {
      title: "Important",
      body:
        "The subscription gives access to tools. Brains are a consumption currency to generate AI content. Brain packs available in the app top up that consumption — they never unlock Plus access.",
    },
    fineprint:
      "Auto-renews through the App Store. Cancel any time from your Apple settings. Purchases are synced via RevenueCat.",
  },
  trust: {
    eyebrow: "No tricks",
    title: "We play fair.",
    items: [
      { title: "No ads", body: "No banners, no data sales." },
      { title: "No tracking", body: "No Mixpanel, Amplitude, Firebase. No web cookies." },
      { title: "Data in Europe", body: "Hosted on Supabase, eu-west-1 region." },
      { title: "No password", body: "Sign in with Apple, Google, email code or guest." },
    ],
  },
  faq: {
    eyebrow: "Frequent questions",
    title: "What people ask most.",
    items: [
      {
        q: "What platforms?",
        a: "Revizio is available on iOS right now. Android is coming soon.",
      },
      {
        q: "What's the difference between Free and Plus?",
        a: "Free gives full access to the Adventure (90 levels) and all 8 AI games, with up to 60 brains earnable per month via play. Plus adds 200 cumulative brains per month, all Premium tools, an ×1.25 XP multiplier, halved adventure timers and unlimited custom mini-adventures.",
      },
      {
        q: "How do I restore purchases?",
        a: "In the app, go to Settings → Restore my purchases. Apple transactions are replayed via RevenueCat.",
      },
      {
        q: "How do I delete my account?",
        a: "Settings → My account → Delete my account. The deletion is atomic. Full details on the Delete My Account page.",
      },
      {
        q: "Are my AI contents private?",
        a: "Yes. Each generation is strictly tied to your account. Nothing is shared between users, nothing is reused commercially.",
      },
    ],
    seeMore: "See all questions →",
  },
  cta: {
    title: "Pick a topic. Revizio builds the game.",
    body: "You can start as a guest, with no password, in under a minute.",
    supportLine: (email) => `Got a question? Email ${email}.`,
  },
  footer: {
    productHeading: "Product",
    legalHeading: "Legal",
    helpHeading: "Help",
    home: "Home",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    deleteAccount: "Delete account",
    contactSupport: "Email support",
    iosAvailable: "Available on iOS. Android coming soon.",
    rights: "All rights reserved.",
    langLabel: "Language",
  },
  legal: { backHome: "← Back to home", lastUpdated: (date) => `Last updated: ${date}` },
  privacy: {} as any,
  terms: {} as any,
  support: {} as any,
  deleteAccount: {} as any,
};
```

- [ ] **Step 4: Helper d'accès**

Fichier `lib/i18n/index.ts` :

```typescript
import type { Lang } from "./types";
import { fr } from "./fr";
import { en } from "./en";

export { fr, en };
export type { Lang, Dict } from "./types";

const dicts = { fr, en };

export function getDict(lang: Lang) {
  return dicts[lang];
}

export function altLangHref(currentPath: string, currentLang: Lang): { lang: Lang; href: string } {
  if (currentLang === "fr") {
    return { lang: "en", href: "/en" + (currentPath === "/" ? "" : currentPath) };
  }
  const stripped = currentPath.replace(/^\/en/, "") || "/";
  return { lang: "fr", href: stripped };
}
```

- [ ] **Step 5: Vérifier compile + commit**

Run: `npx tsc --noEmit`
Expected: no error related to the new files (existing errors unrelated are OK at this point).

```bash
git add lib/i18n/
git commit -m "feat(i18n): add typed FR/EN dictionary scaffold"
```

---

### Task 2 : Mettre à jour `lib/site.ts`

**Files:**
- Modify: `lib/site.ts`

- [ ] **Step 1: Réécrire la config**

Remplacer le contenu complet par :

```typescript
export const site = {
  name: "Revizio",
  domain: "revizioapp.com",
  url: "https://revizioapp.com",
  supportEmail: "support@revizioapp.com",
  privacyEmail: "support@revizioapp.com",
  legalEntity: "Revizio App",
  legalForm: "Société",
  legalAddress: "31700 Blagnac, France",
  legalCountry: "France",
  supportDelay: "sous 3 jours ouvrés",
  appStoreUrl: "https://apps.apple.com/us/app/revizio/id6761366726",
  playStoreUrl: null as string | null,
  androidComingSoon: true,
  lastUpdated: "12/05/2026",
  locale: "fr_FR",
  language: "fr",
  tagline: "Apprends en jouant",
  description:
    "Revizio transforme un thème ou un cours en jeu IA en quelques secondes. 8 jeux, une aventure de 90 niveaux, un défi par jour. Sur iOS.",
  shortDescription:
    "Apprends en jouant. 8 jeux IA + aventure de 90 niveaux. Sur iOS.",
  keywords: [
    "Revizio",
    "application apprentissage",
    "jeux IA éducatifs",
    "quiz IA",
    "pendu",
    "bingo apprentissage",
    "mots croisés",
    "aventure éducative",
    "apprendre en jouant",
    "culture générale",
    "app étudiants",
    "iOS apprentissage",
  ],
  // Legacy deep-links from the app — kept for redirects
  legalLinks: {
    privacy: "/privacy",
    terms: "/terms",
    support: "/support",
    deleteAccount: "/delete-account",
  },
};
```

- [ ] **Step 2: Vérifier compile + commit**

Run: `npx tsc --noEmit`
Expected: errors will pop in pages that reference `subscriptions` in `legalLinks` — that's expected; pages will be rewritten in later tasks.

```bash
git add lib/site.ts
git commit -m "chore(site): update site config for V2 (Apprends en jouant, V14 pricing)"
```

---

### Task 3 : Nettoyer les routes obsolètes & assets

**Files:**
- Delete: `app/outils/page.tsx`, `app/outils/` dir
- Delete: `app/faq/page.tsx`, `app/faq/` dir
- Delete: `app/subscriptions/page.tsx`, `app/subscriptions/` dir
- Delete: `public/images/feature-fiche.png`, `feature-exam.png`, `feature-notif.png`, `feature-quiz.webp`, `feature-scan.webp`, `feature-bingo.webp`, `feature-crossword.png`, `feature-hangman.png`, `feature-memo-structured.png`
- Delete: `public/images/mascot-fire.webp`, `mascot-focus.webp`, `mascot-hello.webp`, `mascot-max.webp`, `mascot-rewards.webp`, `mascot-understand.webp`, `hero-mascot-rewards.webp`, `onboarding.webp`

- [ ] **Step 1: Supprimer les dossiers de routes obsolètes**

```bash
rm -rf app/outils app/faq app/subscriptions
```

- [ ] **Step 2: Supprimer les anciens assets**

```bash
rm public/images/feature-fiche.png public/images/feature-exam.png public/images/feature-notif.png public/images/feature-quiz.webp public/images/feature-scan.webp public/images/feature-bingo.webp public/images/feature-crossword.png public/images/feature-hangman.png public/images/feature-memo-structured.png public/images/mascot-fire.webp public/images/mascot-focus.webp public/images/mascot-hello.webp public/images/mascot-max.webp public/images/mascot-rewards.webp public/images/mascot-understand.webp public/images/hero-mascot-rewards.webp public/images/onboarding.webp
```

- [ ] **Step 3: Garder `logo.webp`** (utilisé par footer existant — sera remplacé en Task 4)

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove obsolete routes and assets from V1"
```

---

### Task 4 : Importer les nouveaux assets visuels

**Files:**
- Create: `public/images/logo-revizio.webp` ← `visuals/New folder/logo-revizio.webp`
- Create: `public/images/mascot-hero.webp` ← `visuals/New folder/mascotte.webp`
- Create: `public/images/daily-mascot.webp` ← `visuals/New folder/mascot-today-01.webp`
- Create: `public/images/games/quiz/mascot.webp` ← `visuals/quiz_v2/success.webp`
- Create: `public/images/games/hangman/mascot.webp` ← `visuals/hangman_v2/success.webp`
- Create: `public/images/games/bingo/mascot.webp` ← `visuals/bingo_v5/success.webp`
- Create: `public/images/games/crossword/mascot.webp` ← `visuals/crossword_v2/success.webp`
- Create: `public/images/games/true-false/mascot.webp` ← `visuals/true_false_rush/mascot.webp`
- Create: `public/images/games/tri/mascot.webp` ← `visuals/tri_express/mascot.webp`
- Create: `public/images/games/chrono/mascot.webp` ← `visuals/classement_chrono/mascot.webp`
- Create: `public/images/games/memo/mascot.webp` ← `visuals/memo_duo/mascot.webp`

- [ ] **Step 1: Créer la structure de dossiers**

```bash
mkdir -p public/images/games/quiz public/images/games/hangman public/images/games/bingo public/images/games/crossword public/images/games/true-false public/images/games/tri public/images/games/chrono public/images/games/memo
```

- [ ] **Step 2: Copier le logo + mascotte hero + daily**

```bash
cp "visuals/New folder/logo-revizio.webp" public/images/logo-revizio.webp
cp "visuals/New folder/mascotte.webp" public/images/mascot-hero.webp
cp "visuals/New folder/mascot-today-01.webp" public/images/daily-mascot.webp
```

- [ ] **Step 3: Copier les 8 mascottes de jeux**

```bash
cp visuals/quiz_v2/success.webp public/images/games/quiz/mascot.webp
cp visuals/hangman_v2/success.webp public/images/games/hangman/mascot.webp
cp visuals/bingo_v5/success.webp public/images/games/bingo/mascot.webp
cp visuals/crossword_v2/success.webp public/images/games/crossword/mascot.webp
cp visuals/true_false_rush/mascot.webp public/images/games/true-false/mascot.webp
cp visuals/tri_express/mascot.webp public/images/games/tri/mascot.webp
cp visuals/classement_chrono/mascot.webp public/images/games/chrono/mascot.webp
cp visuals/memo_duo/mascot.webp public/images/games/memo/mascot.webp
```

- [ ] **Step 4: Vérifier que tous les fichiers existent**

```bash
ls -la public/images/games/*/mascot.webp public/images/mascot-hero.webp public/images/logo-revizio.webp public/images/daily-mascot.webp
```

Expected : 11 fichiers listés.

- [ ] **Step 5: Commit**

```bash
git add public/images/
git commit -m "feat(assets): import V2 mascots (hero, 8 games, daily, logo)"
```

---

### Task 5 : Réécrire `tailwind.config.ts` avec la palette V2

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Remplacer le contenu complet par la palette V2**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FBFAF7",
        "background-strong": "#F5F4EF",
        ink: "#0F1115",
        text: {
          DEFAULT: "#1F2733",
          primary: "#0F1115",
          body: "#1F2733",
          muted: "#5B6472",
          secondary: "#5B6472",
        },
        line: "#E7E5DF",
        surface: { DEFAULT: "#FFFFFF", soft: "#F5F4EF" },
        accent: { DEFAULT: "#F26B3A", deep: "#D95426", soft: "#FFE6D9" },
        gold: { DEFAULT: "#D4A24C", soft: "#FAEED4" },
        success: { DEFAULT: "#22C55E", soft: "#DCFCE7" },
        warning: { DEFAULT: "#F59E0B", soft: "#FEF3C7" },
        danger: { DEFAULT: "#EF4444", soft: "#FEE2E2" },
        // Game palettes (8 games) — { tint, tintStrong, DEFAULT, deep }
        quiz: { tint: "#EEF2FF", tintStrong: "#E0E7FF", DEFAULT: "#4F46E5", deep: "#3730A3" },
        hangman: { tint: "#F5F3FF", tintStrong: "#EDE9FE", DEFAULT: "#7C3AED", deep: "#5B21B6" },
        bingo: { tint: "#FDF2F8", tintStrong: "#FCE7F3", DEFAULT: "#E11D7A", deep: "#9D174D" },
        crossword: { tint: "#FFFBEB", tintStrong: "#FEF3C7", DEFAULT: "#D97706", deep: "#92400E" },
        trueFalse: { tint: "#FEF2F2", tintStrong: "#FEE2E2", DEFAULT: "#DC2626", deep: "#991B1B" },
        tri: { tint: "#F0FDFA", tintStrong: "#CCFBF1", DEFAULT: "#0D9488", deep: "#115E59" },
        chrono: { tint: "#FFF7ED", tintStrong: "#FFEDD5", DEFAULT: "#C2410C", deep: "#7C2D12" },
        memo: { tint: "#ECFDF5", tintStrong: "#D1FAE5", DEFAULT: "#059669", deep: "#065F46" },
        // World palettes (Adventure) — { tint, DEFAULT, deep }
        culture: { tint: "#ECFEFF", DEFAULT: "#0891B2", deep: "#155E75" },
        words: { tint: "#ECFDF5", DEFAULT: "#10B981", deep: "#065F46" },
        logic: { tint: "#EEF2FF", DEFAULT: "#4338CA", deep: "#312E81" },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: { lg: "14px", xl: "18px", "2xl": "22px", "3xl": "28px" },
      boxShadow: {
        card:
          "0 18px 40px -24px rgba(15, 17, 21, 0.18), 0 2px 8px -4px rgba(15, 17, 21, 0.06)",
        soft: "0 8px 24px -12px rgba(15, 17, 21, 0.12)",
      },
      maxWidth: { container: "1200px", prose: "72ch" },
    },
  },
  plugins: [],
};

export default config;
```

Note importante : Tailwind 3 ne lit pas les noms en camelCase comme `trueFalse` directement — il faut utiliser `true-false`. Corriger ci-dessus :

```typescript
"true-false": { tint: "#FEF2F2", tintStrong: "#FEE2E2", DEFAULT: "#DC2626", deep: "#991B1B" },
```

Et dans tous les usages : `bg-true-false-tint`, `text-true-false-deep`, etc.

- [ ] **Step 2: Mettre à jour `app/globals.css` si nécessaire**

Lire le fichier d'abord :

```bash
cat app/globals.css
```

Si des utility classes référencent `accent` (#4D8DFF) en valeur littérale, les retirer ou les laisser — `bg-accent` etc. continueront de fonctionner via la nouvelle palette.

- [ ] **Step 3: Vérifier que le build n'explose pas**

Run: `npm run build`
Expected : peut échouer sur des références à `memovisuel`, `memostruct`, `exam`, `notifs`, `bingo`, etc. dans les pages existantes — c'est attendu (pages réécrites plus tard). Si ça bloque, sauter à Task 7 (réécriture home minimale) avant.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat(design): rebuild Tailwind palette around brand orange + 8 game colors + 3 worlds"
```

---

### Task 6 : Ajouter Geist font + mise à jour `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Importer Geist via next/font**

Au début de `app/layout.tsx`, ajouter :

```typescript
import { GeistSans } from "geist/font/sans";
```

Si l'import échoue (paquet non installé), utiliser :

```typescript
import { Inter } from "next/font/google";
const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
```

Inter est dispo nativement et a un look proche. On reste sur Inter pour ne pas ajouter une dépendance.

- [ ] **Step 2: Appliquer la variable de font au `<html>`**

Remplacer `<html lang="fr" dir="ltr">` par :

```tsx
<html lang="fr" dir="ltr" className={geistSans.variable}>
```

- [ ] **Step 3: Mettre à jour les `metadata.icons`**

Remplacer toutes les références à `/images/mascot-hello.webp` par `/images/logo-revizio.webp` (mascot-hello a été supprimé).

```typescript
icons: {
  icon: [{ url: "/images/logo-revizio.webp", type: "image/webp" }],
  apple: "/images/logo-revizio.webp",
},
```

- [ ] **Step 4: Mettre à jour les titles/descriptions pour V2**

```typescript
title: {
  default: `${site.name} — ${site.tagline}`,
  template: `%s · ${site.name}`,
},
description: site.description,
```

(Pas de changement structurel, juste s'assurer que `site.tagline` est bien "Apprends en jouant" — déjà fait en Task 2.)

- [ ] **Step 5: Mettre à jour `viewport.themeColor`**

Remplacer `themeColor: "#EEF4F8"` par `themeColor: "#FBFAF7"`.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(layout): wire Geist-via-Inter font + V2 theme color + new icon"
```

---

## Phase 1 — Composants partagés

### Task 7 : Refonte `Header.tsx` (lang-aware)

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Réécrire le composant pour accepter `lang`**

```typescript
"use client";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang: Lang };

export function Header({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href={prefix || "/"}
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — ${t.footer.home}`}
        >
          <Image
            src="/images/logo-revizio.webp"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-lg object-contain"
          />
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link href={`${prefix}/#games`} className="text-text-muted hover:text-ink">
            {t.nav.games}
          </Link>
          <Link href={`${prefix}/#adventure`} className="text-text-muted hover:text-ink">
            {t.nav.adventure}
          </Link>
          <Link href={`${prefix}/#plans`} className="text-text-muted hover:text-ink">
            {t.nav.plans}
          </Link>
        </nav>
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-4 !py-2"
        >
          {t.nav.download}
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Note pour `container-x` et `btn-primary`**

Ces classes viennent de `app/globals.css`. Vérifier qu'elles existent et les conserver. Sinon ajouter en Task 8.

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat(header): lang-aware nav, logo, App Store CTA"
```

---

### Task 8 : Refonte `Footer.tsx` (lang switch + colonnes)

**Files:**
- Modify: `components/Footer.tsx`
- Create: `components/LanguageSwitch.tsx`

- [ ] **Step 1: Créer `LanguageSwitch.tsx`**

```typescript
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { altLangHref } from "@/lib/i18n";

export function LanguageSwitch({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname() || "/";
  const { lang, href } = altLangHref(pathname, currentLang);
  const labels = { fr: "Français", en: "English" } as const;

  return (
    <div className="inline-flex items-center gap-2 text-xs text-text-muted">
      <span className="uppercase tracking-wider">
        {currentLang === "fr" ? "Langue" : "Language"}
      </span>
      <span className="text-ink">{labels[currentLang]}</span>
      <span aria-hidden>/</span>
      <Link href={href} className="text-text-muted underline-offset-2 hover:text-ink hover:underline">
        {labels[lang]}
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Réécrire `Footer.tsx`**

```typescript
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={prefix || "/"} className="flex items-center gap-2 font-semibold">
              <Image
                src="/images/logo-revizio.webp"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-contain"
              />
              <span className="text-lg text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-muted">{t.meta.homeDescription}</p>
            <p className="mt-4 text-xs text-text-muted">{t.footer.iosAvailable}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.productHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={prefix || "/"}>
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <a
                  className="text-text-muted hover:text-ink"
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.nav.download}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.helpHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/support`}>
                  {t.footer.support}
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/delete-account`}>
                  {t.footer.deleteAccount}
                </Link>
              </li>
              <li>
                <a className="text-text-muted hover:text-ink" href={`mailto:${site.supportEmail}`}>
                  {t.footer.contactSupport}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.legalHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/privacy`}>
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/terms`}>
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalEntity} — {t.footer.rights}
          </p>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx components/LanguageSwitch.tsx
git commit -m "feat(footer): lang-aware columns + FR/EN switch"
```

---

### Task 9 : Mettre à jour `app/layout.tsx` pour propager `lang`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Retirer Header/Footer du root layout**

`RootLayout` ne connaît pas la langue (server component sans accès au pathname). Solution : déplacer Header/Footer dans un layout par langue. Donc retirer ces composants de `app/layout.tsx` et ne garder que `<html>`, `<body>`, le `<main>`, et les scripts JSON-LD.

Nouveau `app/layout.tsx` :

```typescript
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: site.keywords,
  authors: [{ name: site.legalEntity, url: site.url }],
  creator: site.legalEntity,
  publisher: site.legalEntity,
  category: "education",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  icons: { icon: [{ url: "/images/logo-revizio.webp", type: "image/webp" }], apple: "/images/logo-revizio.webp" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalEntity,
  legalName: site.legalEntity,
  url: site.url,
  logo: `${site.url}/images/logo-revizio.webp`,
  email: site.supportEmail,
  address: { "@type": "PostalAddress", addressLocality: "Blagnac", postalCode: "31700", addressCountry: "FR" },
  contactPoint: [{ "@type": "ContactPoint", email: site.supportEmail, contactType: "customer support", availableLanguage: ["French", "English"] }],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: ["fr", "en"],
  publisher: { "@type": "Organization", name: site.legalEntity },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col bg-background text-text-body antialiased">
        {children}
        <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Créer `app/(fr)/layout.tsx` impossible avec App Router de cette manière**

Plus simple : créer un `SiteShell` client component que chaque page wrap. Mais on perd le SSR du Header. Alternative : route group `(fr)` est OK mais ne donne pas accès à `usePathname`.

**Décision** : Header et Footer prennent `lang` en prop, et chaque page top-level (`app/page.tsx`, `app/en/page.tsx`, `app/privacy/page.tsx`, `app/en/privacy/page.tsx`, etc.) les rend explicitement avec son `lang`.

Donc dans `app/page.tsx` : `<Header lang="fr" /> <main>...</main> <Footer lang="fr" />`. Pareil pour `app/en/page.tsx` avec `"en"`.

Pour éviter la répétition, créer un composant `SiteShell` :

Fichier `components/SiteShell.tsx` :

```typescript
import type { Lang } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx components/SiteShell.tsx
git commit -m "feat(layout): lang-agnostic root layout + SiteShell wrapper"
```

---

### Task 10 : Mettre à jour `app/globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Lire le contenu actuel**

```bash
cat app/globals.css
```

- [ ] **Step 2: Réécrire en gardant les utilities qui marchent et en ajustant les références à l'ancienne palette**

Contenu cible :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { -webkit-font-smoothing: antialiased; }
  body {
    @apply bg-background text-text-body font-sans;
    font-feature-settings: "ss01", "cv11";
  }
  ::selection { background: rgba(242, 107, 58, 0.25); }
}

@layer components {
  .container-x { @apply mx-auto w-full max-w-container px-5 sm:px-8; }
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-accent-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background;
  }
  .btn-ghost {
    @apply inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-ink shadow-card transition-all hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background;
  }
  .card {
    @apply rounded-2xl border border-line bg-surface p-6 shadow-card;
  }
  .pill-accent {
    @apply inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep;
  }
  .eyebrow {
    @apply text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep;
  }
}
```

- [ ] **Step 3: Vérifier que `npm run dev` démarre sans erreur**

Run: `npm run dev`
Expected : le serveur démarre. La home peut afficher des erreurs (référence à `memovisuel`, etc.) — c'est attendu, on les réglera en Task 11+.

`Ctrl+C` pour arrêter.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "feat(css): unify utilities on new orange brand + clean unused tokens"
```

---

### Task 11 : Composant `StoreButtons` (mise à jour mineure pour i18n)

**Files:**
- Modify: `components/StoreButtons.tsx`

- [ ] **Step 1: Ajouter prop `lang` (optionnelle)**

```typescript
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

type Props = {
  size?: "md" | "lg";
  layout?: "row" | "stack";
  variant?: "dark" | "light";
  lang?: Lang;
};

const labels = {
  fr: { downloadOn: "Télécharger sur", appStore: "App Store", androidSoon: "Android — bientôt", soonBadge: "Bientôt", playStore: "Google Play" },
  en: { downloadOn: "Download on", appStore: "App Store", androidSoon: "Android — soon", soonBadge: "Soon", playStore: "Google Play" },
};

export function StoreButtons({ size = "md", layout = "row", variant = "dark", lang = "fr" }: Props) {
  const isLg = size === "lg";
  const dimensions = isLg ? "px-6 py-3.5" : "px-5 py-3";
  const base =
    "inline-flex items-center gap-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const primary =
    variant === "dark" ? "bg-ink text-white hover:bg-[#1a1d24]" : "bg-white text-ink border border-line hover:border-accent";
  const playSoonBase =
    variant === "dark" ? "bg-white/70 text-ink/70 border border-line" : "bg-ink/5 text-ink/70 border border-line";
  const L = labels[lang];

  return (
    <div className={`flex flex-wrap gap-3 ${layout === "stack" ? "flex-col sm:flex-row" : "flex-row"}`}>
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${L.downloadOn} ${L.appStore}`}
        className={`${base} ${dimensions} ${primary}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.43 2.23-1.2 3.03-.83.86-2.2 1.52-3.3 1.43-.13-1.12.42-2.29 1.18-3.06.84-.87 2.27-1.52 3.32-1.4ZM20.5 17.27c-.5 1.16-.74 1.68-1.4 2.7-.92 1.42-2.22 3.19-3.84 3.2-1.44.02-1.81-.94-3.77-.93-1.96.01-2.36.95-3.8.93-1.62-.02-2.85-1.62-3.77-3.04C1.3 16.2.44 11 2.32 7.48c1.34-2.49 3.45-4.07 5.43-4.07 1.77 0 2.88 1 4.34 1 1.42 0 2.29-.99 4.33-.99 1.54 0 3.18.84 4.34 2.29-3.82 2.09-3.2 7.55.14 8.56-.35.98-.74 1.93-1.4 3.0Z" />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-70">{L.downloadOn}</span>
          <span className={`${isLg ? "text-base" : "text-sm"} font-semibold`}>{L.appStore}</span>
        </span>
      </a>
      <div
        role="note"
        aria-label={L.androidSoon}
        className={`${base} ${dimensions} ${playSoonBase} relative cursor-default select-none`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 opacity-60" aria-hidden>
          <path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3Z" fill="#34A853" />
          <path d="m17.2 12.9 2.9-1.7c.9-.5.9-1.4 0-1.9l-2.9-1.7-3.2 3.4 3.2 3.3Z" fill="#FBBC04" />
          <path d="M12.7 12 3.6 21.7c.4.4 1 .4 1.7 0l11-6.4-3.6-3.3Z" fill="#EA4335" />
          <path d="M12.7 12 16.3 8.7l-11-6.4c-.7-.4-1.3-.4-1.7 0L12.7 12Z" fill="#4285F4" />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-70">{L.androidSoon}</span>
          <span className={`${isLg ? "text-base" : "text-sm"} font-semibold`}>{L.playStore}</span>
        </span>
        <span className="ml-1 inline-flex items-center rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-deep">
          {L.soonBadge}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/StoreButtons.tsx
git commit -m "feat(store-buttons): support FR/EN labels via lang prop"
```

---

### Task 12 : Composants vitrine (GameCard, WorldCard, ToolCard, PlanCard, FaqAccordion)

**Files:**
- Create: `components/GameCard.tsx`
- Create: `components/WorldCard.tsx`
- Create: `components/ToolCard.tsx`
- Create: `components/PlanCard.tsx`
- Create: `components/FaqAccordion.tsx`

- [ ] **Step 1: `GameCard.tsx`**

```typescript
import Image from "next/image";

type GameColor = "quiz" | "hangman" | "bingo" | "crossword" | "true-false" | "tri" | "chrono" | "memo";

type Props = {
  color: GameColor;
  name: string;
  tagline: string;
  cost: string;
  mascotSrc: string;
  alt: string;
};

const colorClasses: Record<GameColor, { bg: string; pill: string; ring: string }> = {
  quiz: { bg: "bg-quiz-tint", pill: "bg-quiz-tintStrong text-quiz-deep", ring: "hover:ring-quiz/40" },
  hangman: { bg: "bg-hangman-tint", pill: "bg-hangman-tintStrong text-hangman-deep", ring: "hover:ring-hangman/40" },
  bingo: { bg: "bg-bingo-tint", pill: "bg-bingo-tintStrong text-bingo-deep", ring: "hover:ring-bingo/40" },
  crossword: { bg: "bg-crossword-tint", pill: "bg-crossword-tintStrong text-crossword-deep", ring: "hover:ring-crossword/40" },
  "true-false": { bg: "bg-true-false-tint", pill: "bg-true-false-tintStrong text-true-false-deep", ring: "hover:ring-true-false/40" },
  tri: { bg: "bg-tri-tint", pill: "bg-tri-tintStrong text-tri-deep", ring: "hover:ring-tri/40" },
  chrono: { bg: "bg-chrono-tint", pill: "bg-chrono-tintStrong text-chrono-deep", ring: "hover:ring-chrono/40" },
  memo: { bg: "bg-memo-tint", pill: "bg-memo-tintStrong text-memo-deep", ring: "hover:ring-memo/40" },
};

export function GameCard({ color, name, tagline, cost, mascotSrc, alt }: Props) {
  const c = colorClasses[color];
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all hover:-translate-y-1 hover:ring-2 ${c.ring}`}>
      <div className={`flex aspect-square items-center justify-center overflow-hidden ${c.bg}`}>
        <Image src={mascotSrc} alt={alt} width={400} height={400} className="h-3/4 w-3/4 object-contain" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{name}</h3>
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.pill}`}>{cost}</span>
        </div>
        <p className="text-sm text-text-muted">{tagline}</p>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: `WorldCard.tsx`**

```typescript
type WorldColor = "culture" | "words" | "logic";

type Props = { color: WorldColor; name: string; tagline: string; levelsLabel: string };

const colorClasses: Record<WorldColor, { bg: string; ink: string; border: string }> = {
  culture: { bg: "bg-culture-tint", ink: "text-culture-deep", border: "border-culture/30" },
  words: { bg: "bg-words-tint", ink: "text-words-deep", border: "border-words/30" },
  logic: { bg: "bg-logic-tint", ink: "text-logic-deep", border: "border-logic/30" },
};

export function WorldCard({ color, name, tagline, levelsLabel }: Props) {
  const c = colorClasses[color];
  return (
    <article className={`flex flex-col gap-3 rounded-3xl border ${c.border} ${c.bg} p-7`}>
      <span className={`inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${c.ink}`}>
        {levelsLabel}
      </span>
      <h3 className={`text-xl font-semibold ${c.ink}`}>{name}</h3>
      <p className="text-sm text-ink/80">{tagline}</p>
    </article>
  );
}
```

- [ ] **Step 3: `ToolCard.tsx`**

```typescript
type Props = { name: string; tagline: string; cost: string; isIncluded?: boolean; includedLabel: string; brainsLabel: (n: number) => string };

export function ToolCard({ name, tagline, cost, isIncluded, includedLabel, brainsLabel }: Props) {
  const pill = isIncluded ? "bg-success-soft text-success" : "bg-accent-soft text-accent-deep";
  const pillLabel = isIncluded ? includedLabel : brainsLabel(parseInt(cost, 10));
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/30">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{name}</h3>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${pill}`}>{pillLabel}</span>
      </div>
      <p className="text-sm text-text-muted">{tagline}</p>
    </article>
  );
}
```

- [ ] **Step 4: `PlanCard.tsx`**

```typescript
type Props = {
  name: string;
  price: string;
  cadence: string;
  priceYear?: string;
  cadenceYear?: string;
  promise: string;
  features: string[];
  tag?: string | null;
  highlight?: boolean;
};

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 10l4 4 8-8" />
      </svg>
    </span>
  );
}

export function PlanCard({ name, price, cadence, priceYear, cadenceYear, promise, features, tag, highlight }: Props) {
  const containerClass = highlight
    ? "border-accent/40 bg-gradient-to-br from-white via-white to-accent-soft/40 ring-2 ring-accent/15"
    : "border-line bg-white";
  return (
    <article className={`flex flex-col rounded-3xl border p-8 shadow-card ${containerClass}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-ink">{name}</h3>
        {tag && <span className="pill-accent">{tag}</span>}
      </div>
      <p className="mt-2 text-sm text-text-muted">{promise}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-ink">{price}</span>
        <span className="text-sm text-text-muted">{cadence}</span>
      </div>
      {priceYear && (
        <p className="mt-1 text-xs text-text-muted">
          ou {priceYear} {cadenceYear}
        </p>
      )}
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-text-body">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
```

- [ ] **Step 5: `FaqAccordion.tsx`**

```typescript
type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group p-6 open:bg-surface-soft">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
            {item.q}
            <span aria-hidden className="text-text-muted transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-text-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add components/
git commit -m "feat(components): GameCard, WorldCard, ToolCard, PlanCard, FaqAccordion"
```

---

## Phase 2 — Home

### Task 13 : Réécriture totale de `app/page.tsx` (home FR — 10 sections)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Réécrire toute la page**

Le code est long (10 sections). Le structurer ainsi :

```typescript
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import { StoreButtons } from "@/components/StoreButtons";
import { GameCard } from "@/components/GameCard";
import { WorldCard } from "@/components/WorldCard";
import { ToolCard } from "@/components/ToolCard";
import { PlanCard } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const lang = "fr" as const;
const t = getDict(lang);

export const metadata: Metadata = {
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  alternates: { canonical: "/", languages: { "fr-FR": "/", "en-US": "/en" } },
};

const games = [
  { color: "quiz" as const, key: "quiz" as const, src: "/images/games/quiz/mascot.webp" },
  { color: "hangman" as const, key: "hangman" as const, src: "/images/games/hangman/mascot.webp" },
  { color: "bingo" as const, key: "bingo" as const, src: "/images/games/bingo/mascot.webp" },
  { color: "crossword" as const, key: "crossword" as const, src: "/images/games/crossword/mascot.webp" },
  { color: "true-false" as const, key: "trueFalse" as const, src: "/images/games/true-false/mascot.webp" },
  { color: "tri" as const, key: "tri" as const, src: "/images/games/tri/mascot.webp" },
  { color: "chrono" as const, key: "chrono" as const, src: "/images/games/chrono/mascot.webp" },
  { color: "memo" as const, key: "memo" as const, src: "/images/games/memo/mascot.webp" },
];

const tools = [
  { key: "decoder" as const, isIncluded: false },
  { key: "memo" as const, isIncluded: false },
  { key: "exam" as const, isIncluded: false },
  { key: "courseQuiz" as const, isIncluded: false },
  { key: "smartNotifs" as const, isIncluded: false },
  { key: "smartPlan" as const, isIncluded: true },
  { key: "customAdventure" as const, isIncluded: false },
];

const mobileAppLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description: site.description,
  inLanguage: site.language,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", price: "5.99", priceCurrency: "EUR", availability: "https://schema.org/InStock", name: "Revizio Plus" },
  ],
  publisher: { "@type": "Organization", name: site.legalEntity, url: site.url },
  url: site.url,
  image: `${site.url}/opengraph-image`,
};

export default function HomePage() {
  return (
    <SiteShell lang={lang}>
      <Script id="ld-mobileapp" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-quiz/15 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-bingo/15 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-memo/12 blur-3xl" />
        </div>
        <div className="container-x relative pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="pill-accent">{t.hero.badge}</span>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
                {t.hero.headlineLine1}
                <br />
                <span className="text-accent-deep">{t.hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-body sm:text-xl">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <StoreButtons size="lg" lang={lang} />
                <Link href="#games" className="text-sm font-medium text-text-muted underline-offset-4 hover:text-ink hover:underline">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <Image src="/images/mascot-hero.webp" alt="" width={520} height={520} className="mx-auto h-auto w-full" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.games.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.games.title}</h2>
            <p className="mt-4 text-text-body">{t.games.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((g) => (
              <GameCard
                key={g.key}
                color={g.color}
                name={t.games.items[g.key].name}
                tagline={t.games.items[g.key].tagline}
                cost={t.games.cost}
                mascotSrc={g.src}
                alt={t.games.items[g.key].name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE */}
      <section id="adventure" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.adventure.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.adventure.title}</h2>
            <p className="mt-4 text-text-body">{t.adventure.intro}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <WorldCard color="culture" name={t.adventure.worlds.culture.name} tagline={t.adventure.worlds.culture.tagline} levelsLabel={t.adventure.levelsLabel} />
            <WorldCard color="words" name={t.adventure.worlds.words.name} tagline={t.adventure.worlds.words.tagline} levelsLabel={t.adventure.levelsLabel} />
            <WorldCard color="logic" name={t.adventure.worlds.logic.name} tagline={t.adventure.worlds.logic.tagline} levelsLabel={t.adventure.levelsLabel} />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <span>{t.adventure.starsCaption}</span>
            <span aria-hidden>·</span>
            <span>{t.adventure.chestsCaption}</span>
            <span aria-hidden>·</span>
            <span>{t.adventure.bossCaption}</span>
          </div>
          <p className="mt-6 text-center text-sm">
            <span className="inline-flex items-center rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">{t.adventure.freeBadge}</span>
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.tools.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.tools.title}</h2>
            <p className="mt-4 text-text-body">{t.tools.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tl) => (
              <ToolCard
                key={tl.key}
                name={t.tools.items[tl.key].name}
                tagline={t.tools.items[tl.key].tagline}
                cost={t.tools.items[tl.key].cost}
                isIncluded={tl.isIncluded}
                includedLabel={t.tools.includedLabel}
                brainsLabel={t.tools.brainsLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESSION */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.progression.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.progression.title}</h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
            {(["xp", "lives", "streak"] as const).map((k) => (
              <div key={k} className="card text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">{t.progression.stats[k].label}</p>
                <p className="mt-3 text-text-body">{t.progression.stats[k].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY + CUSTOM */}
      <section className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.daily.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.daily.title}</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-accent-soft/40 p-8 shadow-card">
              <div className="flex items-start gap-5">
                <Image src="/images/daily-mascot.webp" alt="" width={120} height={120} className="h-24 w-24 shrink-0 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-ink">{t.daily.daily.name}</h3>
                  <p className="mt-2 text-sm text-text-body">{t.daily.daily.body}</p>
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-quiz-tint p-8 shadow-card">
              <h3 className="text-xl font-semibold text-ink">{t.daily.custom.name}</h3>
              <p className="mt-2 text-sm text-text-body">{t.daily.custom.body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.plans.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.plans.title}</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
            <PlanCard name={t.plans.free.name} price={t.plans.free.price} cadence={t.plans.free.cadence} promise={t.plans.free.promise} features={t.plans.free.features} />
            <PlanCard name={t.plans.plus.name} price={t.plans.plus.price} cadence={t.plans.plus.cadence} priceYear={t.plans.plus.priceYear} cadenceYear={t.plans.plus.cadenceYear} promise={t.plans.plus.promise} features={t.plans.plus.features} tag={t.plans.plus.tag} highlight />
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">{t.plans.explainer.title}</p>
            <p className="mt-2 text-sm text-text-body">{t.plans.explainer.body}</p>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-text-muted">{t.plans.fineprint}</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.trust.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.trust.title}</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <h3 className="text-base font-semibold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm text-text-body">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.faq.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">{t.faq.title}</h2>
          </div>
          <div className="mt-12">
            <FaqAccordion items={t.faq.items} />
          </div>
          <p className="mt-6 text-center text-sm">
            <Link href="/support" className="text-accent-deep underline-offset-4 hover:underline">
              {t.faq.seeMore}
            </Link>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
        </div>
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl rounded-[36px] border border-line bg-white p-10 text-center shadow-card sm:p-14">
            <Image src="/images/mascot-hero.webp" alt="" width={120} height={120} className="mx-auto h-24 w-24 object-contain" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">{t.cta.title}</h2>
            <p className="mt-5 text-text-body">{t.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" lang={lang} />
            </div>
            <p className="mt-8 text-xs text-text-muted">{t.cta.supportLine(site.supportEmail)}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
```

- [ ] **Step 2: Vérifier le build**

Run: `npm run build`
Expected : home OK, pages légales encore en panne (Task 14+).

Si la build de la home fail, lire l'erreur et corriger (souvent : classe Tailwind manquante, image manquante).

- [ ] **Step 3: Vérifier visuellement**

Run: `npm run dev`
Ouvrir `http://localhost:3000`. Scroller. Vérifier que :
- Hero affiche bien la mascotte
- Les 8 jeux s'affichent dans la grille
- Les 3 mondes s'affichent
- Les 7 outils s'affichent
- Plans : Free + Plus avec encart explainer
- FAQ s'ouvre/se ferme
- CTA final fonctionne (lien App Store)

`Ctrl+C`.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): rebuild home FR around 10 V2 sections (games-led)"
```

---

## Phase 3 — Pages légales FR

### Task 14 : Réécrire `/privacy` FR

**Files:**
- Modify: `app/privacy/page.tsx`
- Modify: `lib/i18n/fr.ts`, `lib/i18n/en.ts`, `lib/i18n/types.ts` — ajouter sections privacy

- [ ] **Step 1: Ajouter le type `privacy` dans `types.ts`**

Remplacer `privacy: { /* ... */ };` par :

```typescript
privacy: {
  intro: string;
  controllerHeading: string;
  controllerBody: string;
  dataCollectedHeading: string;
  dataCollectedItems: Array<{ title: string; body: string }>;
  dataNotCollectedHeading: string;
  dataNotCollectedItems: string[];
  processorsHeading: string;
  processorsItems: Array<{ name: string; purpose: string }>;
  storageHeading: string;
  storageBody: string;
  retentionHeading: string;
  retentionBody: string;
  rightsHeading: string;
  rightsItems: Array<{ title: string; body: string }>;
  minorsHeading: string;
  minorsBody: string;
  securityHeading: string;
  securityBody: string;
  contactHeading: string;
  contactBody: (email: string) => string;
};
```

- [ ] **Step 2: Remplir `privacy` dans `fr.ts`**

```typescript
privacy: {
  intro:
    "Cette politique décrit comment Revizio collecte, utilise et protège tes données quand tu utilises l'application mobile.",
  controllerHeading: "Responsable du traitement",
  controllerBody:
    "Revizio App, 31700 Blagnac, France. Pour toute question relative à la protection des données, écris à support@revizioapp.com.",
  dataCollectedHeading: "Données collectées",
  dataCollectedItems: [
    { title: "Profil", body: "Identifiant (UUID), email (uniquement si connexion par code à 6 chiffres), provider d'auth, état d'onboarding, prénom affiché optionnel, langue choisie, objectif (Étudiant/Curieux)." },
    { title: "Progression", body: "Avancée dans l'Aventure (niveaux, étoiles, tentatives), XP et niveau, vies et timers, séries (streak)." },
    { title: "Contenu créé", body: "Cours et chapitres que tu crées toi-même, sessions de travail, génération IA (mémos, quiz, fiches)." },
    { title: "Économie", body: "Solde de cerveaux, transactions, historique des récompenses (idempotent et auditable)." },
    { title: "Préférences", body: "Préférences de notifications, affiliations." },
  ],
  dataNotCollectedHeading: "Données que nous ne collectons pas",
  dataNotCollectedItems: [
    "Aucune analytics tierce (Mixpanel, Amplitude, Firebase Analytics).",
    "Aucun cookie web (Revizio est une app native).",
    "Aucun device ID utilisé à des fins de tracking.",
    "Aucune adresse IP loggée à des fins business.",
    "Aucun crash report contenant des données personnelles.",
  ],
  processorsHeading: "Sous-traitants",
  processorsItems: [
    { name: "Supabase", purpose: "Base de données, authentification et stockage des médias. Région : eu-west-1." },
    { name: "OpenAI (via Edge Functions)", purpose: "Génération de contenu IA. Les textes envoyés sont les contenus que tu fournis (cours, photos OCR, thèmes), pas les données de profil. Conservation OpenAI : 30 jours maximum." },
    { name: "RevenueCat", purpose: "Gestion des abonnements et des achats. Identifiant anonymisé transmis." },
    { name: "Apple et Google", purpose: "Sign-in via id_token et transactions d'achat in-app." },
  ],
  storageHeading: "Stockage des médias",
  storageBody:
    "Les photos que tu envoies à l'outil Décodeur sont compressées (≤ 1 Mo) et stockées dans un bucket privé Supabase nommé revizio-media. Elles sont supprimées avec ton compte.",
  retentionHeading: "Durée de conservation",
  retentionBody:
    "Tes données sont conservées tant que ton compte existe. Lors de la suppression du compte, toutes les lignes liées à ton identifiant sont supprimées de manière atomique. Les journaux techniques anonymisés peuvent subsister 30 jours.",
  rightsHeading: "Tes droits",
  rightsItems: [
    { title: "Accès", body: "Réglages → Mon compte → Exporter mes données. Tu reçois un export JSON de toutes les tables liées à ton compte." },
    { title: "Rectification", body: "Modification du profil dans Réglages → Mon compte." },
    { title: "Suppression", body: "Réglages → Mon compte → Supprimer mon compte. Suppression atomique de toutes les rows et du stockage media." },
    { title: "Portabilité", body: "L'export JSON ci-dessus est portable et lisible." },
    { title: "Opposition", body: "Opt-out granulaire des notifications par canal dans les Réglages." },
    { title: "Réclamation", body: "Tu peux saisir la CNIL si tu estimes que tes droits ne sont pas respectés." },
  ],
  minorsHeading: "Mineurs",
  minorsBody:
    "Revizio ne propose aucune fonctionnalité spécifique aux moins de 13 ans. Pas de chat entre utilisateurs, pas de profil public, pas de social. Pour les mineurs, l'usage du compte familial Apple ou Google est recommandé.",
  securityHeading: "Sécurité",
  securityBody:
    "Toutes les tables sensibles sont protégées par Row Level Security côté Supabase. Le portefeuille de cerveaux et les transactions ne peuvent être modifiés que par des fonctions serveur signées. Aucun secret n'est stocké côté app.",
  contactHeading: "Contact",
  contactBody: (email) =>
    `Pour toute question relative à cette politique ou à la protection de tes données : ${email}.`,
},
```

- [ ] **Step 3: Remplir `privacy` dans `en.ts`** (traduction équivalente)

Suivre exactement la même structure, traduction en anglais. (Voir spec doc — section 5.1.)

- [ ] **Step 4: Réécrire `app/privacy/page.tsx`**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const lang = "fr" as const;
const t = getDict(lang);

export const metadata: Metadata = {
  title: t.meta.privacyTitle,
  description: t.privacy.intro,
  alternates: { canonical: "/privacy", languages: { "fr-FR": "/privacy", "en-US": "/en/privacy" } },
};

export default function PrivacyPage() {
  return (
    <SiteShell lang={lang}>
      <article className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-prose">
          <Link href="/" className="text-sm text-text-muted hover:text-ink">
            {t.legal.backHome}
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {t.meta.privacyTitle}
          </h1>
          <p className="mt-4 text-sm text-text-muted">{t.legal.lastUpdated(site.lastUpdated)}</p>
          <p className="mt-8 text-text-body">{t.privacy.intro}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.controllerHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.controllerBody}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.dataCollectedHeading}</h2>
          <ul className="mt-4 space-y-4">
            {t.privacy.dataCollectedItems.map((it) => (
              <li key={it.title}>
                <p className="font-semibold text-ink">{it.title}</p>
                <p className="text-text-body">{it.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.dataNotCollectedHeading}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-body">
            {t.privacy.dataNotCollectedItems.map((it) => <li key={it}>{it}</li>)}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.processorsHeading}</h2>
          <ul className="mt-4 space-y-4">
            {t.privacy.processorsItems.map((it) => (
              <li key={it.name}>
                <p className="font-semibold text-ink">{it.name}</p>
                <p className="text-text-body">{it.purpose}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.storageHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.storageBody}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.retentionHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.retentionBody}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.rightsHeading}</h2>
          <ul className="mt-4 space-y-4">
            {t.privacy.rightsItems.map((it) => (
              <li key={it.title}>
                <p className="font-semibold text-ink">{it.title}</p>
                <p className="text-text-body">{it.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.minorsHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.minorsBody}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.securityHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.securityBody}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.privacy.contactHeading}</h2>
          <p className="mt-4 text-text-body">{t.privacy.contactBody(site.privacyEmail)}</p>
        </div>
      </article>
    </SiteShell>
  );
}
```

- [ ] **Step 5: Vérifier**

Run: `npm run dev`, ouvrir `/privacy`. Vérifier que tout s'affiche.

- [ ] **Step 6: Commit**

```bash
git add lib/i18n/ app/privacy/page.tsx
git commit -m "feat(privacy): rewrite privacy page from V16 product summary (FR + EN dict)"
```

---

### Task 15 : Réécrire `/terms` FR

**Files:**
- Modify: `app/terms/page.tsx`
- Modify: `lib/i18n/types.ts`, `lib/i18n/fr.ts`, `lib/i18n/en.ts` — ajouter sections terms

- [ ] **Step 1: Ajouter le type `terms` dans `types.ts`**

```typescript
terms: {
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  accessVsConsumptionHeading: string;
  accessVsConsumptionBody: string;
  contactHeading: string;
  contactBody: (email: string) => string;
};
```

- [ ] **Step 2: Remplir `terms` dans `fr.ts`**

```typescript
terms: {
  intro:
    "Ces conditions encadrent ton usage de l'application Revizio. En utilisant Revizio, tu acceptes ces conditions.",
  sections: [
    { heading: "1. Service", body: "Revizio est une application mobile d'apprentissage par le jeu, distribuée sur iOS (et bientôt Android). Le service comprend une Aventure éditoriale, 8 jeux IA, un défi du jour, des outils Premium et une gestion de compte." },
    { heading: "2. Comptes", body: "La création d'un compte peut se faire via Apple, Google, un code à 6 chiffres reçu par email, ou en mode invité. Un compte invité peut être lié à un provider plus tard sans perte des données." },
    { heading: "3. Plans", body: "Deux plans : Free (gratuit, permanent, 5 vies, 60 brains/mois max gagnables via le jeu) et Revizio Plus (5,99 €/mois ou 49,99 €/an, 200 brains cumulatifs chaque mois, tous les outils Premium, 8 vies, XP ×1.25, timers ÷2)." },
    { heading: "5. Paiements", body: "Tous les achats (abonnements et packs de cerveaux) passent par l'App Store ou Google Play. La gestion des entitlements se fait via RevenueCat. Revizio ne traite jamais directement de moyens de paiement." },
    { heading: "6. Renouvellement et résiliation", body: "L'abonnement Plus se renouvelle automatiquement tant qu'il n'est pas annulé dans tes réglages Apple/Google. La résiliation prend effet à la fin de la période de facturation en cours." },
    { heading: "7. Restauration", body: "Réglages → Restaurer mes achats rejoue les transactions reçues côté Apple/Google via RevenueCat." },
    { heading: "8. Remboursements", body: "Les remboursements sont gérés selon les politiques d'Apple et de Google. Revizio ne traite pas les remboursements directement." },
    { heading: "9. Génération IA", body: "Les jeux et outils utilisent des modèles de génération. Le contenu généré peut comporter des imprécisions. Revizio ne garantit aucun résultat scolaire ni professionnel. Un Quality Gate côté serveur filtre les contenus à risque." },
    { heading: "10. Sessions et récompenses", body: "Une session d'apprentissage compte pour une récompense (XP, streak, brains) seulement si elle dure au moins 10 minutes." },
    { heading: "11. Modération", body: "Le contenu généré par un utilisateur reste strictement privé à son compte. Aucun partage utilisateur à utilisateur. Les prompts à risque (haine, harcèlement, contenu sexuel, automutilation) sont bloqués par filtre OpenAI avant traitement." },
    { heading: "12. Responsabilité", body: "Revizio fournit le service en l'état. L'éditeur ne saurait être tenu responsable d'une indisponibilité temporaire ou d'un usage non conforme. En cas de panne ou de bug bloquant, contacte le support." },
    { heading: "13. Droit applicable", body: "Droit français. En cas de litige, la juridiction du siège social de l'éditeur est compétente, sous réserve des dispositions impératives applicables aux consommateurs." },
  ],
  accessVsConsumptionHeading: "4. Accès vs. consommation — important",
  accessVsConsumptionBody:
    "L'abonnement Plus donne accès aux outils Premium. Les brains (cerveaux) sont une monnaie de consommation qui sert à générer du contenu IA. Les packs de cerveaux disponibles à l'achat dans l'app sont des consommables Apple/Google qui rechargent uniquement cette consommation. **Ils ne débloquent jamais l'accès Plus.** Cette distinction est centrale et explicite dans toute communication de Revizio.",
  contactHeading: "14. Contact",
  contactBody: (email) => `Pour toute question relative à ces conditions : ${email}.`,
},
```

- [ ] **Step 3: Remplir `terms` dans `en.ts`** (traduction équivalente, voir spec doc section 5.2)

- [ ] **Step 4: Réécrire `app/terms/page.tsx`**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const lang = "fr" as const;
const t = getDict(lang);

export const metadata: Metadata = {
  title: t.meta.termsTitle,
  description: t.terms.intro,
  alternates: { canonical: "/terms", languages: { "fr-FR": "/terms", "en-US": "/en/terms" } },
};

export default function TermsPage() {
  // Inject access-vs-consumption section into the right slot
  const sections = [
    ...t.terms.sections.slice(0, 3),
    { heading: t.terms.accessVsConsumptionHeading, body: t.terms.accessVsConsumptionBody },
    ...t.terms.sections.slice(3),
  ];

  return (
    <SiteShell lang={lang}>
      <article className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-prose">
          <Link href="/" className="text-sm text-text-muted hover:text-ink">{t.legal.backHome}</Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{t.meta.termsTitle}</h1>
          <p className="mt-4 text-sm text-text-muted">{t.legal.lastUpdated(site.lastUpdated)}</p>
          <p className="mt-8 text-text-body">{t.terms.intro}</p>
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mt-12 text-2xl font-semibold text-ink">{s.heading}</h2>
              <p className="mt-4 text-text-body">{s.body}</p>
            </section>
          ))}
          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.terms.contactHeading}</h2>
          <p className="mt-4 text-text-body">{t.terms.contactBody(site.supportEmail)}</p>
        </div>
      </article>
    </SiteShell>
  );
}
```

- [ ] **Step 5: Vérifier + commit**

```bash
npm run dev  # ouvrir /terms, vérifier
git add lib/i18n/ app/terms/page.tsx
git commit -m "feat(terms): rewrite terms page with explicit access-vs-consumption section (FR+EN dict)"
```

---

### Task 16 : Réécrire `/support` FR

**Files:**
- Modify: `app/support/page.tsx`
- Modify: `lib/i18n/types.ts`, `lib/i18n/fr.ts`, `lib/i18n/en.ts` — ajouter sections support

- [ ] **Step 1: Ajouter le type `support` dans `types.ts`**

```typescript
support: {
  intro: string;
  emailHeading: string;
  emailBody: (email: string, delay: string) => string;
  faqHeading: string;
  faqCategories: Array<{ name: string; items: Array<{ q: string; a: string }> }>;
};
```

- [ ] **Step 2: Remplir `support` dans `fr.ts`** (résumé — voir spec doc section 5.3)

```typescript
support: {
  intro: "Une question, un bug, un problème de paiement ? Voici comment nous joindre.",
  emailHeading: "Contact",
  emailBody: (email, delay) => `Écris-nous à ${email}. Délai de réponse moyen ${delay}.`,
  faqHeading: "Questions fréquentes",
  faqCategories: [
    {
      name: "Compte",
      items: [
        { q: "Ma connexion Apple ou Google échoue, que faire ?", a: "Vérifie que tu es bien connecté à ton compte Apple/Google sur l'appareil. Si l'erreur persiste, désinstalle puis réinstalle l'app. Si rien ne marche, écris-nous." },
        { q: "Mon onboarding est bloqué.", a: "Force la fermeture de l'app et relance. L'état d'onboarding est synchronisé serveur, ton avancée n'est pas perdue." },
        { q: "Comment supprimer mes données ?", a: "Réglages → Mon compte → Supprimer mon compte. Voir la page Supprimer mon compte pour les détails." },
        { q: "Comment exporter mes données ?", a: "Réglages → Mon compte → Exporter mes données. Tu reçois un export JSON par email." },
        { q: "J'ai utilisé l'app en mode invité, puis-je récupérer ma progression sur un autre appareil ?", a: "Oui : lie ton compte invité à Apple, Google ou un email depuis Réglages. Ta progression suit." },
      ],
    },
    {
      name: "Paiement",
      items: [
        { q: "Comment restaurer mes achats ?", a: "Réglages → Restaurer mes achats. Les transactions Apple/Google sont rejouées via RevenueCat." },
        { q: "Mon paiement a été refusé.", a: "Vérifie ton moyen de paiement dans tes réglages Apple/Google. Revizio ne traite jamais directement les paiements." },
        { q: "J'ai acheté Plus, mais il n'est pas actif.", a: "Quitte et relance l'app. Si le problème persiste, fais Restaurer mes achats. Sinon, écris-nous avec ton ID utilisateur (Réglages → Mon compte)." },
      ],
    },
    {
      name: "Jeu",
      items: [
        { q: "Je n'ai pas reçu les brains promis.", a: "Vérifie que la session durait bien au moins 10 minutes (sinon pas de récompense). Si le crédit est manquant et que tu remplis la condition, écris-nous." },
        { q: "Mes vies sont à 0 et ne régénèrent pas.", a: "Les vies régénèrent par paliers (30 min en Free, 15 min en Plus). Tu peux aussi en racheter avec 1 brain (Free) ou 3 brains (Plus)." },
        { q: "Mon streak s'est cassé alors que j'ai joué.", a: "Une session compte pour le streak si elle dure ≥ 10 min. Si tu remplis cette condition et que le streak n'est pas comptabilisé, contacte-nous avec l'horodatage." },
        { q: "Un outil IA ne génère pas.", a: "Si la génération échoue, les brains sont remboursés automatiquement. Si ce n'est pas le cas, écris-nous." },
      ],
    },
    {
      name: "Données",
      items: [
        { q: "Quelles données sont collectées ?", a: "Voir la page Politique de confidentialité — sections « Données collectées » et « Données que nous ne collectons pas »." },
        { q: "Où sont stockées mes données ?", a: "Chez Supabase, région eu-west-1 (Europe)." },
      ],
    },
  ],
},
```

- [ ] **Step 3: Remplir `support` dans `en.ts`** (traduction équivalente)

- [ ] **Step 4: Réécrire `app/support/page.tsx`**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { FaqAccordion } from "@/components/FaqAccordion";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const lang = "fr" as const;
const t = getDict(lang);

export const metadata: Metadata = {
  title: t.meta.supportTitle,
  description: t.support.intro,
  alternates: { canonical: "/support", languages: { "fr-FR": "/support", "en-US": "/en/support" } },
};

export default function SupportPage() {
  return (
    <SiteShell lang={lang}>
      <article className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-text-muted hover:text-ink">{t.legal.backHome}</Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{t.meta.supportTitle}</h1>
          <p className="mt-4 text-text-body max-w-prose">{t.support.intro}</p>

          <section className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card">
            <h2 className="text-lg font-semibold text-ink">{t.support.emailHeading}</h2>
            <p className="mt-3 text-text-body">
              {t.support.emailBody(site.supportEmail, site.supportDelay)}
            </p>
            <a href={`mailto:${site.supportEmail}`} className="mt-4 btn-primary">
              {t.footer.contactSupport}
            </a>
          </section>

          <h2 className="mt-14 text-2xl font-semibold text-ink">{t.support.faqHeading}</h2>
          <div className="mt-8 space-y-10">
            {t.support.faqCategories.map((cat) => (
              <div key={cat.name}>
                <p className="eyebrow mb-4">{cat.name}</p>
                <FaqAccordion items={cat.items} />
              </div>
            ))}
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
```

- [ ] **Step 5: Vérifier + commit**

```bash
git add lib/i18n/ app/support/page.tsx
git commit -m "feat(support): rewrite support page with 4-category FAQ (FR+EN dict)"
```

---

### Task 17 : Réécrire `/delete-account` FR

**Files:**
- Modify: `app/delete-account/page.tsx`
- Modify: `lib/i18n/types.ts`, `lib/i18n/fr.ts`, `lib/i18n/en.ts` — ajouter sections deleteAccount

- [ ] **Step 1: Ajouter le type `deleteAccount` dans `types.ts`**

```typescript
deleteAccount: {
  intro: string;
  inAppHeading: string;
  inAppSteps: string[];
  inAppRecommended: string;
  emailHeading: string;
  emailBody: (email: string) => string;
  deletedHeading: string;
  deletedItems: string[];
  retainedHeading: string;
  retainedItems: string[];
  consequencesHeading: string;
  consequencesBody: string;
};
```

- [ ] **Step 2: Remplir `deleteAccount` dans `fr.ts`**

```typescript
deleteAccount: {
  intro:
    "Tu peux supprimer ton compte Revizio à tout moment. Voici comment, et ce qui se passe ensuite.",
  inAppHeading: "Méthode 1 — dans l'app (recommandée)",
  inAppSteps: [
    "Ouvre l'app Revizio",
    "Va dans Réglages → Mon compte",
    "Touche « Supprimer mon compte »",
    "Confirme la suppression",
  ],
  inAppRecommended:
    "La suppression est atomique : toutes les données liées à ton identifiant sont supprimées immédiatement (profil, progression, cours créés, générations IA, portefeuille de cerveaux, photos Décodeur).",
  emailHeading: "Méthode 2 — par email",
  emailBody: (email) =>
    `Si tu ne peux pas accéder à l'app, écris à ${email} depuis l'adresse de ton compte. Joins ton identifiant utilisateur (visible dans Réglages → Mon compte si tu y as encore accès). Nous traitons la demande sous 30 jours.`,
  deletedHeading: "Ce qui est supprimé",
  deletedItems: [
    "Toutes les lignes de base de données liées à ton identifiant (profil, progression, cours, sessions, IA générées, portefeuille, transactions, récompenses)",
    "Toutes les photos envoyées à l'outil Décodeur (bucket Supabase)",
    "Soft-cancel côté RevenueCat (les abonnements actifs sont marqués annulés)",
  ],
  retainedHeading: "Ce qui peut subsister",
  retainedItems: [
    "Les transactions d'achat in-app côté Apple/Google (en dehors de notre contrôle ; gérables depuis tes réglages Apple/Google)",
    "Les journaux techniques anonymisés Supabase (rétention courte)",
  ],
  consequencesHeading: "Conséquences",
  consequencesBody:
    "La suppression est définitive. Aucune récupération n'est possible. Si tu te réinscris plus tard avec la même adresse, tu repars de zéro.",
},
```

- [ ] **Step 3: Remplir `deleteAccount` dans `en.ts`** (traduction équivalente)

- [ ] **Step 4: Réécrire `app/delete-account/page.tsx`**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const lang = "fr" as const;
const t = getDict(lang);

export const metadata: Metadata = {
  title: t.meta.deleteAccountTitle,
  description: t.deleteAccount.intro,
  alternates: { canonical: "/delete-account", languages: { "fr-FR": "/delete-account", "en-US": "/en/delete-account" } },
};

export default function DeleteAccountPage() {
  return (
    <SiteShell lang={lang}>
      <article className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-prose">
          <Link href="/" className="text-sm text-text-muted hover:text-ink">{t.legal.backHome}</Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{t.meta.deleteAccountTitle}</h1>
          <p className="mt-4 text-sm text-text-muted">{t.legal.lastUpdated(site.lastUpdated)}</p>
          <p className="mt-8 text-text-body">{t.deleteAccount.intro}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.deleteAccount.inAppHeading}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-body">
            {t.deleteAccount.inAppSteps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <p className="mt-4 text-text-body">{t.deleteAccount.inAppRecommended}</p>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.deleteAccount.emailHeading}</h2>
          <p className="mt-4 text-text-body">{t.deleteAccount.emailBody(site.supportEmail)}</p>
          <a href={`mailto:${site.supportEmail}`} className="mt-4 btn-primary">{t.footer.contactSupport}</a>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.deleteAccount.deletedHeading}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-body">
            {t.deleteAccount.deletedItems.map((it) => <li key={it}>{it}</li>)}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.deleteAccount.retainedHeading}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-body">
            {t.deleteAccount.retainedItems.map((it) => <li key={it}>{it}</li>)}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">{t.deleteAccount.consequencesHeading}</h2>
          <p className="mt-4 text-text-body">{t.deleteAccount.consequencesBody}</p>
        </div>
      </article>
    </SiteShell>
  );
}
```

- [ ] **Step 5: Vérifier + commit**

```bash
git add lib/i18n/ app/delete-account/page.tsx
git commit -m "feat(delete-account): rewrite with 2 methods, deleted/retained sections (FR+EN dict)"
```

---

## Phase 4 — Miroir EN

### Task 18 : Créer `app/en/page.tsx` (home EN)

**Files:**
- Create: `app/en/page.tsx`

- [ ] **Step 1: Cloner `app/page.tsx`**

Copier intégralement le contenu de `app/page.tsx`. Changer :
- `const lang = "fr" as const;` → `const lang = "en" as const;`
- `alternates.canonical: "/"` → `alternates.canonical: "/en"`
- `<Link href="#games">` → `<Link href="/en#games">` (idem pour `#plans`, `#download`, `#faq`)
- `<Link href="/support">` (lien "See all questions") → `<Link href="/en/support">`

Note : tous les autres textes viennent de `t = getDict("en")`, donc se traduisent automatiquement.

- [ ] **Step 2: Vérifier**

Run: `npm run dev`, ouvrir `/en`. Vérifier la home anglaise complète.

- [ ] **Step 3: Commit**

```bash
git add app/en/page.tsx
git commit -m "feat(en): mirror home page in English"
```

---

### Task 19 : Créer les pages légales EN

**Files:**
- Create: `app/en/privacy/page.tsx`
- Create: `app/en/terms/page.tsx`
- Create: `app/en/support/page.tsx`
- Create: `app/en/delete-account/page.tsx`

- [ ] **Step 1: Cloner chaque page légale FR vers son équivalent EN**

Pour chacune (privacy, terms, support, delete-account) :
- Copier le fichier `app/<route>/page.tsx` dans `app/en/<route>/page.tsx`
- Changer `const lang = "fr" as const;` → `const lang = "en" as const;`
- Changer `alternates.canonical: "/<route>"` → `alternates.canonical: "/en/<route>"`
- Changer `<Link href="/">` → `<Link href="/en">`

- [ ] **Step 2: Vérifier**

Run: `npm run dev`. Tester :
- `/en/privacy`
- `/en/terms`
- `/en/support`
- `/en/delete-account`

Chacune doit afficher la version EN avec un Header/Footer EN (langue affichée "English / Français").

- [ ] **Step 3: Commit**

```bash
git add app/en/
git commit -m "feat(en): mirror legal pages in English"
```

---

## Phase 5 — SEO, sitemap, redirects, OG

### Task 20 : Réécrire `app/sitemap.ts` avec FR + EN

**Files:**
- Glob: `app/sitemap.ts`
- Modify or Create: `app/sitemap.ts`

- [ ] **Step 1: Vérifier l'existant**

```bash
ls app/sitemap.ts
```

S'il existe, le lire. Sinon, le créer.

- [ ] **Step 2: Écrire la version V2**

```typescript
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/privacy", "/terms", "/support", "/delete-account"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of paths) {
    entries.push({
      url: `${site.url}${p || "/"}`,
      lastModified: now,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1.0 : 0.6,
      alternates: {
        languages: {
          "fr-FR": `${site.url}${p || "/"}`,
          "en-US": `${site.url}/en${p}`,
        },
      },
    });
    entries.push({
      url: `${site.url}/en${p}`,
      lastModified: now,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 0.9 : 0.5,
      alternates: {
        languages: {
          "fr-FR": `${site.url}${p || "/"}`,
          "en-US": `${site.url}/en${p}`,
        },
      },
    });
  }

  return entries;
}
```

- [ ] **Step 3: Vérifier**

Run: `npm run dev`, ouvrir `http://localhost:3000/sitemap.xml`. Vérifier que 10 URLs apparaissent.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(seo): sitemap with FR+EN alternates"
```

---

### Task 21 : Ajouter redirects dans `next.config.mjs`

**Files:**
- Modify: `next.config.mjs`

- [ ] **Step 1: Réécrire le fichier**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/outils", destination: "/", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/subscriptions", destination: "/#plans", permanent: true },
      { source: "/en/outils", destination: "/en", permanent: true },
      { source: "/en/faq", destination: "/en#faq", permanent: true },
      { source: "/en/subscriptions", destination: "/en#plans", permanent: true },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Tester chaque redirect**

Run: `npm run dev`. Pour chaque URL ci-dessus, vérifier qu'elle redirige correctement.

```bash
curl -I http://localhost:3000/outils
curl -I http://localhost:3000/subscriptions
curl -I http://localhost:3000/faq
```

Expected : `308 Permanent Redirect` + `location: /` (ou `/#plans`, `/#faq` selon).

- [ ] **Step 3: Commit**

```bash
git add next.config.mjs
git commit -m "feat(redirects): legacy routes (/outils, /faq, /subscriptions) FR+EN"
```

---

### Task 22 : Mettre à jour `app/robots.ts` et `app/opengraph-image.tsx`

**Files:**
- Modify or Create: `app/robots.ts`
- Modify: `app/opengraph-image.tsx`

- [ ] **Step 1: Vérifier `app/robots.ts`**

```bash
ls app/robots.ts
```

Si présent, le contenu cible :

```typescript
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: Mettre à jour `app/opengraph-image.tsx`**

Lire l'existant, puis le réécrire avec le nouveau wording :

```typescript
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FBFAF7 0%, #FFE6D9 100%)",
          fontFamily: "ui-sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#F26B3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 28,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#0F1115" }}>{site.name}</div>
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#0F1115", marginTop: 40, lineHeight: 1.05 }}>
          Apprends ce que tu veux.
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#D95426", lineHeight: 1.05 }}>
          En jouant.
        </div>
        <div style={{ fontSize: 28, color: "#5B6472", marginTop: 32 }}>
          8 jeux IA · 90 niveaux d'aventure · sur iOS
        </div>
      </div>
    ),
    size
  );
}
```

- [ ] **Step 3: Vérifier**

Run: `npm run dev`. Ouvrir `http://localhost:3000/opengraph-image`. Vérifier l'image générée.

- [ ] **Step 4: Commit**

```bash
git add app/robots.ts app/opengraph-image.tsx
git commit -m "feat(seo): refresh robots + OG image with V2 visual identity"
```

---

## Phase 6 — Build, QA, ship

### Task 23 : Build de production complet + correction des warnings

**Files:**
- All

- [ ] **Step 1: Build**

```bash
npm run build
```

Expected : build complet sans erreur fatale.

- [ ] **Step 2: Corriger les warnings et erreurs**

Itérer sur chaque erreur :
- Image manquante → vérifier le chemin (Task 4)
- Classe Tailwind manquante → vérifier `tailwind.config.ts` (Task 5)
- Import inexistant → vérifier les noms dans `lib/i18n/`

Si une classe Tailwind utilisée est absente : l'ajouter dans le config.

- [ ] **Step 3: Lancer le serveur de production**

```bash
npm run start
```

Visiter dans le navigateur :
- `http://localhost:3000/`
- `http://localhost:3000/privacy`
- `http://localhost:3000/terms`
- `http://localhost:3000/support`
- `http://localhost:3000/delete-account`
- `http://localhost:3000/en/`
- `http://localhost:3000/en/privacy`
- `http://localhost:3000/en/terms`
- `http://localhost:3000/en/support`
- `http://localhost:3000/en/delete-account`

Chaque route doit répondre 200 et afficher la bonne langue.

Tester aussi :
- `http://localhost:3000/outils` → redirige vers `/`
- `http://localhost:3000/subscriptions` → redirige vers `/#plans`
- `http://localhost:3000/faq` → redirige vers `/#faq`
- `http://localhost:3000/sitemap.xml` → 10 URLs
- `http://localhost:3000/robots.txt` → OK
- `http://localhost:3000/opengraph-image` → image V2

`Ctrl+C` pour arrêter.

- [ ] **Step 4: Commit si correctifs**

```bash
git add -A
git commit -m "fix: build warnings and missing classes"
```

---

### Task 24 : QA responsive + accessibilité minimum

**Files:**
- None (manual QA)

- [ ] **Step 1: Lancer dev**

```bash
npm run dev
```

- [ ] **Step 2: Tester en mobile**

Ouvrir DevTools, simuler iPhone 12 (390×844). Sur la home FR :
- Header lisible, bouton Télécharger accessible
- Hero pas tronqué, mascotte bien placée
- Grille 8 jeux : 2 colonnes sur mobile
- Mondes Aventure : 1 colonne
- Outils : 1 colonne
- Plans : 1 colonne (Free puis Plus)
- Footer : colonnes empilées

- [ ] **Step 3: Tester clavier**

Sur `/`, naviguer entièrement au clavier (Tab/Shift-Tab). Le focus doit être visible sur tous les liens, boutons, et accordéons FAQ.

- [ ] **Step 4: Vérifier le switch FR ↔ EN**

Sur `/`, descendre au footer, cliquer "English". Doit aller à `/en`. Cliquer "Français" depuis le footer. Doit revenir à `/`.

Tester aussi depuis `/privacy` → `/en/privacy` → `/privacy`.

- [ ] **Step 5: Vérifier la métadonnée**

Pour la home, View Source. Vérifier :
- `<title>Revizio — Apprends en jouant</title>`
- `<meta name="description"` correct
- `<link rel="alternate" hreflang="fr-FR" href="/">`
- `<link rel="alternate" hreflang="en-US" href="/en">`

Idem pour `/en` : title EN, hreflang inversé.

- [ ] **Step 6: Commit (si correctifs)**

```bash
git add -A
git commit -m "fix(qa): responsive/a11y polish from QA pass"
```

---

### Task 25 : Mise à jour du README de déploiement

**Files:**
- Modify: `README_DEPLOY.md`

- [ ] **Step 1: Lire l'existant**

```bash
cat README_DEPLOY.md
```

- [ ] **Step 2: Mettre à jour**

Réécrire pour refléter V2 :
- Stack : Next.js 16, React 19, Tailwind 3, TypeScript 5
- Build : `npm run build`
- Deploy : Vercel (recommandé) ou Node 20+
- Variables d'environnement : aucune requise (statique)
- Domaine : `revizioapp.com` + `www.revizioapp.com`
- Redirects automatiques : `/outils`, `/faq`, `/subscriptions` → home/ancres
- Sitemap : `https://revizioapp.com/sitemap.xml`
- Mascot et logo : `public/images/`

- [ ] **Step 3: Mettre à jour `CHECKLIST_APP_STORE.md`** si présent

Aligner :
- App Store URL réelle (`https://apps.apple.com/us/app/revizio/id6761366726`)
- Support URL : `https://revizioapp.com/support`
- Privacy URL : `https://revizioapp.com/privacy`
- Marketing URL : `https://revizioapp.com/`
- Delete account URL : `https://revizioapp.com/delete-account`

- [ ] **Step 4: Commit**

```bash
git add README_DEPLOY.md CHECKLIST_APP_STORE.md
git commit -m "docs: update deployment guide and App Store checklist for V2"
```

---

## Self-Review (déjà effectuée par l'auteur du plan)

**Spec coverage :**
- §2 Architecture & routes → Tasks 3, 18, 19, 21
- §3 Design system → Tasks 5, 6, 10
- §4 Home sections → Task 13 (FR), 18 (EN)
- §5 Legal pages → Tasks 14, 15, 16, 17 (FR) + 19 (EN)
- §6 Cleanup → Tasks 3, 4
- §7 SEO/a11y → Tasks 20, 22, 24
- §10 Acceptance criteria → couverts par Tasks 23, 24

**Placeholder scan :** OK — chaque task contient le code complet ou les commandes exactes.

**Type consistency :** `Dict`, `Lang`, `GameColor`, `WorldColor` réutilisés cohérents. Les sous-types `privacy`/`terms`/`support`/`deleteAccount` sont définis dans les Tasks 14/15/16/17 et utilisés cohéremment dans les pages associées.

**Note sur i18n traductions EN :** les sections privacy/terms/support/deleteAccount EN sont laissées au traducteur (l'engineer) en s'inspirant directement du dictionnaire FR équivalent + de la spec section 5 — le pattern est strictement identique, seule la langue diffère.

---

## Acceptance check (référence)

Après Task 25, le projet doit respecter les 15 critères de la spec §10. Si un critère échoue, ajouter un task ad-hoc et commiter le correctif.
