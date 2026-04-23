import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // IMPORTANT
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        border: "var(--border)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
};

export default config;