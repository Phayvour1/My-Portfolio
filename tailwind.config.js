/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          500: '#6b7280', // soft neutral gray
        }
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      lineHeight: {
        tight: '1.05',
        relaxed: '1.7',
      },
      maxWidth: {
        'content': '1200px',
        'paragraph': '680px',
      },
      spacing: {
        'desktop-y': '120px',
        'mobile-y': '80px',
      }
    },
  },
  plugins: [],
}
