/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        whyte: ["Whyte Regular", "Helvetica", "Arial", "sans-serif"],
        "whyte-extralight": [
          "Whyte Thin Trial",
          "Whyte Regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "whyte-light": [
          "Whyte Light Trial",
          "Whyte Regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "whyte-medium": [
          "Whyte Medium",
          "Whyte Regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
