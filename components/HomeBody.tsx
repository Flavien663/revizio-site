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

const tools: ToolKey[] = ["decoder", "memo", "exam", "smartNotifs", "customAdventure"];

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

const stats = [
  { value: "180+", labelFr: "niveaux d'aventure", labelEn: "adventure levels" },
  { value: "8+", labelFr: "jeux IA", labelEn: "AI games" },
  { value: "6+", labelFr: "mondes à explorer", labelEn: "worlds to explore" },
  { value: "5+", labelFr: "outils IA", labelEn: "AI tools" },
];

const marqueeColors: Record<typeof games[number]["color"], string> = {
  quiz: "bg-quiz-tint text-quiz-deep",
  hangman: "bg-hangman-tint text-hangman-deep",
  bingo: "bg-bingo-tint text-bingo-deep",
  crossword: "bg-crossword-tint text-crossword-deep",
  "true-false": "bg-true-false-tint text-true-false-deep",
  tri: "bg-tri-tint text-tri-deep",
  chrono: "bg-chrono-tint text-chrono-deep",
  memo: "bg-memo-tint text-memo-deep",
};

export function HomeBody({ lang }: Props) {
  const t = getDict(lang);
  const prefix = lang === "en" ? "/en" : "";

  const marqueeItems = games.map((g) => ({
    label: t.games.items[g.key].name,
    cls: marqueeColors[g.color],
  }));

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
        <div aria-hidden className="pointer-events-none absolute inset-0 gradient-bg-hero" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-quiz/20 blur-3xl animate-pulse-soft" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-bingo/20 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
          <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-memo/15 blur-3xl animate-pulse-soft" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container-x relative pt-14 pb-14 sm:pt-20 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="pill-glow">{t.hero.badge}</span>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[80px]">
                {t.hero.headlineLine1}
                <br />
                <span className="gradient-text">{t.hero.headlineLine2}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-body sm:text-xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <StoreButtons size="lg" lang={lang} />
                <Link
                  href={`${prefix}/#games`}
                  className="text-sm font-medium text-text-muted underline-offset-4 hover:text-ink hover:underline"
                >
                  {t.hero.ctaSecondary} ↓
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden
                  className="absolute -inset-10 rounded-[60px] bg-gradient-to-br from-accent/30 via-bingo/20 to-quiz/20 blur-3xl opacity-80"
                />
                <div className="relative animate-float-slow">
                  <Image
                    src="/images/mascot-hero.webp"
                    alt=""
                    width={620}
                    height={620}
                    sizes="(max-width: 1024px) 70vw, 460px"
                    className="mx-auto h-auto w-full drop-shadow-[0_30px_40px_rgba(15,17,21,0.18)]"
                    priority
                  />
                </div>
                {/* Floating mini-mascots */}
                <div
                  aria-hidden
                  className="absolute -left-2 top-10 hidden sm:block animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-bingo-tintStrong shadow-card">
                    <Image
                      src="/images/games/bingo/mascot.webp"
                      alt=""
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute -right-2 top-1/3 hidden sm:block animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-quiz-tintStrong shadow-card">
                    <Image
                      src="/images/games/quiz/mascot.webp"
                      alt=""
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute -bottom-2 right-1/4 hidden sm:block animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-memo-tintStrong shadow-card">
                    <Image
                      src="/images/games/memo/mascot.webp"
                      alt=""
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative border-y border-line bg-ink overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, rgba(242,107,58,0.35), transparent 40%), radial-gradient(circle at 85% 50%, rgba(225,29,122,0.25), transparent 40%)",
          }}
        />
        <div className="container-x relative py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="text-center sm:text-left">
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl gradient-text">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/70 sm:text-sm">
                  {lang === "fr" ? s.labelFr : s.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE — game names scrolling */}
      <section
        aria-hidden
        className="border-b border-line bg-white py-5 overflow-hidden"
      >
        <div className="relative flex whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee gap-3 pr-3">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span
                key={`a-${i}`}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${m.cls}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                {m.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES VITRINE */}
      <section id="games" className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.games.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
              {t.games.title}
            </h2>
            <p className="mt-4 text-text-body sm:text-lg">{t.games.intro}</p>
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
      <section id="adventure" className="relative overflow-hidden border-y border-line bg-surface-soft py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-culture/15 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-words/15 blur-3xl" />
          <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-logic/10 blur-3xl" />
        </div>
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">{t.adventure.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
              {t.adventure.title}
            </h2>
            <p className="mt-4 text-text-body sm:text-lg">{t.adventure.intro}</p>
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
          <p className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
              <span className="h-2 w-2 rounded-full bg-success" />
              {t.adventure.freeBadge}
            </span>
          </p>
        </div>
      </section>

      {/* TOOLS IA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.tools.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
              {t.tools.title}
            </h2>
            <p className="mt-4 text-text-body sm:text-lg">{t.tools.intro}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((k) => (
              <ToolCard
                key={k}
                name={t.tools.items[k].name}
                tagline={t.tools.items[k].tagline}
                cost={t.tools.items[k].cost}
                brainsLabel={t.tools.brainsLabel}
                includedLabel=""
                isIncluded={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DAILY + CUSTOM */}
      <section className="border-y border-line bg-background py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.daily.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
              {t.daily.title}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-accent-soft p-8 shadow-card transition-transform hover:-translate-y-1">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
              />
              <div className="relative flex items-start gap-5">
                <Image
                  src="/images/daily-mascot.webp"
                  alt=""
                  width={160}
                  height={160}
                  className="h-28 w-28 shrink-0 object-contain animate-float-slow"
                />
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-deep">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
                    {lang === "fr" ? "Tous les jours" : "Every day"}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">
                    {t.daily.daily.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-body">{t.daily.daily.body}</p>
                </div>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-quiz-tint p-8 shadow-card transition-transform hover:-translate-y-1">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-quiz/20 blur-2xl"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-quiz-tintStrong px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-quiz-deep">
                  {lang === "fr" ? "Quand tu veux" : "Whenever"}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-ink">
                  {t.daily.custom.name}
                </h3>
                <p className="mt-2 text-sm text-text-body">{t.daily.custom.body}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.plans.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
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
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-text-muted">
            {t.plans.fineprint}
          </p>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-line bg-surface-soft py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">{t.trust.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
              {t.trust.title}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-line bg-white p-6 shadow-card transition-transform hover:-translate-y-1">
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
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl text-ink">
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
        <div aria-hidden className="pointer-events-none absolute inset-0 gradient-bg-hero" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl rounded-[36px] border border-line bg-white p-10 text-center shadow-card sm:p-14 ring-glow-accent">
            <Image
              src="/images/mascot-hero.webp"
              alt=""
              width={160}
              height={160}
              className="mx-auto h-32 w-32 object-contain animate-float"
            />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 text-text-body sm:text-lg">{t.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <StoreButtons size="lg" lang={lang} />
            </div>
            <p className="mt-8 text-xs text-text-muted">
              {t.cta.supportLine(site.supportEmail)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
