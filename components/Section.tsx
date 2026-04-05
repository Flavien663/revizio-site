import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, description, children, id }: Props) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-3 text-text-secondary">{description}</p>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
