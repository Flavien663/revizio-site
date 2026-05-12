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
      "Cette politique de confidentialité explique comment Revizio collecte, utilise, partage et protège vos données personnelles lorsque vous utilisez l'application mobile Revizio et le site revizioapp.com. Elle complète les Conditions d'utilisation et s'inscrit dans le cadre du Règlement général sur la protection des données (RGPD).",
    controllerHeading: "1. Responsable du traitement",
    controllerBody:
      "L'application Revizio et le site revizioapp.com sont édités par Revizio App, dont l'adresse de contact est 31700 Blagnac, France. Pour toute demande relative à vos données personnelles : support@revizioapp.com. Les mentions légales détaillées (forme juridique, numéro d'immatriculation, directeur de la publication) sont disponibles sur demande à cette même adresse.",
    scopeHeading: "2. Champ d'application",
    scopeBody:
      "Cette politique couvre les traitements effectués via l'application mobile Revizio (iOS, Android à venir), le site officiel revizioapp.com et les services techniques associés (base de données, authentification, stockage des médias, fonctions serveur, génération par intelligence artificielle, notifications push). Elle ne couvre pas les politiques propres à l'App Store, au Google Play Store, ni aux fournisseurs d'identité (Apple, Google), qui restent régies par leurs propres conditions.",
    dataCollectedHeading: "3. Données que nous collectons",
    dataCollectedItems: [
      {
        title: "Identification",
        body:
          "Identifiant interne unique (UUID) généré à l'installation. Adresse e-mail uniquement si vous vous connectez via un code à usage unique reçu par e-mail, ou si elle nous est transmise par Apple ou Google lors de l'authentification. Méthode d'authentification utilisée (anonyme, Apple, Google, e-mail). Prénom d'affichage optionnel. Langue préférée. Mode d'affichage (système, clair, sombre).",
      },
      {
        title: "Préférences d'apprentissage",
        body:
          "Objectif sélectionné (étudiant ou curieux), jours d'étude par semaine, durée préférée de session, inclusion ou non des week-ends, fuseau horaire.",
      },
      {
        title: "Progression et activité",
        body:
          "Niveau et expérience cumulés, vies courantes, série quotidienne, progression dans l'Aventure et dans les mondes personnalisés, tentatives de défi du jour, tentatives et scores de quiz IA.",
      },
      {
        title: "Économie de cerveaux",
        body:
          "Solde de votre portefeuille, historique append-only des transactions (gains, dépenses, refunds automatiques), récompenses validées par le registre d'événements (Reward Ledger).",
      },
      {
        title: "Contenu que vous créez",
        body:
          "Cours et chapitres que vous saisissez, séances d'étude planifiées et complétées, retours après séance (humeur, niveau de productivité, niveau de confiance), notes vocales que vous enregistrez vous-même, photos de cours envoyées à l'outil Décodeur, mini-mondes d'Aventure personnalisée que vous générez.",
      },
      {
        title: "Achats et abonnement",
        body:
          "Statut de l'abonnement (Free ou Plus), période de facturation, date d'échéance, événements de paiement transmis par RevenueCat. Revizio ne stocke aucune donnée bancaire : les paiements sont traités exclusivement par Apple ou Google.",
      },
      {
        title: "Notifications et appareil",
        body:
          "Jeton de notification push Expo, plateforme (iOS / Android), statut d'autorisation des notifications, identifiant stable d'installation par appareil, fuseau horaire, et préférences détaillées des canaux de notifications.",
      },
      {
        title: "Parrainage",
        body:
          "Code de parrainage au format REV-XXXXX, liens entre parrains et filleuls, récompenses versées en cerveaux.",
      },
      {
        title: "Journaux techniques",
        body:
          "Journaux append-only liés aux paiements, aux générations IA et aux envois de notifications, à des fins de sécurité, de prévention de la fraude, d'audit et de support utilisateur.",
      },
    ],
    dataNotCollectedHeading: "4. Données que nous ne collectons pas",
    dataNotCollectedItems: [
      "Aucune géolocalisation précise — nous n'utilisons que le fuseau horaire de votre appareil pour planifier les notifications.",
      "Aucun accès au carnet d'adresses ou aux contacts de votre appareil.",
      "Aucune captation du microphone en arrière-plan — les notes vocales ne sont enregistrées qu'à votre demande explicite.",
      "Aucun identifiant publicitaire (IDFA sur iOS, GAID sur Android).",
      "Aucun tracking entre applications, aucun partage de données à des fins publicitaires.",
      "Aucun cookie web — Revizio est une application native, et le site officiel ne dépose pas de cookies de mesure d'audience.",
      "Aucun service d'analytics tiers ni de crash reporting n'est actif à ce jour.",
    ],
    purposesHeading: "5. Finalités du traitement et bases légales",
    purposesItems: [
      {
        title: "Fourniture du service",
        body:
          "Création et synchronisation de votre compte, sauvegarde de la progression, accès aux contenus. Base légale : exécution du contrat (Conditions d'utilisation).",
      },
      {
        title: "Personnalisation",
        body:
          "Adapter l'expérience à votre objectif d'apprentissage, à votre langue et à vos préférences d'étude. Base légale : exécution du contrat.",
      },
      {
        title: "Génération par intelligence artificielle",
        body:
          "Transmettre vos prompts et, le cas échéant, vos photos de cours, à notre fournisseur IA afin de générer jeux, fiches, examens et outils. Base légale : exécution du contrat.",
      },
      {
        title: "Notifications push",
        body:
          "Vous envoyer des rappels fonctionnels (défi du jour, fin d'une génération IA, etc.). Base légale : votre consentement, retirable à tout moment depuis les Réglages.",
      },
      {
        title: "Achats et abonnements",
        body:
          "Gérer l'accès aux fonctionnalités payantes et au crédit mensuel de cerveaux. Bases légales : exécution du contrat et obligation légale (comptabilité).",
      },
      {
        title: "Sécurité et prévention des abus",
        body:
          "Caps mensuels, anti-fraude, idempotence des transactions, journaux d'audit. Base légale : intérêt légitime à protéger le service et ses utilisateurs.",
      },
      {
        title: "Support utilisateur",
        body:
          "Répondre à vos demandes par e-mail à partir des informations strictement nécessaires. Base légale : exécution du contrat.",
      },
    ],
    processorsHeading: "6. Sous-traitants et partenaires techniques",
    processorsItems: [
      {
        name: "Supabase, Inc.",
        purpose:
          "Hébergement de la base de données, authentification, stockage des médias (bucket privé) et exécution des fonctions serveur (Edge Functions). Toutes les tables sensibles sont protégées par Row Level Security.",
      },
      {
        name: "OpenAI, L.L.C.",
        purpose:
          "Génération de contenu par les modèles d'intelligence artificielle utilisés par les jeux, les outils premium (Décodeur, Mémo structuré, Examen blanc, Quiz sur cours, Notifications intelligentes) et l'Aventure personnalisée. Vos prompts et, pour le Décodeur, vos photos de cours sont transmis au moment de la génération. Selon la politique API d'OpenAI, les données transmises via l'API ne sont pas réutilisées par défaut pour entraîner les modèles.",
      },
      {
        name: "RevenueCat, Inc.",
        purpose:
          "Proxy entre les stores et notre backend pour la gestion des abonnements et achats in-app. RevenueCat reçoit votre identifiant interne et les informations de transaction transmises par Apple ou Google.",
      },
      {
        name: "Expo (Expo Application Services)",
        purpose:
          "Acheminement des notifications push de notre serveur vers votre appareil via le service Expo Push.",
      },
      {
        name: "Apple Inc.",
        purpose:
          "Sign-In with Apple (authentification), distribution iOS via l'App Store et gestion des paiements in-app sur iOS.",
      },
      {
        name: "Google LLC",
        purpose:
          "Sign-In with Google (authentification), distribution Android via le Google Play Store (à venir) et gestion des paiements in-app sur Android.",
      },
    ],
    storageHeading: "7. Photos, notes vocales et stockage des médias",
    storageBody:
      "Les photos de cours que vous envoyez à l'outil Décodeur sont compressées avant envoi puis stockées dans un bucket privé Supabase (10 Mo maximum par fichier, formats JPEG, PNG, WebP, HEIC autorisés). Elles ne sont accessibles qu'à vous, sont transmises à OpenAI le temps de la génération, et sont supprimées à la suppression de votre compte. Les notes vocales associées à vos retours de séance sont stockées dans le même bucket privé, en accès restreint à votre compte ; elles ne sont à ce jour jamais transmises à OpenAI ni à aucun autre tiers.",
    transfersHeading: "8. Transferts hors Union européenne",
    transfersBody:
      "Certains de nos sous-traitants — notamment OpenAI, RevenueCat et Expo — sont établis aux États-Unis. Les transferts internationaux de données associés sont encadrés par les clauses contractuelles types adoptées par la Commission européenne, qui constituent à ce jour le mécanisme de transfert appliqué par ces fournisseurs. Apple et Google appliquent leurs propres conditions de transfert international, accessibles dans leurs politiques respectives. La région d'hébergement Supabase est documentée et peut être communiquée sur demande à support@revizioapp.com.",
    retentionHeading: "9. Durée de conservation",
    retentionBody:
      "Vos données de compte, votre progression et vos contenus sont conservés tant que votre compte est actif. À la suppression de votre compte, l'ensemble des données rattachées à votre identifiant est supprimé de manière atomique : profil, progression, cours, séances, contenus IA, photos, notes vocales, portefeuille, transactions et préférences. Les journaux techniques liés aux paiements ou aux générations IA peuvent être conservés sous une forme limitée pendant la durée nécessaire au respect de nos obligations comptables et de sécurité, puis supprimés ou anonymisés.",
    rightsHeading: "10. Vos droits",
    rightsItems: [
      {
        title: "Accès",
        body:
          "Obtenez une copie de vos données via Réglages → Mon compte → Exporter mes données. À défaut, écrivez à support@revizioapp.com.",
      },
      {
        title: "Rectification",
        body:
          "Modifiez votre profil et vos préférences depuis Réglages → Mon compte.",
      },
      {
        title: "Suppression",
        body:
          "Supprimez votre compte depuis Réglages → Mon compte → Supprimer mon compte. La suppression est atomique et immédiate. En cas d'impossibilité, écrivez à support@revizioapp.com.",
      },
      {
        title: "Portabilité",
        body:
          "L'export fourni depuis l'application est lisible et réutilisable dans un format structuré.",
      },
      {
        title: "Limitation",
        body:
          "Désactivez les notifications par canal depuis Réglages, ou demandez la limitation d'un traitement spécifique par e-mail au support.",
      },
      {
        title: "Opposition",
        body:
          "Vous pouvez vous opposer à un traitement fondé sur l'intérêt légitime en nous contactant.",
      },
      {
        title: "Retrait du consentement",
        body:
          "Vous pouvez retirer votre consentement aux notifications à tout moment depuis les Réglages, sans incidence sur la légalité des traitements antérieurs.",
      },
      {
        title: "Réclamation",
        body:
          "Vous pouvez saisir la Commission Nationale de l'Informatique et des Libertés (CNIL, www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.",
      },
    ],
    minorsHeading: "11. Mineurs",
    minorsBody:
      "Revizio n'offre aucune fonctionnalité spécifiquement dédiée aux enfants de moins de 13 ans : pas de profil public, pas de messagerie entre utilisateurs, pas de mécanique sociale. Si l'utilisateur est mineur, nous recommandons fortement un usage sous la responsabilité d'un parent ou tuteur légal, via les comptes familiaux Apple ou Google et leurs contrôles parentaux natifs (autorisation d'achat, restrictions de contenu, temps d'écran).",
    securityHeading: "12. Sécurité",
    securityBody:
      "Toutes les tables sensibles sont protégées par Row Level Security côté Supabase : chaque utilisateur ne peut lire que ses propres données. Le portefeuille de cerveaux et les transactions ne sont modifiables qu'à travers des fonctions serveur signées (SECURITY DEFINER). Le registre des récompenses est en append-only et utilise des clés d'idempotence pour prévenir les doublons. Les communications réseau sont chiffrées en HTTPS. Aucune clé d'API ni aucun secret n'est stocké côté client. L'authentification ne repose sur aucun mot de passe.",
    changesHeading: "13. Modifications de la politique",
    changesBody:
      "Cette politique peut évoluer pour refléter des changements produit, légaux ou techniques. Toute modification substantielle vous sera notifiée dans l'application ou par e-mail à l'adresse associée à votre compte. La date de dernière mise à jour figure en haut de cette page.",
    contactHeading: "14. Contact",
    contactBody: (email) =>
      `Pour toute question relative à cette politique ou à la protection de vos données, écrivez à ${email}. Nous répondons en moyenne sous 3 jours ouvrés.`,
  },
  terms: {
    intro:
      "Les présentes Conditions d'utilisation régissent l'accès et l'usage de l'application mobile Revizio (iOS, Android à venir) et du site revizioapp.com. En créant un compte ou en utilisant le service, vous acceptez sans réserve ces conditions. Si vous n'acceptez pas tout ou partie de ces conditions, vous devez cesser d'utiliser le service.",
    sections: [
      {
        heading: "1. Définitions",
        body:
          "« Revizio » désigne l'application mobile et le site officiel exploités par l'éditeur. « Service » désigne l'ensemble des fonctionnalités proposées dans l'application et sur le site. « Compte » désigne l'espace personnel rattaché à un identifiant unique. « Abonnement Plus » désigne l'offre payante d'accès à certaines fonctionnalités. « Cerveaux » désigne la monnaie virtuelle interne consommée pour générer les contenus IA. « Contenus utilisateur » désigne les textes, photos et notes vocales que vous ajoutez. « Contenus générés » désigne les sorties produites par les outils d'IA à partir de vos prompts.",
      },
      {
        heading: "2. Description du service",
        body:
          "Revizio est une application mobile d'apprentissage par le jeu. Le service comprend une Aventure éditoriale de 180 niveaux pré-générés répartis en 6 mondes thématiques, 8 mini-jeux d'apprentissage générés à la demande par intelligence artificielle (Quiz, Pendu, Vrai/Faux Rush, Tri Express, Classement Chrono, Mémo Duo, Bingo, Mots Croisés), 5 outils IA premium (Décodeur photo de cours, Mémo structuré, Examen blanc, Quiz sur cours, Notifications intelligentes), une Aventure personnalisée (mini-mondes de 10 niveaux générés sur un thème libre), un défi quotidien et un programme de parrainage. Le service évolue régulièrement.",
      },
      {
        heading: "3. Création et gestion du compte",
        body:
          "Un compte est créé automatiquement à l'installation, en mode anonyme. Vous pouvez ensuite lier votre compte à un fournisseur d'identité — Sign-In with Apple, Sign-In with Google ou code à usage unique reçu par e-mail — sans perdre votre progression. Aucun mot de passe n'est stocké. Vous êtes responsable de la confidentialité de vos identifiants associés (Apple ID, compte Google, accès à votre boîte e-mail). Vous vous engagez à ne pas créer plusieurs comptes pour une même personne. Vous pouvez supprimer votre compte à tout moment depuis Réglages → Mon compte → Supprimer mon compte.",
      },
      {
        heading: "4. Disponibilité du service",
        body:
          "Le service est fourni en l'état, sans garantie de continuité ininterrompue. Sa disponibilité peut être affectée temporairement par des opérations de maintenance, des mises à jour, ou par des incidents techniques imputables à nous-mêmes ou à nos sous-traitants. Nous nous efforçons de limiter ces interruptions et de communiquer à leur sujet lorsque cela est pertinent.",
      },
      {
        heading: "5. Plans d'abonnement",
        body:
          "Deux offres sont proposées : Free (gratuite et permanente) et Revizio Plus (abonnement mensuel ou annuel). Le plan Free donne accès à l'intégralité de l'Aventure, aux 8 jeux IA, au défi du jour et à un aperçu des outils IA, dans la limite d'un cap mensuel de cerveaux gagnés et avec 5 vies en stock. Le plan Plus, proposé à 5,99 € par mois ou 49,99 € par an (prix indicatifs en euros, localisés et adaptés par les stores selon votre juridiction), donne accès aux 5 outils IA premium, à un crédit mensuel de 200 cerveaux, à 8 vies, à une régénération de vies accélérée et à la création illimitée de mini-mondes personnalisés.",
      },
      {
        heading: "6. Accès vs. consommation",
        body:
          "L'abonnement Revizio Plus est un droit d'accès à certaines fonctionnalités et à un crédit mensuel. Les cerveaux sont une monnaie virtuelle interne destinée à financer les générations par IA. Les packs de cerveaux proposés à l'achat dans l'application (50, 125, 335 ou 670 cerveaux) rechargent uniquement cette consommation. Ils ne donnent pas accès aux outils premium réservés à l'abonnement Plus. Un utilisateur Free qui achète un pack de cerveaux n'accède pas aux outils premium tant qu'il n'a pas souscrit l'abonnement Plus.",
        highlight: true,
      },
      {
        heading: "7. Achats in-app",
        body:
          "Tous les achats — abonnements et packs de cerveaux — sont effectués via l'App Store d'Apple ou le Google Play Store. Revizio ne traite jamais directement les moyens de paiement et ne stocke aucune donnée bancaire. Les prix sont localisés et facturés par les stores selon leurs propres conditions générales de vente. Les achats de packs de cerveaux sont disponibles uniquement pour les utilisateurs abonnés.",
      },
      {
        heading: "8. Renouvellement automatique et résiliation",
        body:
          "L'abonnement Revizio Plus se renouvelle automatiquement à la fin de chaque période (mensuelle ou annuelle) au prix alors en vigueur, sauf annulation. Vous pouvez résilier à tout moment depuis les réglages d'abonnement de votre compte Apple ID ou Google Play, sans frais ni justification, au moins 24 heures avant la fin de la période en cours. La résiliation prend effet à la fin de la période en cours ; aucun remboursement au prorata n'est effectué par Revizio. La période d'essai éventuelle, lorsqu'elle est proposée, est régie par les conditions affichées au moment de la souscription.",
      },
      {
        heading: "9. Restauration des achats",
        body:
          "Vous pouvez restaurer vos achats antérieurs depuis l'écran Plans ou les Réglages de l'application. Les transactions Apple ou Google associées à votre identifiant sont alors rejouées automatiquement via notre prestataire RevenueCat. Cette opération peut être nécessaire en cas de réinstallation ou de changement d'appareil.",
      },
      {
        heading: "10. Remboursements",
        body:
          "Revizio ne traite pas directement les remboursements monétaires. Toute demande de remboursement relève de la politique d'Apple (reportaproblem.apple.com) ou de Google (support.google.com/googleplay) selon le store utilisé. Les cerveaux déjà consommés ne sont pas restitués en argent. Toutefois, en cas d'échec définitif d'une génération IA après débit, les cerveaux correspondants sont automatiquement recrédités sur votre portefeuille : il ne s'agit pas d'un remboursement monétaire.",
      },
      {
        heading: "11. Cerveaux — monnaie virtuelle",
        body:
          "Les cerveaux constituent une monnaie virtuelle interne à l'application Revizio. Ils sont non-cessibles entre comptes, sans valeur monétaire en dehors de l'application, ne peuvent être convertis en argent ni remboursés en espèces, et restent strictement liés à votre compte. La suppression de votre compte entraîne la perte définitive du solde, des bonus et des contenus IA générés. Revizio se réserve le droit d'ajuster les coûts et les modalités d'acquisition des cerveaux, ces ajustements n'ouvrant droit à aucune compensation au-delà des règles applicables aux consommateurs.",
      },
      {
        heading: "12. Contenus générés par intelligence artificielle",
        body:
          "Les jeux, fiches, examens, analyses et autres contenus produits par les outils sont générés par des modèles d'intelligence artificielle (sous-traitant : OpenAI). Ils peuvent contenir des imprécisions, des erreurs factuelles ou des biais. Revizio ne garantit aucun résultat scolaire, académique ou professionnel et recommande de toujours vérifier les contenus générés avant tout usage critique. Les contenus générés sont strictement privés à votre compte et ne sont jamais partagés avec d'autres utilisateurs. Revizio ne réutilise pas vos contenus pour entraîner un modèle d'IA.",
      },
      {
        heading: "13. Contenus utilisateur",
        body:
          "Vous conservez la propriété intellectuelle des contenus que vous ajoutez (cours, chapitres, photos de cours, notes vocales, thèmes saisis). En les ajoutant, vous accordez à Revizio une licence limitée, non exclusive, gratuite, mondiale et révocable, strictement nécessaire à l'exécution du service : stockage sécurisé, traitement par les outils IA, restitution dans votre interface. Vous garantissez détenir les droits sur les contenus que vous transmettez et vous engagez à ne pas envoyer de contenus illicites, contrefaisants, diffamatoires, haineux ou portant atteinte aux droits ou à la vie privée d'autrui.",
      },
      {
        heading: "14. Propriété intellectuelle Revizio",
        body:
          "L'application, le site, le code, le design, les niveaux éditoriaux pré-générés, les défis du jour, la marque Revizio et ses éléments graphiques (logo, mascotte, illustrations) sont la propriété exclusive de l'éditeur ou de ses partenaires et sont protégés par le droit de la propriété intellectuelle. Toute reproduction, scraping, ingénierie inverse, décompilation ou usage commercial sans autorisation préalable écrite est interdit.",
      },
      {
        heading: "15. Sessions et récompenses",
        body:
          "Une séance d'étude n'ouvre droit à récompense (cerveaux, expérience, série quotidienne) qu'à partir d'une durée effective d'au moins 10 minutes. Cette règle vise à préserver l'équilibre de l'économie virtuelle et à prévenir les abus. Les sessions trop rapprochées peuvent voir leur multiplicateur d'expérience réduit. Le défi du jour, les niveaux d'Aventure et le parrainage suivent leurs propres règles de récompense, décrites dans l'application.",
      },
      {
        heading: "16. Programme de parrainage",
        body:
          "Vous disposez d'un code de parrainage personnel au format REV-XXXXX. Lorsqu'un filleul utilise votre code, crée un compte et valide un premier niveau d'Aventure au cours de la journée, le parrain reçoit 10 cerveaux et le filleul reçoit 10 cerveaux, une seule fois par filleul. L'auto-parrainage est techniquement bloqué. Toute tentative d'exploitation (comptes multiples, fraude, automatisation) peut entraîner la suspension du compte concerné et l'annulation des récompenses versées.",
      },
      {
        heading: "17. Règles de conduite",
        body:
          "Vous vous engagez à ne pas : créer plusieurs comptes pour contourner les caps mensuels ou les règles de parrainage ; envoyer ou héberger des contenus illicites, haineux, sexuels impliquant un mineur, ou portant atteinte aux droits d'un tiers ; tenter de contourner les mécanismes de sécurité, de comptabilisation des achats ou des récompenses ; utiliser le service à des fins commerciales sans accord écrit préalable ; perturber le fonctionnement normal de l'application ou de ses sous-traitants. Le non-respect de ces règles peut entraîner la suspension immédiate ou la résiliation du compte, sans préavis lorsque la gravité le justifie.",
      },
      {
        heading: "18. Notifications",
        body:
          "Les notifications push sont opt-in et granulaires : vous pouvez activer ou désactiver chaque canal (défi du jour, Aventure, fin de génération IA, rappels intelligents, communications produit, etc.) depuis Réglages → Notifications, à tout moment.",
      },
      {
        heading: "19. Mineurs",
        body:
          "Le service n'est pas spécifiquement conçu pour les enfants de moins de 13 ans. Si vous êtes mineur, son utilisation est recommandée sous la responsabilité d'un parent ou tuteur légal, en s'appuyant sur les comptes familiaux et contrôles parentaux des stores Apple et Google (autorisation d'achat, restrictions de contenu, temps d'écran).",
      },
      {
        heading: "20. Responsabilité",
        body:
          "Le service est fourni en l'état. Dans la limite des dispositions impératives applicables aux consommateurs, Revizio ne saurait être tenue responsable des dommages indirects, ni des conséquences d'une indisponibilité temporaire, d'une perte de données imputable à un tiers ou d'un usage non conforme du service. Aucune disposition des présentes conditions ne vise à limiter ou exclure la responsabilité de Revizio pour les dommages qui ne peuvent légalement l'être.",
      },
      {
        heading: "21. Suspension et résiliation par Revizio",
        body:
          "En cas de manquement grave ou répété aux présentes conditions, Revizio se réserve le droit de suspendre ou de résilier votre compte, après notification quand cela est possible. La résiliation entraîne la perte d'accès au service et aux contenus associés. Aucun remboursement n'est dû lorsque la résiliation résulte d'un manquement de l'utilisateur.",
      },
      {
        heading: "22. Évolution du service et modification des conditions",
        body:
          "Revizio peut faire évoluer les fonctionnalités, l'économie de cerveaux, les prix ou les présentes conditions. Toute modification substantielle vous sera notifiée dans l'application ou par e-mail à l'adresse associée à votre compte. La poursuite de l'usage du service après notification vaut acceptation des nouvelles conditions ; à défaut, vous pouvez supprimer votre compte.",
      },
      {
        heading: "23. Droit applicable et juridiction",
        body:
          "Les présentes conditions sont régies par le droit français. À défaut d'accord amiable, tout litige relatif à leur exécution ou à leur interprétation sera porté devant les juridictions françaises compétentes, sous réserve des dispositions impératives applicables aux consommateurs leur permettant de saisir la juridiction de leur lieu de résidence dans l'Union européenne.",
      },
    ],
    contactHeading: "24. Contact",
    contactBody: (email) =>
      `Pour toute question relative à ces Conditions d'utilisation, écrivez à ${email}.`,
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
