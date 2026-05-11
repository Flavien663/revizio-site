import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    homeTitle: "Revizio — Learn by playing",
    homeDescription:
      "8+ AI games generated from any topic or course. A 180+ level adventure across 6+ worlds. A daily challenge. On iOS.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    supportTitle: "Support",
    deleteAccountTitle: "Delete My Account",
  },
  nav: { games: "Games", adventure: "Adventure", plans: "Plans", download: "Download" },
  hero: {
    badge: "No ads — no tracking",
    headlineLine1: "Learn whatever you want.",
    headlineLine2: "By playing.",
    subtitle:
      "8+ AI games generated from any topic or one of your courses. A 180+ level adventure. A daily challenge. On iOS.",
    ctaSecondary: "See the games",
  },
  games: {
    eyebrow: "8+ games generated from your topic",
    title: "Pick a topic. We build the game.",
    intro:
      "Every game is built on the fly from any topic or one of your courses.",
    cost: "1 brain",
    items: {
      quiz: { name: "Quiz", tagline: "Questions on anything." },
      hangman: { name: "Hangman", tagline: "Words to guess, with hints." },
      bingo: { name: "Bingo", tagline: "A term grid you hear and find." },
      crossword: { name: "Crossword", tagline: "A grid built on your topic." },
      trueFalse: { name: "True/False Rush", tagline: "Claims, true or false, fast." },
      tri: { name: "Quick Sort", tagline: "Cards to drop into the right buckets." },
      chrono: { name: "Chrono Ranking", tagline: "Events to put back in order." },
      memo: { name: "Memo Duo", tagline: "Pairs to find." },
    },
  },
  adventure: {
    eyebrow: "A 180+ level adventure",
    title: "Six worlds and more. Dozens of levels each.",
    intro:
      "Each level scores 1 to 3 stars. Chests punctuate progression. A boss waits at the top of each world.",
    levelsLabel: "Dozens of levels",
    freeBadge: "Free — open to everyone",
    starsCaption: "1 to 3 stars per level",
    chestsCaption: "Regular chests",
    bossCaption: "A boss per world",
    moreSoon: "And more worlds on the way.",
    worlds: {
      culture: { name: "Cap Culture", tagline: "General knowledge, from art to sports." },
      words: { name: "Forest of Words", tagline: "Vocabulary, idioms, etymologies." },
      logic: { name: "Logic Tower", tagline: "Reasoning, deductions, puzzles." },
    },
  },
  tools: {
    eyebrow: "Go further",
    title: "5+ tools for real study.",
    intro: "Reserved for Revizio Plus. Preview available in the app.",
    includedLabel: "Included",
    brainsLabel: (n) => `${n} brain${n > 1 ? "s" : ""}`,
    items: {
      decoder: {
        name: "Decoder",
        tagline: "Photograph a course page and get explanatory widgets.",
        cost: "5",
      },
      memo: {
        name: "Structured memo",
        tagline: "A rich multi-section study sheet, ready to review.",
        cost: "10",
      },
      exam: { name: "Mock exam", tagline: "A long-form quiz, graded.", cost: "10" },
      courseQuiz: {
        name: "Course quiz",
        tagline: "A quiz focused on one of your courses.",
        cost: "3",
      },
      smartNotifs: {
        name: "Smart notifications",
        tagline: "A bank of personalized reminders, at your hours.",
        cost: "5",
      },
      smartPlan: {
        name: "Smart plan",
        tagline: "An adaptive review schedule that follows your progress.",
        cost: "included",
      },
      customAdventure: {
        name: "Custom adventure",
        tagline: "A 10-level mini-world on the topic you choose.",
        cost: "5",
      },
    },
  },
  progression: {
    eyebrow: "Progress that shows",
    title: "Your level, your lives, your streak. All visible.",
    stats: {
      xp: {
        label: "XP",
        body: "You earn XP every level cleared. Your progress is always in view.",
      },
      lives: {
        label: "Lives",
        body: "Lives regenerate automatically. Revizio Plus unlocks more lives and faster regen.",
      },
      streak: {
        label: "Streak",
        body: "One session a day keeps it alive.",
      },
    },
  },
  daily: {
    eyebrow: "Every day, or whenever",
    title: "A daily challenge. A custom adventure.",
    daily: {
      name: "Daily challenge",
      body: "A fresh level every day. Three stars to grab. The brains you earn here are uncapped.",
    },
    custom: {
      name: "Custom mini-adventure",
      body: "Ten levels on the topic you pick. Available in Free, unlimited in Plus.",
    },
  },
  plans: {
    eyebrow: "Two plans. That's it.",
    title: "Free to discover. Plus to go further.",
    free: {
      name: "Free",
      price: "€0",
      cadence: "forever",
      promise: "A real, permanent tier.",
      features: [
        "Full 180+ level Adventure",
        "Daily challenge",
        "All AI games accessible",
        "Earnable brains via play",
        "Automatic life regen",
        "Preview of Premium tools",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "€5.99",
      cadence: "per month",
      priceYear: "€49.99",
      cadenceYear: "per year (−30%)",
      promise: "Premium tools and a monthly brain allowance.",
      tag: "Most useful",
      features: [
        "200 cumulative brains every month",
        "All Premium tools",
        "More lives, faster regen",
        "Reduced Adventure timers",
        "Unlimited custom mini-adventures",
      ],
    },
    explainer: {
      title: "Important",
      body:
        "The subscription gives access to tools. Brains are a consumption currency to generate AI content. Brain packs available in the app top up that consumption — they never unlock Plus access.",
    },
    fineprint:
      "Auto-renews through the App Store. Cancel any time from your Apple settings. Purchases are synced via RevenueCat.",
  },
  trust: {
    eyebrow: "No tricks",
    title: "We play fair.",
    items: [
      { title: "No ads", body: "No banners, no data sales." },
      { title: "No tracking", body: "No Mixpanel, Amplitude, Firebase. No web cookies." },
      { title: "Data in Europe", body: "Hosted on Supabase, eu-west-1 region." },
      { title: "No password", body: "Sign in with Apple, Google, email code or guest." },
    ],
  },
  faq: {
    eyebrow: "Frequent questions",
    title: "What people ask most.",
    items: [
      {
        q: "What platforms?",
        a: "Revizio is available on iOS right now. Android is coming soon.",
      },
      {
        q: "What's the difference between Free and Plus?",
        a: "Free gives full access to the Adventure and all AI games. Plus adds a monthly cumulative brain allowance, all Premium tools, more lives, reduced timers and unlimited custom mini-adventures.",
      },
      {
        q: "How do I restore purchases?",
        a: "In the app, go to Settings → Restore my purchases. Apple transactions are replayed via RevenueCat.",
      },
      {
        q: "How do I delete my account?",
        a: "Settings → My account → Delete my account. The deletion is atomic. Full details on the Delete My Account page.",
      },
      {
        q: "Are my AI contents private?",
        a: "Yes. Each generation is strictly tied to your account. Nothing is shared between users, nothing is reused commercially.",
      },
    ],
    seeMore: "See all questions →",
  },
  cta: {
    title: "Pick a topic. Revizio builds the game.",
    body: "You can start as a guest, with no password, in under a minute.",
    supportLine: (email) => `Got a question? Email ${email}.`,
  },
  footer: {
    productHeading: "Product",
    legalHeading: "Legal",
    helpHeading: "Help",
    home: "Home",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    deleteAccount: "Delete account",
    contactSupport: "Email support",
    iosAvailable: "Available on iOS. Android coming soon.",
    rights: "All rights reserved.",
    langLabel: "Language",
  },
  legal: {
    backHome: "← Back to home",
    lastUpdated: (date) => `Last updated: ${date}`,
  },
  privacy: {
    intro:
      "This policy describes how Revizio collects, uses and protects your data when you use the mobile app.",
    controllerHeading: "Data controller",
    controllerBody:
      "Revizio App, 31700 Blagnac, France. For any question regarding data protection, write to support@revizioapp.com.",
    dataCollectedHeading: "Data we collect",
    dataCollectedItems: [
      {
        title: "Profile",
        body:
          "Unique identifier, email (only when signing in via email code), authentication method, onboarding state, optional display name, chosen language, learning objective.",
      },
      {
        title: "Progress",
        body:
          "Adventure progress (levels, stars, attempts), experience and level, lives and counters, streaks.",
      },
      {
        title: "User-created content",
        body:
          "Courses and chapters you create, study sessions, content generated by AI tools (summaries, quizzes, memos).",
      },
      {
        title: "Economy",
        body:
          "Brain wallet balance, transactions, reward history (auditable and idempotent).",
      },
      {
        title: "Preferences",
        body: "Notification preferences, referral code and status.",
      },
    ],
    dataNotCollectedHeading: "Data we do not collect",
    dataNotCollectedItems: [
      "No third-party analytics (Mixpanel, Amplitude, Firebase Analytics, etc.).",
      "No web cookies — Revizio is a native app.",
      "No advertising tracking identifier.",
      "No business-side IP logging.",
      "No crash reports containing personal data.",
    ],
    processorsHeading: "Processors",
    processorsItems: [
      {
        name: "Supabase",
        purpose:
          "Database, authentication and media storage. Hosted in Europe (eu-west-1 region).",
      },
      {
        name: "OpenAI (via Edge Functions)",
        purpose:
          "Generation of game and tool content. Only the texts or photos you supply (courses, themes, scans) are sent, without profile data. OpenAI's retention policy applies to that data.",
      },
      {
        name: "RevenueCat",
        purpose: "Subscription and in-app purchase management, via an anonymized identifier.",
      },
      {
        name: "Apple and Google",
        purpose: "Authentication and in-app purchase transactions on their platforms.",
      },
    ],
    storageHeading: "Media storage",
    storageBody:
      "Photos you send to the analysis tools (e.g. Decoder) are compressed and stored in a private bucket hosted in Europe. They are deleted with your account.",
    retentionHeading: "Retention",
    retentionBody:
      "Your data is retained as long as your account exists. Upon account deletion, all rows tied to your identifier are atomically removed. Anonymized technical logs may persist for a short period.",
    rightsHeading: "Your rights",
    rightsItems: [
      {
        title: "Access",
        body:
          "Settings → My account → Export my data. You receive a structured export of your account data.",
      },
      { title: "Rectification", body: "Edit your profile in Settings → My account." },
      {
        title: "Deletion",
        body:
          "Settings → My account → Delete my account. Atomic and immediate deletion of all associated data.",
      },
      { title: "Portability", body: "The export above is portable and readable." },
      {
        title: "Opt-out",
        body: "Granular opt-out of notifications, per channel, in Settings.",
      },
      {
        title: "Complaint",
        body:
          "You may file a complaint with the CNIL (French data authority) if you believe your rights are not respected.",
      },
    ],
    minorsHeading: "Minors",
    minorsBody:
      "Revizio offers no features specifically for users under 13. No user-to-user chat, no public profile, no social mechanic. For young users, an Apple or Google family account is recommended.",
    securityHeading: "Security",
    securityBody:
      "All sensitive tables are protected by Row Level Security at the Supabase level. The brain wallet and transactions can only be modified through signed server functions. No secret is stored client-side.",
    contactHeading: "Contact",
    contactBody: (email) =>
      `For any question regarding this policy or the protection of your data: ${email}.`,
  },
  terms: {
    intro:
      "These terms govern your use of the Revizio app. By using Revizio, you accept these terms.",
    sections: [
      {
        heading: "1. Service",
        body:
          "Revizio is a mobile learning-by-play app, distributed on iOS (and Android soon). The service includes an editorial Adventure, AI games, a daily challenge, Premium tools and account management.",
      },
      {
        heading: "2. Accounts",
        body:
          "An account can be created via Apple, Google, a 6-digit code received by email, or in guest mode. A guest account can be linked to a provider later without data loss.",
      },
      {
        heading: "3. Plans",
        body:
          "Two plans are offered: Free (free, permanent) and Revizio Plus (monthly or annual subscription). Free gives access to the Adventure and the AI games. Plus adds Premium tools, a monthly cumulative brain allowance and additional in-game comfort. Current prices are displayed in the app at purchase time.",
      },
      {
        heading: "5. Payments",
        body:
          "All purchases (subscriptions and brain packs) go through the App Store or Google Play. Entitlements are managed via RevenueCat. Revizio never directly handles payment methods.",
      },
      {
        heading: "6. Renewal and cancellation",
        body:
          "The Plus subscription auto-renews unless canceled in your Apple or Google settings. Cancellation takes effect at the end of the current billing period.",
      },
      {
        heading: "7. Restore",
        body:
          "Settings → Restore my purchases replays the Apple or Google transactions via RevenueCat.",
      },
      {
        heading: "8. Refunds",
        body:
          "Refunds are handled per Apple and Google policies. Revizio does not process refunds directly.",
      },
      {
        heading: "9. AI generation",
        body:
          "Games and tools rely on generative models. Generated content may contain inaccuracies. Revizio does not guarantee any academic or professional outcome. A server-side Quality Gate filters risky content.",
      },
      {
        heading: "10. Sessions and rewards",
        body:
          "A study session counts toward a reward (XP, streak, brains) only if it exceeds the minimum duration shown in the app.",
      },
      {
        heading: "11. Moderation",
        body:
          "User-generated content remains strictly private to its account. No user-to-user sharing. Risky prompts (hate, harassment, sexual content, self-harm) are blocked by filter before processing.",
      },
      {
        heading: "12. Liability",
        body:
          "Revizio provides the service as-is. The publisher cannot be held liable for temporary unavailability or non-conforming use. In case of a blocking bug, contact support.",
      },
      {
        heading: "13. Governing law",
        body:
          "French law. In case of dispute, the jurisdiction of the publisher's registered office is competent, subject to mandatory consumer law provisions.",
      },
    ],
    accessVsConsumptionHeading: "4. Access vs. consumption — important",
    accessVsConsumptionBody:
      "The Plus subscription gives access to Premium tools. Brains are a consumption currency used to generate AI content. Brain packs available for purchase in the app are consumables that only top up that consumption. They never unlock Plus access. This distinction is central and explicit in all Revizio communications.",
    contactHeading: "14. Contact",
    contactBody: (email) => `For any question regarding these terms: ${email}.`,
  },
  support: {
    intro:
      "A question, a bug, a payment issue? Here's how to reach us.",
    emailHeading: "Contact",
    emailBody: (email, delay) =>
      `Write to us at ${email}. Average response time ${delay}.`,
    faqHeading: "Frequent questions",
    faqCategories: [
      {
        name: "Account",
        items: [
          {
            q: "My Apple or Google sign-in fails. What can I do?",
            a: "Check that you are signed in to your Apple or Google account on the device. If the error persists, reinstall the app. If nothing works, write to us.",
          },
          {
            q: "My onboarding is stuck.",
            a: "Force-close the app and relaunch. Onboarding state is synced server-side, your progress is safe.",
          },
          {
            q: "How do I delete my data?",
            a: "Settings → My account → Delete my account. See the Delete My Account page for details.",
          },
          {
            q: "How do I export my data?",
            a: "Settings → My account → Export my data. You receive a structured export by email.",
          },
          {
            q: "I used the app as a guest, can I keep my progress on another device?",
            a: "Yes: link your guest account to Apple, Google or an email from Settings. Your progress follows.",
          },
        ],
      },
      {
        name: "Payment",
        items: [
          {
            q: "How do I restore my purchases?",
            a: "Settings → Restore my purchases. Apple or Google transactions are replayed via RevenueCat.",
          },
          {
            q: "My payment was declined.",
            a: "Check your payment method in your Apple or Google settings. Revizio never directly handles payments.",
          },
          {
            q: "I bought Plus but it isn't active.",
            a: "Quit and relaunch the app. If the issue persists, run Restore my purchases. Otherwise, write to us with your user ID (Settings → My account).",
          },
        ],
      },
      {
        name: "Gameplay",
        items: [
          {
            q: "I didn't receive the promised brains.",
            a: "Check that the session exceeded the minimum duration shown in the app. If you meet the condition and the credit is missing, write to us.",
          },
          {
            q: "My lives are at 0 and won't regenerate.",
            a: "Lives regenerate on automatic timers. You can also buy more for a few brains.",
          },
          {
            q: "My streak broke even though I played.",
            a: "A session counts toward the streak only if it exceeds the minimum duration. If you meet that condition and the streak isn't counted, contact us with the timestamp.",
          },
          {
            q: "An AI tool fails to generate.",
            a: "If generation fails, brains are refunded automatically. If they aren't, write to us.",
          },
        ],
      },
      {
        name: "Data",
        items: [
          {
            q: "What data is collected?",
            a: "See the Privacy Policy — sections 'Data we collect' and 'Data we do not collect'.",
          },
          {
            q: "Where is my data stored?",
            a: "At Supabase, in Europe (eu-west-1 region).",
          },
        ],
      },
    ],
  },
  deleteAccount: {
    intro:
      "You can delete your Revizio account at any time. Here's how, and what happens next.",
    inAppHeading: "Method 1 — in the app (recommended)",
    inAppSteps: [
      "Open the Revizio app",
      "Go to Settings → My account",
      "Tap 'Delete my account'",
      "Confirm the deletion",
    ],
    inAppRecommended:
      "The deletion is atomic: all data tied to your identifier is removed immediately (profile, progress, created courses, generated AI content, brain wallet, photos sent to the tools).",
    emailHeading: "Method 2 — by email",
    emailBody: (email) =>
      `If you cannot access the app, write to ${email} from your account email address. Include your user ID (visible in Settings → My account if you still have access). We process the request within 30 days.`,
    deletedHeading: "What gets deleted",
    deletedItems: [
      "All base data tied to your identifier (profile, progress, courses, sessions, AI contents, wallet, transactions, rewards)",
      "All photos sent to the analysis tools (Supabase storage)",
      "Cancellation on the RevenueCat side (active subscriptions are marked canceled)",
    ],
    retainedHeading: "What may remain",
    retainedItems: [
      "In-app purchase transactions on Apple or Google's side (outside our control; manageable from their respective settings)",
      "Anonymized technical logs (short retention)",
    ],
    consequencesHeading: "Consequences",
    consequencesBody:
      "The deletion is permanent. No recovery is possible. If you re-register later with the same address, you start from scratch.",
  },
};
