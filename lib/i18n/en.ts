import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    homeTitle: "Revizio — Learn by playing",
    homeDescription:
      "You pick a topic, we build the game. 8+ AI games, 180+ adventure levels, a fresh challenge every day. On iOS.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    supportTitle: "Support",
    deleteAccountTitle: "Delete My Account",
  },
  nav: { games: "Games", adventure: "Adventure", plans: "Plans", download: "Download" },
  hero: {
    badge: "No ads. No tracking. Really.",
    headlineLine1: "Learn whatever you want.",
    headlineLine2: "By playing.",
    subtitle:
      "You pick a topic. We build the game. 8+ AI games, 180+ adventure levels, a fresh challenge every day.",
    ctaSecondary: "See the games",
  },
  games: {
    eyebrow: "Every topic, in game form",
    title: "Pick a topic. We build the game.",
    intro:
      "From quiz to hangman, from memo to quick sort — every game is generated live on your topic.",
    cost: "1 brain",
    items: {
      quiz: { name: "Quiz", tagline: "Questions on anything." },
      hangman: { name: "Hangman", tagline: "Words to guess, with hints." },
      bingo: { name: "Bingo", tagline: "A term grid to hear and find." },
      crossword: { name: "Crossword", tagline: "A grid built on your topic." },
      trueFalse: { name: "True/False Rush", tagline: "True or false. Fast." },
      tri: { name: "Quick Sort", tagline: "Cards into the right buckets." },
      chrono: { name: "Chrono Ranking", tagline: "Put time back in order." },
      memo: { name: "Memo Duo", tagline: "Find the pairs." },
    },
  },
  adventure: {
    eyebrow: "A 180+ level adventure",
    title: "More than 6 worlds. Explored one by one.",
    intro:
      "The Revizio Adventure takes you through themed worlds, level after level. Every star you earn brings you closer to the next.",
    levelsLabel: "Dozens of levels",
    freeBadge: "Free — open to everyone",
    worlds: {
      culture: { name: "Cap Culture", tagline: "General knowledge, from art to sports." },
      words: { name: "Forest of Words", tagline: "Vocabulary, idioms, etymologies." },
      logic: { name: "Logic Tower", tagline: "Reasoning, deductions, puzzles." },
    },
  },
  tools: {
    eyebrow: "Go further",
    title: "5+ AI tools to push harder.",
    intro:
      "When you want to switch to serious study mode, the AI tools take over.",
    brainsLabel: (n) => `${n} brain${n > 1 ? "s" : ""}`,
    items: {
      decoder: {
        name: "Decoder",
        tagline: "Photograph a course page, get clear widgets.",
        cost: "5",
      },
      memo: {
        name: "Structured memo",
        tagline: "A rich multi-section study sheet, ready to review.",
        cost: "10",
      },
      exam: {
        name: "Mock exam",
        tagline: "A long-form quiz, graded.",
        cost: "10",
      },
      smartNotifs: {
        name: "Smart notifications",
        tagline: "A bank of reminders, at your hours.",
        cost: "5",
      },
      customAdventure: {
        name: "Custom mini-world",
        tagline: "10 levels on the topic you choose.",
        cost: "5",
      },
    },
  },
  daily: {
    eyebrow: "Every day, or whenever",
    title: "A daily challenge. A custom adventure on demand.",
    daily: {
      name: "Daily challenge",
      body: "A fresh level every morning. Three stars to grab. Come back tomorrow for the next one.",
    },
    custom: {
      name: "Custom mini-world",
      body: "Launch a 10-level mini-world on the topic of your choice. Like a playlist, but for learning.",
    },
  },
  plans: {
    eyebrow: "Two plans. That's it.",
    title: "Free to start. Plus to unlock everything.",
    free: {
      name: "Free",
      price: "€0",
      cadence: "forever",
      promise: "The Adventure and every AI game, free.",
      features: [
        "Full 180+ level Adventure",
        "All AI games",
        "Daily challenge",
        "Preview of AI tools",
      ],
    },
    plus: {
      name: "Revizio Plus",
      price: "€5.99",
      cadence: "per month",
      priceYear: "€49.99",
      cadenceYear: "per year (−30%)",
      promise: "More brains and all AI tools unlocked.",
      tag: "Your full potential",
      features: [
        "200 brains every month",
        "All AI tools unlocked",
        "Custom mini-worlds, unlimited",
        "No ads, no limits",
      ],
    },
    fineprint:
      "Subscription managed by the App Store. Cancel any time from your Apple settings.",
  },
  trust: {
    eyebrow: "No tricks",
    title: "We play fair.",
    items: [
      { title: "No ads", body: "No banners. No data sales." },
      { title: "No tracking", body: "No third-party analytics. No web cookies." },
      { title: "Your content stays private", body: "Every generation is strictly tied to your account." },
      { title: "No password", body: "Apple, Google, email code or guest." },
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
        a: "Free is the Adventure and all the AI games, with nothing to pay. Plus is more brains every month and all the AI tools unlocked.",
      },
      {
        q: "How do I restore my purchases?",
        a: "In the app, go to Settings → Restore my purchases. Your Apple transactions are replayed automatically.",
      },
      {
        q: "How do I delete my account?",
        a: "Settings → My account → Delete my account. The deletion is immediate. See the Delete My Account page for details.",
      },
      {
        q: "Are my AI contents private?",
        a: "Yes. Each generation is tied to your account. Nothing is shared between users.",
      },
    ],
    seeMore: "See all questions →",
  },
  cta: {
    title: "Pick a topic. Revizio builds the game.",
    body: "Start as a guest, no password, in under a minute.",
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
          "Adventure progress, experience and level, lives and counters, streaks.",
      },
      {
        title: "User-created content",
        body:
          "Courses and chapters you create, study sessions, content generated by AI tools.",
      },
      {
        title: "Economy",
        body:
          "Brain wallet balance, transactions, reward history.",
      },
      {
        title: "Preferences",
        body: "Notification preferences, referral code and status.",
      },
    ],
    dataNotCollectedHeading: "Data we do not collect",
    dataNotCollectedItems: [
      "No third-party analytics.",
      "No web cookies — Revizio is a native app.",
      "No advertising tracking identifier.",
      "No business-side IP logging.",
      "No crash reports containing personal data.",
    ],
    processorsHeading: "Processors",
    processorsItems: [
      {
        name: "Cloud host (Europe)",
        purpose:
          "Database storage, authentication and media storage, in a European region.",
      },
      {
        name: "AI model provider",
        purpose:
          "Generation of game and tool content. Only the texts or photos you supply (topics, scans) are sent, without profile data.",
      },
      {
        name: "Subscription management platform",
        purpose:
          "Handling of purchases and entitlements, via an anonymized identifier.",
      },
      {
        name: "Apple and Google",
        purpose: "Authentication and in-app purchase transactions on their platforms.",
      },
    ],
    storageHeading: "Media storage",
    storageBody:
      "Photos you send to the analysis tools (e.g. Decoder) are compressed and stored in a private space hosted in Europe. They are deleted with your account.",
    retentionHeading: "Retention",
    retentionBody:
      "Your data is retained as long as your account exists. Upon account deletion, all rows tied to your identifier are atomically removed. Anonymized technical logs may persist for a short period.",
    rightsHeading: "Your rights",
    rightsItems: [
      {
        title: "Access",
        body:
          "Settings → My account → Export my data. You receive a structured export of your data.",
      },
      { title: "Rectification", body: "Edit your profile in Settings → My account." },
      {
        title: "Deletion",
        body:
          "Settings → My account → Delete my account. Atomic and immediate deletion.",
      },
      { title: "Portability", body: "The export above is portable and readable." },
      {
        title: "Opt-out",
        body: "Granular opt-out of notifications, per channel, in Settings.",
      },
      {
        title: "Complaint",
        body:
          "You may file a complaint with the CNIL if you believe your rights are not respected.",
      },
    ],
    minorsHeading: "Minors",
    minorsBody:
      "Revizio offers no features specifically for users under 13. No user-to-user chat, no public profile, no social mechanic. For young users, an Apple or Google family account is recommended.",
    securityHeading: "Security",
    securityBody:
      "All sensitive tables are protected by Row Level Security. The brain wallet and transactions can only be modified through signed server functions. No secret is stored client-side.",
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
          "Revizio is a mobile learning-by-play app, distributed on iOS (and Android soon). The service includes an editorial Adventure, AI games, a daily challenge, AI tools and account management.",
      },
      {
        heading: "2. Accounts",
        body:
          "An account can be created via Apple, Google, a 6-digit code received by email, or in guest mode. A guest account can be linked to a provider later without data loss.",
      },
      {
        heading: "3. Plans",
        body:
          "Two plans are offered: Free (free, permanent) and Revizio Plus (monthly or annual subscription). Free gives access to the Adventure and the AI games. Plus adds AI tools and a monthly cumulative brain allowance. Current prices are displayed in the app at purchase time.",
      },
      {
        heading: "5. Payments",
        body:
          "All purchases (subscriptions and brain packs) go through the App Store or Google Play. Revizio never directly handles payment methods.",
      },
      {
        heading: "6. Renewal and cancellation",
        body:
          "The Plus subscription auto-renews unless canceled in your Apple or Google settings. Cancellation takes effect at the end of the current billing period.",
      },
      {
        heading: "7. Restore",
        body:
          "Settings → Restore my purchases replays the Apple or Google transactions tied to your account.",
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
          "A study session counts toward a reward only if it exceeds the minimum duration shown in the app.",
      },
      {
        heading: "11. Moderation",
        body:
          "User-generated content remains strictly private to its account. No user-to-user sharing. Risky prompts are blocked by filter before processing.",
      },
      {
        heading: "12. Liability",
        body:
          "Revizio provides the service as-is. The publisher cannot be held liable for temporary unavailability or non-conforming use.",
      },
      {
        heading: "13. Governing law",
        body:
          "French law. In case of dispute, the jurisdiction of the publisher's registered office is competent, subject to mandatory consumer law provisions.",
      },
    ],
    accessVsConsumptionHeading: "4. Access vs. consumption — important",
    accessVsConsumptionBody:
      "The Plus subscription gives access to the AI tools. Brains are a consumption currency used to generate content. Brain packs available for purchase in the app top up that consumption only. They never unlock Plus access.",
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
            a: "Check that you are signed in to your account on the device. If the error persists, reinstall the app. If nothing works, write to us.",
          },
          {
            q: "My onboarding is stuck.",
            a: "Force-close the app and relaunch. Your progress is synced server-side.",
          },
          {
            q: "How do I delete my data?",
            a: "Settings → My account → Delete my account. See the Delete My Account page for details.",
          },
          {
            q: "How do I export my data?",
            a: "Settings → My account → Export my data.",
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
            a: "Settings → Restore my purchases. Your Apple or Google transactions are replayed automatically.",
          },
          {
            q: "My payment was declined.",
            a: "Check your payment method in your Apple or Google settings.",
          },
          {
            q: "I bought Plus but it isn't active.",
            a: "Quit and relaunch the app. If the issue persists, run Restore my purchases. Otherwise, write to us with your user ID.",
          },
        ],
      },
      {
        name: "Gameplay",
        items: [
          {
            q: "I didn't receive the promised brains.",
            a: "Check that the session exceeded the minimum duration shown in the app. If the credit is missing, write to us.",
          },
          {
            q: "My lives are at 0 and won't regenerate.",
            a: "Lives regenerate on automatic timers. You can also buy more for a few brains.",
          },
          {
            q: "My streak broke even though I played.",
            a: "A session counts toward the streak only if it exceeds the minimum duration. Otherwise contact us with the timestamp.",
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
            a: "On a cloud host, in Europe.",
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
      "All data tied to your identifier (profile, progress, courses, sessions, AI contents, wallet, transactions, rewards)",
      "All photos sent to the analysis tools",
      "Cancellation on the subscription management platform side",
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
