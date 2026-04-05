import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description:
    "Conditions d’utilisation de Revizio : accès, comptes, offres Free/Premium/Max, abonnements, packs de cerveaux, IA, responsabilité.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Conditions d’utilisation"
      intro="Ces conditions encadrent l’utilisation de Revizio. En cas d’achat via l’App Store, les règles de facturation et de gestion d’abonnement de la plateforme concernée s’appliquent également."
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions encadrent l’accès et l’utilisation de Revizio, de l’application
        mobile, du site associé et des services qui en dépendent.
      </p>

      <h2>2. Éditeur</h2>
      <ul>
        <li><strong>Nom légal :</strong> {site.legalEntity}</li>
        <li><strong>Forme sociale :</strong> {site.legalForm}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
        <li><strong>Email support :</strong> {site.supportEmail}</li>
        <li><strong>Email légal :</strong> {site.privacyEmail}</li>
        <li><strong>Pays :</strong> {site.legalCountry}</li>
      </ul>

      <h2>3. Acceptation</h2>
      <p>
        L’utilisation du service implique l’acceptation pleine et entière des présentes conditions.
      </p>

      <h2>4. Conditions d’accès</h2>
      <ul>
        <li>La création d’un compte est possible pour accéder au service.</li>
        <li>L’authentification peut s’effectuer via Apple, Google ou email lorsque cela est proposé.</li>
        <li>L’utilisateur est responsable de l’exactitude des informations fournies.</li>
        <li>L’utilisateur doit préserver la confidentialité de ses identifiants et accès.</li>
      </ul>

      <h2>5. Description générale du service</h2>
      <p>
        Revizio est une application mobile d’aide à la révision proposant notamment :
      </p>
      <ul>
        <li>Une organisation de la révision autour des matières, chapitres et sessions.</li>
        <li>Un planning de travail.</li>
        <li>Un historique de révision.</li>
        <li>Des outils assistés par IA.</li>
        <li>Des fonctionnalités variables selon l’offre activée.</li>
      </ul>

      <h2>6. Offres et accès</h2>
      <ul>
        <li><strong>Free</strong> — accès de base, scan inclus.</li>
        <li><strong>Premium</strong> — accès à des fonctionnalités supplémentaires incluant notamment les quiz IA et les fiches IA.</li>
        <li><strong>Max</strong> — accès plus complet incluant notamment les examens blancs, les mots croisés et les notifications intelligentes.</li>
      </ul>
      <p>
        Les fonctionnalités exactes peuvent évoluer. Toute fonctionnalité n’est accessible que
        si elle est réellement incluse dans l’offre active au moment de son utilisation.
      </p>

      <h2>7. Abonnements</h2>
      <ul>
        <li>Les abonnements sont renouvelables automatiquement via l’App Store ou la boutique applicable.</li>
        <li>Les prix sont affichés avant achat.</li>
        <li>Le renouvellement automatique s’applique sauf résiliation selon les règles de la plateforme concernée.</li>
        <li>La gestion et la résiliation s’effectuent depuis le compte Apple (ou équivalent) de l’utilisateur.</li>
        <li>La restauration des achats est disponible depuis l’application.</li>
        <li>
          Aucun remboursement direct n’est pris en charge par l’éditeur lorsque l’achat a été
          effectué via Apple, sous réserve des règles applicables de la plateforme.
        </li>
        <li>L’accès payant prend fin à l’échéance en cas de non-renouvellement.</li>
      </ul>

      <h2>8. Packs de cerveaux</h2>
      <ul>
        <li>Les cerveaux sont une unité de consommation à l’intérieur de l’application.</li>
        <li>Les packs de cerveaux sont des achats intégrés de recharge.</li>
        <li>Ils ne constituent pas un abonnement.</li>
        <li>Ils ne donnent pas accès à Premium ou Max.</li>
        <li>Ils ne remplacent pas un abonnement.</li>
        <li>Leurs conditions d’usage sont précisées dans l’application.</li>
      </ul>

      <h2>9. Paiement</h2>
      <ul>
        <li>Les achats sont gérés par la plateforme de paiement applicable (App Store, Google Play).</li>
        <li>Les prix et taxes dépendent de la boutique et de la région de l’utilisateur.</li>
        <li>
          L’éditeur ne collecte pas directement l’intégralité des données bancaires lorsqu’un
          achat est traité par Apple.
        </li>
      </ul>

      <h2>10. Fonctionnalités assistées par IA</h2>
      <ul>
        <li>Certaines fonctionnalités peuvent s’appuyer sur des systèmes automatisés ou assistés par IA.</li>
        <li>Les contenus générés peuvent être inexacts, incomplets ou inadaptés.</li>
        <li>L’utilisateur doit relire, vérifier et exercer son jugement.</li>
        <li>Revizio ne garantit pas l’exactitude absolue des contenus générés.</li>
        <li>L’IA constitue une aide à la révision, non un conseil professionnel ni une garantie de réussite.</li>
      </ul>

      <h2>11. Obligations de l’utilisateur</h2>
      <ul>
        <li>Usage licite du service.</li>
        <li>Pas d’atteinte au fonctionnement du service.</li>
        <li>Pas d’usage frauduleux.</li>
        <li>Pas de partage illicite de contenus.</li>
        <li>Pas d’atteinte aux droits de tiers.</li>
        <li>Pas de tentative d’accès non autorisé.</li>
        <li>Responsabilité sur les contenus importés ou saisis dans l’application.</li>
      </ul>

      <h2>12. Propriété intellectuelle</h2>
      <ul>
        <li>La marque, l’application, les éléments visuels, textes, base logicielle et contenus propres à Revizio sont protégés.</li>
        <li>L’utilisateur conserve les droits sur ses contenus dans la mesure applicable.</li>
        <li>
          L’utilisateur accorde à l’éditeur les droits nécessaires à l’exécution du service sur
          les contenus qu’il transmet.
        </li>
        <li>Toute copie, revente, extraction ou exploitation non autorisée est interdite.</li>
      </ul>

      <h2>13. Disponibilité</h2>
      <ul>
        <li>Le service est fourni en l’état, sous réserve d’améliorations, de maintenance et d’indisponibilités temporaires.</li>
        <li>Aucune garantie de disponibilité continue absolue n’est offerte.</li>
        <li>L’éditeur peut modifier, suspendre ou faire évoluer certaines fonctionnalités.</li>
      </ul>

      <h2>14. Résiliation et suppression de compte</h2>
      <ul>
        <li>L’utilisateur peut supprimer son compte depuis l’application.</li>
        <li>
          La suppression entraîne la fermeture du compte et la suppression ou l’anonymisation
          des données associées, sous réserve des obligations légales et techniques applicables.
        </li>
        <li>
          Certaines informations peuvent être conservées si la loi l’impose ou pour des raisons
          de sécurité, de preuve ou de lutte contre la fraude, pendant une durée limitée.
        </li>
        <li>La suppression du compte peut rendre définitivement inaccessible le contenu associé.</li>
      </ul>

      <h2>15. Limitation de responsabilité</h2>
      <ul>
        <li>Revizio ne garantit pas la réussite scolaire.</li>
        <li>Revizio ne garantit pas l’absence totale d’erreurs.</li>
        <li>
          Dans la mesure permise par la loi, l’éditeur n’est pas responsable des dommages indirects
          résultant de l’utilisation du service.
        </li>
        <li>
          L’éditeur n’est pas responsable des décisions prises exclusivement sur la base de contenus
          générés par l’IA.
        </li>
        <li>Rien dans ces conditions n’exclut les droits impératifs du consommateur.</li>
      </ul>

      <h2>16. Modification des conditions</h2>
      <p>
        Les présentes conditions peuvent être mises à jour. Les utilisateurs en seront informés
        par tout moyen approprié lorsque cela est requis.
      </p>

      <h2>17. Droit applicable et juridiction</h2>
      <ul>
        <li><strong>Droit applicable :</strong> [À COMPLÉTER]</li>
        <li><strong>Juridiction compétente :</strong> [À COMPLÉTER]</li>
        <li>Sous réserve des droits impératifs du consommateur.</li>
      </ul>

      <h2>18. Contact</h2>
      <ul>
        <li><strong>Email support :</strong> {site.supportEmail}</li>
        <li><strong>Email légal :</strong> {site.privacyEmail}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
      </ul>
    </LegalLayout>
  );
}
