# 07 — Directions messaging landing page

_Base stratégique, pas copy finale. À tester / arbitrer avant d'écrire la landing complète._

---

## Trois directions possibles

### Direction A — "Le compagnon qui rend simple ce qui paraissait lourd"

- **Angle** : Revizio retire la friction (organiser, synthétiser, se tester, retenir). On vend la **simplicité**.
- **Promesse** : *"Comprends vite, teste-toi sérieusement, retiens sans y penser."*
- **Pour qui** : toute personne débordée qui veut reprendre le contrôle de ce qu'elle apprend. Étudiants, adultes en reconversion, pros, curieux.
- **Pourquoi ça peut marcher** :
  - Universel, inclut tous les profils sans effort.
  - Message direct, pas de jargon.
  - Positionne Revizio comme "le moins mauvais moyen d'apprendre en 2026" plutôt que "la meilleure app étudiante".
- **Risques** :
  - Manque de différenciation si mal exécuté (toutes les apps promettent de "simplifier").
  - Peut sonner générique si les preuves visuelles (outils concrets) ne suivent pas.

### Direction B — "Choisis ton sujet, Revizio fait le reste"

- **Angle** : Revizio est une **usine à livrables pédagogiques** à partir d'un sujet.
- **Promesse** : *"Un sujet. Une fiche, un quiz, un examen, des rappels. En quelques clics."*
- **Pour qui** : autodidactes + étudiants + profs qui veulent générer du matériel de révision en série.
- **Pourquoi ça peut marcher** :
  - Très concret et très différenciateur (Revizio produit des OUTPUTS, pas un chat).
  - Met en scène la magie du produit.
  - Facile à démontrer en 1 capture.
- **Risques** :
  - Peut sonner "outil de productivité" froid, éloigné de la chaleur humaine.
  - Relègue la partie "planning/progression" au second plan.

### Direction C — "Ton cerveau, mieux entraîné. Sans effort supplémentaire."

- **Angle** : Revizio s'intègre à la vie de l'utilisateur (rappels pendant la journée, sessions courtes, progression visible) pour **installer la mémorisation comme un réflexe**.
- **Promesse** : *"Ton cerveau travaille pendant que tu vis ta journée."*
- **Pour qui** : adultes actifs, pros, curieux, étudiants matures. Moins lycéens purs.
- **Pourquoi ça peut marcher** :
  - Différencie fort (ce n'est pas "une app de révision", c'est "un coach mémoire passif").
  - Exploite la vraie force des rappels intelligents, une feature unique.
  - Ton premium, mature.
- **Risques** :
  - Sous-promet les outils actifs (quiz, examens, mémos) qui sont la majorité de l'usage.
  - Peut exclure la cible lycéens si mal équilibré.
  - Repose beaucoup sur les Rappels intelligents, qui sont Max-only.

---

## Recommandation finale

**Direction A, enrichie par les forces de B.**

**Pourquoi** :
- A est la plus universelle et résout le pivot "plus seulement étudiants".
- B est le **démontrateur idéal** pour crédibiliser A : on dit "on simplifie", et on prouve en 3 secondes en montrant ce qu'on fabrique (fiche, quiz, examen, rappel).
- C est un angle fort mais trop risqué à tenir sur l'ensemble de la landing — à garder pour une section "Rappels intelligents" dédiée ou pour la page Max.

**Tagline finale recommandée (base de travail, pas final)** :
> **Revizio — Comprends. Teste-toi. Retiens.**
> Un sujet, un ton de fiche ou un quiz en quelques secondes. Pour étudiants, curieux, et tous ceux qui veulent vraiment apprendre.

---

## Structure de landing recommandée (wireframe narratif)

### Hero (above the fold)
- **H1** : *"Comprends. Teste-toi. Retiens."* (ou variante courte équivalente)
- **Sous-H1** : *"Revizio transforme un sujet en fiche, quiz, examen ou rappels. Sur mobile. En quelques secondes."*
- **CTA primaire** : "Télécharger l'app" (bouton + badges store)
- **CTA secondaire** : "Voir les outils" (ancre)
- **Visuel** : capture Mes savoirs ou capture d'un Mémo visuel généré, sur mockup téléphone. Pas de stock photo.

