/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/page.tsx" , 
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        main: "#4FD1C5",
        blue: "#003049",
        gray: "#3792F90D", 
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
