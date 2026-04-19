# 03 — Offres et économie de cerveaux

_Source de vérité : `services/business/subscription-policy.ts`, `services/business/ai-access-policy.ts`, `services/business/rewards-policy.ts`, CLAUDE.md §3 et §4._

---

## Règles business verrouillées (à répéter partout)

1. **Abonnement = accès.** Le plan détermine quels outils sont disponibles.
2. **Cerveaux = énergie.** Ils font tourner les outils IA qu'on a déjà le droit d'utiliser.
3. **Un pack de cerveaux ne débloque JAMAIS un accès.** Un Free avec 1000 cerveaux ne peut toujours pas créer un quiz ou un mémo structuré.
4. **Les cerveaux mensuels sont cumulatifs** — s'ils ne sont pas utilisés dans le mois, on ne les perd pas (CLAUDE.md §4 "Monthly subscription brains are cumulative").
5. **Pas d'essai gratuit (free trial) marketing.** Le Free est un vrai tier permanent, pas une démo.
6. **Une session est valide si elle dure ≥ 10 min.** Sinon, pas de récompense, pas de streak, pas de progression (mais l'UI doit prévenir).

## Les 3 plans

| Plan | Prix mensuel | Prix annuel | Cerveaux / mois | Sujets max | Chapitres par sujet | Outils IA accessibles |
|---|---|---|---|---|---|---|
| **Free** | 0 € pour toujours | — | 0 | **2** | **5** | Pendu, Bingo, Mots croisés (prix Free 5) |
| **Premium** | 3,99 € | 29,99 € (≈ 2,50 €/mo) | **50** | illimité | illimité | Free + **Mémo visuel**, **Quiz** (prix dégressif sur les jeux : 4) |
| **Max** | 7,99 € | 59,99 € (≈ 5,00 €/mo) | **150** | illimité | illimité | Premium + **Mémo structuré**, **Examen blanc**, **Rappels intelligents** (prix dégressif sur les jeux : 3), planning optimisé* |

_*Planning optimisé Max = flag entitlement présent côté code, mais pas encore branché runtime (CLAUDE.md §4). À ne PAS mettre en avant comme livrée sur le site tant que ce n'est pas activé._

## Coûts exacts des outils (cerveaux par utilisation)

| Outil | Tier requis | Coût Free | Coût Premium | Coût Max |
|---|---|---|---|---|
| Pendu | tous | 5 | 4 | 3 |
| Bingo | tous | 5 | 4 | 3 |
| Mots croisés | tous | 5 | 4 | 3 |
| Mémo visuel (`course_analysis`) | Premium+ | — | 7 | 7 |
| Quiz (`standard_quiz`) | Premium+ | — | 7 | 7 |
| Mémo structuré (`revision_sheet`) | Max | — | — | 9 |
| Examen blanc (`exam_quiz`) | Max | — | — | 9 |
| Rappels intelligents (`smart_notifications`) | Max | — | — | 7 |

## Packs de cerveaux (in-app purchases)

Source : `app/brain-packs.tsx`, map `BRAINS_FOR_PRODUCT`.

| Pack | Cerveaux | Prix | Baseline / économie |
|---|---|---|---|
| Starter | 50 | tarif référence | — |
| Boost | 125 | calculé RC | "Le plus populaire" typique |
| Pro | 335 | calculé RC | — |
| Ultime | 670 | calculé RC | "Meilleure offre" typique |

_Les prix exacts sont fixés côté RevenueCat / stores et peuvent varier par pays. Le site doit éviter d'afficher des prix hardcodés pour les packs (faire "à partir de X €" ou dire "voir dans l'app")._

## Récompenses gratuites (Free peut en bénéficier aussi)

Source : `services/business/rewards-policy.ts`.

| Événement | Récompense | Fréquence |
|---|---|---|
| Fin d'onboarding | +10 cerveaux | Une fois à vie |
| 1er sujet créé | +1 cerveau | Une fois à vie |
| 2e sujet créé | +1 cerveau | Une fois à vie |
| Connexion quotidienne | +1 cerveau | Par jour |
| Première séance valide du jour | +1 cerveau | Par jour |
| Streak 7 jours | +2 cerveaux | Une fois à vie |
| Streak 15 jours | +4 cerveaux | Une fois à vie |
| Streak 30 jours | +8 cerveaux | Une fois à vie |
| Streak 60 jours | +16 cerveaux | Une fois à vie |
| Invitation par parrainage (filleul) | +5 cerveaux | À la 1re séance valide |
| Parrain | +5 cerveaux | À la 1re séance valide du filleul |
| Notation de l'app (prompt natif) | +2 cerveaux | Une fois à vie |
| Montée de niveau (2→10) | +2 à +30 cerveaux | Une fois par palier |

## Formulations website recommandées

### Pour parler des plans

**Pitch (verbatim lib/i18n.ts) :**
- Free — *"Utile mais limité. Passe à l'offre supérieure pour débloquer l'IA."*
- Premium — *"Les outils intelligents pour réviser sérieusement."*
- Max — *"La meilleure expérience qu'on puisse t'offrir."*

**Bénéfices Premium (FR) :**
- "Sujets et chapitres illimités"
- "50 cerveaux chaque mois"
- "Quiz IA et mémos structurés"
- "Banques de 30 questions"
- "Photographie un document, tu récupères une fiche nette"

**Bénéfices Max (FR) :**
- "Tout Premium"
- "150 cerveaux chaque mois"
- "De vrais examens notés sur 20"
- "Rappels intelligents qui t'apprennent pendant que tu vis"
- "Mots croisés pour ancrer tes notions"
- "Planning de révision calé sur ton échéance"

### Pour parler des cerveaux

- ✅ "Les cerveaux sont l'énergie qui fait tourner les outils IA."
- ✅ "Chaque outil consomme un certain nombre de cerveaux. Ton abonnement décide desquels tu peux lancer."
- ✅ "Ton plan te recharge en cerveaux chaque mois. Tu peux aussi ajouter des packs ponctuellement."
- ✅ "Les cerveaux mensuels ne se perdent pas si tu ne les utilises pas — ils s'accumulent."

### Pour parler des packs

- ✅ "Ajoute des cerveaux à ton compteur."
- ✅ "Recharge quand tu en as besoin, sans engagement."
- ✅ "Les packs ne changent pas ton plan — ils ajoutent juste de l'énergie."

## Formulations à BANNIR

- ❌ *"Achète un pack Ultime et débloque tous les outils IA."* → FAUX, un pack ne débloque pas un accès.
- ❌ *"Les cerveaux expirent à la fin du mois."* → FAUX, ils sont cumulatifs.
- ❌ *"Essaie Premium gratuitement pendant 7 jours."* → pas de free trial (sauf si RevenueCat en active un côté store — à vérifier par toi, voir fichier 09).
- ❌ *"250 cerveaux / mois"* → FAUX, c'est 50 (Premium) ou 150 (Max). Des chaînes legacy mentionnent "250" dans `paywall.feature.credits` (ligne 821) — **ne pas copier-coller ces strings**.
- ❌ *"Illimité dès le Free"* → FAUX sur les sujets.
- ❌ *"Abonnement résiliable à tout moment et remboursable"* → dire juste "résiliable à tout moment depuis les réglages Apple/Google". Les remboursements ne sont pas promis côté Revizio — ils dépendent de la politique store.
- ❌ *"Sans engagement"* → l'abonnement mensuel se renouvelle automatiquement ; dire "renouvellement automatique, résiliable à tout moment."

## Points de vigilance UX / commerciaux / juridiques

### UX
- Le Free doit rester aimable. Il n'est pas un "teasing" — c'est un vrai produit utilisable (jeux + sujets limités + tous les rewards).
- La carte pricing doit montrer clairement "150 cerveaux/mois" en Max et "50 cerveaux/mois" en Premium, pas juste "cerveaux inclus".
- **Ne jamais** suggérer que les packs "débloquent" quelque chose — risque de confusion majeure avec l'abonnement.

### Commercial
- Annuel : mentionner "≈ X €/mois facturé à l'année" pour éviter le choc du prix total.
- Ne pas communiquer sur un prix Pack fixe sans confirmer qu'il est le même dans tous les pays (RevenueCat gère l'i18n du store).

