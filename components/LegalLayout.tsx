import { ReactNode } from "react";
import { site } from "@/lib/site";

type Props = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export function LegalLayout({ title, intro, children }: Props) {
  return (
    <article className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Revizio</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 text-text-secondary">{intro}</p>}
        <p className="mt-3 text-xs text-text-secondary">
          Dernière mise à jour : {site.lastUpdated}
        </p>
        <div className="prose-legal mt-10">{children}</div>
      </div>
    </article>
  );
}
