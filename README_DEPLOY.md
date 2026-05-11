# Revizio Site — Déploiement

Mini-site public Revizio (Next.js 16 + React 19 + TypeScript 5 + Tailwind 3). FR/EN.

## Installation locale

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000 (FR) ou http://localhost:3000/en (EN).

## Build de production

```bash
npm run build
npm start
```

## Routes

```
/                       → home FR
/privacy                → confidentialité FR
/terms                  → CGU FR
/support                → support FR
/delete-account         → suppression compte FR

/en                     → home EN
/en/privacy             → privacy EN
/en/terms               → terms EN
/en/support             → support EN
/en/delete-account      → delete account EN

/sitemap.xml            → sitemap (10 URLs avec hreflang)
/robots.txt             → robots
/opengraph-image        → OG image dynamique
```

### Redirects automatiques (legacy)

```
/outils          → /
/faq             → /#faq
/subscriptions   → /#plans
```

Plus les équivalents `/en/...`. Tous en 308 permanent.

## Déploiement Vercel

1. Pousser le dossier sur un repo GitHub dédié (ex. `revizio-site`).
2. Importer le repo dans Vercel — aucune variable d'environnement requise.
3. Vercel détecte Next.js automatiquement.
4. Une fois déployé, brancher le domaine `revizioapp.com` et activer HTTPS.
5. Configurer la redirection `www → apex` (ou l'inverse) dans les réglages du domaine.

## Configuration à vérifier avant prod

Dans `lib/site.ts`, valider :

- `domain` / `url` → `revizioapp.com` / `https://revizioapp.com`
- `supportEmail` → `support@revizioapp.com` ✓
- `legalEntity` / `legalAddress` → confirmer entité juridique définitive
- `appStoreUrl` → `https://apps.apple.com/us/app/revizio/id6761366726` ✓
- `playStoreUrl` → toujours `null` tant qu'Android n'est pas publié
- `lastUpdated` → mettre à jour à chaque modif des textes légaux

## i18n

Le dictionnaire vit dans `lib/i18n/fr.ts` et `lib/i18n/en.ts`. Pas de librairie externe — TypeScript types dans `types.ts`. Pour ajouter une chaîne :

1. L'ajouter dans `types.ts` (signature)
2. La traduire dans `fr.ts` ET dans `en.ts`
3. L'utiliser via `getDict(lang).maSection.maClé`

## Palette

`tailwind.config.ts` définit :
- Brand : orange `#F26B3A`
- 8 couleurs de jeux (quiz, hangman, bingo, crossword, true-false, tri, chrono, memo)
- 3 couleurs de mondes (culture, words, logic)

Une `safelist` protège les classes dynamiques `bg-<game>-tint` etc. de la purge.

## Assets

- `public/images/logo-revizio.webp` — logo
- `public/images/mascot-hero.webp` — mascotte principale (hero + CTA final)
- `public/images/daily-mascot.webp` — mascotte du défi du jour
- `public/images/games/<game>/mascot.webp` — 8 mascottes des jeux IA
