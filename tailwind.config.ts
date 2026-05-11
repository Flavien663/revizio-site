import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBFAF7",
        "background-strong": "#F5F4EF",
        ink: "#0F1115",
        text: {
          DEFAULT: "#1F2733",
          primary: "#0F1115",
          body: "#1F2733",
          muted: "#5B6472",
          secondary: "#5B6472",
        },
        line: "#E7E5DF",
        surface: { DEFAULT: "#FFFFFF", soft: "#F5F4EF" },
        accent: { DEFAULT: "#F26B3A", deep: "#D95426", soft: "#FFE6D9" },
        gold: { DEFAULT: "#D4A24C", soft: "#FAEED4" },
        success: { DEFAULT: "#22C55E", soft: "#DCFCE7" },
        warning: { DEFAULT: "#F59E0B", soft: "#FEF3C7" },
        danger: { DEFAULT: "#EF4444", soft: "#FEE2E2" },
        // Game palettes
        quiz: { tint: "#EEF2FF", tintStrong: "#E0E7FF", DEFAULT: "#4F46E5", deep: "#3730A3" },
        hangman: { tint: "#F5F3FF", tintStrong: "#EDE9FE", DEFAULT: "#7C3AED", deep: "#5B21B6" },
        bingo: { tint: "#FDF2F8", tintStrong: "#FCE7F3", DEFAULT: "#E11D7A", deep: "#9D174D" },
        crossword: { tint: "#FFFBEB", tintStrong: "#FEF3C7", DEFAULT: "#D97706", deep: "#92400E" },
        "true-false": {
          tint: "#FEF2F2",
          tintStrong: "#FEE2E2",
          DEFAULT: "#DC2626",
          deep: "#991B1B",
        },
        tri: { tint: "#F0FDFA", tintStrong: "#CCFBF1", DEFAULT: "#0D9488", deep: "#115E59" },
        chrono: { tint: "#FFF7ED", tintStrong: "#FFEDD5", DEFAULT: "#C2410C", deep: "#7C2D12" },
        memo: { tint: "#ECFDF5", tintStrong: "#D1FAE5", DEFAULT: "#059669", deep: "#065F46" },
        // World palettes
        culture: { tint: "#ECFEFF", DEFAULT: "#0891B2", deep: "#155E75" },
        words: { tint: "#ECFDF5", DEFAULT: "#10B981", deep: "#065F46" },
        logic: { tint: "#EEF2FF", DEFAULT: "#4338CA", deep: "#312E81" },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: { lg: "14px", xl: "18px", "2xl": "22px", "3xl": "28px" },
      boxShadow: {
        card:
          "0 18px 40px -24px rgba(15, 17, 21, 0.18), 0 2px 8px -4px rgba(15, 17, 21, 0.06)",
        soft: "0 8px 24px -12px rgba(15, 17, 21, 0.12)",
      },
      maxWidth: { container: "1200px", prose: "72ch" },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|ring|border)-(quiz|hangman|bingo|crossword|true-false|tri|chrono|memo|culture|words|logic)(-tint|-tintStrong|-deep)?/,
      variants: ["hover", "group-hover"],
    },
  ],
  plugins: [],
};

export default config;
