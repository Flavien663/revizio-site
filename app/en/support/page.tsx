import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SupportBody } from "@/components/legal/SupportBody";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.supportTitle,
  description: t.support.intro,
  alternates: {
    canonical: "/en/support",
    languages: { "fr-FR": "/support", "en-US": "/en/support" },
  },
};

export default function SupportPageEn() {
  return (
    <SiteShell lang="en">
      <SupportBody lang="en" />
    </SiteShell>
  );
}
