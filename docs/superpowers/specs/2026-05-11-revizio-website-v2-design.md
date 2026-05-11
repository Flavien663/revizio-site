# Revizio Website V2 — Design Spec

**Date** : 2026-05-11
**Statut** : Approved by user (brainstorming)
**Scope** : Refonte totale du site public Revizio suite au repositionnement produit (V14 — Aventure + 8 jeux IA, 2 tiers Free/Plus).

---

## 1. Contexte et intention

Le produit a basculé d'un "compagnon d'apprentissage" structuré (cours / chapitres / outils IA) vers **"Apprends en jouant"** : Aventure éditoriale (3 mondes, 90 niveaux), 8 jeux IA générés à la volée, défi du jour, mini-aventure perso. Les tiers passent de 3 (Free/Premium/Max) à **2** (Free / Revizio Plus 5,99 €/mois ou 49,99 €/an).

Le site actuel reflète l'ancien produit. Tout est à refaire.

### Choix de cadrage validés

- **Positionnement** : ludique assumé mais premium (pas sobre, pas enfantin non plus)
- **Audience** : curieux d'abord, étudiants en sous-couche
- **Architecture** : minimale — tout sur la home + 4 pages légales obligatoires
- **Identité visuelle** : light + couleur par jeu (palette à 8 teintes + 3 mondes)
- **Langue** : FR + EN dès le départ (i18n simple, pas de lib)
- **Mécaniques affichées** : XP / vies / streak en bandeau crédibilité. **Pas** de packs cerveaux, **pas** d'affiliation sur le site (mécaniques internes app)
- **Approche home** : Games-led (option B) — le hero générique mène à une vitrine 8 jeux qui est l'attraction visuelle, puis Aventure, outils premium, plans

### Sources de vérité

- `doc/REVIZIO_APP_FULL_PRODUCT_SUMMARY.md` — synthèse produit V16 (économie, données, droits, IA, sécurité)
- `lib/site.ts` — config existante (domain, emails, App Store URL, legal entity placeholder)
- `visuals/` — assets visuels (mascottes par jeu, success/fail, logo)

---

## 2. Architecture & routes

### Routes publiques (5 × 2 langues = 10 URLs)

```
/                    → home FR (default)
/privacy             → privacy FR
/terms               → terms FR
/support             → support FR
/delete-account      → delete account FR

/en                  → home EN
/en/privacy
/en/terms
/en/support
/en/delete-account
```

### Routes supprimées

- `app/outils/` — contenu absorbé par la home (vitrine 8 jeux + outils premium)
- `app/faq/` — FAQ courte (5 Q) reste sur la home, FAQ enrichie (~10 Q) déplace dans `/support`
- `app/subscriptions/` — section "Plans" sur la home

### Redirects (next.config.ts)

```
/outils          → /
/faq             → /#faq
/subscriptions   → /#plans
/en/outils       → /en
/en/faq          → /en/#faq
/en/subscriptions → /en/#plans
```

Raison : l'app mobile contient des deep-links vers `/subscriptions` (`constants/legal-links.ts` côté app). On ne casse pas la compat.

### i18n

- Pas de librairie. Dictionnaire TS : `lib/i18n/fr.ts`, `lib/i18n/en.ts`, `lib/i18n/index.ts` (helper `t(key, lang)`).
- Détection langue via segment d'URL (`/en` → en, sinon fr). Pas de redirection auto basée sur `Accept-Language`.
- `hreflang` ajouté dans `<head>` de chaque page.
- `LanguageSwitch` dans le footer uniquement (préserve la sobriété du header).
- Métadonnées par page traduites (title, description, OG title/description).

### Sitemap & robots

- `app/sitemap.ts` : 10 URLs (5 FR + 5 EN), `lastModified` = build time, `alternates: { languages }` par URL.
- `app/robots.ts` : ouvert, `Sitemap: https://revizioapp.com/sitemap.xml`.

---

## 3. Design system

### Palette brand

