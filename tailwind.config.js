const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'register': "url('/src/register.jpg')",
      }),
      colors: {
        'teal': colors.teal,
        'orange': colors.orange,
        'hamid': "#31E7EE"
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
