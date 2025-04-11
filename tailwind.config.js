/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rubik:["Rubik","sans-serif"],
        openSans:["Open Sans","sans-serif"]
      },
      screens:{
        xs:"575px",
        sm:"768px",
        md:"992px",
        lg:"1200px",
        xl:"1400px"
      },
      colors:{
        primaryClr:"#35736E",
        secondaryClr:'#F9BF29',
        lightClr:'#D9D9D9',
        grayClr:'#6A6A6A'
      }
    },
  },
  plugins: [],
}