// @see https://tailwindcss.com/docs/configuration

// Package modules.
import { fontFamily } from 'tailwindcss/defaultTheme';

// Exports.
module.exports = {
  theme: {
    container: {
      // @see https://tailwindcss.com/docs/container/#centering-by-default
      center: true
    },
    extend: {
      colors: {
        brown: '#69635A',
        gold: '#d8b478'
      },
      fontFamily: {
        heading: ['Bebas Neue', ...fontFamily.sans],
        handwriting: ['EnglandHandDB', 'cursive'],
        title: ['droid-serif', ...fontFamily.serif],
        typewriter: ['CatalinaTypewriter', ...fontFamily.mono]
      }
    }
  }
};
