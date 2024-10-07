import tailwindGridAreas from "@savvywombat/tailwindcss-grid-areas";
import tailwindTypewriter from "tailwind-typewriter";
import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // @see https://tailwindcss.com/docs/container#centering-by-default
    container: { center: true, padding: { DEFAULT: "1rem" } },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      gridTemplateAreas: {
        layout: ["header", "content", "footer"],
      },
      gridTemplateColumns: {
        layout: "1fr",
        card: "repeat(auto-fit, minmax(240px, 1fr))",
        tile: "repeat(auto-fit, 3.5vw)",
      },
      gridTemplateRows: {
        layout: "min-content 1fr min-content",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindGridAreas,
    tailwindTypewriter({
      wordsets: {
        hero: {
          words: ["My playground. Your proof of concept. "],
          blinkSpeed: 1,
          delay: 0.4,
          eraseSpeed: 0,
          repeat: 0,
          writeSpeed: 0.075,
        },
      },
    }),
  ],
};
