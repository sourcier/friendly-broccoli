/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        DEFAULT: 'hsl(318, 100%, 58%)',
        50: 'hsl(316, 100%, 97%)',
        100: 'hsl(313, 100%, 95%)',
        200: 'hsl(313, 100%, 89%)',
        300: 'hsl(315, 100%, 80%)',
        400: 'hsl(316, 100%, 67%)',
        500: 'hsl(318, 100%, 58%)',
        600: 'hsl(323, 100%, 50%)',
        700: 'hsl(327, 100%, 44%)',
        800: 'hsl(326, 100%, 36%)',
        900: 'hsl(326, 96%, 30%)',
        950: 'hsl(329, 100%, 19%)',
      },
      secondary: colors.gray,
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
