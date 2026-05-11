import type { Lang } from "./types";
import { fr } from "./fr";
import { en } from "./en";

export { fr, en };
export type { Lang, Dict, GameKey, ToolKey, WorldKey } from "./types";

const dicts = { fr, en };

export function getDict(lang: Lang) {
  return dicts[lang];
}

export function altLangHref(currentPath: string, currentLang: Lang): { lang: Lang; href: string } {
  if (currentLang === "fr") {
    return { lang: "en", href: "/en" + (currentPath === "/" ? "" : currentPath) };
  }
  const stripped = currentPath.replace(/^\/en/, "") || "/";
  return { lang: "fr", href: stripped };
}
