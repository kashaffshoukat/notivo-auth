
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      colors: {
        brand: {
          50: '#eafaf2',
          100: '#d4f5e4',
          200: '#a9ebca',
          300: '#7fe1b0',
          400: '#54d896',
          500: '#2ace7d', // primary green from hero
          600: '#20a564',
          700: '#177c4b',
          800: '#0d5332',
          900: '#062a19',
        },
        ink: {
          900: '#0f172a',
          700: '#334155',
          500: '#64748b',
          300: '#cbd5e1',
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.06)',
      },
      borderRadius: {
        'xl2': '1.25rem'
      }
    },
  },
  plugins: [],
}
