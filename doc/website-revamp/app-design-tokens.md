# Revizio — Design Tokens for Website (Light theme reference)

> Briefing pour l'agent Claude Code qui s'occupe du site **revizio.app**.
> Tu peux reprendre ces tokens tels quels pour aligner la charte du site
> sur l'app mobile. Tout ce qui suit est extrait de l'app live, version
> V1.0.4 (Build 8), thème **Light / Clair**.

---

## 1. Doctrine visuelle

L'app mobile utilise un système **multi-couleurs par outil** : chaque
outil pédagogique a sa propre palette signature (tint, accent, accent
deep, ink). Sur les écrans génériques (home, settings, plans), on garde
un fond neutre froid bleu glacier. Dès qu'on entre dans un outil, la
palette de cet outil prend le contrôle (gradients, boutons, badges,
iconographie) — c'est ce qui donne le côté "premium et identifiable".

**Spirit guidelines :**
- "Soft premium" : tints en fond très désaturés (10-20% de saturation),
  jamais de bloc plein vivid en grande surface.
- Aucun emoji nulle part. Mascots illustrés + icônes Lucide uniquement.
- Pas de copy négative ("pas de X", "rien ici") — toujours reformuler
  positif ("Découvre…", "Lance…", "Crée…").
- Texte caractère bold sur les CTA, regular sur le corps.

---

## 2. Base palette — Light (neutre froid bleu)

```css
/* Tokens de fond / texte de base — utilisés sur tout l'écran-cadre */
--ink:              #102033;   /* texte titre, le plus dense */
--text:             #1D2B3A;   /* texte courant body */
--text-muted:       #667487;   /* sous-titre, métadonnées */
--line:             #E5EBF2;   /* divider, border subtil */
--surface:          #FFFFFF;   /* cards, panneaux flottants */
--surface-soft:     #F5F8FC;   /* zone secondaire dans card */
--background:       #EEF4F8;   /* fond de page principal */
--background-strong:#E4EEF4;   /* fond plus dense, sections */

/* Accents génériques (utilisés quand on n'est PAS dans un outil) */
--accent:           #4D8DFF;   /* CTA primaire bleu marin */
--accent-deep:      #326BDE;   /* hover/pressed du primaire */
--accent-soft:      #E7F0FF;   /* tint backdrop bleu très clair */

/* Sémantique — réutilisable partout */
--success:          #24A57A;   --success-soft: #E2F7EF;
--warning:          #F1A64A;   --warning-soft: #FFF1DE;
--danger:           #D96D6A;   --danger-soft:  #FCE9E7;
--gold:             #D4A24C;   --gold-soft:    #D4A24C18;

/* Couleurs accent secondaires (rares) */
--lavender:         #A684FF;
--sky:              #6BAAD9;
--mint:             #5AB7A0;
```

---

## 3. Palette par outil — c'est ICI le caractère de l'app

Chaque outil a 5 valeurs :
- **`tint`** : fond très clair, OK derrière du texte (≥ AA)
- **`tintStrong`** : fond plus dense, dots / badges
- **`accent`** : couleur vive principale, CTA, état actif
- **`accentDeep`** : pressé / hover / texte inline appuyé
- **`ink`** : texte foncé lisible sur tint (AAA)

### 3.1 Jeux (priorité visuelle, max distinct)

#### Hangman — Orange
```css
--hangman-tint:        #FEF3E6;
--hangman-tint-strong: #FED7AA;
--hangman-accent:      #F97316;   /* signature du jeu */
--hangman-accent-deep: #C2410C;
--hangman-ink:         #7C2D12;
```

#### Crossword (Mots croisés) — Sky-blue
```css
--crossword-tint:        #E0F2FE;
--crossword-tint-strong: #BAE6FD;
--crossword-accent:      #0284C7;
--crossword-accent-deep: #075985;
--crossword-ink:         #0C4A6E;
```

#### Bingo — Emerald (vert sage, pas fluo)
```css
--bingo-tint:        #ECFDF5;
--bingo-tint-strong: #A7F3D0;
--bingo-accent:      #059669;
--bingo-accent-deep: #065F46;
--bingo-ink:         #064E3B;
```

### 3.2 Mémos (snapshots de cours)

#### Memo visuel (`course_analysis`) — Violet
```css
--memo-visuel-tint:        #F5F3FF;
--memo-visuel-tint-strong: #DDD6FE;
--memo-visuel-accent:      #7C3AED;
--memo-visuel-accent-deep: #5B21B6;
--memo-visuel-ink:         #2E1065;
```
Snapshot rapide, vibe "créatif / scan instantané".

#### Memo structure (`revision_sheet`) — Bordeaux vif
```css
--memo-structure-tint:        #FFE4E6;
--memo-structure-tint-strong: #FECDD3;
--memo-structure-accent:      #BE123C;
--memo-structure-accent-deep: #881337;
--memo-structure-ink:         #4C0519;
```
Notebook premium, vibe "carnet sérieux / fiche complète".

### 3.3 Quizzes

