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
      // @see https://tailwindcss.com/docs/border-color/#border-colors
      borderColor: {
        default: 'var(--color-neutral)'
      },

      // @see https://tailwindcss.com/docs/customizing-colors/#naming-your-colors
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        complementary: 'var(--color-complementary)',
        neutral: 'var(--color-neutral)'
      },

      // @see https://tailwindcss.com/docs/font-family/#customizing
      fontFamily: {
        handwriting: ['Luxus Brut', 'cursive'],
        title: ['droid-serif', ...fontFamily.serif],
        typewriter: ['CatalinaTypewriter', ...fontFamily.mono]
      },

      // @see https://tailwindcss.com/docs/margin/
      margin: (theme) => ({
        // @see https://tailwindcss.com/docs/margin/#negative-values
        '-6': `-${theme('spacing.6')}`
      })
    }
  }
};
