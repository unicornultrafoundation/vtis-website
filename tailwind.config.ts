import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        neueBold: "var(--font-neue-bold)",
        neueMed: "var(--font-neue-med)"
      },
      screens: {
        mobile: "430px",
        tablet: "768px",
        laptop: "1280px",
        desktop: "1512px",
        fullscreen: "3840px"
      },
      keyframes: {
        'fade-in-up-blur': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
            filter: ' blur(4px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
            filter: 'blur(0px)'
          }
        },
        'slide-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(25px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        'card-image-animation': {
          '0%': {
            transform: 'scale(1.25)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      },
    }
  },
  plugins: []
};
export default config;