| Token | Valeur | Usage |
|---|---|---|
| `background` | `#FBFAF7` | Fond principal (blanc cassé chaud) |
| `surface` | `#FFFFFF` | Cartes, surfaces |
| `surface-soft` | `#F5F4EF` | Sections alternées |
| `ink` | `#0F1115` | Texte principal |
| `text-body` | `#1F2733` | Texte courant |
| `text-muted` | `#5B6472` | Texte secondaire |
| `line` | `#E7E5DF` | Bordures |
| `accent` | `#F26B3A` | Brand orange |
| `accent-deep` | `#D95426` | Hover brand |
| `accent-soft` | `#FFE6D9` | Fond pill orange |

### Statut

| Token | Valeur |
|---|---|
| `success` | `#22C55E` / soft `#DCFCE7` |
| `warning` | `#F59E0B` / soft `#FEF3C7` |
| `danger` | `#EF4444` / soft `#FEE2E2` |

### Palette par jeu (8 jeux)

Chaque jeu a 4 teintes : `base`, `deep`, `tint`, `tintStrong`.

| Jeu | Base | Deep | Tint | TintStrong |
|---|---|---|---|---|
| Quiz | `#4F46E5` | `#3730A3` | `#EEF2FF` | `#E0E7FF` |
| Pendu | `#7C3AED` | `#5B21B6` | `#F5F3FF` | `#EDE9FE` |
| Bingo | `#E11D7A` | `#9D174D` | `#FDF2F8` | `#FCE7F3` |
| Mots Croisés | `#D97706` | `#92400E` | `#FFFBEB` | `#FEF3C7` |
| Vrai/Faux Rush | `#DC2626` | `#991B1B` | `#FEF2F2` | `#FEE2E2` |
| Tri Express | `#0D9488` | `#115E59` | `#F0FDFA` | `#CCFBF1` |
| Classement Chrono | `#C2410C` | `#7C2D12` | `#FFF7ED` | `#FFEDD5` |
| Mémo Duo | `#059669` | `#065F46` | `#ECFDF5` | `#D1FAE5` |

### Palette par monde (Aventure)

| Monde | Base | Deep | Tint |
|---|---|---|---|
| Cap Culture | `#0891B2` (cyan) | `#155E75` | `#ECFEFF` |
| Forêt des Mots | `#10B981` (mint) | `#065F46` | `#ECFDF5` |
| Tour Logique | `#4338CA` (indigo) | `#312E81` | `#EEF2FF` |

### Typographie

- Famille : **Geist Sans** (`next/font/google`), fallback system. Variable font.
- Hero : `text-6xl` à `text-7xl`, `font-semibold`, `tracking-tight`, `leading-[1.05]`.
- H2 : `text-3xl` à `text-4xl`, `font-semibold`.
- Body : `text-base` à `text-lg`, `leading-relaxed`.
- Eyebrow : `text-xs uppercase tracking-[0.14em] font-semibold`.

### Spacing, radius, ombres

- Radius : `14px` (boutons), `20px` (cartes), `24px` (sections premium).
- Ombres : `shadow-card` (sobre, élévation faible), `shadow-soft` (hover).
- Sections : `py-20 sm:py-28` minimum, beaucoup d'air.

### Composants

#### Nouveaux
- `GameCard` — mascotte + nom + tagline, couleur par jeu, hover doux
- `WorldCard` — 3 mondes Aventure, couleur par monde, badge "Niveaux 1-30"
- `ToolCard` — outil premium, icône, nom, coût brains, badge plan
- `PlanCard` — Free vs Plus, prix, features, CTA
- `FaqAccordion` — accordéon natif `<details>`
- `LanguageSwitch` — toggle FR ↔ EN
- `StatPill` — chiffre + label (progression bandeau)
- `DailyChallengeCard` / `CustomAdventureCard` — deux blocs section 6

