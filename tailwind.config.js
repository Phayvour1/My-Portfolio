/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Panchang', 'sans-serif'],
      },
      colors: {
        background: "rgb(var(--bg-primary) / <alpha-value>)",
        foreground: "rgb(var(--text-primary) / <alpha-value>)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
