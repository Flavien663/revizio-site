import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PrivacyBody } from "@/components/legal/PrivacyBody";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.privacyTitle,
  description: t.privacy.intro,
  alternates: {
    canonical: "/en/privacy",
    languages: { "fr-FR": "/privacy", "en-US": "/en/privacy" },
  },
};

export default function PrivacyPageEn() {
  return (
    <SiteShell lang="en">
      <PrivacyBody lang="en" />
    </SiteShell>
  );
}