#### Refonte
- `Header` — logo + nav minimaliste (Aventure / Jeux / Plans en ancres) + App Store CTA. Pas de nav full sur mobile, juste logo + CTA.
- `Footer` — colonnes (Produit / Légal / Contact) + LanguageSwitch + copyright + adresse légale placeholder
- `StoreButtons` — App Store live, bouton "Bientôt sur Android" grisé non cliquable
- `LegalLayout` — conserve mais réécriture du contenu

---

## 4. Home — sections (ordre B confirmé)

### 4.1 Hero
- **Headline FR** : "Apprends ce que tu veux. En jouant."
- **Headline EN** : "Learn whatever you want. By playing."
- **Sous-titre FR** : "8 jeux IA générés depuis un thème ou un cours. Une aventure de 90 niveaux. Un défi par jour. Sur iOS."
- **CTA** : `StoreButtons` (App Store actif, Android "Bientôt") + ancre "Voir les jeux"
- **Visuel** : mascotte principale (`mascotte.webp`) + 3 mini-mascottes en grappe (Quiz, Pendu, Bingo) avec leurs couleurs respectives
- **Badge** : "Sans publicité — sans tracking"

### 4.2 Vitrine 8 jeux IA — cœur visuel
- **Eyebrow** : "8 jeux générés depuis ton thème"
- **H2** : "Choisis un sujet. On fabrique le jeu."
- **Grille** : 4×2 sur desktop, 2×4 sur tablette, 1×8 sur mobile
- **Cartes** : mascotte (`visuals/<game>/mascot.webp` ou success.webp selon dispo), nom, tagline 1 ligne, badge "1 cerveau"
- **Taglines** (FR) :
  - Quiz — "15 questions sur n'importe quoi"
  - Pendu — "10 mots à deviner, avec indices"
  - Bingo — "Une grille de 12 termes à entendre"
  - Mots Croisés — "Une grille sur ton sujet"
  - Vrai/Faux Rush — "12 affirmations, vrai ou faux, vite"
  - Tri Express — "10 cartes à ranger dans les bonnes catégories"
  - Classement Chrono — "7 à 9 événements à remettre dans l'ordre"
  - Mémo Duo — "6 à 15 paires à retrouver"

### 4.3 Aventure éditoriale
- **Eyebrow** : "Une aventure de 90 niveaux"
- **H2** : "Trois mondes. Trente niveaux chacun."
- **Sous-texte** : étoiles (1-3), coffres tous les 5 niveaux, boss niveau 30
- **3 cartes mondes** :
  - Cap Culture (cyan) — "Le monde de la culture générale, de l'art au sport"
  - Forêt des Mots (mint) — "Vocabulaire, expressions, étymologies"
  - Tour Logique (indigo) — "Raisonnement, déductions, énigmes"
- **Badge bas** : "Gratuit. Tout le monde y a accès."

### 4.4 Outils Premium
- **Eyebrow** : "Pour aller plus loin"
- **H2** : "Sept outils sérieux pour tes vraies révisions."
- **Sous-texte** : "Réservés à Revizio Plus. Aperçu accessible à tous."
- **Grille 7 cartes** :
  - Décodeur (5 brains) — analyse photo cours → widgets
  - Mémo structuré (10) — fiche riche multi-sections
  - Examen blanc (10) — quiz long format
  - Quiz sur cours (3) — ciblé sur un cours
  - Notifications intelligentes (5) — rappels personnalisés
  - Plan intelligent (inclus) — planning adaptatif
  - Aventure personnalisée (5) — mini-monde 10 niveaux thème libre

### 4.5 Progression (XP / vies / streak)
- **Eyebrow** : "Une progression qui se voit"
- **H2** : "Ton niveau, tes vies, ta série. Tout est visible."
- **3 stat pills** :
  - XP — "S'accumule à chaque niveau réussi. Multiplier ×1.25 avec Plus."
  - Vies — "5 vies en Free, 8 en Plus. Régénération automatique."
  - Streak — "Une session par jour suffit pour entretenir la série."
