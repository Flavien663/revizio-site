# CLAUDE.md — Revizio Website

## 1) Mission

Tu travailles sur le **site web public de Revizio**, séparé du repo mobile.

Objectif :
- créer un mini-site public **premium, sobre, crédible, rapide**
- fournir les URLs nécessaires pour **App Store Connect**
- rassurer Apple et les utilisateurs
- héberger les pages légales et support
- éviter toute dérive marketing, design gadget ou promesse mensongère

Le site est un **site simple**, pas une grosse machine marketing.

---

## 2) Règles absolues

- **Ne rien modifier dans l’app mobile**
- **Ne pas créer de monorepo**
- **Ne pas toucher au repo Expo / React Native**
- Le site vit dans un projet séparé, par exemple : `revizio-site`
- **Aucune base de données**
- **Aucun back-end nécessaire**
- **Aucun CMS requis**
- **Aucune dépendance inutile**
- **Aucune animation gadget**
- **Pas de ton enfantin**
- **Pas de promesses trompeuses sur l’IA**
- **Pas de promesse de réussite scolaire**
- **Ne pas présenter une feature non finie comme disponible**

---

## 3) Stack imposée

- **Next.js** récent
- **App Router**
- **TypeScript**
- **Tailwind CSS**
- pages statiques simples
- déploiement cible : **Vercel**
- site responsive, mobile-first

---

## 4) Contexte produit Revizio

Revizio est une application mobile de révision avec :
- onboarding
- planning
- matières / chapitres / sessions
- économie en cerveaux
- gamification
- outils IA
- archive / historique
- abonnements Free / Premium / Max
- backend Supabase
- RevenueCat pour abonnements / paywalls
- Apple Auth / Google Auth

Le site doit refléter une app de **révision / éducation**, pas un jeu.

---

## 5) Règles business verrouillées à respecter sur le site

### Modèle économique
- **abonnement = accès**
- **cerveaux = consommation**
- **packs = recharge ou contenu jouable uniquement**
- **un pack ne débloque jamais un accès**
- **aucune faille de wording ne doit laisser penser le contraire**

### Plans
#### Free
- 2 cours max
- 5 chapitres max / cours
- sessions illimitées
- onboarding +3
- 1er cours +1
- 2e cours +1
- 1ère vraie séance valide du jour +1
- streak 7j +2 / 15j +4 / 30j +8 / 60j +16
- après 60j : max 16 cerveaux / mois
- scan inclus
- pendu inclus
- pas de quiz, fiche, examen blanc, mots croisés, notifications intelligentes, bingo

#### Premium
- cours illimités
- chapitres illimités
- sessions illimitées
- 50 cerveaux / mois
- scan, quiz, fiches, pendu, bingo inclus

#### Max
- tout Premium
- 150 cerveaux / mois
- examens blancs, mots croisés, notifications intelligentes inclus
- planning optimisé

### Packs cerveaux
- 2,99€ = 50
- 5,99€ = 125
- 12,99€ = 334
- 19,99€ = 670

### Règles produit à rappeler si pertinent
- une séance compte seulement si **durée >= 10 min**
- sinon : pas de reward / progression / streak
- pendant une génération IA, l’utilisateur peut quitter l’écran
- fin de génération IA = notification intra-app claire
- chaque outil IA a sa page dédiée dans l’app
- archive / historique = importantes

---

## 6) Architecture LLM / IA à refléter sans sur-promettre

Règles produit :
- requête texte → GPT-5 mini
- requête web → GPT-5 mini
- requête image → GPT-5
- si outil image sans image fournie → route texte
- scan de cours = vrai use case image
- priorité à la fiabilité plutôt qu’aux grosses requêtes
- si payload lourd : découper en 2 ou 3 requêtes max
- bornes strictes d’entrée / sortie / items
- JSON strict si pertinent
- retry / fallback allégé

**Ne pas afficher ces détails techniques partout.**
Les mentionner seulement si nécessaire dans les textes légaux ou support.
Le site doit parler d’**outils IA d’aide à la révision**, sans survendre.

---

## 7) Ton, positionnement, style de marque

