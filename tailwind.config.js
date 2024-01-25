/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'preto-claro': '#0F0F0F',
        'preto-escuro' : '#0B0B0B',
        'verde' : '#FF9B59'
      },
      screens: {
        'mini': '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1600px',
      },
      boxShadow: {
        'sombreado-verde': '0px 0px 10px #FF9B59, 0px 0px 10px #FF9B59 inset',
        'sombreado-verde2': '0px 0px 5px #FF9B59, 0px 0px 5px #FF9B59 inset'

      }
    },
  },
  plugins: [],
}