#### Quiz standard (`standard_quiz`) — Sky-blue (alignée sur Crossword)
```css
--quiz-tint:        #E0F2FE;
--quiz-tint-strong: #BAE6FD;
--quiz-accent:      #0284C7;
--quiz-accent-deep: #075985;
--quiz-ink:         #0C4A6E;
```
**Note** : volontairement la même palette que Crossword (différenciation
via mascots + layout + tier badge dans l'app). Le site peut donc traiter
"quizzes & crossword" comme un cluster bleu glacier.

#### Examen blanc (`exam_quiz`) — Teal sapin sobre
```css
--exam-tint:        #F0FDFA;
--exam-tint-strong: #99F6E4;
--exam-accent:      #115E59;
--exam-accent-deep: #134E4A;
--exam-ink:         #042F2E;
```
Vibe "gravité examen", advanced tier, vert sapin désaturé.

### 3.4 Notifications

#### Smart Notifications — Bleu marine
```css
--notifs-tint:        #DBEAFE;
--notifs-tint-strong: #BFDBFE;
--notifs-accent:      #1E3A8A;
--notifs-accent-deep: #172554;
--notifs-ink:         #172554;
```
Vibe "rappel ambient, deep blue calm".

---

## 4. Familles & ordre d'affichage

L'app regroupe les outils en familles affichées dans cet ordre canonique
sur la page AI :

1. **Mémo visuel** (Violet) — Premium+
2. **Mémo structure** (Bordeaux) — Max
3. **Quiz** (Sky-blue) — Premium+
4. **Examen blanc** (Teal) — Max
5. **Smart Notifications** (Marine) — Max
6. **Hangman** (Orange) — Free+
7. **Mots croisés** (Sky-blue) — All tiers (degressive cost)
8. **Bingo** (Emerald) — Premium+

Pour le site, deux groupes naturels :
- **Apprendre / Mémoriser** : Memo visuel, Memo structure, Quiz, Examen
- **Jouer / Réviser autrement** : Hangman, Crossword, Bingo, Smart Notifs

---

## 5. Système d'espacement & rayons

```css
/* Border radii */
--r-xs: 10px;  --r-sm: 14px;  --r-md: 18px;  --r-lg: 24px;  --r-xl: 30px;

/* Spacing scale */
--sp-xs: 6px;   --sp-sm: 10px;  --sp-md: 14px;
--sp-lg: 18px;  --sp-xl: 24px;  --sp-xxl: 32px;
```

Cards : `border-radius: var(--r-md)` ou `var(--r-lg)`. Boutons : `var(--r-md)`.
Dots, pastilles : `border-radius: 999px` (pleine pastille).

---

## 6. Typographie

```css
/* Échelle utilisée dans l'app — facilement portable en rem ou clamp() web */
--type-hero:         28px;  /* H1 hero */
--type-title:        22px;  /* H2 section/card */
--type-section:      18px;  /* H3 SectionTitle */
--type-body-lg:      16px;  /* corps mis en avant + boutons */
--type-body:         14px;  /* corps standard */
--type-caption:      12px;  /* métadonnées, légendes */
--type-tiny:         10px;  /* badges, micro-labels */

/* Line-height : 1.4× la fontSize partout (lisibilité optimale). */
```

Police principale : **Inter** ou **System UI** (l'app utilise la stack
système). Bold = 700 sur titres et CTA, 600 sur sous-titres, 400-500 sur
le corps.

---

## 7. Ombres & élévation

```css
/* Card-level shadow (cards flottantes) */
box-shadow: 0 10px 18px -8px rgba(16, 32, 51, 0.08);

/* Soft shadow (badges, dots) */
box-shadow: 0 4px 10px -2px rgba(16, 32, 51, 0.06);
```

---

## 8. Patterns d'usage clés (pour ne pas casser le langage)

### Tile d'outil (composant signature)
- Card blanche `surface` avec `border-radius: var(--r-lg)`
- À l'intérieur : un avatar mascotte/illustration de l'outil (carré
  arrondi `var(--r-md)`, fond `accent-soft` de l'outil en question)
- Titre `type-title`, sous-titre `type-caption` `text-muted`
- Hover/press : surface passe à `tint-strong` de l'outil, accent-deep
  apparaît en outline

### CTA primaire
- Background : `accent` (couleur de l'outil si dans contexte outil,
  sinon `--accent` global)
- Texte blanc, font-weight 700
- Border-radius `var(--r-md)`, padding-y 14px / padding-x 18px
- Hover : background `accent-deep`

### Badge / pill d'info
- Background : `tint-strong` de l'outil
- Texte : `accent-deep` de l'outil, font-weight 700
- Padding 4px / 10px, border-radius 999px

### Section header coloré
- Fond `tint` de l'outil
- Border-left 4px solid `accent` de l'outil
- Titre en `ink` de l'outil

---

## 9. Mascots et iconographie

L'app utilise une famille d'illustrations propriétaires (`MASCOT_*`,
`SKILL_MASCOTS`, `FEELING_MASCOTS`, `TOOL_IMAGES`). Pour le site, deux
options :
- **Idéal** : reprendre les mêmes assets WebP (chemin
  `assets/images/tools/tool-{hangman,bingo,crossword,quiz,exam,scan,
  revision-sheet,notifications}.webp`) pour cohérence parfaite.
- **Fallback** : Lucide React icons. Mapping recommandé :
  - hangman → `Spade` ou `BookOpen`
  - bingo → `Grid3x3`
  - crossword → `LayoutGrid`
  - course_analysis → `Camera`
  - revision_sheet → `FileText`
  - standard_quiz → `Target`
  - exam_quiz → `GraduationCap`
  - smart_notifications → `BellRing`

---

## 10. Tier visual signaling

Trois tiers :
- **Free** : pas de badge, ou badge gris sobre
- **Premium** : badge `gold` (`#D4A24C`), texte blanc, font-weight 700
- **Max** : badge `accentDeep` global (`#326BDE`) + couronne `Crown`
  Lucide. Vibe "pro / advanced".

Quand un outil est verrouillé pour le tier de l'utilisateur, on utilise
un overlay `surface-soft` 90% opacité + cadenas `Lock` (Lucide) en
`text-muted`, sans rouge danger (l'app évite les signaux négatifs).

---

## 11. Anti-pattern à éviter

- AVOID: Mélanger plusieurs accents d'outils dans le même bloc (génère du
  bruit chromatique).
- AVOID: Utiliser `accent` (couleur vive) en grande surface de fond — toujours
  passer par `tint` ou `tint-strong`.
- AVOID: Texte blanc sur `accent` clair (Hangman orange, Bingo emerald) sans
  vérifier le ratio AAA — préférer texte `ink` de la même famille sur
  `tint-strong`.
- AVOID: Emojis 🎯🚀💡 — tous bannis. Use Lucide + mascots.
- AVOID: Copy négative ("pas de cours créés", "vide") — reformuler positif.

---

## 12. Snippet Tailwind config (clé en main)

Si le site utilise Tailwind, voilà la config qu'on peut copier-coller :

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: '#102033', text: '#1D2B3A', muted: '#667487', line: '#E5EBF2',
        surface: '#FFFFFF', 'surface-soft': '#F5F8FC',
        bg: '#EEF4F8', 'bg-strong': '#E4EEF4',
        accent: { DEFAULT: '#4D8DFF', deep: '#326BDE', soft: '#E7F0FF' },
        success: { DEFAULT: '#24A57A', soft: '#E2F7EF' },
        warning: { DEFAULT: '#F1A64A', soft: '#FFF1DE' },
        danger:  { DEFAULT: '#D96D6A', soft: '#FCE9E7' },
        gold: { DEFAULT: '#D4A24C', soft: '#D4A24C18' },
        // Outils
        hangman:   { tint: '#FEF3E6', tintStrong: '#FED7AA', DEFAULT: '#F97316', deep: '#C2410C', ink: '#7C2D12' },
        crossword: { tint: '#E0F2FE', tintStrong: '#BAE6FD', DEFAULT: '#0284C7', deep: '#075985', ink: '#0C4A6E' },
        bingo:     { tint: '#ECFDF5', tintStrong: '#A7F3D0', DEFAULT: '#059669', deep: '#065F46', ink: '#064E3B' },
        memoVisuel:{ tint: '#F5F3FF', tintStrong: '#DDD6FE', DEFAULT: '#7C3AED', deep: '#5B21B6', ink: '#2E1065' },
        memoStruct:{ tint: '#FFE4E6', tintStrong: '#FECDD3', DEFAULT: '#BE123C', deep: '#881337', ink: '#4C0519' },
        quiz:      { tint: '#E0F2FE', tintStrong: '#BAE6FD', DEFAULT: '#0284C7', deep: '#075985', ink: '#0C4A6E' },
        exam:      { tint: '#F0FDFA', tintStrong: '#99F6E4', DEFAULT: '#115E59', deep: '#134E4A', ink: '#042F2E' },
        notifs:    { tint: '#DBEAFE', tintStrong: '#BFDBFE', DEFAULT: '#1E3A8A', deep: '#172554', ink: '#172554' },
      },
      borderRadius: { xs: '10px', sm: '14px', md: '18px', lg: '24px', xl: '30px' },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 10px 18px -8px rgba(16,32,51,0.08)',
        soft: '0 4px 10px -2px rgba(16,32,51,0.06)',
      },
    },
  },
};
```

---

## 13. Exemple — section "Outils" du site

Une grille 4×2 ou 2×4 avec les 8 outils. Chaque tile :
- card blanche `bg-surface` `rounded-lg` `shadow-card`
- en haut : illustration mascotte de l'outil sur un fond `tint-strong`
  arrondi `rounded-md`, padding 16px
- titre `type-title font-bold text-{tool}-ink`
- sous-titre `type-caption text-muted`
- pastille tier en bas-droite (`bg-{tool}-tintStrong text-{tool}-deep`)

Tap → page outil dédiée, l'identité chromatique de l'outil prend tout
l'écran (header gradient `from-{tool}-tint to-{tool}-tintStrong`,
boutons en `bg-{tool}` etc).

---

**Fin du briefing.** Tout est dérivé du code de production de l'app.
Source authoritative : `expo/constants/family-themes.ts` + `expo/constants/theme.ts`.
