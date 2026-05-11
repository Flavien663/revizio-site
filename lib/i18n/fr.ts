import type { Dict } from "./types";

export const fr: Dict = {
  meta: {
    homeTitle: "Revizio — Apprends en jouant",
    homeDescription:
      "8+ jeux IA générés depuis un thème ou un cours. Une aventure de plus de 180 niveaux à travers 6+ mondes. Un défi par jour. Sur iOS.",
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    supportTitle: "Support",
    deleteAccountTitle: "Supprimer mon compte",
  },
  nav: { games: "Jeux", adventure: "Aventure", plans: "Offres", download: "Télécharger" },
  hero: {
    badge: "Sans publicité — sans tracking",
    headlineLine1: "Apprends ce que tu veux.",
    headlineLine2: "En jouant.",
    subtitle:
      "8+ jeux IA générés depuis un thème ou un cours. Une aventure de plus de 180 niveaux. Un défi par jour. Sur iOS.",
    ctaSecondary: "Voir les jeux",
  },
  games: {
    eyebrow: "8+ jeux générés depuis ton thème",
    title: "Choisis un sujet. On fabrique le jeu.",
    intro:
      "Chaque jeu se construit à la volée à partir d'un thème libre ou de l'un de tes cours.",
    cost: "1 cerveau",
    items: {
      quiz: { name: "Quiz", tagline: "Des questions sur n'importe quoi." },
      hangman: { name: "Pendu", tagline: "Des mots à deviner, avec indices." },
      bingo: { name: "Bingo", tagline: "Une grille de termes à entendre." },
      crossword: { name: "Mots Croisés", tagline: "Une grille sur ton sujet." },
      trueFalse: { name: "Vrai/Faux Rush", tagline: "Des affirmations, vrai ou faux, vite." },
      tri: { name: "Tri Express", tagline: "Des cartes à ranger dans les bonnes catégories." },
      chrono: { name: "Classement Chrono", tagline: "Des événements à remettre dans l'ordre." },
      memo: { name: "Mémo Duo", tagline: "Des paires à retrouver." },
    },
  },
  adventure: {
    eyebrow: "Une aventure de 180+ niveaux",
    title: "Six mondes et plus. Des dizaines de niveaux chacun.",
    intro:
      "Chaque niveau te rapporte de 1 à 3 étoiles selon ton score. Des coffres ponctuent la progression. Un boss attend en haut de chaque monde.",
    levelsLabel: "Des dizaines de niveaux",
    freeBadge: "Gratuit — tout le monde y a accès",
    starsCaption: "1 à 3 étoiles par niveau",
    chestsCaption: "Coffres réguliers",
    bossCaption: "Un boss par monde",
    moreSoon: "Et d'autres mondes en chantier.",
    worlds: {
      culture: { name: "Cap Culture", tagline: "Culture générale, de l'art au sport." },
      words: { name: "Forêt des Mots", tagline: "Vocabulaire, expressions, étymologies." },
      logic: { name: "Tour Logique", tagline: "Raisonnement, déductions, énigmes." },
    },
  },
  tools: {
    eyebrow: "Pour aller plus loin",
    title: "5+ outils pour tes vraies révisions.",
    intro:
      "Réservés à Revizio Plus. Aperçu accessible à tous depuis l'app.",
    includedLabel: "Inclus",
    brainsLabel: (n) => `${n} cerveau${n > 1 ? "x" : ""}`,
    items: {
      decoder: {
        name: "Décodeur",
        tagline: "Analyse une photo de cours et obtiens des widgets explicatifs.",
        cost: "5",
      },
      memo: {
        name: "Mémo structuré",
        tagline: "Une fiche riche multi-sections, prête à réviser.",
        cost: "10",
      },
      exam: { name: "Examen blanc", tagline: "Un quiz long format, noté.", cost: "10" },
      courseQuiz: {
        name: "Quiz sur cours",
        tagline: "Un quiz ciblé sur l'un de tes cours.",
        cost: "3",
      },
      smartNotifs: {
        name: "Notifications intelligentes",
        tagline: "Une banque de rappels personnalisés à tes horaires.",
        cost: "5",
      },
      smartPlan: {
        name: "Plan intelligent",
        tagline: "Un planning de révision qui s'adapte à ton avancée.",
        cost: "inclus",
      },
      customAdventure: {
        name: "Aventure personnalisée",
        tagline: "Un mini-monde de 10 niveaux sur le thème que tu choisis.",
        cost: "5",
      },
    },
  },
  progression: {
    eyebrow: "Une progression qui se voit",
    title: "Ton niveau, tes vies, ta série. Tout est visible.",
    stats: {
      xp: {
        label: "XP",
        body: "Tu gagnes de l'XP à chaque niveau réussi. Ton avancée est visible en permanence.",
      },
      lives: {
        label: "Vies",
        body: "Les vies se régénèrent automatiquement. Revizio Plus en débloque davantage et accélère la régénération.",
      },
      streak: {
        label: "Série",
        body: "Une session par jour suffit pour entretenir la série.",
      },
    },
  },
  daily: {
    eyebrow: "Tous les jours, ou quand tu veux",
    title: "Un défi quotidien. Une aventure perso.",
    daily: {
      name: "Défi du jour",
      body: "Un niveau frais chaque jour. Trois étoiles à décrocher. Les brains gagnés ici ne sont pas plafonnés.",
    },
    custom: {
      name: "Mini-aventure perso",
      body: "Dix niveaux sur le thème que tu choisis. Disponible en Free, à volonté en Plus.",
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
        "Aventure 180+ niveaux intégrale",
        "Défi du jour",
        "Tous les jeux IA accessibles",
        "Brains gagnables via le jeu",
        "Régénération automatique des vies",
        "Aperçu des outils Premium",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "5,99 €",
      cadence: "par mois",
      priceYear: "49,99 €",
      cadenceYear: "par an (−30 %)",
      promise: "Les outils Premium et une allocation mensuelle de cerveaux.",
      tag: "Le plus utile",
      features: [
        "200 brains chaque mois, cumulatifs",
        "Tous les outils Premium",
        "Plus de vies, régénération accélérée",
        "Timers Aventure réduits",
        "Mini-aventure perso à volonté",
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
        a: "Free donne accès intégral à l'Aventure et à tous les jeux IA. Plus ajoute une allocation mensuelle de cerveaux cumulatifs, tous les outils Premium, plus de vies, des timers réduits et une mini-aventure perso à volonté.",
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
        a: "Oui. Chaque génération est strictement liée à ton compte. Aucun partage entre utilisateurs, aucune réutilisation commerciale.",
      },
    ],
    seeMore: "Toutes les questions →",
  },
  cta: {
    title: "Choisis un sujet. Revizio fabrique le jeu.",
    body: "Tu peux commencer en mode invité, sans mot de passe, en moins d'une minute.",
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
  privacy: {
    intro:
      "Cette politique décrit comment Revizio collecte, utilise et protège tes données quand tu utilises l'application mobile.",
    controllerHeading: "Responsable du traitement",
    controllerBody:
      "Revizio App, 31700 Blagnac, France. Pour toute question relative à la protection des données, écris à support@revizioapp.com.",
    dataCollectedHeading: "Données collectées",
    dataCollectedItems: [
      {
        title: "Profil",
        body:
          "Identifiant unique, email (uniquement si connexion par code reçu par email), méthode d'authentification, état d'onboarding, prénom affiché optionnel, langue choisie, objectif d'apprentissage.",
      },
      {
        title: "Progression",
        body:
          "Avancée dans l'Aventure (niveaux, étoiles, tentatives), expérience et niveau, vies et compteurs, séries (streak).",
      },
      {
        title: "Contenu créé",
        body:
          "Cours et chapitres que tu crées toi-même, sessions de travail, contenus générés par les outils IA (fiches, quiz, mémos).",
      },
      {
        title: "Économie",
        body:
          "Solde de cerveaux, transactions, historique des récompenses (auditables et idempotents).",
      },
      {
        title: "Préférences",
        body: "Préférences de notifications, code et statut d'affiliation.",
      },
    ],
    dataNotCollectedHeading: "Données que nous ne collectons pas",
    dataNotCollectedItems: [
      "Aucune analytics tierce (Mixpanel, Amplitude, Firebase Analytics, etc.).",
      "Aucun cookie web — Revizio est une app native.",
      "Aucun identifiant de tracking publicitaire.",
      "Aucune adresse IP utilisée à des fins business.",
      "Aucun crash report comportant des données personnelles.",
    ],
    processorsHeading: "Sous-traitants",
    processorsItems: [
      {
        name: "Supabase",
        purpose:
          "Base de données, authentification et stockage des médias. Hébergement en Europe (région eu-west-1).",
      },
      {
        name: "OpenAI (via Edge Functions)",
        purpose:
          "Génération de contenu pour les jeux et outils IA. Les contenus transmis sont les textes ou photos que tu fournis (cours, thèmes, scans), sans données de profil. La politique de conservation appliquée par OpenAI s'applique alors.",
      },
      {
        name: "RevenueCat",
        purpose: "Gestion des abonnements et des achats in-app, via un identifiant anonymisé.",
      },
      {
        name: "Apple et Google",
        purpose: "Authentification et transactions in-app sur leurs plateformes respectives.",
      },
    ],
    storageHeading: "Stockage des médias",
    storageBody:
      "Les photos que tu envoies aux outils d'analyse (par exemple le Décodeur) sont compressées et stockées dans un bucket privé hébergé en Europe. Elles sont supprimées avec ton compte.",
    retentionHeading: "Durée de conservation",
    retentionBody:
      "Tes données sont conservées tant que ton compte existe. Lors de la suppression du compte, toutes les lignes liées à ton identifiant sont supprimées de manière atomique. Les journaux techniques anonymisés peuvent subsister une courte durée.",
    rightsHeading: "Tes droits",
    rightsItems: [
      {
        title: "Accès",
        body:
          "Réglages → Mon compte → Exporter mes données. Tu reçois un export structuré de tes données liées à ton compte.",
      },
      { title: "Rectification", body: "Modification du profil dans Réglages → Mon compte." },
      {
        title: "Suppression",
        body:
          "Réglages → Mon compte → Supprimer mon compte. Suppression atomique et immédiate de toutes les données associées.",
      },
      { title: "Portabilité", body: "L'export ci-dessus est portable et lisible." },
      {
        title: "Opposition",
        body:
          "Opt-out granulaire des notifications, par canal, depuis les Réglages.",
      },
      {
        title: "Réclamation",
        body:
          "Tu peux saisir la CNIL si tu estimes que tes droits ne sont pas respectés.",
      },
    ],
    minorsHeading: "Mineurs",
    minorsBody:
      "Revizio ne propose aucune fonctionnalité spécifique aux moins de 13 ans. Pas de chat entre utilisateurs, pas de profil public, aucune mécanique sociale. Pour les jeunes utilisateurs, l'usage du compte familial Apple ou Google est recommandé.",
    securityHeading: "Sécurité",
    securityBody:
      "Toutes les tables sensibles sont protégées par Row Level Security côté Supabase. Le portefeuille de cerveaux et les transactions ne sont modifiables qu'au travers de fonctions serveur signées. Aucun secret n'est stocké côté app.",
    contactHeading: "Contact",
    contactBody: (email) =>
      `Pour toute question relative à cette politique ou à la protection de tes données : ${email}.`,
  },
  terms: {
    intro:
      "Ces conditions encadrent ton usage de l'application Revizio. En utilisant Revizio, tu acceptes ces conditions.",
    sections: [
      {
        heading: "1. Service",
        body:
          "Revizio est une application mobile d'apprentissage par le jeu, distribuée sur iOS (et bientôt Android). Le service comprend une Aventure éditoriale, des jeux IA, un défi du jour, des outils Premium et une gestion de compte.",
      },
      {
        heading: "2. Comptes",
        body:
          "La création d'un compte peut se faire via Apple, Google, un code à 6 chiffres reçu par email, ou en mode invité. Un compte invité peut être lié à un provider plus tard sans perte des données.",
      },
      {
        heading: "3. Plans",
        body:
          "Deux plans sont proposés : Free (gratuit et permanent) et Revizio Plus (abonnement mensuel ou annuel). Le plan Free donne accès à l'Aventure et aux jeux IA. Le plan Plus ajoute les outils Premium, une allocation mensuelle de cerveaux cumulatifs et un confort supplémentaire dans le jeu. Les prix en vigueur sont affichés dans l'app au moment de l'achat.",
      },
      {
        heading: "5. Paiements",
        body:
          "Tous les achats (abonnements et packs de cerveaux) passent par l'App Store ou Google Play. La gestion des entitlements se fait via RevenueCat. Revizio ne traite jamais directement de moyens de paiement.",
      },
      {
        heading: "6. Renouvellement et résiliation",
        body:
          "L'abonnement Plus se renouvelle automatiquement tant qu'il n'est pas annulé dans tes réglages Apple ou Google. La résiliation prend effet à la fin de la période de facturation en cours.",
      },
      {
        heading: "7. Restauration",
        body:
          "Réglages → Restaurer mes achats rejoue les transactions reçues côté Apple ou Google via RevenueCat.",
      },
      {
        heading: "8. Remboursements",
        body:
          "Les remboursements sont gérés selon les politiques d'Apple et de Google. Revizio ne traite pas les remboursements directement.",
      },
      {
        heading: "9. Génération IA",
        body:
          "Les jeux et outils utilisent des modèles de génération. Le contenu généré peut comporter des imprécisions. Revizio ne garantit aucun résultat scolaire ni professionnel. Un Quality Gate côté serveur filtre les contenus à risque.",
      },
      {
        heading: "10. Sessions et récompenses",
        body:
          "Une session d'apprentissage compte pour une récompense (XP, série, brains) seulement si elle dépasse une durée minimale, indiquée dans l'app.",
      },
      {
        heading: "11. Modération",
        body:
          "Le contenu généré par un utilisateur reste strictement privé à son compte. Aucun partage utilisateur à utilisateur. Les prompts à risque (haine, harcèlement, contenu sexuel, automutilation) sont bloqués par filtre avant traitement.",
      },
      {
        heading: "12. Responsabilité",
        body:
          "Revizio fournit le service en l'état. L'éditeur ne saurait être tenu responsable d'une indisponibilité temporaire ou d'un usage non conforme. En cas de bug bloquant, contacte le support.",
      },
      {
        heading: "13. Droit applicable",
        body:
          "Droit français. En cas de litige, la juridiction du siège social de l'éditeur est compétente, sous réserve des dispositions impératives applicables aux consommateurs.",
      },
    ],
    accessVsConsumptionHeading: "4. Accès vs. consommation — important",
    accessVsConsumptionBody:
      "L'abonnement Plus donne accès aux outils Premium. Les brains (cerveaux) sont une monnaie de consommation qui sert à générer du contenu IA. Les packs de cerveaux disponibles à l'achat dans l'app sont des consommables qui rechargent uniquement cette consommation. Ils ne débloquent jamais l'accès Plus. Cette distinction est centrale et explicite dans toute communication de Revizio.",
    contactHeading: "14. Contact",
    contactBody: (email) => `Pour toute question relative à ces conditions : ${email}.`,
  },
  support: {
    intro:
      "Une question, un bug, un problème de paiement ? Voici comment nous joindre.",
    emailHeading: "Contact",
    emailBody: (email, delay) =>
      `Écris-nous à ${email}. Délai de réponse moyen ${delay}.`,
    faqHeading: "Questions fréquentes",
    faqCategories: [
      {
        name: "Compte",
        items: [
          {
            q: "Ma connexion Apple ou Google échoue, que faire ?",
            a: "Vérifie que tu es bien connecté à ton compte Apple ou Google sur l'appareil. Si l'erreur persiste, désinstalle puis réinstalle l'app. Si rien ne marche, écris-nous.",
          },
          {
            q: "Mon onboarding est bloqué.",
            a: "Force la fermeture de l'app et relance. L'état d'onboarding est synchronisé côté serveur, ton avancée n'est pas perdue.",
          },
          {
            q: "Comment supprimer mes données ?",
            a: "Réglages → Mon compte → Supprimer mon compte. Voir la page Supprimer mon compte pour les détails.",
          },
          {
            q: "Comment exporter mes données ?",
            a: "Réglages → Mon compte → Exporter mes données. Tu reçois un export structuré par email.",
          },
          {
            q: "J'ai utilisé l'app en mode invité, puis-je récupérer ma progression sur un autre appareil ?",
            a: "Oui : lie ton compte invité à Apple, Google ou un email depuis Réglages. Ta progression suit.",
          },
        ],
      },
      {
        name: "Paiement",
        items: [
          {
            q: "Comment restaurer mes achats ?",
            a: "Réglages → Restaurer mes achats. Les transactions Apple ou Google sont rejouées via RevenueCat.",
          },
          {
            q: "Mon paiement a été refusé.",
            a: "Vérifie ton moyen de paiement dans tes réglages Apple ou Google. Revizio ne traite jamais directement les paiements.",
          },
          {
            q: "J'ai acheté Plus, mais il n'est pas actif.",
            a: "Quitte et relance l'app. Si le problème persiste, lance Restaurer mes achats. Sinon, écris-nous avec ton identifiant utilisateur (Réglages → Mon compte).",
          },
        ],
      },
      {
        name: "Jeu",
        items: [
          {
            q: "Je n'ai pas reçu les brains promis.",
            a: "Vérifie que la session dépasse la durée minimale indiquée dans l'app. Si tu remplis la condition et que le crédit est manquant, écris-nous.",
          },
          {
            q: "Mes vies sont à 0 et ne régénèrent pas.",
            a: "Les vies régénèrent par paliers automatiques. Tu peux aussi en racheter pour quelques brains.",
          },
          {
            q: "Mon streak s'est cassé alors que j'ai joué.",
            a: "Une session compte pour le streak si elle dépasse la durée minimale. Si tu remplis cette condition et que le streak n'est pas comptabilisé, contacte-nous avec l'horodatage.",
          },
          {
            q: "Un outil IA ne génère pas.",
            a: "Si la génération échoue, les brains sont remboursés automatiquement. Si ce n'est pas le cas, écris-nous.",
          },
        ],
      },
      {
        name: "Données",
        items: [
          {
            q: "Quelles données sont collectées ?",
            a: "Voir la page Politique de confidentialité — sections « Données collectées » et « Données que nous ne collectons pas ».",
          },
          {
            q: "Où sont stockées mes données ?",
            a: "Chez Supabase, en Europe (région eu-west-1).",
          },
        ],
      },
    ],
  },
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
      "La suppression est atomique : toutes les données liées à ton identifiant sont supprimées immédiatement (profil, progression, cours créés, contenus IA générés, portefeuille de cerveaux, photos envoyées aux outils).",
    emailHeading: "Méthode 2 — par email",
    emailBody: (email) =>
      `Si tu ne peux pas accéder à l'app, écris à ${email} depuis l'adresse de ton compte. Joins ton identifiant utilisateur (visible dans Réglages → Mon compte si tu y as encore accès). Nous traitons la demande sous 30 jours.`,
    deletedHeading: "Ce qui est supprimé",
    deletedItems: [
      "Toutes les données de base liées à ton identifiant (profil, progression, cours, sessions, contenus IA, portefeuille, transactions, récompenses)",
      "Toutes les photos envoyées aux outils d'analyse (stockage Supabase)",
      "Annulation côté RevenueCat (les abonnements actifs sont marqués annulés)",
    ],
    retainedHeading: "Ce qui peut subsister",
    retainedItems: [
      "Les transactions d'achat in-app côté Apple ou Google (en dehors de notre contrôle ; gérables depuis leurs réglages respectifs)",
      "Les journaux techniques anonymisés (rétention courte)",
    ],
    consequencesHeading: "Conséquences",
    consequencesBody:
      "La suppression est définitive. Aucune récupération n'est possible. Si tu te réinscris plus tard avec la même adresse, tu repars de zéro.",
  },
};
