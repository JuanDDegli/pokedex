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
        },
        'custom-gray':{
          500:'#1f1f1f',
          900:'#191919'
        }
      },
    },
  },
  plugins: [],
}

