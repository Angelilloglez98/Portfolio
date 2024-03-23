/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bulletokilla': ['bulletokilla', 'sans-serif'],
      },
      colors:{
        customOrange:{uno:'#E9BA46',dos:"#ee9b4b"},
        customRed:'#DD5845',
        customYellow:'#F8E2B9',
        customWhite:'#F5F3E7',
        customBlue:'#3D445E'
      }
    },
  },
  plugins: [],
}

