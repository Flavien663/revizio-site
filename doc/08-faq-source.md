# 08 — Base FAQ (source fidèle produit)

_Questions et réponses courtes, factuelles, alignées sur l'app actuelle. Réécrire/allonger pour le site avec le même ton (premium, concret, pas scolaire)._

Les 6 FAQ déjà présentes dans l'app (`lib/i18n.ts` L2152–L2163) sont reprises et enrichies. Les autres sont des questions récurrentes qui méritent une réponse publique.

---

## Catégorie 1 — Produit

**Q : Faut-il être étudiant pour utiliser Revizio ?**
R : Non. Revizio est conçu pour toute personne qui veut comprendre ou retenir un sujet — étudiants, adultes en reconversion, autodidactes, curieux. L'app te demande ton objectif (Étudiant ou Curieux) en onboarding et adapte ses libellés et ses propositions.

**Q : Sur quels sujets ça marche ?**
R : Tous les sujets. Tu choisis un cours que tu importes (photo, texte) ou tu pars d'un sujet libre ("La Renaissance", "Le Système solaire", "Les protocoles réseau"). Revizio adapte au niveau que tu lui indiques.

**Q : Comment Revizio adapte les contenus à mon niveau ?**
R : Tu donnes ton niveau (ex. "Lycée", "Culture générale", "Prépa", "Formation pro"). Revizio classe ce niveau en plusieurs buckets pédagogiques internes, et règle le vocabulaire, la difficulté et la densité des contenus générés en conséquence.

**Q : Comment fonctionne le planning automatique ?**
R : *"Revizio crée un planning de révision basé sur vos cours, chapitres, dates d'examen et jours disponibles. Il répartit les séances de manière équilibrée."* (Reprise verbatim de `help.faq.planning.a`.)

**Q : L'IA est-elle fiable ?**
R : *"Les contenus générés avec l'aide de l'IA doivent être relus et vérifiés par l'utilisateur. Compare toujours avec tes cours officiels."* (Reprise verbatim de `help.faq.aiTools.a`.)

**Q : Est-ce que c'est une app de chat IA ?**
R : Non. Revizio ne propose pas un chat libre avec l'IA. Tu choisis un outil (quiz, mémo, examen, rappels…) et l'IA produit un livrable concret.

---

## Catégorie 2 — Cerveaux / abonnements / packs

**Q : Que sont les cerveaux ?**
R : *"Les cerveaux sont l'énergie qui fait tourner les outils IA (quiz, mémos, examens, rappels…). Les packs ajoutent à ton compteur. Ton abonnement décide des outils auxquels tu peux accéder."* (Reprise verbatim de `help.faq.brains.a`.)

**Q : Un pack de cerveaux débloque-t-il des outils ?**
R : Non. **Un pack ne débloque jamais un accès.** Seul ton abonnement détermine quels outils tu peux utiliser. Les cerveaux sont l'énergie qui permet de lancer les outils auxquels tu as déjà accès.

**Q : Quelle est la différence entre Free, Premium et Max ?**
R :
- **Free** : 2 sujets max, 5 chapitres par sujet, jeux Pendu / Bingo / Mots croisés. Zéro cerveau offert par mois.
- **Premium (3,99 €/mois)** : sujets illimités, 50 cerveaux/mois, outils Mémo visuel et Quiz.
- **Max (7,99 €/mois)** : sujets illimités, 150 cerveaux/mois, tout Premium + Mémo structuré + Examen blanc + Rappels intelligents.

**Q : Est-ce qu'il y a un essai gratuit ?**
R : Non, Revizio n'utilise pas de période d'essai payante. Le Free est un vrai tier permanent, avec les 3 jeux, les 2 sujets, toutes les récompenses et toute la progression.

**Q : Les cerveaux de mon abonnement expirent-ils à la fin du mois ?**
R : Non. Les cerveaux mensuels s'accumulent — si tu ne les utilises pas un mois, ils restent disponibles le mois d'après. _(À confirmer : y a-t-il un plafond maximum ? voir fichier 09.)_

**Q : Comment gérer ou résilier mon abonnement ?**
R : *"L'abonnement est géré par l'App Store ou Google Play. Ouvre la gestion des abonnements dans les réglages de ton compte Apple ou Google pour résilier à tout moment."* (Reprise verbatim de `help.faq.sub.a`.)

**Q : Si je résilie, je perds mes contenus ?**
R : Non. Ton compte et tes contenus restent accessibles. Tu reviens simplement au Free, qui a des limites sur le nombre de sujets et sur les outils IA accessibles.

**Q : Si je passe de Max à Premium, qu'est-ce que je perds ?**
R : Tu perds l'accès aux outils exclusifs Max (Examen blanc, Mémo structuré, Rappels intelligents, planning optimisé). Les contenus déjà générés restent accessibles en lecture dans ton historique. Tes cerveaux mensuels passent à 50/mois.

---

## Catégorie 3 — Compte / sync / multi-appareil

**Q : Comment créer un compte ?**
R : Tu peux créer un compte avec Apple, Google, ou un email (code à 6 chiffres, aucun mot de passe à mémoriser). Tu peux aussi utiliser l'app en mode invité et créer un compte plus tard — tes données sont conservées.

**Q : Si je crée un compte après avoir utilisé l'app en invité, je perds mes données ?**
R : Non. Quand tu lies un compte à ton profil invité, ton historique, tes cerveaux, tes sujets et tes contenus sont conservés.

**Q : Puis-je utiliser Revizio sur plusieurs appareils ?**
R : Oui, à partir du moment où tu t'es connecté avec Apple / Google / Email. En mode invité, tes données sont liées à ton appareil.

