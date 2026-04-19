# 06 — Écart contenu app ↔ site (légal, FAQ, marketing)

_L'ancien site n'est pas dans ce repo. Cet audit liste ce que l'app dit / fait aujourd'hui et ce qui, de ce fait, doit changer sur le site._

---

## 1. URLs deep-linkées depuis l'app (doivent exister sur le nouveau site)

Source : `constants/legal-links.ts`.

| URL | Pourquoi c'est critique |
|---|---|
| `https://www.revizioapp.com/privacy` | Ouverte depuis settings + help + paywall. Apple exige une URL privacy valide. |
| `https://www.revizioapp.com/terms` | Ouverte depuis settings + help + paywall. Obligatoire stores. |
| `https://www.revizioapp.com/support` | Ouverte depuis settings. |
| `https://www.revizioapp.com/delete-account` | Apple **exige** une URL publique qui décrit la procédure de suppression. |
| `https://www.revizioapp.com/subscriptions` | Page dédiée détails abonnement. |

**→ Toute refonte doit conserver ces slugs ou faire des redirections 301 propres.**

## 2. Identité éditoriale et ton

### Ce qui est obsolète
- Le positionnement "app 100 % étudiante" (chaînes comme `paywall.subtitle` ligne 2479 : *"Les étudiants qui planifient leurs révisions réussissent mieux."*). Ne pas recycler tel quel.
- Tout hero du type "Réussis tes exams, stresse moins" — c'est l'angle onboarding étudiant, pas le site.

### Ce qui doit être réécrit
- Le tagline principal du site.
- Les sections "Pourquoi Revizio" / "Bénéfices".
- Tout wording autour "cours / révision / examens" qui exclut le public adulte/curieux.

### Ce qui peut être conservé (si présent)
- Contact support (email, délai).
- Mentions d'apps disponibles iOS + Android.
- Tout bloc qui se concentre sur "ce que tu obtiens concrètement".

## 3. Mentions "250 cerveaux / mois" ou équivalent

Plusieurs strings legacy dans `lib/i18n.ts` mentionnent "250 brain credits" dans le paywall (L821 `paywall.feature.credits`, L837 `paywall.premium.credits`). **Ces chiffres sont FAUX.** Les tiers sont 50 (Premium) et 150 (Max), verrouillés dans `subscription-policy.ts`.

**→ Sur le site, utiliser uniquement 50 et 150. Toute mention "250" sur l'ancien site doit être supprimée.**

## 4. Features non encore branchées runtime

| Feature | État | Conséquence pour le site |
|---|---|---|
| Planning optimisé adaptatif Max | Entitlement présent mais pas encore branché runtime (CLAUDE.md §4) | **Ne pas promettre** "planning IA adaptatif Max" comme dispo sur le site tant que non branché. Formulation safe : "Un planning calé sur ton échéance." (ce qui est vrai côté distribution des chapitres). |
| "Free trial" 7 jours | Aucun côté Revizio (CLAUDE.md §5 "No free trial") | **Ne pas afficher** de CTA "Essaie gratuitement 7 jours". |
| Chat live / IA conversationnelle | Pas livré | **Ne pas suggérer** qu'on peut "poser des questions à l'IA". |

## 5. Privacy Policy — points sensibles à ré-aligner

### Données collectées (prouvé par code — `supabase/migrations/*` + providers + i18n)

| Donnée | Où elle vit | Quand collectée |
|---|---|---|
| Pseudo (username) | `profiles` | Onboarding |
| Email (si auth provider email/Apple/Google) | `auth.users` Supabase | Login |
| Niveau d'étude / connaissances | `profiles.education_type` | Onboarding + réglages |
| Objectif d'utilisation (Étudiant / Curieux) | `profiles` | Onboarding |
| Jours d'étude, durée de séance | `profiles.study_days_per_week`, `default_session_duration` | Onboarding + réglages |
| Langue / thème | `profiles` | Réglages |
| Push token Expo | `notification_preferences.expo_push_token` | Au premier boot autorisé |
| Photos de cours | Bucket Storage `revizio-media` + `subject_images` | Ajout manuel sujet |
| Notes vocales de session | URI local `file://` (CLAUDE.md §9b "local-only by design") | Session feedback |
| Sujets / chapitres / sessions | `subjects`, `chapters`, `sessions` | Usage app |
| Transactions cerveaux | `brain_transactions` (append-only, lockdown M033) | Tout débit / crédit |
| Générations IA (quiz, mémos, examens, notifs) | `ai_jobs`, `ai_quiz_banks`, `ai_summaries`, etc. | Lancement tool |
| Code affiliation | `profiles.referral_code` (serveur) | Auto-généré |

**→ La nouvelle privacy doit citer explicitement toutes ces catégories.**

### Sous-traitants et transferts internationaux
À déclarer sur la privacy :
- **Supabase** (BDD Postgres + Storage) — hébergement, DB, RLS, EF.
- **OpenAI** (génération IA via Edge Functions — modèles GPT-5 mini et GPT-5 selon route CLAUDE.md §5).
- **RevenueCat** (vérification et attribution des abonnements/packs).
- **Apple** (Sign in with Apple, IAP, notifications).
- **Google** (Sign-In Google, IAP, FCM le cas échéant).
- **Expo** (push tokens + notifications).