### Ton éditorial
- premium
- sérieux
- moderne
- sobre
- crédible
- clair
- utile
- jamais enfantin
- jamais arrogant
- jamais “startup bullshit”

### Positionnement à faire sentir
Revizio aide à :
- structurer ses révisions
- planifier son travail
- avancer dans ses cours et chapitres
- utiliser des outils IA utiles à la révision
- garder un historique et un cadre de progression

### Ce qu’il ne faut pas écrire
- “réussite garantie”
- “explose tes notes”
- “l’IA qui fait tout à ta place”
- “deviens premier de la classe”
- tout wording trop commercial, trop creux ou trop adolescent

---

## 8) Charte graphique

### Direction générale
Le site doit être :
- minimal
- premium
- propre
- très lisible
- mobile-first
- avec beaucoup d’air
- hiérarchie forte
- composants simples
- pas de surcharge
- pas d’effets tape-à-l’œil

### Style visuel
- surfaces nettes
- coins doux mais pas cartoon
- ombres légères
- contraste propre
- sections courtes
- maquette éditoriale sérieuse

### Palette de couleurs recommandée
Utiliser une palette courte et cohérente.

#### Couleur principale
- **Primary / Accent** : `#F26B3A`

#### Couleur primaire foncée
- **Primary Dark** : `#D95426`

#### Fond principal
- **Background** : `#0F1115`

#### Fond secondaire
- **Surface** : `#171A21`

#### Bordures
- **Border** : `#262B36`

#### Texte principal
- **Text Primary** : `#F5F7FA`

#### Texte secondaire
- **Text Secondary** : `#A7B0BE`

#### Fond clair alternatif si nécessaire
- **Soft Light** : `#F7F8FA`

#### Succès
- **Success** : `#22C55E`

#### Avertissement
- **Warning** : `#F59E0B`

#### Erreur
- **Danger** : `#EF4444`

### Règles de couleur
- ne pas utiliser 8 couleurs d’accent
- le orange sert à souligner, pas à peindre toute la page
- priorité à des fonds sombres ou neutres premium
- le contraste doit rester très lisible sur mobile
- éviter les dégradés agressifs
- éviter les couleurs “gaming”

### Typographie
Privilégier une police system ou une sans-serif propre type :
- Inter
- Geist
- ui-sans-serif / system stack

### Échelle typo recommandée
- Hero title : très lisible, fort impact
- H1 / H2 / H3 bien hiérarchisés
- texte courant : simple, aéré
- line-height confortable
- pas de micro-texte inutile

### Rayons / ombres / spacing
- border radius : **14px à 20px**
- ombres : légères, sobres
- spacing généreux
- grid simple
- pas de densité visuelle excessive

---

## 9) Pages obligatoires

Créer les routes suivantes :

- `/` → Home / Landing
- `/privacy` → Privacy Policy
- `/terms` → Terms of Use / Conditions d’utilisation
- `/support` → Support
- `/delete-account` → Suppression de compte
- `/subscriptions` → optionnel mais recommandé

---

## 10) Rôle de chaque page

### Home `/`
Doit :
- expliquer en 3 secondes ce qu’est Revizio
- donner une image sérieuse et premium
- présenter les bénéfices principaux
- montrer les fonctionnalités réellement disponibles
- expliquer Free / Premium / Max sans confusion
- expliquer clairement la différence entre abonnement et packs de cerveaux
- contenir captures, mockups ou placeholders propres
- avoir un footer légal complet

### Privacy `/privacy`
Doit être :
- publique
- lisible
- structurée
- crédible pour une app mobile

Doit prévoir des sections :
- responsable du traitement / éditeur
- données collectées
- finalités
- base légale si le texte final l’intègre
- sous-traitants / prestataires
- Supabase
- RevenueCat
- Apple / Google
- cookies / analytics si utilisés
- conservation
- sécurité
- droits utilisateurs
- contact privacy
- suppression de compte
- date de mise à jour

### Terms `/terms`
Doit inclure :
- objet du service
- accès au service
- comptes
- plans Free / Premium / Max
- distinction claire abonnement vs packs de cerveaux
- paiements
- renouvellement
- restore purchases
- résiliation
- usage autorisé
- limites liées à l’IA
- absence de garantie de résultat scolaire
- disponibilité / responsabilité
- contact

