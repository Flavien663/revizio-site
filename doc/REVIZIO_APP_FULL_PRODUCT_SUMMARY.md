# Revizio — Synthèse produit exhaustive (pour CGU / RGPD / store listings)

**Doc** : V16 §9 — produit, économie, données. Source unique pour rédiger ou réviser les CGU / Privacy / RGPD / App Store description / Google Play description.
**Édité** : 2026-05-11. **Maintien** : édité à chaque vague majeure (V17+).

---

## 1. Identité produit

- **Nom commercial** : Revizio
- **Mascotte officielle** : Revi (confirmation marketing en attente formelle).
- **Plateforme** : Expo (React Native) — iOS + Android. Web non distribué.
- **Public** : étudiants (collège/lycée/supérieur) + curieux adultes (mode "Curieux" sélectionnable à l'onboarding). Pas spécifiquement pour mineurs < 13 ans (Apple age gate 4+ envisagé sous réserve modération).
- **Langues live** : Français + Anglais. Espagnol + Allemand prêts derrière flag (V17+).

---

## 2. Promesse marketing

> Apprends en jouant. 3 mondes d'Aventure éditoriale (90 niveaux), 8 jeux IA générés à la volée à partir de tes cours ou d'un thème libre, un défi du jour, et une mini-Aventure perso pour explorer ce que tu veux.

Voix : amicale, jamais autoritaire, tutoiement FR.

---

## 3. Modèle économique (LOCKED V14)

### Tiers
| Tier | Prix | Brains/mois | Outils Premium | Vies max | Régen vies | Bonus XP |
|---|---|---|---|---|---|---|
| **Free** | 0 € | 0 (gagnables ailleurs) | preview only | 5 | 1/30 min | ×1.0 |
| **Revizio Plus** | 5,99 €/mois ou 49,99 €/an (-30%) | **200** (cumulatifs) | tous | 8 | 1/15 min | ×1.25 |

### Doctrine
- **Abonnement = accès** ; **brains = consommation**. Jamais mélangés.
- **Packs cerveaux** rechargent le solde, **ne débloquent JAMAIS l'accès** premium.
- Free généreux mais plafonné : **60 brains/mois max** via Aventure + Daily + Streak. One-shots (onboarding, première session, affiliation) hors cap.
- Sessions valides ≥ 10 min (sinon pas de récompense, UI warning).

### Packs cerveaux (consommables)
| Pack | Brains | Prix | RC product ID |
|---|---|---|---|
| Snack | 10 | 0.99 € | `brain_pack_10` |
| Pocket | 40 | 2.99 € | `brain_pack_40` |
| Bundle | 100 | 4.99 € | `brain_pack_100` |
| Pro | 250 | 9.99 € | `brain_pack_250` |
*(Tarification consommable Apple/Google ; tout achat passe par RevenueCat.)*

---

## 4. Affiliation (LOCKED V16 §7)

- Code unique au format `REV-XXXXX` généré au signup.
- **+10 brains** pour le référent **+10 brains** pour le filleul, accordés une fois que le filleul finit **un niveau du jour** dans l'Aventure.
- Anti-double-claim : UNIQUE `(referrer_id, invitee_id)` côté serveur.
- Anti-self : impossible de s'auto-référer (`auth.uid() ≠ p_referrer_id`).
- Hors-cap Free (les 10 brains comptent en plus du plafond mensuel).

---

## 5. Contenu Aventure (LOCKED V5)

- **3 mondes × 30 niveaux = 90 niveaux** au launch :
  - Cap Culture (cyan) — Free
  - Forêt des Mots (mint) — Free
  - Tour Logique (indigo) — Free
- 6 mondes futurs : Archives du Temps, Cité Nocturne, Labo des Idées, etc. (drops V17+).
- Étoiles : <50% = 0 ★, ≥50% = 1, ≥75% = 2, ≥95% = 3.
- Récompense fin de monde : +10 cerveaux + déblocage monde suivant.
- Coffres tous les 5 niveaux (UNIQUE anti-replay).
- Boss au niveau 30 : +3 brains + 200 XP first-clear.

---

## 6. Jeux IA (8 jeux)

| Jeu | Coût | Items |
|---|---|---|
| Quiz | 1 brain | 15 questions |
| Pendu | 1 brain | 10 mots |
| Bingo | 1 brain | 1 grille 12 cells |
| Mots Croisés | 1 brain | 1 grille |
| Vrai/Faux Rush | 1 brain | 12 affirmations |
| Tri Express | 1 brain | 10 cartes / 3-4 catégories |
| Classement Chrono | 1 brain | 7-9 items |
| Mémo Duo | 1 brain | 6-15 paires (V16 floor 6 lock) |

Server-first. Schémas JSON stricts. Quality Gate centralisé.

---

## 7. Outils Premium (Plus)

| Outil | Coût brains | Description |
|---|---|---|
| Décodeur | 5 | Analyse photo cours → widgets explicatifs |
| Mémo structuré | 10 | Fiche de révision riche multi-sections |
| Examen blanc | 10 | Quiz long format examen |
| Quiz sur cours | 3 | Quiz ciblé sur un cours |
| Notifications intelligentes | 5 | Banque de rappels personnalisés |
| Plan intelligent | 0 (inclus) | Planning de révision adaptatif |
| Aventure personnalisée | 5 | Mini-monde 10 niveaux thème libre |

Free voit les outils en preview (titre + description) mais ne peut pas générer.

---

## 8. Aventure personnalisée (mini-monde)

- 10 niveaux pour 5 cerveaux (au lieu de 10 séparés → -50%).
- Free : 1/jour. Plus : 5/jour.
- 6 jeux V3+V5 utilisés en rotation (Quiz, Pendu, V/F, Tri, Chrono, Memo). Bingo + Crossword exclus du mini-monde (trop lourds).
- Idempotent via `client_request_id` ; refund automatique si la génération échoue.

---

## 9. XP / niveaux

- Source unique : RPC `add_xp(user_id, amount, source, idempotency_key)`.
- Aventure niveau réussi (≥1 étoile) = 10 XP.
- Replay du même niveau = 0 XP.
- Plus : multiplier ×1.25 serveur-side.
- Cap journalier : 90 XP sessions, 20 XP jeux IA.
- Formule : `XP_required(N) = 100 × N × (N+1) / 2`. Pas de cap niveau.

---

## 10. Vies / timers

- 5 vies Free / 8 vies Plus.
- Consommée à chaque échec niveau Aventure (0 étoile). Pas pour daily / jeux IA générés.
- App reste navigable sans vie (pas de blocage total).
- Refill : 1 brain (Free) / 3 brains (Plus) pour 5 vies max.
- Timers : 30 min niveau 10, 1h niveau 20, 2h boss. Plus : ÷ 2.
- Accélération : 1-3 brains selon durée.

---

## 11. Authentification

4 providers :
- **Apple** (iOS, signInWithIdToken)
- **Google** (signInWithIdToken, dev build requis)
- **Email OTP** (6 digits, no password ever)
- **Anonymous** (guest mode, peut linker vers un provider sans perdre l'UUID)

`profiles.auth_provider` enregistré. signOut purge session+userId+userEmail.

---

## 12. Permissions natives

| Permission | Demandée si | Justification UX |
|---|---|---|
| Notifications | user toggle ON | Rappels session + défi du jour + smart notifs |
| Photo library | user choisit "Importer photo" sur Décodeur | Analyse OCR de cours |
| Camera | user choisit "Prendre photo" sur Décodeur | Idem |
| Internet | toujours | Sync server-first (RPCs, IA, RevenueCat) |
| Tracking (App Tracking Transparency) | non demandée | Aucun tracking publicitaire |

---

## 13. Données collectées (RGPD)

### Profile (table `profiles`)
- `id` (UUID, lié auth.users)
- `email` (si Email OTP), `auth_provider`
- `onboarding_completed`, `display_name` (optionnel)
- `language` (`fr`/`en`)
- `objective` (Étudiant / Curieux)
- Pas de date de naissance, pas de genre, pas de localisation, pas de photo de profil.

### Progression
- `user_world_progress`, `user_world_attempts` (Aventure)
- `user_xp` (XP courant + niveau)
- `user_lives`, `user_timers`
- `subjects`, `chapters`, `sessions` (cours user-créés)
- `brain_wallets`, `brain_transactions`, `user_reward_events` (économie)
- `ai_jobs`, `ai_summaries`, `ai_quiz_banks` (créations IA)
- `worlds_custom`, `levels_custom`, `user_custom_adventure_progress`
- `user_notification_preferences`, `affiliations`

### Pas collecté
- Aucune analytics third-party (Mixpanel, Amplitude, Firebase Analytics) au launch.
- Aucun cookie web (app native).
- Aucun device ID utilisé pour tracking.
- Aucune adresse IP loggée côté app (Supabase logs internes uniquement, hors business).
- Aucun crash report avec PII (Sentry no-op au launch ; V8.1 doctrine).

### Stockage
- **Supabase** (Postgres + Storage + Auth) — région `eu-west-1`.
- **Storage** : `revizio-media` bucket — uniquement les images compressées des Décodeur (≤ 1 MB chacune), supprimables via "Supprimer mon compte".

---

## 14. Partage tiers

- **RevenueCat** : reçoit l'ID anonymisé (`userId`) pour gérer abonnements + entitlements.
- **OpenAI (via Edge Functions)** : les textes envoyés aux modèles sont les contenus user (cours, photos OCR-isées, thèmes). Pas de PII profile. Conservation côté OpenAI : 30 jours max (politique Anthropic-like en cours d'audit).
- **Apple / Google** : sign-in id_token + IAP transactions.

Aucun partage à des fins publicitaires. Aucun partage marketing.

---

## 15. Droits utilisateur (RGPD)

- **Accès** : `Réglages → Mon compte → Exporter mes données` (JSON dump des tables liées au user_id).
- **Rectification** : modification du profil dans `Réglages → Mon compte`.
- **Suppression** : `Réglages → Mon compte → Supprimer mon compte` → suppression atomique de toutes les rows + suppression Storage + soft-cancel RevenueCat.
- **Portabilité** : export JSON inclus dans "Exporter mes données".
- **Opposition** : opt-out notifs granulaire par canal.
- **Réclamation** : email `support@revizio.app` (à confirmer) → CNIL si insatisfait.

---

## 16. Mineurs

- Pas de fonctionnalité spécifique aux <13 ans. Pas de chat user→user, pas de social, pas de profil public.
- Recommandation : utiliser le compte Apple/Google familial des parents. Le contenu reste éducatif et non graphique.
- Age gate : à confirmer au moment de la soumission Apple (option 4+ ou 9+).

---

## 17. Modération de contenu

- L'utilisateur peut générer du contenu via IA (thèmes libres, prompts).
- Quality Gate côté serveur **filtre** : prompts génériques rejetés, prompts à risque (haine, harcèlement, contenu sexuel, automutilation) bloqués via le filtre OpenAI natif (moderation API) avant injection dans la chaîne.
- Aucun contenu user-généré n'est partagé entre utilisateurs (chaque génération est privée à `auth.uid()`).

---

## 18. Conditions d'achat in-app

- Tout achat passe par Apple App Store (iOS) ou Google Play Store (Android) via RevenueCat.
- **Abonnement** : renouvellement automatique tant que non annulé via Réglages Apple/Google.
- **Pack consommable** : achat unique, ajoute des brains au wallet, ne renouvelle pas.
- **Restauration** : `Réglages → Restaurer mes achats` rejoue les transactions Apple/Google.
- **Refund** : selon politique Apple/Google ; Revizio ne gère pas les refunds directement.

---

## 19. Brain Ledger (auditabilité)

Toutes les transactions brains sont tracées dans `user_reward_events` :
- `source_type` taxonomie figée (adventure_level, daily_challenge, chest_claim, level_up_reward, affiliation_referrer, affiliation_invitee, etc.)
- `idempotency_key` UNIQUE → impossible de double-claim.
- L'utilisateur peut consulter son historique brains complet dans `/brain-history`.

---

## 20. Réinitialisation onboarding (dev/QA)

- Disponible en dev build via `__DEV__` flag dans `Réglages → Préférences d'apprentissage`.
- Push aussi côté serveur (`profiles.onboarding_completed = false`) pour que la réinit ne se perde pas au prochain pull cross-device.

---

## 21. Sécurité

- Supabase RLS sur **toutes** les tables sensibles.
- `brain_wallets` write-locked (M033) : aucune mutation client sur les compteurs ; toutes via RPCs `SECURITY DEFINER`.
- `brain_transactions` append-only via RPCs uniquement.
- `subscriptions` RLS-locked (M032) — écriture exclusive via webhook RevenueCat avec signature vérifiée.
- Aucun secret côté app : OpenAI key dans EF, RevenueCat public key uniquement côté client.
- Aucun stockage local de données business critiques sans miroir serveur.

---

## 22. Conformité Apple / Google

- App Store : règles 1.1 (objectionable content), 2.1 (app completeness), 3.1.1 (in-app purchase), 4.7 (HTML5/WKWebView non utilisé), 5.1.1 (data collection consent) — toutes respectées.
- Google Play : politiques équivalentes (Families, Play Pass non visé).
- Pas de gambling, pas de crypto, pas de NSFW, pas de mécaniques de loot box (les coffres Aventure sont déterministes, pas de RNG monétisé).

---

## 23. Internationalisation

- Détecteur de locale au boot (`getLocaleTag()` from Expo Localization).
- Fallback `en` si la langue détectée n'est pas FR/EN.
- Switch manuel possible : `Réglages → Préférences d'apprentissage → Langue`.
- Persistance via AsyncStorage + miroir `profiles.language`.

---

## 24. Évolutions futures (roadmap)

- **V17** : Espagnol + Allemand actifs.
- **V17** : 3 mondes supplémentaires (Archives du Temps, Cité Nocturne, Labo des Idées).
- **V18** : Push remote (APNs/FCM) via Expo Push Service.
- **V18** : Social léger (classement amis sur défi du jour) — sous réserve de décision produit.
- **V19** : Mode pro (équipes / classes) — exploration en cours.

---

**Fin du doc.** À mettre à jour à chaque vague majeure. Pour usage CGU/RGPD : extraire §13 (données collectées), §14 (partage tiers), §15 (droits user), §16 (mineurs), §18 (achats).
