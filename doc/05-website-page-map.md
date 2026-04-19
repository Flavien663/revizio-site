# 05 — Plan des pages du website

_Chantier de refonte. Cette liste définit ce que le nouveau site doit contenir, pas ce que l'ancien site contenait (non auditable depuis ce repo)._

---

## Légende "nature de la page"

- 🟦 **Marketing** — persuade, fait comprendre vite, convertit.
- 🟨 **Explicatif** — aide à utiliser, répond aux questions, rassure.
- 🟥 **Légal / contractuel** — engagements, obligations légales.

---

## 1. Landing page — `/` 🟦

- **Objectif** : expliquer Revizio en 10 secondes et générer un download.
- **Audience** : tous profils (étudiant, adulte, curieux) arrivant via pub/SEO/partage.
- **À afficher** :
  - Hero universel (pas "étudiants qui...") avec promesse cœur + CTA télécharger.
  - Preuve en 3 piliers (Comprends vite / Teste-toi / Retiens sans y penser).
  - Section "Pour qui" (3 tuiles : Étudiant / Adulte / Curieux) avec cas d'usage concrets.
  - Aperçu des 8 outils (grille courte).
  - Exemple de fiche générée (preview Mémo visuel) — ça vend beaucoup.
  - Teaser plans (Free / Premium / Max) + renvoi vers page offres.
  - Bandeau confiance (pas de pub, données respectées, sans mot de passe).
  - CTA store final + lien FAQ.
- **CTA attendu** : 1 primaire → store iOS/Android. 1 secondaire → `/offres`.
- **Ton attendu** : verbe d'action, bénéfice concret, zéro emoji, zéro hype.
- **Risques à éviter** :
  - Re-tomber dans le "étudiants / examens / stress" only.
  - Promettre "essai gratuit 7 jours" qui n'existe pas.
  - Afficher "250 cerveaux/mois" ou autre chiffre legacy obsolète.
  - Illustrations génériques type banque d'images.

## 2. Fonctionnalités / outils — `/outils` (ou `/features`) 🟦🟨

- **Objectif** : détailler chaque outil avec ce qu'il produit, comment ça marche, pour qui c'est utile.
- **Audience** : visiteur intéressé qui veut creuser avant d'installer.
- **À afficher** :
  - Index des 8 outils (Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, Pendu, Bingo, Mots croisés) avec ancres.
  - Pour chaque outil : nom + promesse 1 phrase + ce que tu obtiens + à quoi ça sert + visuel app + tier requis.
  - Section "Jeux intelligents" regroupant les 3 jeux.
  - Section "Apprendre & retenir" regroupant Mémo visuel + Mémo structuré.
  - Section "Se tester" : Quiz + Examen blanc.
  - Section "Ne plus oublier" : Rappels intelligents.
  - Section "Planifier" (même si c'est pas un outil IA, c'est central).
- **CTA** : "Télécharger Revizio" + "Voir les offres".
- **Ton** : descriptif premium, pas pavé technique.
- **Risques** :
  - Vendre un outil Max comme disponible Free.
  - Masquer la contrainte photo du Mémo visuel (erreur).
  - Donner trop de détails "techniques" (modèles IA, tokens, prompt) — interdit.

## 3. Offres / abonnement / packs — `/offres` (ou `/pricing`) 🟦🟨

- **Objectif** : faire comprendre les 3 plans, le rôle des cerveaux, le rôle des packs, et convertir.
- **Audience** : visiteur qui compare avant d'acheter.
- **À afficher** :
  - Comparatif Free / Premium / Max avec prix, cerveaux/mois, outils accessibles (cf. fichier 03).
  - Schéma clair "Abonnement = accès, cerveaux = énergie, packs = recharge".
  - Section "Comment je paie ?" (App Store / Google Play, renouvellement auto, résiliation).
  - Rappel : pas d'essai gratuit promis, Free est un vrai tier permanent.
  - Aperçu des 4 packs cerveaux (Starter/Boost/Pro/Ultime) avec mention "achat ponctuel, ne change pas ton plan".
  - Mentions légales d'abonnement en bas.
