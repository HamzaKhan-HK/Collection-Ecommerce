/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red' : '#D90429',
        'light' : '#ECEAD5'
      },
      spacing: {
        '640': '640px',
        '95vh' : '95vh'
      }
    },
  },
  plugins: [],
}

