/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        iskry: ["Iskry", "serif"],
        neue: ['Neue Montreal', 'sans-serif']
      },
      backgroundImage:{
        'hero_bg': "url('/images/bg.jpg')"
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'bg_color': "#0D0F0E",
        'description_bg': "#ffffff10",
      }
    },
  },
  plugins: [],
}