const DEV = process.env.NODE_ENV !== 'production';

const autoPrefixer = require('autoprefixer');
const postcssFontMagician = require('postcss-font-magician');
const cssNano = require('cssnano');

const plugins = [
  autoPrefixer,
  postcssFontMagician({
    variants: {
      Raleway: {
        400: ['woff2', 'woff'],
        800: ['woff2', 'woff'],
      },
    },
    foundries: ['google'],
  }),
];

// Use only for production build
if (!DEV) {
  plugins.push(cssNano);
}

module.exports = {plugins};
