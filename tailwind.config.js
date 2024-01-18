/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear': 'linear-gradient(to left, rgba(255,255,255,0.15),transparent)'
      },
      gridTemplateColumns: {
        grid1: '40% auto',
      },
      gridTemplateRows: {
        gridRow1: '10% auto'
      },
        colors: {
          projectRed: {
            1: '#FF0000',
            2: '#EB0029'
          } ,
          projectBlack:'#424242',
          projectBorder: '#8a8a8a',
          animatedButton: 'linear-gradient(to left, rgba(255,025,055,0.15),transparent)'
      }
    },
    plugins: [],
  },
};
