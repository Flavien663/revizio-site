import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Suppression de compte",
  description:
    "Comment supprimer son compte Revizio : procédure dans l’application, informations conservées, contact en cas de blocage.",
};

export default function DeleteAccountPage() {
  return (
    <div className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-prose">
        <p className="eyebrow mb-3">Compte</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Suppression de compte
        </h1>
        <p className="mt-4 text-text-secondary">
          Vous pouvez initier la suppression de votre compte Revizio directement depuis l’application.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Procédure</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-secondary">
            <li>Ouvrez Revizio.</li>
            <li>Accédez à Paramètres.</li>
            <li>Ouvrez la section Compte.</li>
            <li>Sélectionnez « Supprimer mon compte ».</li>
            <li>Suivez les étapes de confirmation.</li>
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-base font-semibold">Ce que la suppression entraîne</h2>
          <p className="mt-3 text-sm text-text-secondary">
            La suppression du compte entraîne la fermeture de l’accès au service et la suppression
            ou l’anonymisation des données associées, sous réserve des obligations légales, de
            sécurité ou d’archivage limité.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-base font-semibold">Précision</h2>
          <p className="mt-3 text-sm text-text-secondary">
            Certaines informations peuvent être conservées temporairement dans des sauvegardes
            ou journaux techniques pendant une durée limitée lorsque cela est nécessaire.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Besoin d’aide ?</h2>
          <p className="mt-3 text-text-secondary">
            Si vous ne pouvez plus accéder à votre compte, contactez :{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-primary hover:text-primary-dark underline underline-offset-2"
            >
              {site.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
