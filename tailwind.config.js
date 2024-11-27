const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '450': '450px',
      },
      height: {
        '300': '300px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  safelist: [
    'text-purple-500'
  ],
}