/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ams-dark": "var(--color-ams-dark)",
        "ams-light": "var(--color-ams-light)",
        "ams-highlight": "var(--color-ams-highlight)",
        "ams-gray": "var(--color-ams-gray)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
