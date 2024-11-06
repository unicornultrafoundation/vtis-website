import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neueBold: "var(--font-neue-bold)",
        neueMed: "var(--font-neue-med)",
      },
      screens: {
        mobile: "430px",
        tablet: "768px",
        laptop: "1280px",
        desktop: "1512px",
        fullscreen: "3840px",
      },
    },
  },
  plugins: [],
};
export default config;