### Juridique (liés à la monétisation)
- Mentionner clairement :
  - Abonnement avec renouvellement automatique (Apple/Google).
  - Gestion et résiliation via les réglages du compte Apple / Google.
  - Les achats de packs sont définitifs (pas de remboursement automatique côté Revizio).
  - Les cerveaux n'ont **aucune valeur monétaire**, ne peuvent pas être échangés, revendus, ni retirés.
  - Le code de parrainage ne donne pas droit à de l'argent, juste à des cerveaux app.

## Ce qu'il faut afficher sur la page offres/abonnement

1. **Hero comparatif** 3 colonnes (Free / Premium / Max) avec bénéfices copiés ci-dessus.
2. **Section "Comment ça marche"** : abonnement = accès, cerveaux = énergie, packs = recharge. Diagramme simple (3 cases).
3. **Tableau détaillé** des coûts par outil par tier (optionnel, pour les gens qui veulent le détail).
4. **CTA** : "Voir dans l'app" (renvoi store) + "Comparer les outils IA" (ancre).
5. **Mentions légales** d'abonnement en bas de page (renouvellement auto, résiliation, etc.).

## Statut source

- Tarifs, coûts, tiers, cumulativité, rewards : **prouvés par code** (fichiers cités).
- "Planning optimisé Max pas encore branché runtime" : **prouvé par CLAUDE.md §4**.
- Prix packs exacts en EUR : **bloqué externe** (dépend de RevenueCat + stores).
- Politique de remboursement Revizio : **à confirmer** (voir fichier 09).
