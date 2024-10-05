/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js"

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

