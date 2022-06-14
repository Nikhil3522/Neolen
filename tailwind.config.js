/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '280px', 'max': '550px'},

      'md': {'min': '551px', 'max': '800px'},

      'lg': {'min': '801px'},
    },
  },
  plugins: [],
}
