/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      purple: '#755CDE',
      orange: '#F6A560',
      pink: '#F39E9E',
      redOrange: '#EB7565',
      greenBlue: '#61C4B7',
      wineRed: '#552049',
      deepBlack: '#030303',
      shallowWhite: '#FFF7F0',
      gray: '#7A746E',
    },
  },
  plugins: [],
}
