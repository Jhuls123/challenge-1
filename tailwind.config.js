module.exports = {
  content: [
    './public/*.html'
  ],
  theme: {
    extend: {
      width: {
        '100': '100px',
        '500': '500px',
        '60': '60vw',
        '70': '70vw',
        '80': '80vw',
        '90': '90vw',
      },
      height: {
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
      },
      colors: {
        '100': '#00494d',
        '200': '#5e7a7d',
        '300': '#7f9c9f',
        '400': '#c5e4e7',
        '500': '#f4fafa',
        '600': '#f1f1f1f1',
        '700': '#26c0ab',
      },
      fontSize: {
        '24': '24px'
      },
      fontFamily: {
        'monospace': ['Space Mono']
      },
      padding: {
        '26': '81px',
        '27': '82px',
        '28': '83px',
        '29': '84px',
        '30': '85px',
        '31': '86px',
        '32': '87px',
        '33': '88px',
        '34': '89px',
        '35': '90px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
