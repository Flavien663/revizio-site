import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/privacy", "/terms", "/support", "/delete-account"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of paths) {
    const frUrl = `${site.url}${p || "/"}`;
    const enUrl = `${site.url}/en${p}`;
    const languages = { "fr-FR": frUrl, "en-US": enUrl };

    entries.push({
      url: frUrl,
      lastModified,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1.0 : 0.6,
      alternates: { languages },
    });
    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 0.9 : 0.5,
      alternates: { languages },
    });
  }

  return entries;
}
