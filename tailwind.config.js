/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['Sofia Sans', 'sans-serif'],
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
      }
    },
  },
  plugins: [],
}