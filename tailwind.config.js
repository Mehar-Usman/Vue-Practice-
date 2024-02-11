  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'sm': '250px', // Custom breakpoint for screens with a width of 320px
        },
        colors:{
          orange:'#f86e03',
          grayShade:'#8a8a8a',
          grayshade2:'#aeb7ca'
        },
        screen:{
          // sm:'300px'
        }
      },
    },
    plugins: [],
  };
