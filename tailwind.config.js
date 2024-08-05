/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/js/app.js"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "sans-serif"],
      },
      colors: {
        /* ### Primary */
        "strong-cyan": "hsl(172, 67%, 45%)",

        /* ### Neutral */
        "very-dark-cyan": "hsl(183, 100%, 15%)" /* text */,
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)" /* input */,
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
