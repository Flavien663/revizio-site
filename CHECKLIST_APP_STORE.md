# Checklist App Store Connect — URLs Revizio

## URLs à renseigner

| Champ App Store Connect | URL |
|---|---|
| Marketing URL | `https://revizioapp.com/` |
| Privacy Policy URL | `https://revizioapp.com/privacy` |
| Support URL | `https://revizioapp.com/support` |
| Terms (URL complémentaire) | `https://revizioapp.com/terms` |
| Suppression de compte | `https://revizioapp.com/delete-account` |

Version EN disponible sur `/en` (toggle FR ↔ EN dans le footer).

## À vérifier avant soumission

- [ ] Domaine `revizioapp.com` actif et en HTTPS
- [ ] Toutes les URLs ci-dessus renvoient 200
- [ ] `support@revizioapp.com` valide et surveillé (délai annoncé : 3 jours ouvrés)
- [ ] `LEGAL_ENTITY` et `LEGAL_ADDRESS` confirmés dans `lib/site.ts`
- [ ] `appStoreUrl` pointe bien vers la fiche app publiée (URL actuelle : `id6761366726`)
- [ ] `lastUpdated` à jour sur `/privacy`, `/terms`, `/delete-account`
- [ ] Suppression de compte initiable depuis l'app (Réglages → Mon compte → Supprimer)
- [ ] Page `/delete-account` cohérente avec la procédure réelle dans l'app
- [ ] Restauration des achats disponible dans l'app (Réglages → Restaurer mes achats)
- [ ] Distinction abonnement / packs cerveaux claire dans `/terms` et la home (`#plans`)
- [ ] FR + EN testés sur les 10 routes
- [ ] `sitemap.xml` accessible et liste 10 URLs avec hreflang
- [ ] Pas de référence à l'ancien produit (Premium/Max, 3 tiers, etc.)
