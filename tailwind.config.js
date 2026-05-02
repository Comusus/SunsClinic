/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf6',
          100: '#faf5ea',
          200: '#f3ead2',
          300: '#e8d8af',
        },
        clay: {
          50: '#faf6f1',
          100: '#f0e6d8',
          200: '#dfc9aa',
          300: '#c9a877',
          400: '#b48a52',
          500: '#9a6f3c',
          600: '#7d5630',
          700: '#5e4126',
          800: '#3f2c1a',
        },
        sage: {
          50: '#f3f6f1',
          100: '#e3ebdd',
          200: '#c6d5bc',
          300: '#9ab38a',
          400: '#759166',
          500: '#587447',
          600: '#445b37',
          700: '#36482c',
        },
        ink: {
          DEFAULT: '#2a241e',
          soft: '#5b5147',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
