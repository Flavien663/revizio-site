import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Suppression de compte",
  description:
    "Comment supprimer son compte Revizio : procédure dans l’app, données concernées, contact en cas de blocage.",
};

export default function DeleteAccountPage() {
  return (
    <div className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Compte</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Suppression de compte
        </h1>
        <p className="mt-4 text-text-secondary">
          Tu peux supprimer ton compte Revizio à tout moment. La procédure principale se fait directement depuis l’application mobile.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Procédure dans l’app</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-secondary">
            <li>Ouvrir Revizio sur ton appareil.</li>
            <li>Aller dans les réglages du compte.</li>
            <li>Choisir « Supprimer mon compte » et confirmer.</li>
          </ol>
          <p className="mt-4 text-sm text-text-secondary">
            Cette page web sert de support complémentaire. L’initiation doit être possible depuis l’application, conformément aux exigences des stores.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Ce qui est supprimé</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-text-secondary">
            <li>Ton profil et tes identifiants associés au compte.</li>
            <li>Tes cours, chapitres, sessions et historique de révision.</li>
            <li>Ton solde de cerveaux et données de progression.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Ce qui peut être conservé</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-text-secondary">
            <li>Données strictement nécessaires au respect d’obligations légales (facturation, sécurité, journaux techniques).</li>
            <li>Données anonymisées ne permettant plus d’identifier l’utilisateur.</li>
          </ul>
          <p className="mt-4 text-sm text-text-secondary">
            Les abonnements sont gérés par l’App Store ou Google Play. La suppression du compte Revizio ne résilie pas automatiquement un abonnement actif. La résiliation se fait depuis les réglages du store.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">En cas de blocage</h2>
          <p className="mt-4 text-text-secondary">
            Si la suppression ne fonctionne pas depuis l’app, contacte le support à{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-primary hover:text-primary-dark underline underline-offset-2"
            >
              {site.supportEmail}
            </a>{" "}
            en précisant l’adresse email associée au compte.
          </p>
        </section>
      </div>
    </div>
  );
}
