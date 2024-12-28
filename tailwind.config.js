import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{scss,css}", "./src/**/*.{tsx,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      xs: "560px",
      ...defaultTheme.screens,
    },
    extend: {
      borderColor: {
        DEFAULT: "var(--color-border)",
      },
      fontSize: {},
    },
  },
  plugins: [],
};
