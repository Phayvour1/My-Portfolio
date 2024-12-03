/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
        bold: ['Roboto', 'sans-serif'],
        signika: ['Signika', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        nexafont: ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