**Q : Comment supprimer mon compte ?**
R : *"Ouvre Paramètres > Supprimer mon compte. Le compte et les données associées seront supprimés ou anonymisés côté serveur."* (Reprise verbatim de `help.faq.delete.a`.)

**Q : La suppression de mon compte annule mon abonnement ?**
R : Non. Un abonnement actif doit être résilié séparément depuis les réglages de ton compte Apple ou Google, avant ou après la suppression du compte.

**Q : Que se passe-t-il si je change de téléphone ?**
R : Reconnecte-toi avec Apple / Google / Email sur le nouvel appareil. Toutes tes données sont restaurées depuis le serveur.

---

## Catégorie 4 — Parrainage

**Q : Comment fonctionne le parrainage ?**
R : *"Partage ton code REV-XXXXX avec un ami. Quand il complète sa première séance de révision, vous gagnez tous les deux +5 cerveaux."* (Reprise verbatim de `help.faq.referral.a`.)

**Q : Mon code est-il unique ?**
R : Oui. Ton code au format `REV-XXXXX` est généré côté serveur et rattaché à ton compte. Il est stable d'un appareil à l'autre.

**Q : Les cerveaux gagnés par parrainage ont-ils une valeur monétaire ?**
R : Non. Les cerveaux sont une énergie d'usage dans l'app. Ils ne sont pas échangeables contre de l'argent, ne sont pas transférables, et n'ont pas de valeur marchande.

---

## Catégorie 5 — Confidentialité / données

**Q : Où sont stockées mes données ?**
R : Sur notre infrastructure Supabase (base de données chiffrée, stockage privé pour les images). Les contenus générés par l'IA passent par nos Edge Functions qui appellent OpenAI de façon sécurisée.

**Q : Mes photos de cours sont-elles publiques ?**
R : Non. Les photos que tu ajoutes à un sujet sont stockées dans un espace privé (Supabase Storage bucket privé), accessibles uniquement via des URLs signées pour ton compte.

**Q : Mes notes vocales sont-elles envoyées sur un serveur ?**
R : Non. Les notes vocales restent sur ton appareil (`file://` local). Elles ne sont pas synchronisées multi-appareils.

**Q : OpenAI reçoit-il le contenu de mes cours ?**
R : Oui, dans la mesure où tu lances un outil IA sur ce contenu. Les prompts envoyés à OpenAI pour générer une fiche, un quiz ou un examen sont nécessaires à la génération. Le contenu n'est pas utilisé pour entraîner des modèles OpenAI tiers (cf. politique data usage OpenAI — à préciser en privacy).

**Q : Puis-je supprimer un contenu IA généré ?**
R : Oui. Dans l'historique IA ou sur chaque outil, tu peux supprimer chaque contenu individuellement (corbeille + confirmation).

**Q : Puis-je exporter mes données ?**
R : _(À confirmer — actuellement pas de bouton export dédié dans l'app ; écrire à support@revizioapp.com pour une demande RGPD. Voir fichier 09.)_

---

## Catégorie 6 — Notifications

**Q : Quelles notifications Revizio envoie ?**
R : Trois types :
1. Rappels de séance selon ton planning.
2. Notifications IA : quand une génération est prête (mémo, quiz, examen).
3. Rappels intelligents (Max) : 30 micro-notions livrées sur ~10 jours à tes horaires choisis.

**Q : Comment désactiver les notifications ?**
R : Depuis les réglages de Revizio (onglet Réglages → Notifications) ou depuis les réglages système de ton téléphone.

**Q : Les rappels intelligents sont-ils en option ?**
R : Oui. Ils s'activent par série (banque de 30 snippets), sur un sujet de ton choix, à des horaires que tu définis. Tu peux mettre en pause ou réarmer à tout moment. Max uniquement.

**Q : Combien de notifications par jour au maximum ?**
R : Maximum 3 notifications / jour par utilisateur (anti-spam intégré côté serveur). Pour les rappels intelligents Max : 3 par jour sur une série active.

---

## Catégorie 7 — Questions techniques

**Q : Sur quels appareils Revizio fonctionne ?**
R : iOS et Android. Une version web existe pour la démo mais l'expérience complète est sur mobile.

**Q : Faut-il une connexion internet ?**
R : Oui pour l'essentiel (génération IA, synchronisation serveur). Les sessions déjà lancées et les contenus déjà générés restent consultables sans réseau.

**Q : Mes achats (abonnement, packs) sont-ils synchronisés si je change de téléphone ?**
R : Oui, tant que tu utilises le même compte Apple ou Google pour l'App Store / Google Play. L'option **"Restaurer mes achats"** dans Aide / Réglages permet de récupérer les droits sur un autre appareil connecté au même compte store.

---

## Catégorie 8 — Support

**Q : Comment contacter le support ?**
R : Email : **support@revizioapp.com**. Délai de réponse moyen : **3 jours ouvrés**.

---

## Règles de rédaction pour la FAQ publique

- Ton direct, pas de jargon.
- Tutoiement cohérent (comme l'app FR).
- **Zéro emoji** (doctrine §20).
- **Phrase courte** si possible, une idée par paragraphe.
- **Reprise verbatim** des réponses in-app quand elles existent et sont correctes — ça assure la cohérence app ↔ site.
- Toujours préciser si une feature est Max-only, Premium-only, etc.

## Statut source

- Les 6 FAQ app-verbatim (planning, brains, referral, aiTools, sub, delete) sont **prouvées** (i18n L2152-L2163).
- Les questions sur packs/débloquer/expiration/multi-device/suppression sont **inférées** mais alignées avec la règle business locked.
- Questions "export RGPD" et "plafond cumul cerveaux" marquées **à confirmer** (voir fichier 09).
