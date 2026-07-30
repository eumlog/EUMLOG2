/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'eum-bg': '#F9F6F1',
        'eum-dark': '#233723',
        'eum-accent': '#B08F4A',
        'eum-gray': '#C7BAA6'
      }
    },
  },
  plugins: [],
}
