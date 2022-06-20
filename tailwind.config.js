/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Lao', 'sans-serif'],
        pops: ['Poppins', 'cursive']
      },
      colors: {
        primary: {
          DEFAULT: '#002250',
          '50': '#ced1d7',
          '100': '#b7bec7',
          '200': '#a1abb9',
          '300': '#8997a9',
          '400': '#72839A',
          '500': '#5C708C',
          '600': '#445C7C',
          '700': '#2E496E',
          '800': '#17365F',
          '900': '#002250'
        }
      }
    }
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
