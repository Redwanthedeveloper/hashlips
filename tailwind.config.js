module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      default: '#fff',
      primary: '#7f18bb',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
    ringColor: {
      primary: '#7f18bb',
    },
    backgroundColor: (theme) => ({  
      ...theme('colors'),
      default: '#fff',
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
};
