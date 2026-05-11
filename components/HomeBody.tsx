import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { StoreButtons } from "@/components/StoreButtons";
import { GameCard } from "@/components/GameCard";
import { WorldCard } from "@/components/WorldCard";
import { ToolCard } from "@/components/ToolCard";
import { PlanCard } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { site } from "@/lib/site";
import { getDict, type Lang, type GameKey, type ToolKey } from "@/lib/i18n";

type Props = { lang: Lang };

const games: Array<{
  color:
    | "quiz"
    | "hangman"
    | "bingo"
    | "crossword"
    | "true-false"
    | "tri"
    | "chrono"
    | "memo";
  key: GameKey;
  src: string;
}> = [
  { color: "quiz", key: "quiz", src: "/images/games/quiz/mascot.webp" },
  { color: "hangman", key: "hangman", src: "/images/games/hangman/mascot.webp" },
  { color: "bingo", key: "bingo", src: "/images/games/bingo/mascot.webp" },
  { color: "crossword", key: "crossword", src: "/images/games/crossword/mascot.webp" },
  { color: "true-false", key: "trueFalse", src: "/images/games/true-false/mascot.webp" },
  { color: "tri", key: "tri", src: "/images/games/tri/mascot.webp" },
  { color: "chrono", key: "chrono", src: "/images/games/chrono/mascot.webp" },
  { color: "memo", key: "memo", src: "/images/games/memo/mascot.webp" },
];

const tools: Array<{ key: ToolKey; isIncluded: boolean }> = [
  { key: "decoder", isIncluded: false },
  { key: "memo", isIncluded: false },
  { key: "exam", isIncluded: false },
  { key: "courseQuiz", isIncluded: false },
  { key: "smartNotifs", isIncluded: false },
  { key: "smartPlan", isIncluded: true },
  { key: "customAdventure", isIncluded: false },
];

const mobileAppLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description: site.description,
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      name: "Free",
    },
    {
      "@type": "Offer",
      price: "5.99",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      name: "Revizio Plus",
    },
  ],
  publisher: { "@type": "Organization", name: site.legalEntity, url: site.url },
  url: site.url,
  image: `${site.url}/opengraph-image`,
};

