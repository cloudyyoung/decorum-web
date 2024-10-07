/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        player1: '#FFC82F',
        player2: '#08B14B',
        player3: '#007EC5',
        player4: '#EF4B55',
      }
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['BioRhyme', 'serif'],
    },
  },
  plugins: [],
}

