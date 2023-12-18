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
    },
    plugins: [],
  }
}
