/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}'
  ],

  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        pageBackground: '#f4ede3',
        textBlack: 'black',
        textLight: '#5f5f5f',
        2: '#f04e43',
        gradientStart: '#232323',
        gradientEnd: '#434343',
        emotionVeryGood: '#faf3e8',
        emotionGood: '#fae4e4',
        emotionNeutral: '#e8faf3',
        emotionSad: '#edf3fa',
        emotionVerySad: '#f6ebfa'
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
        h1_1: ['Playfair Display', 'sans-serif'],
        h1: ['Noto Serif JP','serif'],
        date: ['Chocolate Classical Sans', 'sans-serif']
      },

      animation: {}
    }
  },
  plugins: []
}
