import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";
import { FaqAccordion } from "@/components/FaqAccordion";

export function SupportBody({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  return (
    <article className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href={prefix || "/"}
          className="text-sm text-text-muted hover:text-ink no-underline"
        >
          {t.legal.backHome}
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t.meta.supportTitle}
        </h1>
        <p className="mt-4 max-w-prose text-text-body">{t.support.intro}</p>

        <section className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card">
          <h2 className="text-lg font-semibold text-ink">{t.support.emailHeading}</h2>
          <p className="mt-3 text-text-body">
            {t.support.emailBody(site.supportEmail, site.supportDelay)}
          </p>
          <a href={`mailto:${site.supportEmail}`} className="mt-4 btn-primary inline-flex">
            {t.footer.contactSupport}
          </a>
        </section>

        <h2 className="mt-14 text-2xl font-semibold text-ink">{t.support.faqHeading}</h2>
        <div className="mt-8 space-y-10">
          {t.support.faqCategories.map((cat) => (
            <div key={cat.name}>
              <p className="eyebrow mb-4">{cat.name}</p>
              <FaqAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
