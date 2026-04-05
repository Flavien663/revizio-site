import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description:
    "Conditions d’utilisation de Revizio : accès, comptes, plans, paiements, résiliation, limites d’usage.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Conditions d’utilisation"
      intro="Ces conditions encadrent l’utilisation de l’application Revizio et du site."
    >
      <h2>1. Objet</h2>
      <p>
        Revizio est une application mobile de révision qui permet de structurer ses cours, planifier son travail et utiliser des outils assistés par IA dédiés à la révision.
      </p>

      <h2>2. Accès au service</h2>
      <p>
        L’accès nécessite un appareil compatible et une connexion internet. Certaines fonctionnalités sont accessibles sans abonnement, d’autres sont réservées aux abonnés.
      </p>

      <h2>3. Comptes</h2>
      <p>
        Un compte est créé via Apple Auth ou Google Auth. L’utilisateur est responsable de la sécurité de son compte et des actions qui y sont réalisées.
      </p>

      <h2>4. Plans Free, Premium, Max</h2>
      <ul>
        <li><strong>Free</strong> — accès limité (2 cours, 5 chapitres par cours, sessions illimitées, outils de base).</li>
        <li><strong>Premium</strong> — cours et chapitres illimités, 50 cerveaux par mois, scan, quiz, fiches, pendu, bingo.</li>
        <li><strong>Max</strong> — tout Premium, 150 cerveaux par mois, examens blancs, mots croisés, notifications intelligentes, planning optimisé.</li>
      </ul>

      <h2>5. Abonnement et packs de cerveaux</h2>
      <p>
        L’abonnement donne accès à des fonctionnalités et à un quota mensuel de cerveaux. Les packs de cerveaux rechargent uniquement la consommation ou du contenu jouable. <strong>Un pack ne débloque jamais l’accès à une fonctionnalité.</strong>
      </p>

      <h2>6. Paiements et renouvellement</h2>
      <p>
        Les abonnements sont facturés via l’App Store ou Google Play. Ils se renouvellent automatiquement sauf résiliation avant la fin de la période. La gestion se fait dans les réglages du compte du store concerné.
      </p>

      <h2>7. Restauration des achats</h2>
      <p>
        La restauration des achats est disponible depuis l’écran d’abonnement de l’application.
      </p>

      <h2>8. Résiliation</h2>
      <p>
        L’abonnement peut être résilié à tout moment depuis les réglages du store. La résiliation prend effet à la fin de la période en cours.
      </p>

      <h2>9. Usage autorisé</h2>
      <p>
        L’utilisateur s’engage à utiliser le service de manière conforme à la loi et à ne pas en détourner l’usage, notamment en évitant tout contenu illicite, toute tentative de contourner les limites techniques ou commerciales, toute utilisation automatisée abusive.
      </p>

      <h2>10. Limites liées à l’IA</h2>
      <p>
        Les outils IA sont des aides à la révision. Ils peuvent contenir des erreurs. L’utilisateur conserve la responsabilité de vérifier et de s’approprier le contenu généré.
      </p>

      <h2>11. Absence de garantie de résultat</h2>
      <p>
        Revizio est un outil de travail. Il n’offre aucune garantie de réussite scolaire ou de résultats académiques.
      </p>

      <h2>12. Disponibilité et responsabilité</h2>
      <p>
        Le service est fourni « tel quel ». {site.legalEntity} met en œuvre des moyens raisonnables pour assurer sa disponibilité mais ne peut garantir une disponibilité ininterrompue.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question : {site.supportEmail}.
      </p>
    </LegalLayout>
  );
}