- Pas de chiffres précis (formule XP, timers). On reste qualitatif pour ne pas dater le doc.

### 4.6 Défi du jour + Mini-aventure perso
- **Deux blocs côte à côte** :
  - **Défi du jour** — "Un niveau frais chaque jour. Trois étoiles à décrocher." (mascot-today asset)
  - **Mini-aventure perso** — "10 niveaux sur le thème que tu choisis, pour 5 cerveaux. 1/jour en Free, 5/jour en Plus."

### 4.7 Plans
- **Eyebrow** : "Deux plans. Pas plus."
- **H2** : "Free pour découvrir. Plus pour pousser."
- **2 cartes** :
  - **Free** (0 €) — 5 vies, accès Aventure 90 niveaux, défi du jour, preview outils Premium, brains gagnables via jeu (60/mois max)
  - **Revizio Plus** (5,99 €/mois ou 49,99 €/an −30%) — 200 brains/mois cumulatifs, 8 vies, tous outils Premium, XP ×1.25, timers ÷2, mini-aventure 5/jour
- **Encadré bas** : "**Important** — Abonnement = accès aux outils. Brains = consommation pour générer du contenu. Les packs de cerveaux disponibles dans l'app rechargent ta consommation, ils ne débloquent jamais l'accès Plus."
- **Note** : Renouvellement géré par Apple/Google. Résiliable à tout moment.

### 4.8 Confiance
- **Eyebrow** : "Sans piège"
- **H2** : "On joue franc-jeu."
- **4 piliers** :
  - Sans publicité — "Aucun bandeau, aucune vente de données."
  - Sans tracking — "Pas de Mixpanel, Amplitude, Firebase. Aucun cookie."
  - Données en Europe — "Hébergées chez Supabase, région eu-west-1."
  - Sans mot de passe — "Connexion par Apple, Google, code email ou invité."

### 4.9 FAQ courte (5 questions)
- "Sur quelles plateformes ?" → iOS dispo, Android bientôt
- "Quelle différence entre Free et Plus ?" → Free : accès intégral à l'Aventure (90 niveaux), brains gagnables via le jeu jusqu'à 60/mois. Plus : 200 brains cumulatifs chaque mois, tous les outils Premium, XP ×1.25, timers ÷2, mini-aventure perso 5/jour.
- "Comment restaurer mes achats ?" → Réglages app → Restaurer mes achats
- "Comment supprimer mon compte ?" → Réglages app → Mon compte → Supprimer. Détails sur `/delete-account`
- "Mes contenus IA sont-ils privés ?" → Oui. Chaque génération est strictement liée à ton compte. Aucun partage entre utilisateurs.
- Lien "Toutes les questions →" vers `/support`

### 4.10 CTA final
- **H2** : "Choisis un sujet. Revizio fabrique le jeu."
- `StoreButtons` + lien support discret

---

## 5. Pages légales — contenu

### 5.1 `/privacy`
Sections obligatoires basées sur §13–§16 du résumé produit :

1. Identité du responsable de traitement (placeholder `LEGAL_ENTITY_NAME` + `legalAddress`)
2. Données collectées :
   - Profile : id, email (si OTP), provider, onboarding_completed, display_name optionnel, language, objective
   - Progression : world_progress, attempts, XP, lives, timers
   - Cours user-créés : subjects, chapters, sessions
   - Économie : brain_wallets, transactions, reward_events
   - IA : ai_jobs, ai_summaries, ai_quiz_banks
   - Aventure perso : worlds_custom, levels_custom
   - Préférences : notification_preferences, affiliations
3. Données **NON** collectées : pas d'analytics tiers (Mixpanel/Amplitude/Firebase), pas de cookies web, pas de device ID tracking, pas d'IP loggée côté business, pas de crash report PII
4. Sous-traitants :
   - Supabase (Postgres + Storage + Auth, région eu-west-1)
   - OpenAI (Edge Functions, conservation 30j max chez eux)
   - RevenueCat (gestion abonnements, ID anonymisé)
   - Apple / Google (sign-in + IAP)
