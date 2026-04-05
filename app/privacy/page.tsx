import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Revizio : données collectées, finalités du traitement, sous-traitants, droits des utilisateurs, durées de conservation.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Revizio attache de l’importance à la protection des données personnelles. Cette Politique de confidentialité explique quelles données peuvent être collectées lorsque vous utilisez l’application mobile Revizio, le site web associé et les services liés, pourquoi elles sont utilisées, avec qui elles peuvent être partagées, combien de temps elles peuvent être conservées, et quels sont vos droits."
    >
      <h2>1. Introduction</h2>
      <p>
        La présente Politique s’applique à l’application mobile Revizio, au site
        associé accessible à l’adresse {site.domain} et aux services qui en dépendent.
        Elle est susceptible d’évoluer. La version en vigueur est celle publiée sur cette page.
      </p>

      <h2>2. Responsable du traitement</h2>
      <ul>
        <li><strong>Nom légal :</strong> {site.legalEntity}</li>
        <li><strong>Forme sociale :</strong> {site.legalForm}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
        <li><strong>Email privacy :</strong> {site.privacyEmail}</li>
        <li><strong>Email support :</strong> {site.supportEmail}</li>
        <li><strong>Pays d’établissement :</strong> {site.legalCountry}</li>
      </ul>

      <h2>3. Données susceptibles d’être collectées</h2>
      <p>
        Selon votre utilisation du service, les données suivantes peuvent être collectées :
      </p>
      <ul>
        <li>Données de compte et identifiants techniques, dont l’identifiant utilisateur interne.</li>
        <li>Adresse email associée au compte.</li>
        <li>Informations d’authentification transmises par Apple ou Google lors de la connexion.</li>
        <li>Informations relatives aux achats, abonnements et restaurations traitées via les boutiques d’applications.</li>
        <li>Données d’usage dans l’application : matières, chapitres, sessions, historique de révision.</li>
        <li>Contenus saisis par l’utilisateur dans l’application (texte, images importées pour un scan, etc.).</li>
        <li>Messages envoyés au support.</li>
        <li>Données de diagnostic, de plantage ou de performance, lorsqu’elles sont collectées.</li>
        <li>Données liées à la suppression de compte.</li>
      </ul>

      <h2>4. Finalités du traitement</h2>
      <ul>
        <li>Création et gestion du compte.</li>
        <li>Authentification de l’utilisateur.</li>
        <li>Fourniture des fonctionnalités de révision.</li>
        <li>Synchronisation et sauvegarde des données.</li>
        <li>Gestion des abonnements et achats intégrés.</li>
        <li>Prévention de la fraude et sécurité du service.</li>
        <li>Assistance utilisateur.</li>
        <li>Amélioration du produit.</li>
        <li>Respect des obligations légales applicables.</li>
        <li>Traitement des demandes de suppression de compte.</li>
      </ul>

      <h2>5. Bases légales</h2>
      <p>Les traitements reposent selon le cas sur :</p>
      <ul>
        <li>L’exécution du contrat entre l’utilisateur et l’éditeur.</li>
        <li>L’intérêt légitime de l’éditeur à fournir, sécuriser et améliorer le service.</li>
        <li>Le respect d’obligations légales.</li>
        <li>Le consentement de l’utilisateur, lorsqu’il est requis.</li>
      </ul>

      <h2>6. Prestataires et sous-traitants</h2>
      <p>
        Pour fonctionner, Revizio peut faire appel à des prestataires traitant certaines données pour le compte de l’éditeur :
      </p>
      <ul>
        <li><strong>Supabase</strong> — base de données et infrastructure backend.</li>
        <li><strong>RevenueCat</strong> — gestion des abonnements et achats intégrés.</li>
        <li><strong>Apple</strong> — authentification et paiements In-App.</li>
        <li><strong>Google</strong> — authentification et paiements In-App.</li>
        <li>Hébergeur du site web.</li>
        <li>Outils d’analytics ou de crash reporting, lorsqu’ils sont utilisés.</li>
        <li>Prestataire email ou support, lorsqu’il est utilisé.</li>
      </ul>
      <p>
        <strong>Nous ne vendons pas vos données personnelles à des annonceurs.</strong>
      </p>

      <h2>7. Transferts internationaux</h2>
      <p>
        Certaines données peuvent être traitées hors du pays de résidence de l’utilisateur,
        en fonction des prestataires utilisés. Lorsque la loi l’exige, des garanties contractuelles
        appropriées sont mises en place pour encadrer ces transferts.
      </p>

      <h2>8. Durées de conservation</h2>
      <ul>
        <li><strong>Données de compte :</strong> pendant la durée du compte, puis pour une durée limitée d’archivage.</li>
        <li><strong>Données de support :</strong> durée nécessaire au traitement de la demande, puis archivage limité.</li>
        <li><strong>Données de facturation / obligations légales :</strong> selon les obligations applicables.</li>
        <li><strong>Logs techniques :</strong> durée limitée.</li>
        <li><strong>Sauvegardes :</strong> durée limitée.</li>
      </ul>

      <h2>9. Droits des utilisateurs</h2>
      <p>Vous disposez notamment des droits suivants :</p>
      <ul>
        <li>Droit d’accès.</li>
        <li>Droit de rectification.</li>
        <li>Droit de suppression.</li>
        <li>Droit à la limitation du traitement.</li>
        <li>Droit d’opposition.</li>
        <li>Droit à la portabilité, lorsque applicable.</li>
        <li>Droit de retirer son consentement, lorsque applicable.</li>
        <li>Droit d’introduire une réclamation auprès d’une autorité de contrôle compétente.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à {site.privacyEmail}.
      </p>

      <h2>10. Suppression de compte</h2>
      <p>
        Vous pouvez demander ou initier la suppression de votre compte depuis l’application.
        Certaines données peuvent être conservées si la loi l’impose. D’autres peuvent subsister
        temporairement dans des sauvegardes ou journaux techniques pendant une durée limitée.
        L’accès aux services peut être perdu après suppression. Voir la page{" "}
        <a href="/delete-account">Suppression de compte</a> pour les détails.
      </p>

      <h2>11. Enfants et mineurs</h2>
      <p>
        Le service n’est pas conçu spécifiquement comme un service « Made for Kids ».
        Si un mineur utilise le service, cela doit se faire sous la responsabilité de son
        représentant légal lorsque la loi l’exige.
      </p>

      <h2>12. Sécurité</h2>
      <p>
        Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger
        les données (chiffrement en transit, contrôle d’accès, journalisation). Aucun système n’étant
        infaillible, l’éditeur ne peut garantir une sécurité absolue.
      </p>

      <h2>13. Évolution de la politique</h2>
      <p>
        La présente Politique peut être mise à jour pour refléter des évolutions du service ou du
        cadre légal. La version applicable est celle publiée sur cette page, avec la date de dernière
        mise à jour affichée plus haut.
      </p>

      <h2>14. Contact</h2>
      <ul>
        <li><strong>Email privacy :</strong> {site.privacyEmail}</li>
        <li><strong>Email support :</strong> {site.supportEmail}</li>
        <li><strong>Adresse postale :</strong> {site.legalAddress}</li>
      </ul>
    </LegalLayout>
  );
}
