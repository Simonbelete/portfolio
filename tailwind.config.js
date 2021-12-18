module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
