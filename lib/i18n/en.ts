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
      "This Privacy Policy explains how Revizio collects, uses, shares and protects your personal data when you use the Revizio mobile application and the revizioapp.com website. It complements the Terms of Use and is provided in alignment with the EU General Data Protection Regulation (GDPR).",
    controllerHeading: "1. Data controller",
    controllerBody:
      "The Revizio application and the revizioapp.com website are operated by Revizio App, contact address 31700 Blagnac, France. For any request regarding your personal data: support@revizioapp.com. Detailed legal information (corporate form, registration number, publication director) is available upon request at the same address.",
    scopeHeading: "2. Scope",
    scopeBody:
      "This policy covers data processing performed through the Revizio mobile app (iOS, Android coming soon), the official revizioapp.com website and the associated backend services (database, authentication, media storage, server functions, AI generation, push notifications). It does not cover policies specific to the App Store, Google Play Store, or identity providers (Apple, Google), which remain governed by their own terms.",
    dataCollectedHeading: "3. Data we collect",
    dataCollectedItems: [
      {
        title: "Identification",
        body:
          "A unique internal identifier (UUID) generated at install. Your email address only if you sign in via a one-time code sent by email, or if it is shared by Apple or Google during authentication. Authentication method (anonymous, Apple, Google, email). Optional display name. Preferred language. Display mode (system, light, dark).",
      },
      {
        title: "Learning preferences",
        body:
          "Selected objective (student or curious), study days per week, preferred session duration, weekend inclusion, time zone.",
      },
      {
        title: "Progress and activity",
        body:
          "Cumulative level and experience, current lives, daily streak, progress in the Adventure and in custom worlds, daily challenge attempts, AI quiz attempts and scores.",
      },
      {
        title: "Brain economy",
        body:
          "Wallet balance, append-only transaction history (earns, spends, automatic refunds), validated rewards through the Reward Ledger.",
      },
      {
        title: "Content you create",
        body:
          "Courses and chapters you enter, planned and completed study sessions, post-session feedback (mood, productivity, confidence), voice notes you record yourself, course photos sent to the Decoder tool, and custom Adventure worlds you generate.",
      },
      {
        title: "Purchases and subscription",
        body:
          "Subscription status (Free or Plus), billing cycle, expiry date, payment events transmitted by RevenueCat. Revizio stores no banking data: payments are handled exclusively by Apple or Google.",
      },
      {
        title: "Notifications and device",
        body:
          "Expo push notification token, platform (iOS / Android), notification permission status, stable per-install device identifier, time zone, and detailed per-channel notification preferences.",
      },
      {
        title: "Referral",
        body:
          "Referral code in the REV-XXXXX format, links between referrers and invitees, brain rewards granted.",
      },
      {
        title: "Audit logs",
        body:
          "Append-only logs related to payments, AI generations and notification deliveries, for security, fraud prevention, audit and user support.",
      },
    ],
    dataNotCollectedHeading: "4. Data we do not collect",
    dataNotCollectedItems: [
      "No precise geolocation — we only use your device time zone to schedule notifications.",
      "No access to your address book or contacts.",
      "No background microphone capture — voice notes are recorded only at your explicit request.",
      "No advertising identifier (IDFA on iOS, GAID on Android).",
      "No cross-app tracking, no data sharing for advertising purposes.",
      "No web cookies — Revizio is a native app, and the official website does not drop audience measurement cookies.",
      "No third-party analytics service and no crash reporting service is active at this time.",
    ],
    purposesHeading: "5. Purposes of processing and legal bases",
    purposesItems: [
      {
        title: "Providing the service",
        body:
          "Creating and syncing your account, saving progress, delivering content. Legal basis: performance of the contract (Terms of Use).",
      },
      {
        title: "Personalization",
        body:
          "Adapting the experience to your learning objective, language and study preferences. Legal basis: performance of the contract.",
      },
      {
        title: "AI generation",
        body:
          "Sending your prompts and, where applicable, your course photos to our AI provider in order to generate games, study sheets, exams and tools. Legal basis: performance of the contract.",
      },
      {
        title: "Push notifications",
        body:
          "Sending you functional reminders (daily challenge, AI generation completion, etc.). Legal basis: your consent, withdrawable at any time from Settings.",
      },
      {
        title: "Purchases and subscriptions",
        body:
          "Managing access to paid features and the monthly brain credit. Legal bases: performance of the contract and legal obligation (accounting).",
      },
      {
        title: "Security and abuse prevention",
        body:
          "Monthly caps, anti-fraud, transaction idempotency, audit logs. Legal basis: legitimate interest in protecting the service and its users.",
      },
      {
        title: "User support",
        body:
          "Responding to your requests via email using only the information strictly required. Legal basis: performance of the contract.",
      },
    ],
    processorsHeading: "6. Processors and technical partners",
    processorsItems: [
      {
        name: "Supabase, Inc.",
        purpose:
          "Database hosting, authentication, media storage (private bucket) and server-side functions (Edge Functions). All sensitive tables are protected by Row Level Security.",
      },
      {
        name: "OpenAI, L.L.C.",
        purpose:
          "AI content generation for the games, premium tools (Decoder, Structured memo, Mock exam, Course Quiz, Smart Notifications) and the custom Adventure. Your prompts and, for the Decoder, your course photos are sent at generation time. Per OpenAI's API policy, data sent through its API is not used by default to train its models.",
      },
      {
        name: "RevenueCat, Inc.",
        purpose:
          "Proxy between the stores and our backend for subscription and in-app purchase management. RevenueCat receives your internal identifier and the transaction information forwarded by Apple or Google.",
      },
      {
        name: "Expo (Expo Application Services)",
        purpose:
          "Routing push notifications from our server to your device via the Expo Push service.",
      },
      {
        name: "Apple Inc.",
        purpose:
          "Sign-In with Apple (authentication), iOS distribution via the App Store, and in-app payment handling on iOS.",
      },
      {
        name: "Google LLC",
        purpose:
          "Sign-In with Google (authentication), Android distribution via the Google Play Store (coming), and in-app payment handling on Android.",
      },
    ],
    storageHeading: "7. Photos, voice notes and media storage",
    storageBody:
      "Course photos you send to the Decoder tool are compressed before upload and then stored in a private Supabase bucket (10 MB max per file; JPEG, PNG, WebP, HEIC formats allowed). They are accessible only to you, are sent to OpenAI for the duration of the generation, and are deleted upon account deletion. Voice notes associated with your session feedback are stored in the same private bucket, with access restricted to your account; they are not transmitted to OpenAI or any other third party at this time.",
    transfersHeading: "8. International data transfers",
    transfersBody:
      "Some of our processors — notably OpenAI, RevenueCat and Expo — are established in the United States. Related international data transfers are governed by the Standard Contractual Clauses adopted by the European Commission, which are the transfer mechanism currently applied by these providers. Apple and Google rely on their own international transfer terms, available in their respective policies. The Supabase hosting region is documented and may be communicated upon request to support@revizioapp.com.",
    retentionHeading: "9. Retention",
    retentionBody:
      "Your account data, progress and content are retained as long as your account is active. Upon account deletion, all data tied to your identifier is removed atomically: profile, progress, courses, sessions, AI contents, photos, voice notes, wallet, transactions and preferences. Technical logs related to payments or AI generations may be retained in a limited form for the period required to comply with our accounting and security obligations, then deleted or anonymized.",
    rightsHeading: "10. Your rights",
    rightsItems: [
      {
        title: "Access",
        body:
          "Obtain a copy of your data via Settings → My account → Export my data. If that is not possible, write to support@revizioapp.com.",
      },
      {
        title: "Rectification",
        body:
          "Edit your profile and preferences from Settings → My account.",
      },
      {
        title: "Erasure",
        body:
          "Delete your account from Settings → My account → Delete my account. Deletion is atomic and immediate. If you cannot do it, write to support@revizioapp.com.",
      },
      {
        title: "Portability",
        body:
          "The export provided from the app is readable and reusable in a structured format.",
      },
      {
        title: "Restriction",
        body:
          "Disable notifications per channel from Settings, or request restriction of a specific processing by emailing support.",
      },
      {
        title: "Objection",
        body:
          "You may object to processing based on legitimate interest by contacting us.",
      },
      {
        title: "Withdrawal of consent",
        body:
          "You may withdraw your consent to notifications at any time from Settings, without affecting the lawfulness of prior processing.",
      },
      {
        title: "Complaint",
        body:
          "You may file a complaint with the French Data Protection Authority (CNIL, www.cnil.fr) or your local authority if you believe your rights are not being respected.",
      },
    ],
    minorsHeading: "11. Minors",
    minorsBody:
      "Revizio offers no features specifically designed for children under 13: no public profile, no user-to-user messaging, no social mechanics. If the user is a minor, we strongly recommend use under the supervision of a parent or legal guardian, using Apple or Google family accounts and their native parental controls (purchase authorization, content restrictions, screen time).",
    securityHeading: "12. Security",
    securityBody:
      "All sensitive tables are protected by Row Level Security on Supabase: each user can only read their own data. The brain wallet and transactions can only be modified through signed server functions (SECURITY DEFINER). The reward ledger is append-only and uses idempotency keys to prevent duplicates. Network communications are encrypted with HTTPS. No API key or secret is stored client-side. Authentication does not rely on any password.",
    changesHeading: "13. Changes to this policy",
    changesBody:
      "This policy may evolve to reflect product, legal or technical changes. Any material change will be notified to you in the app or by email to the address associated with your account. The last update date appears at the top of this page.",
    contactHeading: "14. Contact",
    contactBody: (email) =>
      `For any question regarding this policy or the protection of your data, write to ${email}. We reply on average within 3 business days.`,
  },
  terms: {
    intro:
      "These Terms of Use govern access to and use of the Revizio mobile application (iOS, Android coming soon) and the revizioapp.com website. By creating an account or using the service, you accept these terms without reservation. If you do not accept all or part of these terms, you must stop using the service.",
    sections: [
      {
        heading: "1. Definitions",
        body:
          "\"Revizio\" means the mobile application and the official website operated by the publisher. \"Service\" means all features offered in the app and on the website. \"Account\" means the personal space tied to a unique identifier. \"Plus Subscription\" means the paid offer providing access to certain features. \"Brains\" means the internal virtual currency consumed to generate AI content. \"User Content\" means texts, photos and voice notes that you add. \"Generated Content\" means the outputs produced by AI tools from your prompts.",
      },
      {
        heading: "2. Service description",
        body:
          "Revizio is a mobile learning-by-play app. The service includes an editorial Adventure of 180 pre-generated levels across 6 themed worlds, 8 AI-generated learning mini-games (Quiz, Hangman, True/False Rush, Quick Sort, Chrono Ranking, Memo Duo, Bingo, Crossword), 5 premium AI tools (Course photo Decoder, Structured Memo, Mock Exam, Course Quiz, Smart Notifications), a custom Adventure (10-level mini-worlds generated on a free topic), a daily challenge and a referral program. The service evolves regularly.",
      },
      {
        heading: "3. Account creation and management",
        body:
          "An account is automatically created upon install, in anonymous mode. You can then link your account to an identity provider — Sign-In with Apple, Sign-In with Google, or one-time code received by email — without losing your progress. No password is stored. You are responsible for the confidentiality of the associated identifiers (Apple ID, Google account, access to your email inbox). You agree not to create multiple accounts for a single person. You may delete your account at any time from Settings → My account → Delete my account.",
      },
      {
        heading: "4. Service availability",
        body:
          "The service is provided as-is, without any guarantee of uninterrupted continuity. Its availability may be temporarily affected by maintenance, updates, or technical incidents attributable to us or our processors. We strive to limit such interruptions and to communicate about them where relevant.",
      },
      {
        heading: "5. Subscription plans",
        body:
          "Two offerings are available: Free (free, permanent) and Revizio Plus (monthly or annual subscription). The Free plan gives access to the full Adventure, the 8 AI games, the daily challenge and a preview of the AI tools, within a monthly cap on earned brains and with 5 lives in stock. The Plus plan, priced at €5.99 per month or €49.99 per year (indicative euro prices, localized and adjusted by the stores based on your jurisdiction), gives access to the 5 premium AI tools, a monthly credit of 200 brains, 8 lives, faster life regeneration, and unlimited creation of custom mini-worlds.",
      },
      {
        heading: "6. Access vs. consumption",
        body:
          "The Revizio Plus subscription is an access right to certain features and to a monthly credit. Brains are an internal virtual currency used to fund AI generations. The brain packs available for purchase in the app (50, 125, 335 or 670 brains) only top up that consumption. They do not unlock access to the premium tools reserved for the Plus subscription. A Free user who buys a brain pack does not gain access to the premium tools unless they subscribe to Plus.",
        highlight: true,
      },
      {
        heading: "7. In-app purchases",
        body:
          "All purchases — subscriptions and brain packs — are made through Apple's App Store or the Google Play Store. Revizio never directly processes payment methods and does not store any banking data. Prices are localized and billed by the stores under their own terms of sale. Brain pack purchases are available only to subscribed users.",
      },
      {
        heading: "8. Auto-renewal and cancellation",
        body:
          "The Revizio Plus subscription auto-renews at the end of each period (monthly or annual) at the then-current price, unless cancelled. You may cancel at any time from the subscription settings of your Apple ID or Google Play account, free of charge and without justification, at least 24 hours before the end of the current period. Cancellation takes effect at the end of the current period; Revizio issues no prorated refund. Any free trial, where offered, is governed by the terms displayed at the time of subscription.",
      },
      {
        heading: "9. Restoring purchases",
        body:
          "You may restore prior purchases from the Plans screen or the Settings of the app. Apple or Google transactions associated with your identifier are then automatically replayed via our processor RevenueCat. This operation may be necessary after a reinstall or a device change.",
      },
      {
        heading: "10. Refunds",
        body:
          "Revizio does not directly process monetary refunds. Any refund request falls under Apple's (reportaproblem.apple.com) or Google's (support.google.com/googleplay) policy depending on the store used. Brains that have already been consumed are not refunded in money. However, if an AI generation fails definitively after debit, the corresponding brains are automatically credited back to your wallet: this is not a monetary refund.",
      },
      {
        heading: "11. Brains — virtual currency",
        body:
          "Brains are an internal virtual currency within the Revizio application. They are non-transferable between accounts, have no monetary value outside the app, cannot be converted into money or refunded in cash, and remain strictly tied to your account. Deleting your account results in the permanent loss of your balance, any bonuses, and AI contents generated. Revizio reserves the right to adjust the cost and acquisition rules of brains; such adjustments do not entitle the user to any compensation beyond applicable consumer protection rules.",
      },
      {
        heading: "12. AI-generated content",
        body:
          "The games, study sheets, exams, analyses and other contents produced by the tools are generated by artificial intelligence models (processor: OpenAI). They may contain factual inaccuracies, errors or biases. Revizio does not guarantee any academic or professional outcome and recommends that you always verify generated content before any critical use. Generated content is strictly private to your account and is never shared with other users. Revizio does not reuse your content to train an AI model.",
      },
      {
        heading: "13. User content",
        body:
          "You retain intellectual property over the content you add (courses, chapters, course photos, voice notes, topic prompts). By adding it, you grant Revizio a limited, non-exclusive, free, worldwide and revocable license, strictly necessary for operating the service: secure storage, processing by the AI tools, restitution in your interface. You warrant that you hold the rights over the content you submit and agree not to send any illegal, infringing, defamatory, hateful content or content that violates the rights or privacy of others.",
      },
      {
        heading: "14. Revizio intellectual property",
        body:
          "The application, the website, the code, the design, the pre-generated editorial levels, the daily challenges, the Revizio trademark and its graphic elements (logo, mascot, illustrations) are the exclusive property of the publisher or its partners and are protected by intellectual property law. Any reproduction, scraping, reverse engineering, decompilation or commercial use without prior written authorization is prohibited.",
      },
      {
        heading: "15. Sessions and rewards",
        body:
          "A study session is eligible for rewards (brains, experience, daily streak) only if it lasts at least 10 effective minutes. This rule is intended to preserve the balance of the virtual economy and to prevent abuse. Sessions held too close together may see their experience multiplier reduced. The daily challenge, Adventure levels and referral program follow their own reward rules as described in the app.",
      },
      {
        heading: "16. Referral program",
        body:
          "You have a personal referral code in the REV-XXXXX format. When an invitee uses your code, creates an account and completes a first Adventure level during the day, the referrer receives 10 brains and the invitee receives 10 brains, once per invitee. Self-referral is technically blocked. Any abuse attempt (multiple accounts, fraud, automation) may result in account suspension and revocation of the rewards granted.",
      },
      {
        heading: "17. Code of conduct",
        body:
          "You agree not to: create multiple accounts to bypass monthly caps or referral rules; submit or host illegal, hateful, sexual content involving a minor, or content that infringes the rights of third parties; attempt to bypass security, purchase or reward accounting mechanisms; use the service for commercial purposes without prior written agreement; disrupt the normal functioning of the application or its processors. Failure to comply may result in immediate suspension or termination of the account, without notice when the severity warrants it.",
      },
      {
        heading: "18. Notifications",
        body:
          "Push notifications are opt-in and granular: you can enable or disable each channel (daily challenge, Adventure, AI generation completion, smart reminders, product communications, etc.) from Settings → Notifications at any time.",
      },
      {
        heading: "19. Minors",
        body:
          "The service is not specifically designed for children under 13. If you are a minor, its use is recommended under the supervision of a parent or legal guardian, relying on family accounts and parental controls provided by Apple and Google stores (purchase authorization, content restrictions, screen time).",
      },
      {
        heading: "20. Liability",
        body:
          "The service is provided as-is. Within the limits of mandatory consumer law provisions, Revizio cannot be held liable for indirect damages, nor for the consequences of temporary unavailability, data loss attributable to a third party, or non-conforming use of the service. Nothing in these terms is intended to limit or exclude Revizio's liability for damages that may not be legally excluded.",
      },
      {
        heading: "21. Suspension and termination by Revizio",
        body:
          "In case of serious or repeated breach of these terms, Revizio reserves the right to suspend or terminate your account, after notice where possible. Termination results in loss of access to the service and associated contents. No refund is due where termination results from a breach by the user.",
      },
      {
        heading: "22. Service evolution and changes to these terms",
        body:
          "Revizio may evolve the features, the brain economy, the prices or these terms. Any material change will be notified to you in the app or by email to the address associated with your account. Continued use of the service after notice constitutes acceptance of the new terms; otherwise, you may delete your account.",
      },
      {
        heading: "23. Governing law and jurisdiction",
        body:
          "These terms are governed by French law. In the absence of an amicable agreement, any dispute relating to their performance or interpretation will be brought before the competent French courts, subject to mandatory consumer law provisions allowing consumers to bring proceedings before the courts of their place of residence within the European Union.",
      },
    ],
    contactHeading: "24. Contact",
    contactBody: (email) =>
      `For any question regarding these Terms of Use, write to ${email}.`,
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
