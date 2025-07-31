/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        theme1: ['Inter', 'system-ui', 'sans-serif'],
        theme2: ['Merriweather', 'serif'],
        theme3: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};