/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './index.html','./src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main-bg': '#121415'
      },
      gridTemplateColumns: {
        'movies-grid': 'repeat(auto-fill, 230px)',
        'sm-movies-grid': 'w-11/12'
      }
    },
  },
  plugins: [],
}

