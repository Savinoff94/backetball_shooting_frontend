const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      ...colors,
      main: colors.gray[800],
      'main-transparent': 'rgba(31,41,55, 0.75)',
      'transparency-zero': 'rgba(0, 0, 0, 0.0)',
      transparent: 'rgba(0, 0, 0, 0.3)',
      'transparent-input': 'rgba(119, 111, 111, 0.3)',
      'rules-text': 'rgba(47, 135, 165)'
    },
    extend: {
      fontFamily: {
        sofia: ['Sofia Sans', 'sans-serif'],
      },
      animation: {
        'custom-ping': 'custom-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { 
            transform:'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(5%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'ping': {
          '75%, 100%': {
            transform: 'scale(1.3)',
            opacity: '0'
          }
          
        }
      },
      backgroundImage: {
        'combined': "url(../public/backgroundImages/combined.png)",
      }
    },
  },
  plugins: [],
}