export function HomeBody({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  return (
    <>
      <Script
        id="ld-mobileapp"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-quiz/15 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-bingo/15 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-memo/12 blur-3xl" />
        </div>
        <div className="container-x relative pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="pill-accent">{t.hero.badge}</span>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
                {t.hero.headlineLine1}
                <br />
                <span className="text-accent-deep">{t.hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-body sm:text-xl">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <StoreButtons size="lg" lang={lang} />
                <Link
                  href={`${prefix}/#games`}
                  className="text-sm font-medium text-text-muted underline-offset-4 hover:text-ink hover:underline"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-accent-soft via-white to-bingo-tint blur-2xl opacity-70"
                />
                <Image
                  src="/images/mascot-hero.webp"
                  alt=""
                  width={560}
                  height={560}
                  sizes="(max-width: 1024px) 70vw, 420px"
                  className="relative mx-auto h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.games.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.games.title}
            </h2>
            <p className="mt-4 text-text-body">{t.games.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((g) => (
              <GameCard
                key={g.key}
                color={g.color}
                name={t.games.items[g.key].name}
                tagline={t.games.items[g.key].tagline}
                cost={t.games.cost}
                mascotSrc={g.src}
                alt={t.games.items[g.key].name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE */}
      <section id="adventure" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.adventure.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.adventure.title}
            </h2>
            <p className="mt-4 text-text-body">{t.adventure.intro}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <WorldCard
              color="culture"
              name={t.adventure.worlds.culture.name}
              tagline={t.adventure.worlds.culture.tagline}
              levelsLabel={t.adventure.levelsLabel}
            />
            <WorldCard
              color="words"
              name={t.adventure.worlds.words.name}
              tagline={t.adventure.worlds.words.tagline}
              levelsLabel={t.adventure.levelsLabel}
            />
            <WorldCard
              color="logic"
              name={t.adventure.worlds.logic.name}
              tagline={t.adventure.worlds.logic.tagline}
              levelsLabel={t.adventure.levelsLabel}
            />
          </div>
          <p className="mt-6 text-center text-sm text-text-muted">{t.adventure.moreSoon}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <span>{t.adventure.starsCaption}</span>
            <span aria-hidden>·</span>
            <span>{t.adventure.chestsCaption}</span>
            <span aria-hidden>·</span>
            <span>{t.adventure.bossCaption}</span>
          </div>
          <p className="mt-6 text-center">
            <span className="inline-flex items-center rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
              {t.adventure.freeBadge}
            </span>
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.tools.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.tools.title}
            </h2>
            <p className="mt-4 text-text-body">{t.tools.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tl) => (
              <ToolCard
                key={tl.key}
                name={t.tools.items[tl.key].name}
                tagline={t.tools.items[tl.key].tagline}
                cost={t.tools.items[tl.key].cost}
                isIncluded={tl.isIncluded}
                includedLabel={t.tools.includedLabel}
                brainsLabel={t.tools.brainsLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESSION */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.progression.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.progression.title}
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
            {(["xp", "lives", "streak"] as const).map((k) => (
              <div key={k} className="card text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
                  {t.progression.stats[k].label}
                </p>
                <p className="mt-3 text-text-body">{t.progression.stats[k].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY + CUSTOM */}
      <section className="border-y border-line bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.daily.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.daily.title}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-accent-soft/40 p-8 shadow-card">
              <div className="flex items-start gap-5">
                <Image
                  src="/images/daily-mascot.webp"
                  alt=""
                  width={140}
                  height={140}
                  className="h-24 w-24 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-ink">{t.daily.daily.name}</h3>
                  <p className="mt-2 text-sm text-text-body">{t.daily.daily.body}</p>
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-quiz-tint p-8 shadow-card">
              <h3 className="text-xl font-semibold text-ink">{t.daily.custom.name}</h3>
              <p className="mt-2 text-sm text-text-body">{t.daily.custom.body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.plans.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.plans.title}
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <PlanCard
              name={t.plans.free.name}
              price={t.plans.free.price}
              cadence={t.plans.free.cadence}
              promise={t.plans.free.promise}
              features={t.plans.free.features}
            />
            <PlanCard
              name={t.plans.plus.name}
              price={t.plans.plus.price}
              cadence={t.plans.plus.cadence}
              priceYear={t.plans.plus.priceYear}
              cadenceYear={t.plans.plus.cadenceYear}
              promise={t.plans.plus.promise}
              features={t.plans.plus.features}
              tag={t.plans.plus.tag}
              highlight
            />
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              {t.plans.explainer.title}
            </p>
            <p className="mt-2 text-sm text-text-body">{t.plans.explainer.body}</p>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-text-muted">
            {t.plans.fineprint}
          </p>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.trust.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.trust.title}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <h3 className="text-base font-semibold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm text-text-body">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.faq.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-ink">
              {t.faq.title}
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion items={t.faq.items} />
          </div>
          <p className="mt-6 text-center text-sm">
            <Link
              href={`${prefix}/support`}
              className="text-accent-deep underline-offset-4 hover:underline"
            >
              {t.faq.seeMore}
            </Link>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-accent" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl rounded-[36px] border border-line bg-white p-10 text-center shadow-card sm:p-14">
            <Image
              src="/images/mascot-hero.webp"
              alt=""
              width={140}
              height={140}
              className="mx-auto h-28 w-28 object-contain"
            />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 text-text-body">{t.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" lang={lang} />
            </div>
            <p className="mt-8 text-xs text-text-muted">{t.cta.supportLine(site.supportEmail)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
