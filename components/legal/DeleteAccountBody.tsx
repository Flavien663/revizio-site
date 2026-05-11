import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function DeleteAccountBody({ lang }: { lang: Lang }) {
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
          {t.meta.deleteAccountTitle}
        </h1>
        <p className="mt-4 text-sm text-text-muted">
          {t.legal.lastUpdated(site.lastUpdated)}
        </p>
        <p className="mt-8">{t.deleteAccount.intro}</p>

        <h2>{t.deleteAccount.inAppHeading}</h2>
        <ol>
          {t.deleteAccount.inAppSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p>{t.deleteAccount.inAppRecommended}</p>

        <h2>{t.deleteAccount.emailHeading}</h2>
        <p>{t.deleteAccount.emailBody(site.supportEmail)}</p>
        <p>
          <a href={`mailto:${site.supportEmail}`} className="btn-primary inline-flex no-underline">
            {t.footer.contactSupport}
          </a>
        </p>

        <h2>{t.deleteAccount.deletedHeading}</h2>
        <ul>
          {t.deleteAccount.deletedItems.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>

        <h2>{t.deleteAccount.retainedHeading}</h2>
        <ul>
          {t.deleteAccount.retainedItems.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>

        <h2>{t.deleteAccount.consequencesHeading}</h2>
        <p>{t.deleteAccount.consequencesBody}</p>
      </div>
    </article>
  );
}
