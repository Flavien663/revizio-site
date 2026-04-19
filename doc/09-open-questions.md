# 09 — Questions ouvertes avant chantier website

_Liste de points bloquants ou ambigus à trancher AVANT d'écrire les pages finales du site. Chaque item précise : quoi faire, pourquoi, comment valider._

---

## A. Décisions produit / marketing

### A1. Tagline finale de la landing
- **Question** : quelle tagline pour incarner le pivot universel ?
- **Proposition** : *"Revizio — Comprends. Teste-toi. Retiens."* (fichier 07).
- **À trancher par toi** : OK / contre-proposition.

### A2. Ordre des cibles (Étudiant / Adulte / Curieux)
- **Question** : lequel est mis en avant en premier dans le hero ? "Étudiant" est-il encore first ou c'est "toute personne qui apprend" ?
- **À trancher** : ordre + pondération visuelle.

### A3. Faut-il un blog / ressources sur le site ?
- Non présent côté app. Décision pure website.
- Enjeux SEO + éducation produit + crédibilité.
- **À trancher** : oui / non / plus tard.

### A4. Dark mode sur le site ?
- L'app le propose. Le site pourrait l'avoir aussi.
- **À trancher** : oui / non.

### A5. Police web
- L'app utilise la police système mobile. Le site peut se permettre une typographie ciblée (Inter / Manrope / SF Pro / custom).
- **À trancher** : quelle police + licence.

### A6. Langues supportées sur le site
- L'app fournit EN + FR (strings complets). Le site sert FR + EN ? FR seulement dans un premier temps ?
- **À trancher** : stratégie i18n site.

---

## B. Règles business à confirmer

### B1. Plafond de cumul des cerveaux mensuels
- CLAUDE.md §4 dit *"Monthly subscription brains are cumulative"*.
- **Ambiguïté** : cumulatifs sans plafond ? plafonnés à 2× / 6× le montant mensuel ? reset annuel ?
- **Pourquoi c'est critique** : formulation CGU + FAQ + pages offres.
- **Où vérifier** : `services/business/brain-economy-policy.ts`, migrations `supabase/migrations/`, logique de crédit mensuel `apply_rc_subscription` / `credit_monthly_brains_for_user`.
- **À trancher + à documenter publiquement.**

### B2. Expiration des cerveaux achetés en pack
- Les packs sont-ils éternels ? Expirent-ils si le compte est inactif ?
- **Pourquoi** : mention obligatoire CGU.
- **À trancher + à refléter dans CGU + FAQ.**

### B3. Intro offer / free trial via RevenueCat
- Côté code Revizio : pas d'essai gratuit (CLAUDE.md §5).
- MAIS : l'App Store / Google Play peuvent proposer un "intro offer" (essai payant réduit 7 jours) configuré côté RevenueCat / App Store Connect.
- **À vérifier** dans la console RevenueCat / App Store Connect / Google Play Console.
- **Si activé** : le site PEUT en parler ; sinon, surtout pas.

### B4. Propriété intellectuelle des contenus IA générés
- L'utilisateur est-il propriétaire / titulaire d'une licence / licencié non-exclusif ?
- Peut-il les utiliser commercialement ?
- **À trancher côté juridique.** Reflète directement dans les CGU.

### B5. Politique de remboursement
- Au-delà des règles App Store / Google Play, Revizio a-t-il une politique de geste commercial ?
- **À trancher** + éventuellement mentionner.

---

## C. Points juridiques / administratifs

### C1. Identité de l'éditeur
- Nom société, SIREN, adresse, représentant légal.
- Obligatoire sur mentions légales + privacy.
- **À fournir.**

### C2. DPO / contact RGPD
- Email DPO ou correspondant RGPD.
- **À fournir.**

### C3. Loi applicable + juridiction compétente
- À préciser dans CGU.
- **À trancher côté juridique.**

### C4. Procédure RGPD export des données
- Actuellement : pas de bouton "exporter mes données" dans l'app.
- **À décider** : ajouter un endpoint serveur + l'inscrire dans la privacy, ou traiter les demandes manuellement via `support@revizioapp.com`.

### C5. Consentements (notifications, cookies analytics)
- Push : Apple/Google gèrent la demande de permission native.
- Cookies analytics sur le site : si on met du tracking (GA, Plausible, autre), bandeau consent nécessaire.
- **À trancher** : outils analytics retenus pour le site.

---

## D. Features listées vs livrées

### D1. "Planning optimisé Max"
- CLAUDE.md §4 : *"entitlement flag present in subscription-policy.ts but NOT branched runtime — treat as marketing-only until R4 branches it"*.
- **Décision de com** :
  - Option A — ne pas mentionner sur le site tant que non branché.
  - Option B — mentionner prudemment ("planning adaptatif à tes échéances") et éviter tout superlatif (évite la sur-promesse).
- **À trancher** + coordonner avec l'équipe dev sur le branchement.

