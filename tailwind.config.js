

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '576px' },
      'sm': { 'min': '768px' },
      'md': { 'min': '992px' },
      'lg': { 'min': '1200px' },
      'xl': { 'min': '1400px' },
      '2xl': { 'min': '1600px' },
      //'3xl': {'max': '1800px'},
    },
    extend: {},
  }
}