### Section "Pour qui"
3 colonnes/tuiles :
- **Étudiants** — prépare un examen, suit un planning, teste-toi.
- **Adultes** — reconversion, certif, permis, formation pro.
- **Curieux** — approfondis un sujet qui te passionne.

### Section "Les trois promesses"
1. **Comprends vite** — photo d'un document → fiche nette.
2. **Teste-toi sérieusement** — quiz ciblé, examen blanc /20.
3. **Retiens sans y penser** — rappels intelligents à tes horaires.

### Section "Huit outils, un produit cohérent"
- Grille de 8 tuiles (icône + nom + une phrase). Renvoi vers `/outils` pour le détail.
- Tenue par l'ordre : Mémo visuel, Quiz, Mémo structuré, Examen blanc, Rappels intelligents, Pendu, Bingo, Mots croisés.

### Section "Exemple concret"
- Preview d'une fiche générée (ou quiz). Reprendre l'exemple "Le Système solaire" / "La Renaissance" déjà utilisés dans `toolPreview.*`.
- Libellé "Voici ce que tu obtiens en quelques secondes."

### Section "Une progression qui se voit"
- Niveau, série, planning, historique. Screenshots app.
- Message : "Tu vois ce que tu apprends. Tu vois quand tu progresses."

### Section "Les offres, en une phrase"
- 3 cartes Free / Premium / Max avec pitch de fichier 03.
- CTA "Voir les détails" → `/offres`.

### Section "Confiance"
- Sans pub.
- Données respectées, sous-traitants listés sur `/privacy`.
- Connexion sans mot de passe possible.
- Résiliation à tout moment.

### Footer
- Liens légaux, support, réseaux, langues.

---

## Piliers de crédibilité à utiliser

(Prouvés par code / doctrine app)

| Pilier | Usage |
|---|---|
| "Sans mot de passe" (Email OTP + Apple/Google) | Réduit friction install |
| "Pas d'essai gratuit, Free solide pour toujours" | Honnêteté, pas de piège |
| "Les cerveaux ne se perdent pas" (cumulatifs) | Anti-dark-pattern |
| "Contenus IA à relire, toujours comparer au cours" | Transparence IA |
| "Sans pub" | Confiance premium |
| "Notes vocales restent sur ton appareil" | Privacy claim honnête |
| "Disponible iOS + Android" | Couvre toute la cible |

## Preuves / bénéfices (à rythmer dans le long-scroll)

- **Temps gagné** — "Fiche en dix secondes."
- **Sérieux** — "Noté sur 20, corrigé comme par un examinateur."
- **Continuité** — "Ton cerveau travaille pendant que tu vis ta journée."
- **Concret** — "Un sujet, un livrable."
- **Maîtrise** — "Tu vois ce qui tient, et ce qui reste à ancrer."

## CTAs principaux (en hiérarchie)

1. **"Télécharger Revizio"** (badges stores) — primaire, présent 3× dans le scroll (hero, milieu, fin).
2. **"Voir les outils"** — secondaire, en hero.
3. **"Voir les offres"** — secondaire, après section outils.
4. **"Questions fréquentes"** — tertiaire, en footer.

## Ce qu'il NE faut pas mettre en landing

- Un témoignage inventé.
- Un "X millions d'utilisateurs" non vérifié.
- Un comparatif direct vs concurrents nommés.
- Une vidéo auto-play.
- Un chatbot collé en bas.
- Des emojis.
- Des prix €/mois gigantesques flottants en header.
- La mention "Revizio Max optimized planning" tant que non branché runtime.

## Statut source

- Tous les éléments copy sont **basés sur les chaînes FR prouvées** dans `lib/i18n.ts` ou sur la doctrine verrouillée.
- La hiérarchie / structure de landing est **inférée** (choix éditorial).
- La tagline recommandée est une **proposition** ; arbitrage final à faire par toi.