5. Storage : `revizio-media` pour photos Décodeur (≤ 1 MB), supprimables via suppression de compte
6. Pas de partage publicitaire. Pas de partage marketing.
7. Conservation : pendant la durée du compte + 30j après suppression pour journaux techniques
8. Droits utilisateur : accès, rectification, suppression (atomique), portabilité (export JSON), opposition, réclamation CNIL
9. Mineurs : pas de fonctionnalités spécifiques <13 ans, pas de chat user→user, pas de profil public
10. Sécurité : RLS Supabase, write-locked tables sensibles, aucun secret côté app
11. Contact privacy : `support@revizioapp.com`
12. Date de mise à jour

### 5.2 `/terms`
Sections :

1. Objet : service mobile iOS/Android d'apprentissage par le jeu
2. Acceptation
3. Comptes : 4 providers (Apple, Google, Email OTP, Anonymous) — un compte anonyme peut être lié plus tard sans perte
4. Plans :
   - Free : permanent, 5 vies, accès Aventure, défi du jour, jeux découverte, brains gagnables 60/mois max
   - Revizio Plus : 5,99 €/mois ou 49,99 €/an, 200 brains/mois (cumulatifs), tous outils Premium, 8 vies, XP ×1.25
5. **Séparation accès vs consommation (explicite)** :
   - L'abonnement Plus donne accès aux outils Premium
   - Les brains sont une monnaie de consommation pour générer du contenu IA
   - Les packs de brains disponibles à l'achat (consommables Apple/Google) rechargent uniquement la consommation. **Ils ne débloquent jamais l'accès Plus.**
6. Paiements : exclusivement via App Store / Google Play. RevenueCat gère les entitlements.
7. Renouvellement : automatique tant que non annulé via Réglages Apple/Google
8. Restauration : `Réglages → Restaurer mes achats`
9. Refund : selon politique Apple/Google
10. IA : Quality Gate serveur, moderation OpenAI, **pas de garantie de résultat scolaire**, limitation session ≥ 10 min pour comptage récompense
11. Modération : contenu user-généré non partagé entre utilisateurs, filtre OpenAI sur prompts à risque
12. Conformité Apple/Google : pas de gambling, pas de loot box monétisée
13. Responsabilité, force majeure
14. Résiliation
15. Droit applicable, juridiction (placeholder `legalCountry`)
16. Contact

### 5.3 `/support`
- Hero : email visible + délai 3 jours ouvrés
- FAQ enrichie ~10 questions (catégorisée : "Compte", "Paiement", "Jeu", "Données") :
  - Compte : connexion qui échoue, onboarding bloqué, supprimer/exporter, anonyme → linker
  - Paiement : restaurer achats, paiement refusé, abonnement non actif après achat
  - Jeu : brains manquants, vies bloquées, streak cassé, IA qui ne génère pas, niveau qui ne valide pas
  - Données : qu'est-ce qui est collecté, où c'est stocké, comment je récupère mes données
- CTA mail

### 5.4 `/delete-account`
- **Méthode 1 (recommandée)** : `Réglages → Mon compte → Supprimer mon compte` dans l'app. Suppression atomique : profil, progression, cours, IA générées, wallet, transactions, storage photos, soft-cancel RevenueCat.
- **Méthode 2 (alternative)** : email depuis l'adresse du compte avec preuves de propriété (ID utilisateur visible dans `Réglages → Mon compte`). Traitement sous 30 jours.
- **Ce qui est supprimé** : toutes les rows liées à `auth.uid()` côté Supabase + bucket `revizio-media`.
- **Ce qui subsiste** : transactions IAP côté Apple/Google (hors contrôle Revizio — gérables via réglages stores), logs techniques anonymisés Supabase (rétention courte).
- **Conséquences** : pas de récupération possible. Si tu te réinscris avec la même adresse, tu repars de zéro.

