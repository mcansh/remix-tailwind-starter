const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
