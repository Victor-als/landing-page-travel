/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-search': 'rgba(255,255,255,0.4)',
      },
      backgroundImage: {
        background: 'url(src/assets/montain.jpg)'
      }   
    },
  },
  plugins: [],
}