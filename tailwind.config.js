import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
        "pulse-slower": "pulse 12s ease infinite",
        "pulse-slow": "pulse 8s ease infinite",
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: {
          1: "hsl(var(--color-content1) / <alpha-value>)",
          2: "hsl(var(--color-content2) / <alpha-value>)",
          DEFAULT: "hsl(var(--color-content1) / <alpha-value>)",
        },
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        basecolor: "hsl(var(--color-base) / <alpha-value>)",
        opposite: "hsl(var(--color-shadow) / <alpha-value>)",
        cta: "hsl(var(--color-cta) / <alpha-value>)",
        ctatext: "hsl(var(--color-text-cta) / <alpha-value>)",
        tag: "hsl(var(--color-tag) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
};
