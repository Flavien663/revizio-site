import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function PrivacyBody({ lang }: { lang: Lang }) {
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
          {t.meta.privacyTitle}
        </h1>
        <p className="mt-4 text-sm text-text-muted">
          {t.legal.lastUpdated(site.lastUpdated)}
        </p>
        <p className="mt-8">{t.privacy.intro}</p>

        <h2>{t.privacy.controllerHeading}</h2>
        <p>{t.privacy.controllerBody}</p>

        <h2>{t.privacy.scopeHeading}</h2>
        <p>{t.privacy.scopeBody}</p>

        <h2>{t.privacy.dataCollectedHeading}</h2>
        <ul>
          {t.privacy.dataCollectedItems.map((it) => (
            <li key={it.title}>
              <strong>{it.title} —</strong> {it.body}
            </li>
          ))}
        </ul>

        <h2>{t.privacy.dataNotCollectedHeading}</h2>
        <ul>
          {t.privacy.dataNotCollectedItems.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>

        <h2>{t.privacy.purposesHeading}</h2>
        <ul>
          {t.privacy.purposesItems.map((it) => (
            <li key={it.title}>
              <strong>{it.title} —</strong> {it.body}
            </li>
          ))}
        </ul>

        <h2>{t.privacy.processorsHeading}</h2>
        <ul>
          {t.privacy.processorsItems.map((it) => (
            <li key={it.name}>
              <strong>{it.name} —</strong> {it.purpose}
            </li>
          ))}
        </ul>

        <h2>{t.privacy.storageHeading}</h2>
        <p>{t.privacy.storageBody}</p>

        <h2>{t.privacy.transfersHeading}</h2>
        <p>{t.privacy.transfersBody}</p>

        <h2>{t.privacy.retentionHeading}</h2>
        <p>{t.privacy.retentionBody}</p>

        <h2>{t.privacy.rightsHeading}</h2>
        <ul>
          {t.privacy.rightsItems.map((it) => (
            <li key={it.title}>
              <strong>{it.title} —</strong> {it.body}
            </li>
          ))}
        </ul>

        <h2>{t.privacy.minorsHeading}</h2>
        <p>{t.privacy.minorsBody}</p>

        <h2>{t.privacy.securityHeading}</h2>
        <p>{t.privacy.securityBody}</p>

        <h2>{t.privacy.changesHeading}</h2>
        <p>{t.privacy.changesBody}</p>

        <h2>{t.privacy.contactHeading}</h2>
        <p>{t.privacy.contactBody(site.privacyEmail)}</p>
      </div>
    </article>
  );
}