**→ L'ancienne privacy qui n'aurait pas cité OpenAI ou RevenueCat est obsolète.**

### Spécifiques à vérifier
- **Notes vocales** : actuellement **local-only** (`file://`, non synchronisées). À DIRE clairement dans la privacy : ne quittent pas l'appareil. (Source : CLAUDE.md §9b "Local-Only by Design".)
- **Photos de cours** : compressées côté client (max 1 Mo), uploadées sur Storage privé, signed URLs. Pas de reconnaissance faciale, pas d'OCR persistant côté serveur.
- **Contenu IA** : les prompts et outputs sont stockés dans `ai_jobs.meta_json` et les tables dédiées. Les données envoyées à OpenAI ne sont pas utilisées pour entraîner de futurs modèles (cf. politique OpenAI Data Usage — à citer).

### Suppression de compte
- Flux app → `delete-account` route → Edge Function → suppression / anonymisation cascade côté Supabase (profil, sujets, sessions, transactions, wallet, `ai_jobs`, etc.).
- Un abonnement actif **n'est pas** résilié automatiquement (doit être résilié côté Apple/Google). Texte déjà dans l'app : `deleteAccount.warning4Subscription`.
- Page publique `/delete-account` nécessaire pour conformité Apple.

## 6. Terms / CGU — points à trancher

### Économie de cerveaux
- Nature juridique à clarifier : **crédits d'usage non monétaires, non transférables, sans contrepartie monétaire**.
- Date d'expiration : CLAUDE.md dit **cumulatifs**. À confirmer si un cap/expiry existe au niveau des crédits mensuels non utilisés (à vérifier runtime — voir fichier 09).
- Packs achetés : définitifs, non remboursables (sauf obligation légale ou politique store).

### Contenu IA généré
- Propriété : à trancher (utilisateur titulaire ? licence perpétuelle ? interdiction de revente ?).
- Disclaimer : déjà présent dans la FAQ in-app *"Les contenus générés avec l'aide de l'IA doivent être relus et vérifiés par l'utilisateur. Compare toujours avec tes cours officiels."* → reprendre dans CGU.
- Aucune garantie d'exactitude, à formaliser.

### Résiliation, rétractation, prix
- Renouvellement automatique (Apple/Google).
- Droit de rétractation RGPD (14 j) — à préciser selon la politique retenue pour les biens numériques utilisés immédiatement.
- Prix TTC en euro. Localisations store peuvent varier.

## 7. FAQ — obsolètes potentielles

Si l'ancienne FAQ contenait :
- "Essai 7 jours gratuit" → supprimer.
- "Les cerveaux expirent à X" → vérifier la règle exacte (cumulatifs mensuels locked — à confirmer côté "mensuels non utilisés expirent-ils ? voir fichier 09").
- "L'IA répond à toutes tes questions" / "Chat avec l'IA" → supprimer, faux.
- "Mes cours" (label) → remplacer par "Mes savoirs".
- "Pour lycéens" → réécrire inclusivement.
- "Débloque tout avec un pack" → supprimer, contradiction avec la règle business.

## 8. Points sensibles juridiques à couvrir sur le site

| Sujet | Exigence |
|---|---|
| Achats (abo + packs) | Mention renouvellement auto + résiliation + prix TTC |
| Notifications | Consentement + procédure opt-out |
| IA et données | Mention finalité IA + transfert OpenAI + possibilité de suppression |
| Photos | Consentement implicite (photo ajoutée manuellement), stockage chiffré Supabase, suppression à la demande |
| Notes vocales | Mention qu'elles restent sur l'appareil |
| Suppression compte | Procédure claire + mention "abonnement séparé à résilier" |
| Parrainage | Code non monétaire, cerveaux non échangeables contre €, pas de chaîne pyramidale |
| Cookies (web) | Bandeau consent si besoin (selon analytics retenus) |

## 9. Questions à trancher AVANT de publier la nouvelle version

Ces points ne sont **pas décidables depuis le code seul** :

1. Les crédits mensuels (50 Premium / 150 Max) sont-ils cumulatifs **sans plafond** ? CLAUDE.md dit "cumulative" mais un plafond mensuel ou un reset annuel serait à documenter explicitement.
2. Les cerveaux achetés via packs expirent-ils un jour ? (À clarifier côté back-end et côté CGU.)
3. Propriété intellectuelle des contenus IA — licence utilisateur, utilisation commerciale autorisée ou pas ?
4. Politique de remboursement Revizio au-delà des obligations stores ?
5. DPO et identité juridique de l'éditeur (nom société, SIREN, adresse, email DPO).
6. Juridiction / loi applicable.
7. Un essai gratuit commercial (RevenueCat intro-offer) est-il configuré côté stores ? Si oui, le site peut en parler ; sinon, surtout pas.

## Statut source

- URLs deep-linkées : **prouvées** (`constants/legal-links.ts`).
- Sous-traitants (Supabase, OpenAI, RevenueCat, Apple, Google, Expo) : **prouvés par code**.
- Notes vocales local-only : **verrouillé** CLAUDE.md §9b.
- Photos upload path : **prouvé** CLAUDE.md §7.
- Chiffres 50 / 150 / 2 sujets Free : **prouvés** (`subscription-policy.ts`).
- Questions juridiques listées en §9 : **à trancher hors code** (fichier 09).
