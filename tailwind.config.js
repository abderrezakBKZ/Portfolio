module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend:
     {
      colors : {
        purpoleLine : 'rgb(239, 27, 239,0.2)',
        blueDots : 'rgb(10, 110, 171,0.2)'
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
