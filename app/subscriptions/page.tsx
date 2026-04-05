import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abonnements et packs",
  description:
    "Comprendre les plans Free, Premium, Max et la différence entre abonnement (accès) et packs de cerveaux (consommation).",
};

const plans = [
  {
    name: "Free",
    items: [
      "2 cours maximum",
      "5 chapitres maximum par cours",
      "Sessions illimitées",
      "Scan de cours et jeu du pendu",
      "Cerveaux selon onboarding, cours et streaks",
      "Après 60 jours : plafond mensuel",
    ],
  },
  {
    name: "Premium",
    items: [
      "Cours et chapitres illimités",
      "Sessions illimitées",
      "50 cerveaux / mois",
      "Scan, quiz, fiches, pendu, bingo",
    ],
  },
  {
    name: "Max",
    items: [
      "Tout Premium",
      "150 cerveaux / mois",
      "Examens blancs, mots croisés",
      "Notifications intelligentes",
      "Planning optimisé",
    ],
  },
];

const packs = [
  { amount: "50 cerveaux", price: "2,99 €" },
  { amount: "125 cerveaux", price: "5,99 €" },
  { amount: "334 cerveaux", price: "12,99 €" },
  { amount: "670 cerveaux", price: "19,99 €" },
];

export default function SubscriptionsPage() {
  return (
    <div className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-3">Abonnements</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Abonnements et packs de cerveaux
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Deux mécaniques différentes. L’abonnement donne accès aux fonctionnalités. Les packs rechargent la consommation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="card">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-xl font-semibold">Packs de cerveaux</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Les packs rechargent uniquement la consommation de cerveaux et le contenu jouable. Ils ne débloquent pas l’accès à une fonctionnalité Premium ou Max.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/40 text-text-secondary">
                <tr>
                  <th className="px-6 py-3 font-medium">Pack</th>
                  <th className="px-6 py-3 font-medium">Prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {packs.map((p) => (
                  <tr key={p.amount}>
                    <td className="px-6 py-3">{p.amount}</td>
                    <td className="px-6 py-3 text-text-secondary">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-base font-semibold">À retenir</h2>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>Abonnement = accès aux fonctionnalités et quota mensuel.</li>
            <li>Pack = recharge de consommation ou contenu jouable.</li>
            <li>Un pack ne remplace jamais un abonnement.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
