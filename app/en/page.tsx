import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { HomeBody } from "@/components/HomeBody";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
  openGraph: {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    url: "/en",
    locale: "en_US",
  },
};

export default function HomePageEn() {
  return (
    <SiteShell lang="en">
      <HomeBody lang="en" />
    </SiteShell>
  );
}
