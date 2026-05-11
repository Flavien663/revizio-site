import type { Lang } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