### Support `/support`
Doit inclure :
- email support visible
- FAQ de base
- restaurer les achats
- problème d’abonnement
- problème Apple / Google login
- suppression de compte
- comment contacter le support
- réponse claire et crédible pour Apple

### Delete Account `/delete-account`
Doit inclure :
- procédure de suppression
- mention claire que l’initiation doit être possible dans l’app
- page web = aide complémentaire
- ce qui est supprimé
- ce qui peut être conservé légalement
- contact si blocage

### Subscriptions `/subscriptions` (optionnel)
Peut inclure :
- rappel des plans Free / Premium / Max
- ce que débloque un abonnement
- rappel des packs de cerveaux
- distinction très claire entre accès et consommation

---

## 11) Header, footer, navigation

### Header minimal
- logo Revizio
- lien Home
- lien Support
- CTA App Store si disponible, sinon placeholder discret

### Footer obligatoire
Inclure partout :
- lien Home
- lien Privacy
- lien Terms
- lien Support
- lien Delete Account
- copyright
- nom de l’éditeur / placeholder
- contact support

### Navigation
Pas de mega-menu.
Pas de navigation lourde.
Le site doit rester simple.

---

## 12) Sections recommandées pour la Home

### Section 1 — Hero
- titre clair
- sous-titre crédible
- CTA principal
- CTA secondaire facultatif
- visuel mockup propre

### Section 2 — Ce que fait Revizio
3 à 5 blocs maximum :
- planifier
- réviser
- suivre sa progression
- utiliser des outils IA utiles
- retrouver son historique

### Section 3 — Comment ça marche
Expliquer simplement :
1. créer ses cours / chapitres
2. organiser ses révisions
3. lancer des outils de travail adaptés

### Section 4 — Fonctionnalités
Seulement les features réellement disponibles.
Pas de bingo si non jouable.
Pas de wording flou sur les tools IA.

### Section 5 — Offres
Comparer :
- Free
- Premium
- Max

**Sans inventer de prix d’abonnements** si non fournis.

### Section 6 — Abonnements et packs
Bloc séparé et explicite :
- abonnement = accès à certaines fonctionnalités / quotas mensuels
- packs de cerveaux = recharge de consommation ou contenu jouable
- un pack ne remplace pas un abonnement

### Section 7 — FAQ courte
3 à 6 questions max :
- Revizio est-il disponible sur iPhone ?
- Comment restaurer mes achats ?
- Quelle différence entre abonnement et packs ?
- Comment supprimer mon compte ?
- Comment contacter le support ?

---

## 13) UX / UI rules

- mobile-first
- sections courtes
- lisibilité avant densité
- CTA clairs
- pas de carrousel complexe
- pas de vidéo auto-play
- pas de pop-up marketing
- pas de dark patterns
- pas de compte à rebours artificiel
- pas de faux social proof
- pas de jargon inutile

---

## 14) SEO minimum

Prévoir :
- metadata title par page
- meta description par page
- Open Graph minimum
- favicon
- sitemap
- robots.txt
- URLs propres
- pas de query params inutiles
- bonne hiérarchie H1/H2/H3

Ne pas sur-optimiser SEO.
Le but est la propreté et la crédibilité.

---

## 15) Accessibilité minimum

- contraste lisible
- tailles de texte correctes
- focus visibles
- liens clairs
- boutons identifiables
- images avec alt
- structure sémantique propre
- navigation clavier acceptable

---

## 16) Performance minimum

- site très léger
- images optimisées
- aucune librairie lourde inutile
- pas de trackers inutiles
- pas d’animations coûteuses
- bon rendu mobile sur réseau moyen

---

## 17) Placeholders obligatoires

Ne jamais inventer les informations suivantes.
Utiliser des placeholders explicites tant qu’elles ne sont pas fournies :

- `SUPPORT_EMAIL`
- `PRIVACY_EMAIL`
- `LEGAL_ENTITY_NAME`
- `LEGAL_ADDRESS`
- `APP_STORE_URL`
- `DOMAIN_NAME`
- `LAST_UPDATED`

Possibles en plus si utile :
- `INSTAGRAM_URL`
- `TIKTOK_URL`
- `LINKEDIN_URL`

