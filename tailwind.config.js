/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LilitaOne: ["Lilita One", "sans-serif"],
        SourceSerif4: ["Source Serif 4", "serif"],
        Poppings: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
