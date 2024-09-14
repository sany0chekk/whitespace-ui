/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: '#1A75FF',
        lightBlue: '#F0F6FF',
        darkBlue: '#344051',
        dark: '#141C24',
        grey: '#CED2DA',
        darkGrey: '#637083',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
