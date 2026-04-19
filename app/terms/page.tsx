import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description:
    "Conditions d’utilisation de Revizio : accès au service, comptes, offres Free/Premium/Max, économie de cerveaux, packs, outils IA, responsabilité.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Conditions d’utilisation"
      intro="Ces conditions encadrent l’utilisation de Revizio, de l’application mobile, du site associé et des services qui en dépendent. En achetant un abonnement ou un pack via l’App Store ou Google Play, les règles des plateformes concernées s’appliquent également."
    >
      <h2>1. Objet</h2>
      <p>
        Revizio est une application mobile d’aide à l’apprentissage et à la révision, qui propose à l’utilisateur d’organiser des sujets, planifier des sessions, utiliser des outils assistés par IA et des mini-jeux. Les présentes conditions encadrent l’accès et l’utilisation du service.
      </p>

      <h2>2. Éditeur</h2>
      <ul>
        <li><strong>Nom :</strong> {site.legalEntity}</li>
        <li><strong>Forme :</strong> {site.legalForm}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
        <li><strong>Support :</strong> {site.supportEmail}</li>
        <li><strong>Contact légal :</strong> {site.privacyEmail}</li>
        <li><strong>Pays :</strong> {site.legalCountry}</li>
      </ul>

      <h2>3. Acceptation des conditions</h2>
      <p>
        L’utilisation du service implique l’acceptation pleine et entière des présentes conditions. Si tu n’acceptes pas ces conditions, tu ne dois pas utiliser le service.
      </p>

      <h2>4. Accès au service</h2>
      <ul>
        <li>La création d’un compte est possible pour bénéficier de l’ensemble du service.</li>
        <li>L’authentification peut s’effectuer via Apple, Google, ou un code à 6 chiffres envoyé par email. Un mode invité est proposé.</li>
        <li>Tu es responsable de l’exactitude des informations fournies et de la préservation de tes identifiants et accès.</li>
      </ul>

      <h2>5. Description du service</h2>
      <p>Revizio propose notamment :</p>
      <ul>
        <li>L’organisation de l’apprentissage autour de sujets, chapitres et sessions.</li>
        <li>Un planning de travail avec calendrier mensuel et séances planifiées.</li>
        <li>Des outils assistés par IA : Mémo visuel, Mémo structuré, Quiz, Examen blanc, Rappels intelligents.</li>
        <li>Des mini-jeux pédagogiques : Pendu, Bingo, Mots croisés.</li>
        <li>Un système de progression (niveaux, séries, historique).</li>
        <li>Un système de parrainage.</li>
      </ul>
      <p>
        Certaines fonctionnalités sont disponibles uniquement dans certaines offres. L’accès à une fonctionnalité dépend de l’offre active au moment de l’utilisation.
      </p>

      <h2>6. Offres</h2>
      <ul>
        <li>
          <strong>Free</strong> — accès permanent et gratuit à un socle : deux sujets maximum, cinq chapitres par sujet, les trois mini-jeux, le planning, les récompenses gratuites, la progression.
        </li>
        <li>
          <strong>Premium</strong> (3,99 €/mois ou 29,99 €/an) — sujets et chapitres illimités, 50 cerveaux par mois, accès aux outils Mémo visuel et Quiz, tarif dégressif sur les mini-jeux.
        </li>
        <li>
          <strong>Max</strong> (7,99 €/mois ou 59,99 €/an) — tout Premium, 150 cerveaux par mois, accès aux outils Mémo structuré, Examen blanc et Rappels intelligents, planning calé sur l’échéance et tarif le plus avantageux sur les mini-jeux.
        </li>
      </ul>
      <p>
        Les tarifs peuvent varier selon la région et la boutique d’applications. Le détail des fonctionnalités peut évoluer et fait foi dans sa version en vigueur.
      </p>

      <h2>7. Abonnements</h2>
      <ul>
        <li>Les abonnements sont souscrits et gérés via l’App Store ou Google Play.</li>
        <li>Sauf résiliation dans le délai prévu par la plateforme, l’abonnement se renouvelle automatiquement à l’échéance au tarif en vigueur.</li>
        <li>La résiliation et la gestion de l’abonnement s’effectuent depuis les réglages de ton compte Apple ou Google.</li>
        <li>La restauration des achats est accessible depuis l’application.</li>
        <li>Les remboursements relèvent de la politique de la plateforme concernée (Apple, Google). {site.legalEntity} ne traite pas directement les remboursements des achats réalisés sur ces plateformes.</li>
        <li>L’accès aux fonctionnalités payantes prend fin à l’échéance en cas de non-renouvellement.</li>
      </ul>

      <h2>8. Économie de cerveaux</h2>
      <ul>
        <li>Les cerveaux sont une unité d’usage interne à l’application. Ils servent à lancer les outils IA.</li>
        <li>Les cerveaux n’ont <strong>aucune valeur monétaire</strong>, ne sont pas remboursables en euros, ne peuvent pas être échangés ni transférés.</li>
        <li>Le plan actif décide des outils auxquels tu as accès. Les cerveaux décident du nombre d’utilisations que tu peux te permettre.</li>
        <li>Les cerveaux offerts chaque mois avec un abonnement actif s’accumulent d’un mois sur l’autre s’ils ne sont pas consommés.</li>
        <li>Les cerveaux gagnés par récompense (onboarding, connexion quotidienne, séries, parrainage) obéissent aux mêmes règles.</li>
      </ul>

      <h2>9. Packs de cerveaux</h2>
      <ul>
        <li>Les packs de cerveaux sont des achats intégrés ponctuels qui ajoutent des cerveaux à ton compteur.</li>
        <li>Un pack <strong>ne débloque jamais un accès</strong>. Il ne remplace pas un abonnement. Acheter un pack en Free ne donne pas accès aux outils Premium ou Max.</li>
        <li>Les packs sont définitifs une fois activés ; un remboursement éventuel relève de la politique de la boutique concernée.</li>
      </ul>

      <h2>10. Parrainage</h2>
      <ul>
        <li>Un code de parrainage unique au format REV-XXXXX est attribué automatiquement à chaque compte.</li>
        <li>Quand un filleul complète sa première séance valide de révision (durée ≥ 10 minutes), le parrain et le filleul reçoivent chacun +5 cerveaux.</li>
        <li>Le parrainage ne donne droit à aucune rémunération monétaire ni avantage commercial en dehors des cerveaux app.</li>
      </ul>

      <h2>11. Paiement</h2>
      <ul>
        <li>Les paiements sont traités par l’App Store ou Google Play selon la plateforme utilisée.</li>
        <li>Les prix affichés incluent les taxes applicables et peuvent varier selon la région.</li>
        <li>L’éditeur ne collecte pas directement tes données bancaires lorsque l’achat est traité par une plateforme d’applications.</li>
      </ul>

      <h2>12. Outils assistés par IA</h2>
      <ul>
        <li>Certaines fonctionnalités s’appuient sur des systèmes automatisés et sur l’IA générative.</li>
        <li>Les contenus générés peuvent être inexacts, incomplets ou inadaptés à ton cours officiel.</li>
        <li><strong>Il t’appartient de relire, vérifier et exercer ton jugement.</strong> Compare toujours avec tes cours officiels.</li>
        <li>Revizio ne garantit pas l’exactitude, l’exhaustivité ou l’adéquation des contenus générés à un objectif spécifique.</li>
        <li>L’IA constitue une aide à la révision, non un conseil professionnel ni une garantie de réussite à un examen.</li>
      </ul>

      <h2>13. Contenus et propriété intellectuelle</h2>
      <ul>
        <li>La marque Revizio, l’application, ses éléments visuels, ses textes, ses mascottes et sa base logicielle sont protégés par les droits de propriété intellectuelle applicables.</li>
        <li>Tu conserves les droits sur les contenus que tu soumets à l’application (photos de cours, textes saisis).</li>
        <li>Tu accordes à {site.legalEntity} les droits strictement nécessaires à l’exécution du service sur les contenus que tu transmets (stockage, génération, restitution).</li>
        <li>Les contenus générés par l’IA à partir de tes sujets peuvent être consultés, exportés, supprimés et réutilisés par toi dans un cadre personnel.</li>
        <li>Toute copie, revente, extraction massive ou exploitation non autorisée du service ou de ses contenus est interdite.</li>
      </ul>

      <h2>14. Obligations de l’utilisateur</h2>
      <ul>
        <li>Usage licite, conforme à l’ordre public et aux présentes conditions.</li>
        <li>Pas d’atteinte au fonctionnement du service ou à sa sécurité.</li>
        <li>Pas d’usage frauduleux ni de manipulation des mécaniques de récompense ou de parrainage.</li>
        <li>Pas d’envoi de contenus illicites ou portant atteinte aux droits de tiers.</li>
        <li>Tu es responsable des contenus que tu importes ou saisis dans l’application.</li>
      </ul>

      <h2>15. Disponibilité et évolution</h2>
      <ul>
        <li>Le service est fourni « en l’état », sous réserve d’améliorations, de maintenance et d’indisponibilités ponctuelles.</li>
        <li>Aucune garantie de disponibilité continue absolue n’est offerte.</li>
        <li>L’éditeur peut modifier, suspendre ou faire évoluer certaines fonctionnalités.</li>
      </ul>

      <h2>16. Résiliation et suppression de compte</h2>
      <ul>
        <li>Tu peux supprimer ton compte depuis l’application (Réglages &gt; Supprimer mon compte).</li>
        <li>La suppression entraîne la fermeture de l’accès au service et la suppression ou l’anonymisation des données associées, sous réserve des obligations légales applicables.</li>
        <li>Un abonnement actif n’est pas annulé automatiquement par la suppression du compte et doit être résilié séparément auprès d’Apple ou Google.</li>
        <li>L’éditeur peut suspendre ou fermer un compte en cas d’usage abusif, frauduleux ou contraire aux présentes conditions.</li>
      </ul>

      <h2>17. Limitation de responsabilité</h2>
      <ul>
        <li>Revizio ne garantit pas la réussite scolaire, professionnelle ou personnelle.</li>
        <li>Revizio ne garantit pas l’absence totale d’erreurs dans les contenus générés.</li>
        <li>Dans la limite autorisée par la loi, l’éditeur n’est pas responsable des dommages indirects résultant de l’utilisation du service.</li>
        <li>L’éditeur n’est pas responsable des décisions prises exclusivement sur la base de contenus générés par l’IA.</li>
        <li>Aucune stipulation ne saurait exclure les droits impératifs du consommateur prévus par la loi applicable.</li>
      </ul>

      <h2>18. Droit de rétractation (biens numériques)</h2>
      <p>
        Conformément à la législation applicable aux biens numériques dont la fourniture commence immédiatement, tu reconnais que l’exécution des services (notamment la consommation d’un outil IA ou l’activation d’une offre) peut débuter dès l’achat ou la souscription, avec ton accord exprès, ce qui entraîne la renonciation au droit de rétractation dans cette mesure.
      </p>

      <h2>19. Modification des conditions</h2>
      <p>
        Les présentes conditions peuvent être mises à jour. Tu en seras informé par tout moyen approprié lorsque la loi le requiert. La poursuite de l’utilisation du service vaut acceptation des conditions mises à jour.
      </p>

      <h2>20. Droit applicable et juridiction</h2>
      <ul>
        <li><strong>Droit applicable :</strong> droit français.</li>
        <li><strong>Juridiction compétente :</strong> tribunaux compétents du ressort du siège de l’éditeur, sous réserve des règles impératives applicables aux consommateurs qui peuvent saisir la juridiction de leur domicile.</li>
      </ul>

      <h2>21. Contact</h2>
      <ul>
        <li><strong>Support :</strong> {site.supportEmail}</li>
        <li><strong>Contact légal :</strong> {site.privacyEmail}</li>
        <li><strong>Adresse :</strong> {site.legalAddress}</li>
      </ul>
    </LegalLayout>
  );
}
