import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function TermsBody({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  return (
    <article className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-prose prose-legal">
        <Link
          href={prefix || "/"}
          className="text-sm text-text-muted hover:text-ink no-underline"
        >
          {t.legal.backHome}
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t.meta.termsTitle}
        </h1>
        <p className="mt-4 text-sm text-text-muted">
          {t.legal.lastUpdated(site.lastUpdated)}
        </p>
        <p className="mt-8">{t.terms.intro}</p>

        {t.terms.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.highlight ? <blockquote>{s.body}</blockquote> : <p>{s.body}</p>}
          </section>
        ))}

        <h2>{t.terms.contactHeading}</h2>
        <p>{t.terms.contactBody(site.supportEmail)}</p>
      </div>
    </article>
  );
}
