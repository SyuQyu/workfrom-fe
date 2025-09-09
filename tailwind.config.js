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
        'blue': {
          '50': '#e3f2fd',
          '100': '#bbdefb',
          '200': '#90caf9',
          '300': '#64b5f6',
          '400': '#42a5f5',
          '500': '#1976d2',
          '600': '#1565c0',
          '700': '#0d47a1',
          '800': '#0b3c91',
          '900': '#082a6c',
        },
        'green': {
          '50': '#f4fbe5',
          '100': '#e6f7c2',
          '200': '#cddc39',
          '300': '#b2d430',
          '400': '#8bc34a',
          '500': '#689f38',
          '600': '#558b2f',
          '700': '#33691e',
          '800': '#264d12',
          '900': '#1b360c',
        }
      }
    },
  },
  plugins: [],
});
