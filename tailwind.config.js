/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT:'1rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    backgroundImage: {
      'hero-pattern': "url('/salon.jpg')",
      pattern: "url('/ecuador/body-bg-pattern.png')",
      hero: "url('/ecuador/hero/bg.png')",
      menu: "url('/ecuador/menu/bg.png')",
      footer: "url('/ecuador/footer/bg.png')",
    },
    
    fontFamily:{
      'sans':"'Open Sans', sans-serif",
      'cormorant':"'Cormorant Upright', serif"
    },
    colors:{
  

      'mes-yellow-100':"#FCF2D1",
      'mes-yellow-200':"#F8E6A4",
      'mes-yellow-300':"#F5D976",
      'mes-yellow-400':"#F1CD49",
      'mes-yellow-500':"#EEBF1B",
      'mes-yellow-600':"#C59E0F",
      'mes-yellow-700':"#94760B",
      'mes-yellow-800':"#634F07",
      'mes-yellow-900':"#312704",

      'mes-red-100':"#FCCDD3",
      'mes-red-200':"#F99BA6",
      'mes-red-300':"#F5697A",
      'mes-red-400':"#F2384D",
      'mes-red-500':"#E70F29",
      'mes-red-600':"#B80C20",
      'mes-red-700':"#8A0918",
      'mes-red-800':"#5C0610",
      'mes-red-900':"#2E0308",

      'mes-green-100':"#D0FBBE",
      'mes-green-200':"#A1F77D",
      'mes-green-300':"#72F33B",
      'mes-green-400':"#4BDB0E",
      'mes-green-500':"#35980A",
      'mes-green-600':"#2A7B08",
      'mes-green-700':"#205C06",
      'mes-green-800':"#153D04",
      'mes-green-900':"#0B1F02",
      
      'mes-white':"#fff",
      'mes-bgAlt':"#EAEAEA",
      
      'body': '#F5F5F4',
      'dark': '#1B1B1A',
      'accent': {
        'DEFAULT': '#F1CD49',
        'hover': '#EEBF1B',
      },
      'grey': {
        'DEFAULT': '#6D6C69',
        '100': '#e4e4e3',
      },


      },
    },  
    extend: {},
  plugins: [],
}