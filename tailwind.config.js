/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': {
          100:'#182737',
          50:'#a0bceb',
          200: '#4dd1c0',
          
        },
        'custom-gray':{
          50: '#b3a392',
          500:'#1f1f1f',
          600: '#112643',
          900:'#191919',
          700: '#7d7d7d',
          300: '#e0e0e0',
        },
        'custom-green':{
          500:'#c6d320',
        },
        'custom-pink':{
          50:'#fb89eb',
          100: '#b567ce',
        },
        'custom-brown':{
          100: '#7f3826',
          200: '#c8b686',
        },
        'custom-purple':{
          50:'#755573',
        },
        'custom-yellow':{
          50:'#fac156',
        },
      },
    },
  },
  plugins: [],
}

