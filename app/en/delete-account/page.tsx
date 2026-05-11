import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { DeleteAccountBody } from "@/components/legal/DeleteAccountBody";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.deleteAccountTitle,
  description: t.deleteAccount.intro,
  alternates: {
    canonical: "/en/delete-account",
    languages: {
      "fr-FR": "/delete-account",
      "en-US": "/en/delete-account",
    },
  },
};

export default function DeleteAccountPageEn() {
  return (
    <SiteShell lang="en">
      <DeleteAccountBody lang="en" />
    </SiteShell>
  );
}
