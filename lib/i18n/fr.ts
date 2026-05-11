import type { Dict } from "./types";

export const fr: Dict = {
  meta: {
    homeTitle: "Revizio — Apprends en jouant",
    homeDescription:
      "Tu choisis un sujet, on fabrique le jeu. 8+ jeux IA, plus de 180 niveaux d'aventure, un défi à relever chaque jour. Sur iOS.",
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    supportTitle: "Support",
    deleteAccountTitle: "Supprimer mon compte",
  },
  nav: { games: "Jeux", adventure: "Aventure", plans: "Offres", download: "Télécharger" },
  hero: {
    badge: "Sans pub. Sans tracking. Pour de vrai.",
    headlineLine1: "Apprends ce que tu veux.",
    headlineLine2: "En jouant.",
    subtitle:
      "Tu choisis un sujet. On fabrique le jeu. 8+ jeux IA, plus de 180 niveaux d'aventure, un défi à relever chaque jour.",
    ctaSecondary: "Voir les jeux",
  },
  games: {
    eyebrow: "Tous tes sujets, version jeu",
    title: "Choisis un sujet. On fabrique le jeu.",
    intro:
      "Du quiz au pendu en passant par le mémo et le tri express, chaque jeu se construit à la volée sur ton thème.",
    cost: "1 cerveau",
    items: {
      quiz: { name: "Quiz", tagline: "Des questions sur n'importe quoi." },
      hangman: { name: "Pendu", tagline: "Des mots à deviner, avec indices." },
      bingo: { name: "Bingo", tagline: "Une grille de termes à entendre." },
      crossword: { name: "Mots Croisés", tagline: "Une grille bâtie sur ton thème." },
      trueFalse: { name: "Vrai/Faux Rush", tagline: "Vrai ou faux, vite, sans réfléchir." },
      tri: { name: "Tri Express", tagline: "Des cartes dans les bonnes cases." },
      chrono: { name: "Classement Chrono", tagline: "Remets de l'ordre dans le temps." },
      memo: { name: "Mémo Duo", tagline: "Retrouve les paires." },
    },
  },
  adventure: {
    eyebrow: "Une aventure de 180+ niveaux",
    title: "Plus de 6 mondes. À explorer un par un.",
    intro:
      "L'Aventure Revizio te fait traverser des mondes thématiques niveau après niveau. Chaque étoile décrochée te rapproche du suivant.",
    levelsLabel: "Des dizaines de niveaux",
    freeBadge: "Gratuit — tout le monde y a accès",
    worlds: {
      culture: { name: "Cap Culture", tagline: "Culture générale, de l'art au sport." },
      words: { name: "Forêt des Mots", tagline: "Vocabulaire, expressions, étymologies." },
      logic: { name: "Tour Logique", tagline: "Raisonnement, déductions, énigmes." },
    },
  },
  tools: {
    eyebrow: "Va plus loin",
    title: "5+ outils IA pour pousser plus fort.",
    intro:
      "Quand tu veux passer en mode révision sérieuse, les outils IA prennent le relais.",
    brainsLabel: (n) => `${n} cerveau${n > 1 ? "x" : ""}`,
    items: {
      decoder: {
        name: "Décodeur",
        tagline: "Photographie un cours, obtiens des widgets clairs.",
        cost: "5",
      },
      memo: {
        name: "Mémo structuré",
        tagline: "Une fiche multi-sections, prête à réviser.",
        cost: "10",
      },
      exam: {
        name: "Examen blanc",
        tagline: "Un quiz long format, noté.",
        cost: "10",
      },
      smartNotifs: {
        name: "Notifications intelligentes",
        tagline: "Une banque de rappels, à tes horaires.",
        cost: "5",
      },
      customAdventure: {
        name: "Mini-monde perso",
        tagline: "10 niveaux sur le thème que tu veux.",
        cost: "5",
      },
    },
  },
  daily: {
    eyebrow: "Tous les jours, ou quand tu veux",
    title: "Un défi par jour. Une aventure perso à volonté.",
    daily: {
      name: "Défi du jour",
      body: "Un niveau frais chaque matin. Trois étoiles à décrocher. Reviens demain pour le suivant.",
    },
    custom: {
      name: "Mini-monde perso",
      body: "Tu lances un mini-monde de 10 niveaux sur le thème que tu choisis. Comme une playlist, mais pour apprendre.",
    },
  },
  plans: {
    eyebrow: "Deux plans. Pas plus.",
    title: "Free pour commencer. Plus pour tout débloquer.",
    free: {
      name: "Free",
      price: "0 €",
      cadence: "pour toujours",
      promise: "L'Aventure et tous les jeux IA, sans rien payer.",
      features: [
        "Aventure 180+ niveaux intégrale",
        "Tous les jeux IA",
        "Défi du jour",
        "Aperçu des outils IA",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "5,99 €",
      cadence: "par mois",
      priceYear: "49,99 €",
      cadenceYear: "par an (−30 %)",
      promise: "Plus de cerveaux et tous les outils IA débloqués.",
      tag: "Tout ton potentiel",
      features: [
        "200 cerveaux chaque mois",
        "Tous les outils IA débloqués",
        "Création de mini-mondes à volonté",
        "Aucune publicité, aucune limite",
      ],
    },
    fineprint:
      "Abonnement géré par l'App Store. Résiliable à tout moment depuis tes réglages Apple.",
  },
  trust: {
    eyebrow: "Sans piège",
    title: "On joue franc-jeu.",
    items: [
      { title: "Sans publicité", body: "Aucun bandeau. Aucune vente de données." },
      { title: "Sans tracking", body: "Pas d'analytics tierce. Pas de cookie web." },
      { title: "Tes contenus restent privés", body: "Chaque génération est strictement liée à ton compte." },
      { title: "Sans mot de passe", body: "Apple, Google, code email ou invité." },
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
        a: "Free, c'est l'Aventure et tous les jeux IA sans rien payer. Plus, c'est plus de cerveaux chaque mois et tous les outils IA débloqués.",
      },
      {
        q: "Comment restaurer mes achats ?",
        a: "Ouvre l'app, va dans Réglages → Restaurer mes achats. Tes transactions Apple sont rejouées automatiquement.",
      },
      {
        q: "Comment supprimer mon compte ?",
        a: "Réglages → Mon compte → Supprimer mon compte. La suppression est immédiate. Voir la page Supprimer mon compte pour les détails.",
      },
      {
        q: "Mes contenus IA sont-ils privés ?",
        a: "Oui. Chaque génération est liée à ton compte. Aucun partage entre utilisateurs.",
      },
    ],
    seeMore: "Toutes les questions →",
  },
  cta: {
    title: "Choisis un sujet. Revizio fabrique le jeu.",
    body: "Commence en mode invité, sans mot de passe, en moins d'une minute.",
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
          "Avancée dans l'Aventure, expérience et niveau, vies et compteurs, séries.",
      },
      {
        title: "Contenu créé",
        body:
          "Cours et chapitres que tu crées toi-même, sessions de travail, contenus générés par les outils IA.",
      },
      {
        title: "Économie",
        body:
          "Solde de cerveaux, transactions, historique des récompenses.",
      },
      {
        title: "Préférences",
        body: "Préférences de notifications, code et statut d'affiliation.",
      },
    ],
    dataNotCollectedHeading: "Données que nous ne collectons pas",
    dataNotCollectedItems: [
      "Aucune analytics tierce.",
      "Aucun cookie web — Revizio est une app native.",
      "Aucun identifiant de tracking publicitaire.",
      "Aucune IP utilisée à des fins business.",
      "Aucun crash report comportant des données personnelles.",
    ],
    processorsHeading: "Sous-traitants",
    processorsItems: [
      {
        name: "Hébergeur cloud (Europe)",
        purpose:
          "Stockage de la base de données, authentification et stockage des médias, en région européenne.",
      },
      {
        name: "Fournisseur de modèles IA",
        purpose:
          "Génération du contenu des jeux et des outils IA. Seuls les textes ou photos que tu fournis (thèmes, scans) sont transmis, sans données de profil.",
      },
      {
        name: "Plateforme de gestion d'abonnements",
        purpose:
          "Gestion des achats et des entitlements, via un identifiant anonymisé.",
      },
      {
        name: "Apple et Google",
        purpose: "Authentification et transactions in-app sur leurs plateformes.",
      },
    ],
    storageHeading: "Stockage des médias",
    storageBody:
      "Les photos que tu envoies aux outils d'analyse (par exemple le Décodeur) sont compressées et stockées dans un espace privé hébergé en Europe. Elles sont supprimées avec ton compte.",
    retentionHeading: "Durée de conservation",
    retentionBody:
      "Tes données sont conservées tant que ton compte existe. Lors de la suppression du compte, toutes les lignes liées à ton identifiant sont supprimées de manière atomique. Les journaux techniques anonymisés peuvent subsister une courte durée.",
    rightsHeading: "Tes droits",
    rightsItems: [
      {
        title: "Accès",
        body:
          "Réglages → Mon compte → Exporter mes données. Tu reçois un export structuré de tes données.",
      },
      { title: "Rectification", body: "Modification du profil dans Réglages → Mon compte." },
      {
        title: "Suppression",
        body:
          "Réglages → Mon compte → Supprimer mon compte. Suppression atomique et immédiate.",
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
      "Toutes les tables sensibles sont protégées par Row Level Security. Le portefeuille de cerveaux et les transactions ne sont modifiables qu'au travers de fonctions serveur signées. Aucun secret n'est stocké côté app.",
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
          "Revizio est une application mobile d'apprentissage par le jeu, distribuée sur iOS (et bientôt Android). Le service comprend une Aventure éditoriale, des jeux IA, un défi du jour, des outils IA et une gestion de compte.",
      },
      {
        heading: "2. Comptes",
        body:
          "La création d'un compte peut se faire via Apple, Google, un code à 6 chiffres reçu par email, ou en mode invité. Un compte invité peut être lié à un provider plus tard sans perte des données.",
      },
      {
        heading: "3. Plans",
        body:
          "Deux plans sont proposés : Free (gratuit et permanent) et Revizio Plus (abonnement mensuel ou annuel). Free donne accès à l'Aventure et aux jeux IA. Plus ajoute les outils IA et une allocation mensuelle de cerveaux cumulatifs. Les prix en vigueur sont affichés dans l'app au moment de l'achat.",
      },
      {
        heading: "5. Paiements",
        body:
          "Tous les achats (abonnements et packs de cerveaux) passent par l'App Store ou Google Play. Revizio ne traite jamais directement de moyens de paiement.",
      },
      {
        heading: "6. Renouvellement et résiliation",
        body:
          "L'abonnement Plus se renouvelle automatiquement tant qu'il n'est pas annulé dans tes réglages Apple ou Google. La résiliation prend effet à la fin de la période de facturation en cours.",
      },
      {
        heading: "7. Restauration",
        body:
          "Réglages → Restaurer mes achats rejoue les transactions Apple ou Google associées à ton compte.",
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
          "Une session d'apprentissage compte pour une récompense seulement si elle dépasse une durée minimale, indiquée dans l'app.",
      },
      {
        heading: "11. Modération",
        body:
          "Le contenu généré par un utilisateur reste strictement privé à son compte. Aucun partage utilisateur à utilisateur. Les prompts à risque sont bloqués par filtre avant traitement.",
      },
      {
        heading: "12. Responsabilité",
        body:
          "Revizio fournit le service en l'état. L'éditeur ne saurait être tenu responsable d'une indisponibilité temporaire ou d'un usage non conforme.",
      },
      {
        heading: "13. Droit applicable",
        body:
          "Droit français. En cas de litige, la juridiction du siège social de l'éditeur est compétente, sous réserve des dispositions impératives applicables aux consommateurs.",
      },
    ],
    accessVsConsumptionHeading: "4. Accès vs. consommation — important",
    accessVsConsumptionBody:
      "L'abonnement Plus donne accès aux outils IA. Les cerveaux sont une monnaie de consommation utilisée pour générer du contenu. Les packs de cerveaux disponibles à l'achat dans l'app rechargent uniquement cette consommation. Ils ne débloquent jamais l'accès Plus.",
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
            a: "Vérifie que tu es bien connecté à ton compte sur l'appareil. Si l'erreur persiste, désinstalle puis réinstalle l'app. Si rien ne marche, écris-nous.",
          },
          {
            q: "Mon onboarding est bloqué.",
            a: "Force la fermeture de l'app et relance. Ton avancée est synchronisée côté serveur.",
          },
          {
            q: "Comment supprimer mes données ?",
            a: "Réglages → Mon compte → Supprimer mon compte. Voir la page Supprimer mon compte pour les détails.",
          },
          {
            q: "Comment exporter mes données ?",
            a: "Réglages → Mon compte → Exporter mes données.",
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
            a: "Réglages → Restaurer mes achats. Tes transactions Apple ou Google sont rejouées automatiquement.",
          },
          {
            q: "Mon paiement a été refusé.",
            a: "Vérifie ton moyen de paiement dans tes réglages Apple ou Google.",
          },
          {
            q: "J'ai acheté Plus, mais il n'est pas actif.",
            a: "Quitte et relance l'app. Si le problème persiste, lance Restaurer mes achats. Sinon, écris-nous avec ton identifiant utilisateur.",
          },
        ],
      },
      {
        name: "Jeu",
        items: [
          {
            q: "Je n'ai pas reçu les brains promis.",
            a: "Vérifie que la session dépasse la durée minimale indiquée dans l'app. Si le crédit est manquant, écris-nous.",
          },
          {
            q: "Mes vies sont à 0 et ne régénèrent pas.",
            a: "Les vies régénèrent par paliers automatiques. Tu peux aussi en racheter pour quelques cerveaux.",
          },
          {
            q: "Mon streak s'est cassé alors que j'ai joué.",
            a: "Une session compte pour le streak si elle dépasse la durée minimale indiquée. Sinon contacte-nous avec l'horodatage.",
          },
          {
            q: "Un outil IA ne génère pas.",
            a: "Si la génération échoue, les cerveaux sont remboursés automatiquement. Si ce n'est pas le cas, écris-nous.",
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
            a: "Sur un hébergeur cloud, en Europe.",
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
      "Toutes les données liées à ton identifiant (profil, progression, cours, sessions, contenus IA, portefeuille, transactions, récompenses)",
      "Toutes les photos envoyées aux outils d'analyse",
      "Annulation côté plateforme de gestion d'abonnements",
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
