/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#0B0C10',
        'gray' : '#1F2833',
        'light-gray': '#C5C6C7',
        'light-green': '#66FCF1',
        'green':'#45A29E',
      },
    },
  },
  plugins: [],
}
