module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'tahoma': ['tahoma']
    },
    fontSize: {
      'sm': '10px',
      'base': '12px',
      "lg": "16px"
    },
    cursor: {
      'auto': 'url("../public/cursors/CursorsXP.cur"), auto',
      'default': 'url("../public/cursors/CursorsXP.cur"), default',
      'pointer': 'url("../public/cursors/Cursor_15.cur"), pointer',
      'wait': 'url("../public/cursors/Cursor_12.cur"), wait',
      'progress': 'url("../public/cursors/Cursor_3.cur"), progress',
      'text': 'url("../public/cursors/Beam.cur, text")',
      'move': 'url("../public/cursors/Cursor_10.cur, move")',
      'help': 'url("../public/cursors/Cursor_13.cur, help")',
      'not-allowed': 'url("../public/cursors/Cursor_11.cur, , not-allowed")',
      'none': 'none',
      'nwse-resize': 'url("../public/cursors/Cursor_6.cur, nwse-resize")',
      'nesw-resize': 'url("../public/cursors/Cursor_7.cur, nesw-resize")',
      'ns-resize': 'url("../public/cursors/Cursor_9.cur, ns-resize")',
      'ew-resize': 'url("../public/cursors/Cursor_8.cur, ew-resize")',
    },
    extend: {
      cursor: {
        'xp': 'url("../public/cursors/CursorsXP.cur"), default',
        'xp-grab': 'url("../public/cursors/Cursor_15.cur"), grabbing',
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
