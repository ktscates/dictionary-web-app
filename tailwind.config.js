/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A445ED",
        red: "#FF5252",
        black: "#050505",
        gray: "#757575",
        lightGray: "#E9E9E9",
        veryLightG: "#F4F4F4",
        veryDarkG: "#1F1F1F",
        darkGray: "#2D2D2D",
        grey: "#3A3A3A",
      },
      fontFamily: {
        mono: ["Inconsolata", "monospace"],
        sans_serif: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
