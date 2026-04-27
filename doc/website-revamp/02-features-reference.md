# 02 — Inventaire des fonctionnalités (état de l'app)

_Source : `app/`, `services/business/ai-access-policy.ts`, `services/business/subscription-policy.ts`, `lib/i18n.ts`. Toutes les chaînes FR citées sont copiées verbatim._

---

## A. Flux de démarrage

### 1. Onboarding
**Fichier** : `app/onboarding/index.tsx`

- **6 étapes** : Auth → Langue (FR/EN) → Pseudo + Objectif + Niveau → Rythme d'étude (étudiant seulement) → Récap → Récompense.
- **Objectif dual** (locked) :
  - "Étudiant" — *"Je révise mes cours et prépare mes examens"*
  - "Curieux" — *"J'apprends, j'explore et je muscle ma mémoire"*
- **Niveau** : champ libre (ex. "Lycée", "Culture générale", "Prépa"). Fallback Curieux = "Culture générale".
- **Rythme** : jours/semaine (3–7), durée de séance (15/30/45/60/90 min).
- **Récompense** : +10 cerveaux à la complétion (*"+10 cerveaux pour bien démarrer"*).
- **Promesse FR** : *"Moins de stress. De meilleures notes."* (l'hero d'onboarding reste étudiant-flavored — à envisager côté landing de l'adapter en messaging universel).
- **Ton website** : ne pas copier-coller le hero étudiant. Re-framer pour tous les apprenants.
- **Ne pas dire** : "gratuit pendant X jours" (aucun essai gratuit).

### 2. Connexion
**Fichiers** : `app/email-otp-login.tsx`, `app/review-login.tsx`, providers natifs.

- 4 providers : **Apple** (iOS, custom build), **Google** (custom build), **Email OTP 6 chiffres** (tous environnements, pas de mot de passe), **Anonyme/Invité** (UUID local).
- Linking guest → provider : l'UUID et les données sont préservés.
- "Review login" : écran caché pour Apple/Google review (long-press 1.2 s sur le logo Revizio en onboarding step 0).
- **Ton website** : mettre en avant "connexion sans mot de passe" (atout crédibilité).

---

## B. Cœur d'app (onglets)

### 3. Aujourd'hui (Home)
**Fichier** : `app/(tabs)/index.tsx`

- Compteur de cerveaux en header.
- **Défi du jour** — jeu tournant (pendu/bingo/mots croisés) avec partage.
- **Action du jour** — pavé cliquable adapté au tier et à l'objectif.
- **Insight du jour** — message contextuel (streak, quiz faible, examen imminent, outil non essayé…).
- **Tes outils IA** — carrousel permanent des outils.
- **Planning du jour** — rappel des sessions prévues.
- **Ton website** : s'inspirer de cette structure pour la landing ("Le quotidien dans l'app").
- **Ne pas dire** : "tâches de la journée" (trop to-do-list scolaire). Préférer "action du jour", "idée du jour".

### 4. Planning
**Fichier** : `app/(tabs)/plan.tsx`

- Calendrier mensuel avec statut par jour (vide / planifiée / faite / manquée / examen).
- Sélection d'un jour → sessions de la journée par matière.
- Bouton "Lancer une session libre".
- **Ton website** : "Un plan qui tient la route jusqu'au jour J, réparti intelligemment selon tes jours d'étude."
- **Ne pas dire** : "planning optimisé IA adaptatif" sur le free tier (cette promesse est Max-only).

### 5. IA (hub)
**Fichier** : `app/(tabs)/ai.tsx`

4 groupes visibles :
1. **Jeux intelligents** — Pendu, Bingo, Mots croisés (tous tiers, prix dégressif).
2. **Apprendre & retenir** — Mémo visuel (Premium+), Mémo structuré (Max).
3. **Quizz** — Quiz (Premium+), Examen blanc (Max).
4. **Révise sans y penser** — Rappels intelligents (Max).

### 6. Mes savoirs (label FR verrouillé)
**Fichier** : `app/(tabs)/progress.tsx`

- Niveau (1→10), streak, nombre d'outils IA créés — **toujours visibles**.
- Liste des matières/sujets avec cartes, chapitres, photos, outils IA associés.
- Carte "Historique IA" en bas.
- **Ton website** : "Un tableau de bord qui te montre ce que tu maîtrises, ce qu'il te reste à ancrer, et où tu en es de ta série."
- **Ne pas dire** : "Mes cours" sur le site — c'est "Mes savoirs" dans l'app FR.

### 7. Réglages
**Fichier** : `app/(tabs)/settings.tsx`

Modifiable : pseudo, niveau, jours d'étude, durée de séance, thème (clair/sombre/système), langue, notifications, abonnement. Restauration d'achats. Gestion d'abonnement (deep-link store). Parrainage (code + historique). Supprimer compte. Mentions légales.

---

## C. Outils IA (détails par outil)

Pour chaque outil, source : `services/business/ai-access-policy.ts` + `lib/i18n.ts` + `app/tool-*.tsx`.

### Mémo visuel (`course_analysis`)
- **Tier requis** : Premium+ (Free n'y a pas accès).
- **Coût** : **7 cerveaux** (prix fixe).
- **À quoi ça sert** : photographie un document → fiche claire avec points clés, définitions, repères essentiels, pièges.
- **Livrable** : *"Une fiche nette en dix secondes."*
- **Promesse FR** : *"Photographie un document. Tu récupères une fiche nette en dix secondes."*
- **Contrainte** : nécessite au moins une photo (pas de fallback texte — locked §19.9).
- **Maturité** : production, stable.
- **Website — à dire** : "Transforme ta photo en fiche." "Gagne dix minutes après chaque cours."
- **Ne pas dire** : "IA qui lit ton cours" (langage machine). Pas de "OCR" (jargon).

### Mémo structuré (`revision_sheet`)
- **Tier requis** : Max only.
- **Coût** : **9 cerveaux**.
- **À quoi ça sert** : dossier complet sur un sujet (synthèse, concepts clés, dates, pièges, ressources, timelines, comparaisons). Enrichi par recherche web (URLs réelles, annales, curriculum officiel).
- **Livrable** : dossier 7 sections minimum.
- **Promesse FR** : *"Un dossier clair et complet sur ton sujet, prêt à réviser."* / *"Enrichi par le web."*
- **Maturité** : production, v6 web-search locked.
- **Website — à dire** : "Le dossier complet en un clic." "Enrichi par le web avec de vraies sources."
- **Ne pas dire** : "Concurrent de ChatGPT." "Réponse conversationnelle." Ce n'est pas un chat, c'est un dossier.

### Quiz (`standard_quiz`)
- **Tier requis** : Premium+.
- **Coût** : **7 cerveaux**.
- **À quoi ça sert** : 30 questions ciblées, réparties en 3 sessions de 10, avec correction pédagogique par réponse.
- **Livrable** : banque de 30 questions replayable, meilleur score affiché.
- **Promesse FR** : *"30 questions ciblées pour voir ce que tu maîtrises — et ce qu'il reste à ancrer."*
- **Website — à dire** : "Teste-toi sérieusement, sans QCM bidon."
- **Ne pas dire** : "évaluation" (trop scolaire), "test automatique" (trop froid).

### Examen blanc (`exam_quiz`)
- **Tier requis** : Max only.
- **Coût** : **9 cerveaux**.
- **À quoi ça sert** : 10 questions sérieuses, note sur 20, correction détaillée avec bilan.
- **Livrable** : note /20, feedback par question, conseils de progression.
- **Promesse FR** : *"Un vrai examen, noté sur 20, corrigé comme par un examinateur."*
- **Maturité** : production (avec recherche web pour vraies annales).
- **Website — à dire** : "Une semaine avant l'épreuve, mets-toi en conditions."
- **Ne pas dire** : "meilleur qu'un prof" (hype interdit).

### Rappels intelligents (`smart_notifications`)
- **Tier requis** : Max only.
- **Coût** : **7 cerveaux** par activation.
- **À quoi ça sert** : 30 micro-notions sur un sujet, livrées à heures fixes (3/jour sur 10 jours). Formats : fait, question, piège.
- **Livrable** : série de rappels push.
- **Promesse FR** : *"L'essentiel de ton sujet, livré à tes horaires. Tu progresses sans y penser."*
- **Limite** : 3 banques simultanées max par compte.
- **Website — à dire** : "Ton cerveau travaille pendant que tu vis ta journée."
- **Ne pas dire** : "notifications push" (trop technique), "spam" (évidemment).

### Pendu (`hangman`)
- **Tier requis** : tous.
- **Coût** : Free 5 / Premium 4 / Max 3 cerveaux (prix dégressif).
- **À quoi ça sert** : pack de 10 mots à deviner avec indice sur un sujet.
- **Livrable** : pack de 10 parties.
- **Promesse FR** : *"Retiens un vocabulaire utile en y jouant cinq minutes."*
- **Website — à dire** : "Joue pour ancrer." "5 minutes, 10 mots, un vocabulaire solide."
- **Ne pas dire** : "jeu enfantin" (c'est un outil de mémo).

### Bingo (`bingo`)
- **Tier requis** : tous (cost dégressif).
- **Coût** : 5 / 4 / 3 cerveaux.
- **À quoi ça sert** : 3 grilles 3×3 avec appels, trouver les 9 termes clés par grille.
- **Livrable** : 3 grilles jouables (9 cellules, mots ≤ 8 caractères, single word UPPERCASE).
- **Promesse FR** : *"Ancre une dizaine de notions clés en une partie."*
- **Maturité** : v2 locked.
- **Website — à dire** : "Mémorise en jouant."
- **Ne pas dire** : "loto éducatif" (ringard).

### Mots croisés (`crossword`)
- **Tier requis** : tous (cost dégressif).
- **Coût** : 5 / 4 / 3 cerveaux.
- **À quoi ça sert** : grille générée sur un sujet avec définitions horizontales/verticales.
- **Livrable** : grille + définitions + score.
- **Promesse FR** : *"Consolide tes notions dans une grille qui te fait réfléchir."*
- **Website — à dire** : "Ancre ce que tu as appris. Grille après grille."
- **Ne pas dire** : "mots fléchés" (ce sont des mots croisés, pas des mots fléchés).

---

## D. Organisation pédagogique

### Sujets / cours / chapitres
**Fichiers** : `app/subject/[id].tsx`, `app/add-subject.tsx`

- Créer un sujet avec nom, couleur, **importance** (Critique/Élevée/Moyenne/Basse), **objectif** (Comprendre/Appliquer/Maîtriser/Imbattable), fréquence, date d'examen facultative.
- Chapitres avec difficulté 1→5.
- Photos attachées (jusqu'à 5 par sujet), stockées sur Supabase Storage (bucket privé `revizio-media`), signées à la demande.
- Free : **2 sujets / 5 chapitres max**. Premium/Max : illimité.
- **Website — à dire** : "Ton cours, ton chapitre, ta deadline."
- **Ne pas dire** : "illimité" pour Free.

### Planning
- Séances planifiées sur les jours choisis en onboarding.
- Distribution des chapitres par nombre de séances (CLAUDE.md §6 Planning).
- **Planning optimisé** = Max only (locked CLAUDE.md §4, Round 5 guard).

### Sessions
**Fichier** : `app/focus-session.tsx`, `app/session-feedback.tsx`
- Timer intégré (durée personnalisable).
- Feedback à la fin : rating focus, productivité, complexité, notes texte, note vocale optionnelle.
- Règle métier : **≥ 10 min** pour être "valide" (récompense, streak, progression).

### Wallet de cerveaux
**Fichier** : `app/brain-history.tsx`, `components/BrainCounter.tsx`

- Solde total (affiché partout), historique de transactions, débits/crédits.
- **Source de vérité serveur** (table `brain_wallets`, RLS lockdown M033).
- Règles métier verrouillées — cf. fichier 03.

---

## E. Monétisation visible utilisateur

### Plans / Paywall
**Fichier** : `app/plans.tsx`
- Comparatif Free vs Premium vs Max.
- CTA "Passer à Premium" / "Passer à Max" → paywall RevenueCat.
- Pitch FR : *"Les outils intelligents pour réviser sérieusement."* (Premium) / *"La meilleure expérience qu'on puisse t'offrir."* (Max).

### Packs de cerveaux
**Fichier** : `app/brain-packs.tsx`
- 4 packs : Starter (50), Boost (125), Pro (335), Ultime (670).
- Taglines FR : *"De quoi tenir ta semaine"*, *"Le choix des habitués"*, *"De la marge pour des mois entiers"*, *"Le meilleur prix au cerveau"*.
- Badge "le plus populaire" et "meilleure offre" automatique.
- Paiement RevenueCat sous le capot.

### Parrainage
**Fichiers** : `app/affiliation-history.tsx`, FAQ, settings.
- Code format `REV-XXXXX`, généré serveur.
- +5 cerveaux parrain, +5 cerveaux filleul, déclenché à la 1re séance valide (≥ 10 min) du filleul.
- **Website — à dire** : "Partage ton code, gagnez chacun +5 cerveaux."
- **Ne pas dire** : "cashback" ou "commission" (ce n'est pas de l'argent, c'est de l'énergie app).

---

## F. Système de progression & fidélité

| Élément | Comment ça marche | FR visible |
|---|---|---|
| Niveaux | 10 niveaux, seuils en `lifetime_brains` (0, 5, 10, 25, 50, 100, 200, 400, 800, 1500). Bonus à chaque level-up. | "Niveau 5" |
| Streak | Jours consécutifs d'étude. Milestones 7/15/30/60 avec bonus +2/+4/+8/+16. Cap 16/mois après 60j. | "7 jours d'affilée" |
| Daily connection | +1 cerveau/jour pour l'ouverture de l'app. | — |
| Daily lesson | +1 cerveau à la 1re séance valide de la journée. | — |
| Review reward | +2 cerveaux quand le prompt natif de notation est affiché (1 fois à vie). | — |

**Website — à dire** : "Ta série, ton niveau, tes cerveaux — visibles. Zéro dark pattern."

---

## G. Historique & archives

**Fichier** : `app/ai-archive.tsx`

- Tous les contenus IA générés (quiz, mémos, examens, bingo, pendu, mots croisés, rappels) sont retrouvables ici, par type et par sujet.
- Suppression soft utilisateur possible (corbeille + confirm).
- Synchronisé serveur (source de vérité `ai_jobs` + tables dédiées).

**Website — à dire** : "Tout ce que tu as créé reste à portée de main."

---

## H. Légal / Support

**Fichiers** : `app/help.tsx`, `app/privacy.tsx`, `app/terms.tsx`, `app/delete-account.tsx`.

- Privacy / Terms : redirection vers URL externe (voir fichier 06).
- Help : 6 FAQ clés (planning, cerveaux, parrainage, IA, abonnement, suppression).
- Delete account : écran dédié, action idempotente côté serveur, mention que l'abonnement actif n'est pas annulé par la suppression.

---

## Statut source

- Tous les coûts / tiers / promesses FR ci-dessus sont **prouvés par code**.
- La distinction "Étudiant / Curieux" est **verrouillée** (memory + CLAUDE.md).
- La description "Revizio Max adaptive planning" est **marketing-only** à ce jour (CLAUDE.md §4 : "entitlement flag present in subscription-policy.ts but NOT branched runtime").
