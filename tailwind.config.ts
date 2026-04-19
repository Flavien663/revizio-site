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
