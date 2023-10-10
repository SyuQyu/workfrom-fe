/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gold': {
          '50': '#ffffe7',
          '100': '#feffc1',
          '200': '#fffd86',
          '300': '#fff441',
          '400': '#ffe60d',
          '500': '#ffd700',
          '600': '#d19e00',
          '700': '#a67102',
          '800': '#89580a',
          '900': '#74480f',
          '950': '#442604',
      },
      
      }
    },
  },
  plugins: [],
});
