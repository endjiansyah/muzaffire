/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'montserrat' :['Montserrat']
    },
    extend: {},
    container: {
      screens:{
        xl:"1240px",
      },
      center:true

    }
  },
  plugins: [],
}