/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/custom.js'],
  theme: {
    extend: {
      width: {
        '13': '3.25rem',
        '90px': '90px',
        '15': '3.75rem',
        '70px': '70px'
      },
      height: {
        '13': '3.25rem'
      },
      backgroundImage: {
        'digiplus': "url('/assets/img/plus-widget.png')",
        'digiclub': "linear-gradient(76.02deg, #35a6c8 33.32%, #007295 71.55%), radial-gradient(21.29% 87.33% at 50% 50.67%, #7cf2f6 0 ,#35a6c8 100%)",
        'amazing': "linear-gradient(to top, #ef4056, #ef394e)",
        'fresh': "url('/assets/img/freshPattern.svg')"
      },
      backgroundSize: {
        'w100': '100% auto'
      },
      backgroundPosition: {
        'left-center': "left center"
      }
    },
  },
  plugins: [],
}
