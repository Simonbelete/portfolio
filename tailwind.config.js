module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e8fdf",
        primaryGradient: "linear-gradient(white -26px, #0e8fdf 10px, #0e8fdf)"
      },
      fontFamily: {
        tahoma: ['tahoma']
      },
      cursor: {
        'xp': 'url("../public/cursors/CursorsXP.cur"), default'
      },
      keyframes: {
        leftToRight: {
          '0%': { left: '0px'},
          '25%': { left: '50px'},
          '50%': { left: '100px'},
          '75%': { left: '150px'},
          '10%': { left: '200px'}
        }
      }
    },
  },
  plugins: [],
}
