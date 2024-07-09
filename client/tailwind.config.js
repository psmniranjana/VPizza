/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        Primary: '#07EB44',
        Secondary:'#0039F5'
      },
      fontFamily:{
        Smokum: 'Smokum-Regular',
        Ranger: 'Ranger-Italic-Shadow'
      },
    },
  },
  plugins: [],
}

