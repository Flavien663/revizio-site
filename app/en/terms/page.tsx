import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { TermsBody } from "@/components/legal/TermsBody";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.termsTitle,
  description: t.terms.intro,
  alternates: {
    canonical: "/en/terms",
    languages: { "fr-FR": "/terms", "en-US": "/en/terms" },
  },
};

export default function TermsPageEn() {
  return (
    <SiteShell lang="en">
      <TermsBody lang="en" />
    </SiteShell>
  );
}