---

## 6. Cleanup & migration

### Fichiers supprimés
- `app/outils/page.tsx`
- `app/faq/page.tsx`
- `app/subscriptions/page.tsx`
- `public/images/feature-fiche.png`
- `public/images/feature-exam.png`
- `public/images/feature-notif.png`
- `public/images/feature-quiz.webp`
- `public/images/feature-scan.webp`
- `public/images/feature-bingo.webp`
- `public/images/feature-crossword.png`
- `public/images/feature-hangman.png`
- `public/images/feature-memo-structured.png`
- `public/images/mascot-fire.webp`
- `public/images/mascot-focus.webp`
- `public/images/mascot-hello.webp`
- `public/images/mascot-max.webp`
- `public/images/mascot-rewards.webp`
- `public/images/mascot-understand.webp`
- `public/images/hero-mascot-rewards.webp`
- `public/images/onboarding.webp`

### Fichiers ajoutés (depuis `visuals/`)
- `public/images/logo-revizio.webp` ← `visuals/New folder/logo-revizio.webp`
- `public/images/mascot-hero.webp` ← `visuals/New folder/mascotte.webp`
- `public/images/games/quiz/mascot.webp` ← `visuals/quiz_v2/success.webp`
- `public/images/games/hangman/mascot.webp` ← `visuals/hangman_v2/success.webp`
- `public/images/games/bingo/mascot.webp` ← `visuals/bingo_v5/success.webp`
- `public/images/games/crossword/mascot.webp` ← `visuals/crossword_v2/success.webp`
- `public/images/games/true-false/mascot.webp` ← `visuals/true_false_rush/mascot.webp`
- `public/images/games/tri/mascot.webp` ← `visuals/tri_express/mascot.webp`
- `public/images/games/chrono/mascot.webp` ← `visuals/classement_chrono/mascot.webp`
- `public/images/games/memo/mascot.webp` ← `visuals/memo_duo/mascot.webp`
- `public/images/daily-mascot.webp` ← `visuals/New folder/mascot-today-01.webp`

### Fichiers refactor
- `lib/site.ts` — mettre à jour `tagline`, `description`, `keywords`, `lastUpdated: "11/05/2026"`. Conserver `appStoreUrl`, `supportEmail`, `privacyEmail`.
- `app/layout.tsx` — Geist font, metadata par langue, JSON-LD mis à jour
- `app/page.tsx` — réécriture totale (sections 4.1–4.10)
- `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/support/page.tsx`, `app/delete-account/page.tsx` — réécriture totale
- `components/Header.tsx`, `components/Footer.tsx`, `components/StoreButtons.tsx`, `components/LegalLayout.tsx` — refonte
- `tailwind.config.ts` — nouvelle palette (8 jeux + 3 mondes + brand)
- `app/opengraph-image.tsx` — refresh visuel

### Fichiers nouveaux
- `lib/i18n/index.ts`, `lib/i18n/fr.ts`, `lib/i18n/en.ts`
- `app/en/page.tsx`, `app/en/privacy/page.tsx`, `app/en/terms/page.tsx`, `app/en/support/page.tsx`, `app/en/delete-account/page.tsx`
- `components/GameCard.tsx`, `components/WorldCard.tsx`, `components/ToolCard.tsx`, `components/PlanCard.tsx`, `components/FaqAccordion.tsx`, `components/LanguageSwitch.tsx`, `components/StatPill.tsx`, `components/DailyChallengeCard.tsx`, `components/CustomAdventureCard.tsx`
- `next.config.ts` (ou `.mjs`) — ajout des redirects

### Mise à jour CLAUDE.md
- Le CLAUDE.md actuel reflète l'ancien produit (3 tiers, sober, pas gaming). Il sera réécrit dans une PR séparée pour s'aligner avec V2. **Hors scope de cette refonte** — flagué dans le résumé final.

---

## 7. SEO & accessibility

