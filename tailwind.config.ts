import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F26B3A",
          dark: "#D95426",
        },
        background: "#FAFAF9",
        surface: "#FFFFFF",
        border: "#E7E5E4",
        text: {
          primary: "#0F1115",
          secondary: "#57534E",
        },
        ink: "#0F1115",
        muted: "#78716C",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
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
        xl: "14px",
        "2xl": "18px",
        "3xl": "20px",
      },
      maxWidth: {
        container: "1160px",
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
