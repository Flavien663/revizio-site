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
        background: "#0B0D12",
        surface: "#14171F",
        elevated: "#1B1F29",
        border: "#262B36",
        text: {
          primary: "#F5F7FA",
          secondary: "#A7B0BE",
        },
        ink: "#0B0D12",
        muted: "#6B7280",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
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
