# 04 — Système visuel (charte app → extension website)

_Source : `constants/theme.ts`, `components/AppSplash.tsx`, CLAUDE.md §6c (image perf), §19.7 (share card), §20 (no-emoji)._

---

## Ambiance générale de l'app

- **Moderne, premium, respire.** Densité moyenne, beaucoup d'espace, cartes douces.
- **Doux sur les yeux** — fond bleuté clair (#EEF4F8), contrastes doux, ombres longues légères.
- **Mascottes** pour l'émotion, Lucide icons partout ailleurs.
- **Zéro emoji** (doctrine locked §20).

## Palette (source `constants/theme.ts`)

### Mode clair (défaut)

| Token | Valeur | Usage |
|---|---|---|
| `ink` | #102033 | Titres, texte principal |
| `text` | #1D2B3A | Corps de texte |
| `textMuted` | #667487 | Sous-titres, captions, placeholders |
| `line` | #E5EBF2 | Bordures, séparateurs |
| `surface` | #FFFFFF | Cartes |
| `surfaceSoft` | #F5F8FC | Zones de section atténuées |
| `background` | #EEF4F8 | Fond global app (léger bleuté) |
| `backgroundStrong` | #E4EEF4 | Fond plus marqué (sections d'accent) |
| `accent` | #4D8DFF | Accent interactif |
| `accentDeep` | #326BDE | Accent profond (CTA primaires) |
| `accentSoft` | #E7F0FF | Halo accent, badge léger |
| `success` | #24A57A | Validations, OK |
| `successSoft` | #E2F7EF | Fond validation léger |
| `warning` | #F1A64A | Avertissements |
| `warningSoft` | #FFF1DE | Fond warning léger |
| `danger` | #D96D6A | Erreurs, suppression |
| `dangerSoft` | #FCE9E7 | Fond danger léger |
| `lavender` | #A684FF | Secondaire créatif |
| `sky` | #6BAAD9 | Secondaire "frais" |
| `mint` | #5AB7A0 | Secondaire "calme" |
| `gold` | #D4A24C | Accent haut de gamme (Max, niveau) |
| `goldSoft` | #D4A24C18 | Halo or |

### Mode sombre (disponible)
- Fond : #0D1520 (très sombre bleuté).
- Textes : #F0F4F8 titres, #D8E0EA corps.
- Accent clarifié : #5A96FF / #6BA3FF.
- Le mode sombre existe dans l'app. **À décider** pour le site (voir fichier 09).

## Typographie

Source `constants/theme.ts` lignes 104–113.

| Rôle | Taille (mobile) |
|---|---|
| `hero` | 28 |
| `title` | 22 |
| `sectionTitle` | 18 |
| `bodyLarge` | 16 |
| `body` | 14 |
| `caption` | 12 |
| `tiny` | 10 |
| lineHeight | fontSize × 1.4 |

- Police système (pas de police custom chargée côté app).
- **Sur le web** : recommander une police sans-serif moderne, lisibilité forte (ex: Inter, Manrope, SF Pro) pour conserver l'esprit premium. **Décision à valider** par toi.

## Rayons et espacements

**Radii** (coins arrondis) : `xs: 10, sm: 14, md: 18, lg: 24, xl: 30`. Les cartes sont généreusement arrondies (tendance radii 14–18).

**Spacing** : `xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 32`.

**Ombres** (`shadows.card`) : très subtiles, opacity 0.08, blur 18. Pas d'ombres marketing dures.

## Éléments de style identitaires

### Cartes
- Arrondies généreusement (radii.md ou lg).
- Fond `surface` (blanc) ou `surfaceSoft`, bordure `line` fine.
- Accent bord gauche 5 px `accentDeep` pour les "question cards" quiz (cf. §19.6).
- Ombre `shadows.card` (douce, discrète).

### Mascottes
- Variations selon contexte : feeling (5 niveaux d'émotion), skill (Comprendre/Appliquer/Maîtriser/Imbattable), onboarding, today (récompense), tools (par outil).
- Format illustratif doux, pas de 3D réaliste, pas de photo.
- Utilisées pour ajouter de la **chaleur**, jamais pour faire peur/stress.

### Badges et pills
- Pills radii.sm, texte `tiny` ou `caption`, fond `accentSoft` / `successSoft` / `warningSoft` / `dangerSoft`.
- "Top" → accent or (`gold`), pour Max.
- "Recommandé" → accent profond, pour Premium.

### Iconographie
- **Lucide React Native** (trait fin, moderne).
- Jamais d'icônes pleines criardes.
- Pas d'emoji.

### Halos / dégradés
- Gradients doux (LinearGradient) uniquement pour fonds spéciaux (packs, paywall, célébration onboarding).
- Couleurs : bleu ciel → bleu profond, ou or discret pour Max.

## Partage social (PNG-only)

Source CLAUDE.md §19.3, §19.7, `components/share/ShareCard*.tsx`.

- **PNG uniquement** en production, via `react-native-view-shot` → `expo-sharing`.
- Largeur capturée : 1080 à 1440 px, quality 1.
- Template off-screen rendu en 9:16 (format story-friendly).
- Footer toujours avec le code d'affiliation.
- Texte préservé avec `**bold**` + `==highlight==` + LaTeX (`latexToUnicode`).

**Pour le site** : si on fait des OG images dynamiques, s'aligner sur le style des share cards (fond doux, mascotte ou icône, titre hero + bloc contenu).

## Ce qui doit se retrouver sur le website

1. **Palette bleue/claire apaisante.** Pas de rouge dominant, pas de noir pur fond.
2. **Cartes généreusement arrondies** (16–24 px).
3. **Or ponctuel pour Max** — jamais comme couleur primaire, toujours accent.
4. **Lucide icons** (ou équivalent trait fin).
5. **Mascottes Revizio** dans les sections émotionnelles (hero, "pourquoi ça marche", résultats).
6. **Ton visuel premium** : pas d'illustrations plates génériques type "undraw", pas de photos stock.
7. **Aérage fort** — la densité marketing bourrée ne correspond pas à l'esprit de l'app.

## À ÉVITER sur le website

- **Emoji** dans les titres, intertitres, CTA, FAQ. Partout. Voir doctrine §20.
- **Couleurs néon** (vert fluo, rose flashy).
- **Fonds sombres** en section héro (l'app est clair-first).
- **Illustrations plates type Undraw** — trop vues, pas premium.
- **Typographie serif ultra-classique** (type académique lourd) — on n'est pas un manuel scolaire.
- **Trop de CTA concurrents** — 1 CTA primaire par section, max 1 secondaire.
- **Témoignages avec 5 étoiles dorées façon e-commerce** — préférer des quotes sobres si on en met.
- **"100 % gratuit" / "illimité"** visuels racoleurs — l'offre a des limites claires.
- **Chatbot collé en bas à droite** — l'app ne propose pas de chat, le site ne doit pas le simuler.

## Relation style app ↔ style website

- **Ne PAS faire un clone literal de l'app sur le web**. On n'a pas besoin d'une "tab bar" Aujourd'hui/Planning/IA/Mes savoirs/Réglages sur la landing.
- **Prolonger l'univers** : couleurs, radii, ton, mascottes, iconographie Lucide, absence d'emoji.
- **Utiliser l'app comme preuve visuelle** : screenshots de l'app (Mes savoirs, outil Mémo visuel, Quiz en cours, banque de rappels) sont les meilleurs visuels produit.
- **Différenciation website** : plus d'espace marketing, plus de storytelling, plus de structure "long-scroll" que l'app ne le permet.

## Densité et contraste

- Contraste `ink` vs `surface` AAA (pas de gris sur gris illisibles).
- Sous-titres en `textMuted` (#667487) — lisibles mais moins dominants.
- Pas de texte blanc sur fond coloré saturé en-dehors des CTA.

## Statut source

- Palette, radii, spacing, typographie : **prouvés par code** (`constants/theme.ts`).
- Doctrine no-emoji, PNG-only sharing, branding : **verrouillés** CLAUDE.md + memory.
- Choix de police web : **à confirmer** (fichier 09).
- Décision "dark mode sur le site ?" : **à confirmer** (fichier 09).