### D2. Rappels intelligents : promesse tenue ?
- Max-only, 30 snippets sur ~10 jours, 3 max/jour. Locked.
- **Confiance élevée** qu'on peut communiquer en toute honnêteté.

### D3. Examen blanc "comme un examinateur"
- La correction est détaillée mais reste une IA. Attention à ne pas promettre une validation académique réelle.
- **Reformulation recommandée** : "Une correction sérieuse par item, avec bilan et conseils." (plutôt que "comme un prof").

---

## E. Assets et visuels

### E1. Screenshots produits à jour
- Les anciennes captures de l'app peuvent être périmées (labels changés, Mes savoirs, no-emoji, Mémo visuel vs Mémo structuré).
- **À faire** : refaire les captures sur la dernière build avant publication du site.

### E2. Mascottes disponibles pour le web
- `assets/images/mascots/*`, `assets/images/feelings/*`, `assets/images/skills/*`, `assets/images/onboarding/*`.
- Formats disponibles : PNG + WebP (CLAUDE.md §6c).
- **À valider** : quelles mascottes pour quel contexte site (hero, FAQ, confiance, etc.).

### E3. Logo
- `assets/LOGO APP.png` + `assets/images/branding/*`.
- Version web HD et SVG disponibles ?
- **À confirmer** : fichier vectoriel fourni.

---

## F. Contenus à valider humainement avant mise en ligne

| Contenu | Pourquoi humain |
|---|---|
| Privacy Policy finale | Responsabilité légale |
| Terms / CGU | Responsabilité légale |
| Tagline landing | Positionnement produit |
| Page offres | Risque confusion pack/abo |
| FAQ IA et confidentialité | Engagement public |
| Page suppression compte | Conformité Apple |

## G. Ce qui est "inféré" vs "prouvé par code"

| Élément | Statut |
|---|---|
| Positionnement dual Étudiant/Curieux | **Prouvé par code** (onboarding + memory locked) |
| Tiers, prix, coûts, bénéfices FR | **Prouvé par code** |
| URLs deep-link website | **Prouvé par code** |
| Palette + radii + typographie | **Prouvé par code** |
| Sous-traitants (OpenAI, Supabase, RevenueCat, Expo, Apple, Google) | **Prouvé par code** |
| Notes vocales local-only | **Verrouillé** CLAUDE.md §9b |
| Photos chiffrées Storage privé | **Verrouillé** CLAUDE.md §7 |
| Plafond cumul cerveaux mensuels | **Inféré** — à confirmer §B1 |
| Expiration packs | **Inféré** — à confirmer §B2 |
| Intro offer RevenueCat | **Bloqué externe** — vérifier console |
| Propriété IA | **Bloqué externe** — décision juridique |
| Identité éditeur, DPO, SIREN | **Bloqué externe** — à fournir |
| Politique remboursement | **Bloqué externe** — décision commerciale |

---

## ACTION UTILISATEUR REQUISE

Pour débloquer le chantier website, voici les infos à me fournir ou valider quand on reprendra.

### Où aller / quoi lister / quoi vérifier / quoi me dire ensuite

1. **RevenueCat — console** (`app.revenuecat.com`)
   - Onglet Entitlements + Offerings + chaque produit.
   - Lister : existe-t-il un intro offer (essai payant réduit) configuré ? Pour quels produits ?
   - Me dire : oui/non + durée + prix intro.

2. **App Store Connect + Google Play Console**
   - Vérifier : les IAP (subscriptions + consumables) configurés.
   - Lister : les prix par région pour les 4 packs (50 / 125 / 335 / 670).
   - Me dire : si on peut publier un prix EUR fixe ou si on doit dire "à partir de X €".

3. **Juridique (avocat ou service juridique)**
   - Trancher §B4 (PI contenus IA), §B5 (remboursement Revizio), §C1 (identité éditeur), §C2 (DPO), §C3 (juridiction).
   - Me fournir : un texte CGU / privacy prêt à relire, ou les réponses brutes à ces points.

4. **Équipe dev / back-end**
   - Confirmer §B1 (cumul cerveaux plafond ou pas) en lisant `brain-economy-policy.ts` runtime + les RPCs `credit_monthly_brains_for_user`.
   - Confirmer §B2 (expiration packs).
   - Confirmer §D1 (planning optimisé Max — branché ou pas ?).
   - Me dire : état réel, verbatim.

5. **Design / brand**
   - Trancher §A4 (dark mode site), §A5 (police), §A6 (langues).
   - Me fournir : logo SVG, palette web éventuellement adaptée, guide usage mascottes web.

6. **Produit / marketing (toi)**
   - Trancher §A1 (tagline), §A2 (ordre cibles), §A3 (blog), §D1 (planning optimisé option A vs B).
   - Me dire : arbitrage par point.

Une fois ces points tranchés, on pourra démarrer la rédaction et la construction réelle du site sans risque d'incohérence avec l'app.
