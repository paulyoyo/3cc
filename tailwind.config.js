/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "century-gothic": ['"Century Gothic"', "sans-serif"],
      },
      colors: {
        "desaturated-dark-orange": "#877458",
        "dark-grayish-orange": "#a4988b",
        "vivid-orange": "#FB9B0D",
        "soft-orange": "#facd89",
      },
    },
  },
  plugins: [],
};
