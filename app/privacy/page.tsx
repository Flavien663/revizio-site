import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Revizio : données collectées, finalités, sous-traitants (Supabase, OpenAI, RevenueCat, Apple, Google, Expo), durées de conservation, droits RGPD.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Revizio attache de l’importance à la protection de tes données. Cette page explique ce qui est collecté quand tu utilises l’application mobile Revizio et le site associé, pourquoi ces données sont utilisées, avec qui elles peuvent être partagées, combien de temps elles sont conservées, et comment tu peux exercer tes droits."
    >
      <h2>1. Introduction</h2>
      <p>
        La présente Politique s’applique à l’application mobile Revizio et au site accessible à l’adresse {site.domain}. Elle peut évoluer — la version en vigueur est toujours celle publiée sur cette page.
      </p>

      <h2>2. Responsable du traitement</h2>
      <ul>
        <li><strong>Nom :</strong> {site.legalEntity}</li>
        <li><strong>Forme :</strong> {site.legalForm}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
        <li><strong>Contact confidentialité :</strong> {site.privacyEmail}</li>
        <li><strong>Contact support :</strong> {site.supportEmail}</li>
        <li><strong>Pays :</strong> {site.legalCountry}</li>
      </ul>

      <h2>3. Données que nous pouvons collecter</h2>
      <p>Selon l’usage que tu fais de Revizio, les données suivantes peuvent être traitées :</p>

      <h3>Données de compte</h3>
      <ul>
        <li>Identifiant utilisateur interne.</li>
        <li>Pseudo que tu as choisi.</li>
        <li>Adresse email si tu te connectes par email ou via Apple / Google.</li>
        <li>Informations d’authentification transmises par Apple ou Google.</li>
        <li>Langue de l’interface et préférence de thème (clair / sombre / système).</li>
      </ul>

      <h3>Données d’onboarding et de profil</h3>
      <ul>
        <li>Objectif d’utilisation (Étudiant ou Curieux).</li>
        <li>Niveau d’étude ou de connaissances déclaré.</li>
        <li>Nombre de jours d’étude par semaine et durée de séance par défaut.</li>
      </ul>

      <h3>Contenus que tu crées dans l’app</h3>
      <ul>
        <li>Sujets, chapitres, dates d’examen, objectifs, niveaux d’importance.</li>
        <li>Photos que tu ajoutes à un sujet (stockage privé).</li>
        <li>Textes que tu saisis pour un scan, une génération IA ou un partage.</li>
        <li>Contenus générés par les outils IA (Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, Pendu, Bingo, Mots croisés).</li>
        <li>Sessions de révision et feedback de fin de séance (ressenti, notes texte).</li>
      </ul>

      <h3>Données de jeu et de progression</h3>
      <ul>
        <li>Solde de cerveaux et historique de transactions (crédits et débits).</li>
        <li>Niveau, séries (streaks), récompenses obtenues.</li>
        <li>Code de parrainage au format REV-XXXXX généré côté serveur.</li>
      </ul>

      <h3>Données d’achat</h3>
      <ul>
        <li>État de l’abonnement (Free / Premium / Max) et échéances.</li>
        <li>Historique d’achats de packs de cerveaux (nombre, dates, source).</li>
        <li>Identifiants de transaction transmis par les boutiques d’applications.</li>
      </ul>

      <h3>Données techniques</h3>
      <ul>
        <li>Jeton de notification push Expo, si tu autorises les notifications.</li>
        <li>Journaux techniques, logs de plantage, métriques de performance (dans la stricte mesure utile à la fiabilité du service).</li>
        <li>Messages que tu envoies au support et l’email depuis lequel ils sont envoyés.</li>
      </ul>

      <h3>Données qui restent sur ton appareil</h3>
      <ul>
        <li>Notes vocales enregistrées à la fin d’une session : elles sont stockées localement (URI <code>file://</code>) et <strong>ne sont pas envoyées à nos serveurs</strong>. Elles ne sont pas synchronisées entre appareils.</li>
      </ul>

      <h2>4. Finalités du traitement</h2>
      <ul>
        <li>Création du compte, authentification, personnalisation de l’expérience.</li>
        <li>Fourniture des fonctionnalités de révision et des outils IA.</li>
        <li>Génération de contenus à partir des sujets que tu proposes.</li>
        <li>Synchronisation et sauvegarde serveur de tes contenus.</li>
        <li>Gestion des abonnements, restaurations et packs de cerveaux.</li>
        <li>Fiabilité, sécurité, prévention de la fraude.</li>
        <li>Assistance utilisateur.</li>
        <li>Amélioration du produit (analyse agrégée d’usage).</li>
        <li>Traitement des demandes de suppression ou de portabilité.</li>
        <li>Respect des obligations légales applicables.</li>
      </ul>

      <h2>5. Bases légales</h2>
      <ul>
        <li><strong>Exécution du contrat</strong> : création de compte, fonctionnement de l’app, gestion des abonnements.</li>
        <li><strong>Intérêt légitime</strong> : sécurité du service, prévention de la fraude, amélioration du produit de façon proportionnée.</li>
        <li><strong>Consentement</strong> : notifications push, éventuels outils d’analytics soumis à consentement.</li>
        <li><strong>Obligations légales</strong> : conservation minimale imposée par la loi (par ex. en matière comptable).</li>
      </ul>

      <h2>6. Sous-traitants et prestataires</h2>
      <p>
        Pour fonctionner, Revizio fait appel à des prestataires qui peuvent traiter certaines données pour notre compte :
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — base de données, stockage des photos ajoutées à un sujet (bucket privé, URLs signées), Edge Functions serveur.
        </li>
        <li>
          <strong>OpenAI</strong> — génération des contenus IA (Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents, jeux). Les prompts envoyés contiennent uniquement ce qui est nécessaire à la génération demandée. Ces données ne sont pas utilisées pour entraîner les modèles OpenAI tiers.
        </li>
        <li>
          <strong>RevenueCat</strong> — vérification et attribution des abonnements et achats intégrés.
        </li>
        <li>
          <strong>Apple</strong> — Sign in with Apple, achats In-App, notifications Apple Push.
        </li>
        <li>
          <strong>Google</strong> — connexion Google, achats In-App Google Play.
        </li>
        <li>
          <strong>Expo</strong> — délivrance des notifications push mobiles (via jeton push).
        </li>
        <li>Hébergeur du site web.</li>
      </ul>
      <p>
        <strong>Nous ne vendons pas tes données à des annonceurs.</strong> Nous ne diffusons pas de publicité dans l’app ni sur le site.
      </p>

      <h2>7. Transferts internationaux</h2>
      <p>
        Certaines données peuvent être traitées hors de l’Union européenne selon les prestataires utilisés (notamment pour la génération IA et les services de paiement). Lorsque c’est requis, des garanties contractuelles appropriées (clauses-types de la Commission européenne) encadrent ces transferts.
      </p>

      <h2>8. Durées de conservation</h2>
      <ul>
        <li><strong>Compte actif</strong> : tant que le compte existe.</li>
        <li><strong>Après suppression du compte</strong> : suppression ou anonymisation dans un délai raisonnable, à l’exception des données conservées pour obligations légales (facturation, sécurité), pendant la durée minimale requise.</li>
        <li><strong>Journaux techniques</strong> : durée limitée (généralement quelques mois).</li>
        <li><strong>Sauvegardes</strong> : rotation courte pour restaurer en cas d’incident.</li>
        <li><strong>Contenus IA supprimés par toi</strong> : effacés de ton historique ; peuvent subsister en sauvegarde le temps d’une rotation.</li>
        <li><strong>Notes vocales</strong> : restent sur ton appareil — non stockées côté serveur.</li>
      </ul>

      <h2>9. Tes droits</h2>
      <p>En application du RGPD, tu disposes des droits suivants :</p>
      <ul>
        <li>Droit d’accès.</li>
        <li>Droit de rectification.</li>
        <li>Droit à l’effacement (suppression du compte ou demande écrite).</li>
        <li>Droit à la limitation du traitement.</li>
        <li>Droit d’opposition.</li>
        <li>Droit à la portabilité, lorsque applicable.</li>
        <li>Droit de retirer ton consentement à tout moment, lorsque le traitement en dépend.</li>
        <li>Droit d’introduire une réclamation auprès d’une autorité de contrôle (en France, la CNIL).</li>
      </ul>
      <p>
        Pour exercer ces droits ou demander une copie de tes données, écris-nous à{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> depuis l’adresse email associée à ton compte.
      </p>

      <h2>10. Suppression de compte</h2>
      <p>
        Tu peux initier la suppression de ton compte directement depuis l’application, dans Réglages &gt; Supprimer mon compte. La procédure est détaillée sur la page{" "}
        <a href="/delete-account">Suppression de compte</a>. Important : un abonnement actif n’est pas résilié automatiquement par la suppression du compte — il doit être résilié séparément dans les réglages de ton compte Apple ou Google.
      </p>

      <h2>11. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger tes données : chiffrement en transit, cloisonnement d’accès (Row Level Security), URLs signées pour les photos, contrôle d’accès serveur. Aucun système n’étant parfait, nous ne pouvons pas garantir une sécurité absolue.
      </p>

      <h2>12. Enfants et mineurs</h2>
      <p>
        Revizio n’est pas un service spécifiquement conçu pour les enfants. Si un mineur utilise le service, cela doit se faire sous la responsabilité de son représentant légal, dans le respect du droit applicable.
      </p>

      <h2>13. Cookies et analytics (site web)</h2>
      <p>
        Le site web revizioapp.com n’utilise pas de traceurs publicitaires. Si des outils de mesure d’audience respectueux de la vie privée sont mis en place ultérieurement, ils feront l’objet d’une information spécifique et, le cas échéant, d’un recueil de consentement.
      </p>

      <h2>14. Évolution de la politique</h2>
      <p>
        Cette Politique peut être mise à jour pour refléter des évolutions du service, des prestataires ou du cadre légal. La version applicable est celle publiée ici, avec la date de dernière mise à jour indiquée plus haut.
      </p>

      <h2>15. Contact</h2>
      <ul>
        <li><strong>Confidentialité :</strong> {site.privacyEmail}</li>
        <li><strong>Support :</strong> {site.supportEmail}</li>
        <li><strong>Adresse postale :</strong> {site.legalAddress}</li>
      </ul>
    </LegalLayout>
  );
}
