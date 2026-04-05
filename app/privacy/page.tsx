import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Revizio : données collectées, finalités, sous-traitants, droits utilisateurs.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Cette page décrit comment Revizio traite les données personnelles dans le cadre de l’application mobile et du site."
    >
      <h2>1. Éditeur et responsable du traitement</h2>
      <p>
        L’application Revizio est éditée par {site.legalEntity}, dont l’adresse est {site.legalAddress}.
        Pour toute question relative à la protection des données, le contact est : {site.privacyEmail}.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons uniquement les données nécessaires au bon fonctionnement du service :</p>
      <ul>
        <li>Données de compte : identifiants fournis via Apple Auth ou Google Auth.</li>
        <li>Données d’utilisation : cours, chapitres, sessions, progression, historique.</li>
        <li>Données liées aux abonnements et achats : gérées via RevenueCat et les stores Apple / Google.</li>
        <li>Données techniques minimales : informations de diagnostic, journalisation d’erreurs.</li>
      </ul>

      <h2>3. Finalités</h2>
      <ul>
        <li>Fournir et faire fonctionner l’application.</li>
        <li>Gérer les abonnements et achats.</li>
        <li>Assurer la sécurité, prévenir les abus, corriger les bugs.</li>
        <li>Répondre aux demandes de support.</li>
      </ul>

      <h2>4. Sous-traitants et prestataires</h2>
      <ul>
        <li><strong>Supabase</strong> — stockage et base de données.</li>
        <li><strong>RevenueCat</strong> — gestion des abonnements et achats.</li>
        <li><strong>Apple</strong> — authentification, paiements In-App.</li>
        <li><strong>Google</strong> — authentification, paiements In-App.</li>
        <li>Fournisseurs d’API IA utilisés par les outils de révision.</li>
      </ul>
      <p>
        Ces prestataires traitent uniquement les données nécessaires à leur service et dans le respect de leurs propres engagements de sécurité.
      </p>

      <h2>5. Cookies et analytics</h2>
      <p>
        Le site public n’utilise pas de traceurs marketing. L’application mobile peut utiliser des identifiants techniques nécessaires au fonctionnement du service.
      </p>

      <h2>6. Conservation</h2>
      <p>
        Les données sont conservées tant que le compte est actif. Elles sont supprimées ou anonymisées à la suppression du compte, sous réserve d’obligations légales de conservation.
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Des mesures techniques et organisationnelles raisonnables sont mises en place pour protéger les données (chiffrement en transit, contrôle d’accès, journalisation).
      </p>

      <h2>8. Droits des utilisateurs</h2>
      <p>
        Conformément à la réglementation applicable, chaque utilisateur dispose notamment des droits suivants : accès, rectification, suppression, opposition, limitation, portabilité.
        Les demandes peuvent être adressées à {site.privacyEmail}.
      </p>

      <h2>9. Suppression de compte</h2>
      <p>
        La suppression peut être initiée directement depuis l’application. Voir également la page <a href="/delete-account">Suppression de compte</a>.
      </p>

      <h2>10. Mise à jour</h2>
      <p>
        Cette politique peut évoluer. La version en vigueur est celle publiée sur cette page.
      </p>
    </LegalLayout>
  );
}