### SEO
- Title FR : "Revizio — Apprends en jouant"
- Title EN : "Revizio — Learn by playing"
- Meta description par langue (160 char max)
- OG image dynamique avec mascotte + tagline
- `hreflang` FR/EN sur chaque page
- Sitemap.xml avec 10 URLs
- Structured data MobileApplication mise à jour : prix `0` (offer Free) + offer secondaire `5.99`
- Robots.txt ouvert

### A11y
- Contrastes ≥ AA sur l'ensemble (testé sur la palette par jeu — toutes les `deep` passent sur fond clair)
- Focus visibles sur tous les éléments interactifs (anneau orange)
- `<details>`/`<summary>` natif pour FAQ (clavier-friendly d'office)
- Alt text descriptif sur toutes les mascottes (sauf décoratives = `alt=""`)
- Structure sémantique : un seul `<h1>` par page, hiérarchie respectée
- LanguageSwitch en `<button>` ARIA labellisé, ou `<Link>` selon implémentation

---

## 8. Performance

- Pas de JS client autre que Next.js + composants interactifs minimaux (LanguageSwitch, FaqAccordion)
- Images `next/image` avec `placeholder="blur"` sur les mascottes principales
- Pas de librairie d'animation (anim CSS uniquement pour hover doux)
- Geist via `next/font` (auto-optimisé, pas de FOUT)
- Lighthouse attendu ≥ 95 sur les 4 catégories

---

## 9. Hors scope explicite

- **Pas de mise à jour de l'app mobile** (deep-links `/subscriptions` continueront de fonctionner via redirect)
- **Pas de CMS / back-office** — contenu en TypeScript
- **Pas de formulaire de contact** — mailto direct
- **Pas de blog / actualités**
- **Pas de système d'auth web**
- **Pas de mise à jour CLAUDE.md dans cette PR** (la PR site se concentre sur le site, CLAUDE.md sera mis à jour séparément après validation produit complète)
- **Pas d'A/B test, pas d'analytics web tier** (cohérent avec la promesse "sans tracking")

---

## 10. Acceptance criteria

Le travail est accepté si :

1. Build Next.js OK
2. Les 10 routes (5 FR + 5 EN) répondent en 200
3. Les redirects `/outils`, `/faq`, `/subscriptions` (FR + EN) fonctionnent
4. Le switch FR ↔ EN fonctionne dans le footer sur toutes les pages
5. Hreflang présents sur chaque page
6. Sitemap.xml liste les 10 URLs avec alternates
7. La home contient les 10 sections décrites
8. Les pages légales reflètent le résumé produit V16 (data §13, partage §14, droits §15, mineurs §16, achats §18)
9. La séparation accès vs consommation est explicite dans Terms ET dans la section Plans de la home
10. Toutes les mascottes des 8 jeux sont présentes et bien dimensionnées
11. Le site est responsive mobile-first (testé 360px → 1440px)
12. Aucune mention des anciens tiers Premium/Max
13. Tous les anciens assets `feature-*.png` sont supprimés
14. App Store URL réelle utilisée (`https://apps.apple.com/us/app/revizio/id6761366726`)
15. Le bouton Android dit "Bientôt" et n'est pas cliquable

---

## 11. Risques & vigilance

- **Placeholders restants** : `LEGAL_ENTITY_NAME`, `legalAddress` (actuellement "Revizio App" / "31700 Blagnac, France" dans `lib/site.ts` — à confirmer)
- **Quality Gate IA** : la promesse "Apprends en jouant" ne doit jamais devenir "Tu apprends mieux" ou "Tu auras de meilleures notes" — vérifier le wording final
- **Doctrine accès vs consommation** : à relire dans Terms + Plans + FAQ pour cohérence parfaite
- **Mascottes** : certaines arrivent en `success.webp` (sourire), d'autres en `mascot.webp` (neutre) — uniformiser le ton (toutes en mode "victorieux") au moment de l'intégration ou prévoir un mélange cohérent
