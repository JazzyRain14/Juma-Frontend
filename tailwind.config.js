/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        dining: "url('/src/Images/Dining.png')"
      },
      gridTemplateColumns: {
          grid1: '40% auto',
      },
      gridTemplateRows: {
        gridRow1: '10% auto'
      },
      // textColor: {
      //   projectRed: '#FF0000'
      // }
      colors: {
        projectRed: '#FF0000',
        projectBlack:'#424242',
        projectBorder:'#8a8a8a',
      }
    },
    plugins: [],
  },
};
