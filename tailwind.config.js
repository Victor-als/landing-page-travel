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
        'background-black': 'rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        background: 'url(src/assets/images/montain.jpg)',
        backgroundTrip: 'url(src/assets/images/trip.jpg)',
        backgroundFooter: 'url(src/assets/images/montainFooter.jpg)'
      }   
    },
  },
  plugins: [],
}