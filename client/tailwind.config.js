/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "baby-pink": "rgba(243, 243, 243, 1)", // Light pink color
        "dark-blue": "rgba(30, 41, 59, 1)",   // Dark blue color
        "red": "#d90429", // Red color
        "whitee": "#ffffff", 
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}