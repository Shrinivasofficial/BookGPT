/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: {
          400: '#D2691E',
          700: '#8B4513', // Define the color shades you need
        },
      },
    },
  },
  plugins: [],
}
