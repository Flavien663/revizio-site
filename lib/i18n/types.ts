export type Lang = "fr" | "en";

export type GameKey =
  | "quiz"
  | "hangman"
  | "bingo"
  | "crossword"
  | "trueFalse"
  | "tri"
  | "chrono"
  | "memo";

export type ToolKey =
  | "decoder"
  | "memo"
  | "exam"
  | "courseQuiz"
  | "smartNotifs"
  | "smartPlan"
  | "customAdventure";

export type WorldKey = "culture" | "words" | "logic";

export type Dict = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    termsTitle: string;
    supportTitle: string;
    deleteAccountTitle: string;
  };
  nav: { games: string; adventure: string; plans: string; download: string };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    ctaSecondary: string;
  };
  games: {
    eyebrow: string;
    title: string;
    intro: string;
    cost: string;
    items: Record<GameKey, { name: string; tagline: string }>;
  };
  adventure: {
    eyebrow: string;
    title: string;
    intro: string;
    levelsLabel: string;
    freeBadge: string;
    starsCaption: string;
    chestsCaption: string;
    bossCaption: string;
    moreSoon: string;
    worlds: Record<WorldKey, { name: string; tagline: string }>;
  };
  tools: {
    eyebrow: string;
    title: string;
    intro: string;
    includedLabel: string;
    brainsLabel: (n: number) => string;
    items: Record<ToolKey, { name: string; tagline: string; cost: string }>;
  };
  progression: {
    eyebrow: string;
    title: string;
    stats: Record<"xp" | "lives" | "streak", { label: string; body: string }>;
  };
  daily: {
    eyebrow: string;
    title: string;
    daily: { name: string; body: string };
    custom: { name: string; body: string };
  };
  plans: {
    eyebrow: string;
    title: string;
    free: { name: string; price: string; cadence: string; promise: string; features: string[] };
    plus: {
      name: string;
      price: string;
      cadence: string;
      priceYear: string;
      cadenceYear: string;
      promise: string;
      features: string[];
      tag: string;
    };
    explainer: { title: string; body: string };
    fineprint: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
    seeMore: string;
  };
  cta: {
    title: string;
    body: string;
    supportLine: (email: string) => string;
  };
  footer: {
    productHeading: string;
    legalHeading: string;
    helpHeading: string;
    home: string;
    support: string;
    privacy: string;
    terms: string;
    deleteAccount: string;
    contactSupport: string;
    iosAvailable: string;
    rights: string;
    langLabel: string;
  };
  legal: {
    backHome: string;
    lastUpdated: (date: string) => string;
  };
  privacy: {
    intro: string;
    controllerHeading: string;
    controllerBody: string;
    dataCollectedHeading: string;
    dataCollectedItems: Array<{ title: string; body: string }>;
    dataNotCollectedHeading: string;
    dataNotCollectedItems: string[];
    processorsHeading: string;
    processorsItems: Array<{ name: string; purpose: string }>;
    storageHeading: string;
    storageBody: string;
    retentionHeading: string;
    retentionBody: string;
    rightsHeading: string;
    rightsItems: Array<{ title: string; body: string }>;
    minorsHeading: string;
    minorsBody: string;
    securityHeading: string;
    securityBody: string;
    contactHeading: string;
    contactBody: (email: string) => string;
  };
  terms: {
    intro: string;
    sections: Array<{ heading: string; body: string }>;
    accessVsConsumptionHeading: string;
    accessVsConsumptionBody: string;
    contactHeading: string;
    contactBody: (email: string) => string;
  };
  support: {
    intro: string;
    emailHeading: string;
    emailBody: (email: string, delay: string) => string;
    faqHeading: string;
    faqCategories: Array<{ name: string; items: Array<{ q: string; a: string }> }>;
  };
  deleteAccount: {
    intro: string;
    inAppHeading: string;
    inAppSteps: string[];
    inAppRecommended: string;
    emailHeading: string;
    emailBody: (email: string) => string;
    deletedHeading: string;
    deletedItems: string[];
    retainedHeading: string;
    retainedItems: string[];
    consequencesHeading: string;
    consequencesBody: string;
  };
};
