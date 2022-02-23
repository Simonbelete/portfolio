module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '10px',
      'base': '12px'
    },
    extend: {
      cursor: {
        'xp': 'url("../public/cursors/CursorsXP.cur"), default'
      },
      colors: {
        'mariner': '#245DD7',
        'white-rock': '#F0EFE2',
        'mariner-1': '#316AC5',
        'navy-blue': '#000080',
        'jordy-blue': '#94B2F3',
        'spring-wood': '#F2EFE3'
      }
    },
  },
  plugins: [],
}
