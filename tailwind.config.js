module.exports = {
  purge: [
    './js/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {'com': ['Commissioner', 'ui-sans-serif']},
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(0,0,0,.4),rgba(0,0,0,0)),url('./images/image-hero-mobile.jpg')",
        'hero-desk': "linear-gradient(to bottom, rgba(0,0,0,.4),rgba(0,0,0,0)),url('./images/image-hero-desktop.jpg')",
      },
      backgroundColor:{
        'btn-green':'#3CB4AC'
      },
      textColor:{
        'cyan':'#3CB4AC'
      }
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
