import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={prefix || "/"} className="flex items-center gap-2 font-semibold">
              <Image
                src="/images/logo-revizio.webp"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-contain"
              />
              <span className="text-lg text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-muted">
              {t.meta.homeDescription}
            </p>
            <p className="mt-4 text-xs text-text-muted">{t.footer.iosAvailable}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.productHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={prefix || "/"}>
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <a
                  className="text-text-muted hover:text-ink"
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.nav.download}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.helpHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/support`}>
                  {t.footer.support}
                </Link>
              </li>
              <li>
                <Link
                  className="text-text-muted hover:text-ink"
                  href={`${prefix}/delete-account`}
                >
                  {t.footer.deleteAccount}
                </Link>
              </li>
              <li>
                <a
                  className="text-text-muted hover:text-ink"
                  href={`mailto:${site.supportEmail}`}
                >
                  {t.footer.contactSupport}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              {t.footer.legalHeading}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/privacy`}>
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-ink" href={`${prefix}/terms`}>
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalEntity} — {t.footer.rights}
          </p>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </footer>
  );
}
