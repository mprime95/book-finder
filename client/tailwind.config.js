/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
})
