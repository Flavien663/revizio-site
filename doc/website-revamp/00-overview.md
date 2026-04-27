# 00 — Vue d'ensemble Revizio (état actuel)

_Dossier de transfert pour le chantier website. Écrit depuis le code de l'app (2026-04-19)._

---

## Ce qu'est Revizio aujourd'hui

Revizio est un compagnon d'apprentissage mobile (iOS + Android, Expo/React Native) qui aide à **comprendre, retenir et réviser un sujet** grâce à un ensemble d'outils IA et de jeux. L'app est structurée autour de 5 onglets : Aujourd'hui, Planning, IA, **Mes savoirs**, Réglages.

> **Label officiel de l'onglet courses en FR : "Mes savoirs"** (anciennement "Mes cours"). Ce nom est verrouillé dans `lib/i18n.ts` ligne 1909.

## À qui s'adresse l'app maintenant

L'app a pivoté d'un positionnement 100 % étudiant vers un positionnement **dual**, choisi par l'utilisateur pendant l'onboarding :

- **Étudiant** — "Je révise mes cours et prépare mes examens"
- **Curieux** — "J'apprends, j'explore et je muscle ma mémoire"

La distinction pilote :
- Les libellés (niveau d'étude vs niveau de connaissances, "Mes cours" vs "Tes apprentissages (optionnel)", etc.)
- Les étapes d'onboarding (Curieux saute la fréquence d'étude hebdo)
- Les "Idées du jour" sur l'onglet Aujourd'hui
- Le CTA par défaut sur l'onglet IA

Le fallback niveau pour un Curieux qui ne précise rien est **"Culture générale"** (pas "Université").

## Ce que l'app permet concrètement

Prouvé par le code (`services/business/ai-access-policy.ts`, `app/tool-*.tsx`, `app/onboarding/index.tsx`) :

1. **Organiser un sujet** — créer des matières/sujets avec chapitres, dates d'examen, photos, importance (Critique/Élevée/Moyenne/Basse), objectif (Comprendre/Appliquer/Maîtriser/Imbattable).
2. **Planifier** — calendrier mensuel avec séances planifiées, rattrapages, jour J d'examen.
3. **Scanner un document → Mémo visuel** — IA photographie un document, fiche nette en ~10 s.
4. **Générer un quiz** — 3 × 10 questions ciblées avec correction pédagogique.
5. **Obtenir un Mémo structuré** — dossier complet (synthèse, concepts, dates, pièges, ressources) enrichi par le web.
6. **Passer un examen blanc noté sur /20** — 10 questions, correction détaillée comme un examinateur.
7. **Activer des rappels intelligents** — 30 micro-notions livrées sur ~10 jours à heures fixes.
8. **Jouer pour mémoriser** — Pendu, Bingo, Mots croisés, accessibles à tous.
9. **Suivre sa progression** — niveaux (level 1–10), streak de jours consécutifs, séries de rappels, historique IA.
10. **Parrainer** — code au format `REV-XXXXX`, +5 cerveaux pour chacun quand le filleul valide sa 1re séance.

## Ce que Revizio n'est PAS

- Pas un cahier de notes / prise de notes live
- Pas une messagerie, ni un forum social, ni une communauté
- Pas un tuteur vidéo, pas de cours pré-enregistrés
- Pas un LMS (aucune classe, prof, groupe)
- Pas un chat conversationnel libre (pas de "parle à l'IA")
- Pas un moteur de révision bourré d'emojis — **doctrine `no-emoji` verrouillée** (CLAUDE.md §20)

## Promesse cœur

> **Tu choisis un sujet. Revizio te fait une fiche, un quiz, un examen ou te rappelle l'essentiel — pour que tu retiennes vraiment, sans y penser.**

## Proposition de valeur (synthèse universelle — étudiant + adulte + curieux)

1. **Comprends vite** — photo d'un document → fiche nette en secondes.
2. **Teste-toi sérieusement** — quiz ciblés, examens notés /20 avec correction.
3. **Retiens sans y penser** — rappels intelligents qui livrent les notions à tes horaires.
4. **Joue pour ancrer** — Pendu, Bingo, Mots croisés générés sur ton sujet.
5. **Progresse visiblement** — niveau, séries, planning, bilan.

## Bénéfices majeurs perçus

- Moins de temps perdu à organiser ses révisions
- Moins de stress avant les échéances
- Un contenu concret et vérifiable (fiches, grilles, questions), pas du "chat IA"
- Une économie de jeu légère (cerveaux, niveaux, séries) qui motive sans exploiter
- Une expérience **premium** et **moderne**, pas scolaire ni enfantine

## Évolution du positionnement vs ancien site

_Inféré (le code du website legacy n'est pas dans ce repo)._

- **Ancien positionnement** : "Revizio = app de révision étudiante, focus examens, stress, notes."
- **Nouveau positionnement** : "Revizio = comprendre et retenir n'importe quel sujet — du lycée à la curiosité perso."
- Les textes qui martèlent "étudiants qui planifient leurs révisions" (cf. `paywall.subtitle` ligne 2479) sont **obsolètes** et doivent être remplacés par un messaging universel.

## Statut global

| Zone | État | Source |
|---|---|---|
| Tiers Free / Premium / Max | Prouvé par code | `services/business/subscription-policy.ts` |
| Outils IA et coûts | Prouvé par code | `services/business/ai-access-policy.ts` |
| Onboarding dual objective | Prouvé par code | `app/onboarding/index.tsx` + i18n |
| Mes savoirs (libellé onglet) | Prouvé par code | `lib/i18n.ts` L1909 |
| Mémo visuel / Mémo structuré (doctrine naming) | Prouvé par code + CLAUDE.md §19.10 | i18n + tool pages |
| Doctrine no-emoji | Prouvée | CLAUDE.md §20 |
| Prix EUR | Prouvé par code | `subscription-policy.ts` |
| Contenu website actuel | Non auditable ici | À récupérer hors repo |
