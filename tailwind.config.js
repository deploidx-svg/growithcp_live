/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f9d0d4',
          300: '#f4a8b0',
          400: '#ed7685',
          500: '#e24c5e',
          600: '#c62f43',
          700: '#800020',
          800: '#6b001a',
          900: '#5a0016',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