---

## 18) Contenu à ne jamais inventer

- tarifs d’abonnements si non fournis
- dénomination juridique de l’éditeur
- adresse légale
- coordonnées de contact réelles
- disponibilité exacte d’une feature non confirmée
- résultats scolaires
- avis clients fictifs
- nombres d’utilisateurs fictifs

---

## 19) Livrables attendus

Claude doit livrer :

1. structure du projet
2. pages complètes
3. composants réutilisables minimum
4. styles globaux
5. metadata SEO
6. favicon placeholder
7. sitemap
8. robots.txt
9. README de déploiement Vercel ultra court
10. `CHECKLIST_APP_STORE.md`
11. `FINAL_REVIEW.md` à la fin du passage de finalisation

---

## 20) Fichiers attendus

Minimum recommandé :

- `app/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/support/page.tsx`
- `app/delete-account/page.tsx`
- `app/subscriptions/page.tsx` si retenu
- `app/layout.tsx`
- `app/globals.css`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/...`
- `README_DEPLOY.md`
- `CHECKLIST_APP_STORE.md`
- `FINAL_REVIEW.md`

---

## 21) Critères d’acceptation

Le travail n’est accepté que si :

- le site build
- toutes les routes publiques existent
- le footer est présent partout
- le design est premium, sobre, crédible
- le contenu est cohérent avec Revizio
- aucune confusion abonnement / packs
- aucune feature non finie mise en avant
- Privacy est structurée et sérieuse
- Support est crédible
- Delete Account est cohérent avec les attentes Apple
- les placeholders critiques sont visibles et remplaçables facilement
- le site est responsive mobile
- le site est léger et maintenable

---

## 22) Ce qu’il faut prouver

Claude doit distinguer clairement dans son résumé final :

- **modifié**
- **prouvé**
- **inféré**
- **bloqué externe**

### “Prouvé” doit inclure au minimum
- build OK
- routes OK
- footer OK
- navigation OK
- responsive vérifié
- fichiers SEO présents
- pas de lien interne cassé

**“TypeScript OK” seul n’est pas une preuve suffisante.**

---

## 23) QA imposée

Toujours inclure un bloc QA court :

- état initial
- action
- attendu
- obtenu
- correctif si écart

Quand pertinent, tester avec :
- mobile
- desktop
- liens footer
- navigation entre pages
- cohérence des plans
- cohérence abonnement / packs
- présence des placeholders critiques

---

## 24) Méthode de travail imposée

Ordre attendu :
1. créer la structure
2. implémenter toutes les pages
3. ajouter styles et composants simples
4. ajouter metadata + sitemap + robots
5. faire un passage de cohérence produit / légal / wording
6. faire un passage final de finition
7. produire le résumé final avec preuves

Ne pas faire :
- audit sans fin
- refactor abstrait inutile
- architecture excessive
- sur-ingénierie
- design system tentaculaire

---

## 25) App Store Connect — correspondance des URLs

Le site doit fournir :

- `https://DOMAIN_NAME/` → **Marketing URL**
- `https://DOMAIN_NAME/privacy` → **Privacy Policy URL**
- `https://DOMAIN_NAME/support` → **Support URL**
- `https://DOMAIN_NAME/terms` → URL utile complémentaire
- `https://DOMAIN_NAME/delete-account` → URL utile complémentaire

---

## 26) Déploiement cible

Déploiement attendu :
- repo GitHub séparé
- import dans Vercel
- domaine custom branché ensuite
- HTTPS actif
- `www` redirigé si nécessaire

---

## 27) Interdits

- ne pas modifier l’app mobile
- ne pas créer de dépendance au backend mobile
- ne pas ajouter d’admin
- ne pas ajouter de blog
- ne pas ajouter de base de données
- ne pas ajouter de newsletter complexe
- ne pas ajouter de système de compte web
- ne pas créer une usine à gaz

---

## 28) Résumé d’intention

Le résultat attendu est un site :
- simple
- premium
- sérieux
- propre
- crédible pour Apple
- crédible pour les utilisateurs
- facile à maintenir
- rapide à déployer
- cohérent avec le vrai produit Revizio
