/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         dimBlack:'#606060',
         primary:'#fff'
      },
      screens:{
        sm:'400px',
        md:'850px',
        lg:'1100px'
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(15rem,1fr))',
      }
    },
  },
  plugins: [],
}