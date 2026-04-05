# Revizio Site — Déploiement

Mini-site public Revizio (Next.js + TypeScript + Tailwind).

## Installation locale

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Build de production

```bash
npm run build
npm start
```

## Déploiement Vercel

1. Pousser le dossier sur un repo GitHub dédié (ex. `revizio-site`).
2. Importer le repo dans Vercel — aucune variable d’environnement requise.
3. Vercel détecte Next.js automatiquement.
4. Une fois déployé, brancher le domaine custom et activer HTTPS.
5. Configurer la redirection `www → apex` (ou l’inverse) dans les réglages du domaine.

## Remplacements à faire avant mise en prod

Dans `lib/site.ts`, remplacer :

- `DOMAIN_NAME`
- `SUPPORT_EMAIL`
- `PRIVACY_EMAIL`
- `LEGAL_ENTITY_NAME`
- `LEGAL_ADDRESS`
- `APP_STORE_URL`
- `LAST_UPDATED`

Aucune autre configuration n’est requise.
