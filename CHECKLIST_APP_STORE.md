# Checklist App Store Connect — URLs Revizio

## URLs à renseigner

| Champ App Store Connect | URL |
|---|---|
| Marketing URL | `https://DOMAIN_NAME/` |
| Privacy Policy URL | `https://DOMAIN_NAME/privacy` |
| Support URL | `https://DOMAIN_NAME/support` |
| Terms (URL complémentaire) | `https://DOMAIN_NAME/terms` |
| Suppression de compte (URL complémentaire) | `https://DOMAIN_NAME/delete-account` |

## À vérifier avant soumission

- [ ] Domaine actif et en HTTPS
- [ ] Toutes les URLs ci-dessus renvoient 200
- [ ] `DOMAIN_NAME` remplacé dans `lib/site.ts`
- [ ] `SUPPORT_EMAIL` et `PRIVACY_EMAIL` valides et surveillés
- [ ] `LEGAL_ENTITY_NAME` et `LEGAL_ADDRESS` renseignés
- [ ] `APP_STORE_URL` pointe bien vers la fiche app une fois publiée
- [ ] `LAST_UPDATED` à jour sur `/privacy` et `/terms`
- [ ] Suppression de compte initiable depuis l’app
- [ ] Page `/delete-account` cohérente avec la procédure réelle
- [ ] Restauration des achats disponible dans l’app
- [ ] Distinction abonnement / packs claire partout
