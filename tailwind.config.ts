import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This is the bridge between CSS and Tailwind
        sora: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#1A7A5E",
          dark: "#0A0A0A",
        }
      }
    },
  },
  plugins: [],
};
export default config;