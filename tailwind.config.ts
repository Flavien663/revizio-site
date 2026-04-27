import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        text: {
          DEFAULT: "#1D2B3A",
          primary: "#102033",
          body: "#1D2B3A",
          muted: "#667487",
          secondary: "#667487",
        },
        line: "#E5EBF2",
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F5F8FC",
        },
        background: "#EEF4F8",
        "background-strong": "#E4EEF4",
        accent: {
          DEFAULT: "#4D8DFF",
          deep: "#326BDE",
          soft: "#E7F0FF",
        },
        gold: {
          DEFAULT: "#D4A24C",
          soft: "#FAEED4",
        },
        success: {
          DEFAULT: "#24A57A",
          soft: "#E2F7EF",
        },
        warning: {
          DEFAULT: "#F1A64A",
          soft: "#FFF1DE",
        },
        danger: {
          DEFAULT: "#D96D6A",
          soft: "#FCE9E7",
        },
        lavender: "#A684FF",
        sky: "#6BAAD9",
        mint: "#5AB7A0",
        // Per-tool palettes (mirror app/expo theme — see doc/website-revamp/app-design-tokens.md)
        hangman: {
          tint: "#FEF3E6",
          tintStrong: "#FED7AA",
          DEFAULT: "#F97316",
          deep: "#C2410C",
          ink: "#7C2D12",
        },
        crossword: {
          tint: "#E0F2FE",
          tintStrong: "#BAE6FD",
          DEFAULT: "#0284C7",
          deep: "#075985",
          ink: "#0C4A6E",
        },
        bingo: {
          tint: "#ECFDF5",
          tintStrong: "#A7F3D0",
          DEFAULT: "#059669",
          deep: "#065F46",
          ink: "#064E3B",
        },
        memovisuel: {
          tint: "#F5F3FF",
          tintStrong: "#DDD6FE",
          DEFAULT: "#7C3AED",
          deep: "#5B21B6",
          ink: "#2E1065",
        },
        memostruct: {
          tint: "#FFE4E6",
          tintStrong: "#FECDD3",
          DEFAULT: "#BE123C",
          deep: "#881337",
          ink: "#4C0519",
        },
        quiz: {
          tint: "#E0F2FE",
          tintStrong: "#BAE6FD",
          DEFAULT: "#0284C7",
          deep: "#075985",
          ink: "#0C4A6E",
        },
        exam: {
          tint: "#F0FDFA",
          tintStrong: "#99F6E4",
          DEFAULT: "#115E59",
          deep: "#134E4A",
          ink: "#042F2E",
        },
        notifs: {
          tint: "#DBEAFE",
          tintStrong: "#BFDBFE",
          DEFAULT: "#1E3A8A",
          deep: "#172554",
          ink: "#172554",
        },
        // legacy aliases (backward safety)
        primary: {
          DEFAULT: "#326BDE",
          dark: "#1F4FB8",
        },
        border: "#E5EBF2",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "28px",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(16, 32, 51, 0.18), 0 2px 8px -4px rgba(16, 32, 51, 0.06)",
        soft: "0 8px 24px -12px rgba(16, 32, 51, 0.12)",
        glow: "0 0 0 6px rgba(77, 141, 255, 0.12)",
      },
      maxWidth: {
        container: "1200px",
        prose: "72ch",
      },
      backgroundImage: {
        "grid-soft":
          "radial-gradient(circle at 1px 1px, rgba(16,32,51,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
