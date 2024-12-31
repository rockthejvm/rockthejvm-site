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
        holiday: {
          accent: {
            1: "hsl(var(--color-holiday-accent1) / <alpha-value>)",
            2: "hsl(var(--color-holiday-accent2) / <alpha-value>)",
          },
          bkg: "hsl(var(--color-holiday-bkg) / <alpha-value>)",
          card: {
            accent: {
              1: "hsl(var(--color-holiday-card-accent1) / <alpha-value>)",
              2: "hsl(var(--color-holiday-card-accent2) / <alpha-value>)",
            },
            content: {
              1: "hsl(var(--color-holiday-card-content1) / <alpha-value>)",
              2: "hsl(var(--color-holiday-card-content2) / <alpha-value>)",
              DEFAULT:
                "hsl(var(--color-holiday-card-content1) / <alpha-value>)",
            },
          },
          content: {
            1: "hsl(var(--color-holiday-content1) / <alpha-value>)",
            2: "hsl(var(--color-holiday-content2) / <alpha-value>)",
            DEFAULT: "hsl(var(--color-holiday-content1) / <alpha-value>)",
          },
          primary: "hsl(var(--color-holiday-primary) / <alpha-value>)",
          secondary: "hsl(var(--color-holiday-secondary) / <alpha-value>)",
          basecolor: "hsl(var(--color-holiday-base) / <alpha-value>)",
          opposite: "hsl(var(--color-holiday-shadow) / <alpha-value>)",
          cta: "hsl(var(--color-holiday-cta) / <alpha-value>)",
          ctatext: "hsl(var(--color-holiday-text-cta) / <alpha-value>)",
          tag: "hsl(var(--color-holiday-tag) / <alpha-value>)",
        },
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        basecolor: "hsl(var(--color-base) / <alpha-value>)",
        opposite: "hsl(var(--color-shadow) / <alpha-value>)",
        cta: "hsl(var(--color-cta) / <alpha-value>)",
        ctatext: "hsl(var(--color-text-cta) / <alpha-value>)",
        tag: "hsl(var(--color-tag) / <alpha-value>)",
        search: "hsl(var(--color-search) / <alpha-value>)",
        key: "hsl(var(--color-key) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
};