- **CTA** : "Choisir dans l'app" (renvoi store), pas de paiement direct website (l'app utilise RevenueCat via les stores).
- **Ton** : clair, pas vendeur agressif, pas scolaire.
- **Risques** :
  - Laisser croire qu'un pack = abonnement.
  - Afficher des prix packs EUR hardcodés qui varient selon le pays.
  - Promettre un remboursement automatique côté Revizio (faux — dépend des stores).

## 4. FAQ — `/faq` 🟨

- **Objectif** : répondre aux questions qui empêchent d'installer ou qui reviennent au support.
- **Audience** : visiteur hésitant, utilisateur qui cherche avant d'écrire au support.
- **À afficher** (voir fichier 08 pour le contenu détaillé) :
  - **Produit** — "Comment Revizio adapte les contenus à mon niveau ?", "Faut-il être étudiant ?", "Ça marche sur quels sujets ?"
  - **Cerveaux / abonnement / packs** — rappels clairs, règles business.
  - **Compte** — créer, fusionner invité/compte, changer de device, supprimer.
  - **Confidentialité / données** — photos, IA, stockage.
  - **Notifications** — comment ça marche, comment ça s'arrête.
  - **Multi-appareil / récupération** — que se passe-t-il si je change de téléphone.
- **CTA** : "Contacter le support" (mail `support@revizioapp.com`).
- **Risques** :
  - Dupliquer les mentions légales dans la FAQ — les garder séparées.
  - Répondre "mode techno" — garder un ton utilisateur.
  - Promettre des features non-livrées ("planning optimisé Max" si pas encore branché).

## 5. Politique de confidentialité — `/privacy` 🟥

- **Objectif** : être conforme RGPD + Apple/Google review + honnêteté totale.
- **Audience** : utilisateurs, autorités, reviewers stores.
- **À afficher** :
  - Identité de l'éditeur + contact DPO (à confirmer, voir fichier 09).
  - Liste complète des données collectées (pseudo, email, photos, notes vocales, push token, préférences de planning, transactions cerveaux).
  - Finalités : fourniture du service, IA, facturation, support, amélioration.
  - Sous-traitants / processeurs : Supabase (BDD + Storage), OpenAI (génération IA), RevenueCat (facturation), Apple/Google (auth + paiement), Expo Push (notifications).
  - Durée de conservation.
  - Droits RGPD : accès, rectification, effacement, portabilité, opposition.
  - Procédure de suppression de compte (lien app + URL help).
  - Base légale (consentement / exécution du contrat / intérêt légitime).
  - Cookies (si applicable côté site).
- **CTA** : "Supprimer mon compte" (lien help ou app).
- **Ton** : clair, pas de jargon juridique incompréhensible.
- **Risques** :
  - Garder la version legacy qui ne mentionne ni OpenAI ni RevenueCat.
  - Oublier les photos (stockage Supabase) et les notes vocales.
  - Promettre "0 partage" alors que les sous-traitants en reçoivent une partie.

## 6. Conditions d'utilisation — `/terms` (CGU/CGV) 🟥

- **Objectif** : cadrer contractuel entre l'éditeur et l'utilisateur, conformité store.
- **Audience** : utilisateurs, stores, juridique.
- **À afficher** :
  - Identité éditeur.
  - Nature du service (app d'apprentissage + IA générative + IAP).
  - Compte utilisateur : guest / authentifié, durée, fermeture.
  - Règles de conduite (pas d'abus, pas de revente de compte).
  - Économie de cerveaux : nature (non monétaire), non transférable, ne donne pas droit à remboursement en €, expire ou non (préciser).
  - Abonnements : renouvellement auto, résiliation store, prix TTC.
  - Packs : achats définitifs, non remboursables automatiquement.
  - Propriété intellectuelle des contenus générés par l'IA (à clarifier — voir fichier 09).
  - Limitation de responsabilité (IA peut se tromper, à vérifier).
  - Loi applicable, tribunal compétent.
- **Risques** :
  - CGU qui mentionnent des prix dépassés.
  - Ambiguïté sur la propriété des contenus IA (voir fichier 09).
  - Oublier le volet "contenu IA généré = à relire" qui est déjà affirmé dans la FAQ de l'app.

## 7. Aide / support / contact — `/support` (ou `/help`) 🟨

- **Objectif** : guider l'utilisateur qui a un souci concret avant d'écrire.
- **Audience** : utilisateurs actifs.
- **À afficher** :
  - Email support (`support@revizioapp.com`) + délai de réponse affiché dans l'app : "3 jours ouvrés" (`SUPPORT_RESPONSE_DELAY`).
  - Procédure restaurer achats.
  - Procédure gérer/résilier abonnement (deep-link Apple / Google).
  - Procédure supprimer compte (+ conséquence abonnement toujours actif à résilier à part).
  - Lien vers FAQ.
- **CTA** : "Écrire au support".
- **Risques** :
  - Promettre un chat live qui n'existe pas.
  - Donner un numéro de téléphone qui n'existe pas.

## 8. Page "Télécharger" / store CTA — `/download` ou bouton 🟦

- **Objectif** : convertir clic vers installation.
- **Audience** : visiteur convaincu.
- **À afficher** :
  - Badges store officiels (App Store / Google Play).
  - QR code pour passer desktop → mobile.
  - Rappel des 3 promesses clés.
- **Risques** :
  - Lien mort si les app IDs changent.
  - Badge store non officiel (non-compliant).

## 9. Page "Supprimer mon compte" — `/delete-account` 🟥🟨

- **Obligatoire Apple review** : Apple exige une URL web publique pour initier une demande de suppression de compte.
- **Objectif** : expliquer comment supprimer son compte sans avoir l'app.
- **Audience** : utilisateur qui n'a plus l'app ou qui veut la démarche avant de l'ouvrir.
- **À afficher** :
  - Étapes : ouvrir l'app → Réglages → Supprimer mon compte → confirmer.
  - Alternative : email à `support@revizioapp.com` avec email du compte.
  - Conséquences (données supprimées / anonymisées, abonnement pas annulé automatiquement).
  - Délai de traitement.
- **CTA** : "Écrire à support" + "Ouvrir l'app".

## 10. (Optionnel) Blog / ressources — `/blog` 🟦🟨

- Pas présent dans l'app. À décider côté site (voir fichier 09).
- Pourrait héberger des articles "Comment retenir X", études de cas d'usage, "Revizio pour le concours Y".

---

## Distinction nature des pages (synthèse)

| Nature | Pages |
|---|---|
| 🟦 Marketing | Landing, Fonctionnalités, Offres, Download |
| 🟨 Explicatif | FAQ, Support, Offres (partiel), Suppression compte (partiel) |
| 🟥 Légal | Privacy, Terms, Suppression compte (partiel) |

## Rappel doctrinal

- **Zéro emoji** sur toutes les pages (doctrine §20).
- **Aucune des pages ne doit** prétendre à des features non livrées (planning optimisé Max tant que non branché).
- **Faire lire par un humain** avant publication — certains textes générés doivent être validés juridiquement (fichier 06, 09).

## Statut source

- Liste des pages : **inférée** (l'ancien site n'est pas dans le repo).
- URLs externes de base (`/privacy`, `/terms`, `/support`, `/delete-account`, `/subscriptions`) : **prouvées** (`constants/legal-links.ts`). Il FAUT que ces URLs existent sur le nouveau site pour ne pas casser les deep-links de l'app.
