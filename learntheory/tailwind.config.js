/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      margin: {
        '1/2': '50%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/5': '20%',
        // Add more as needed
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};