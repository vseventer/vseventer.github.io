// @see https://tailwindcss.com/docs/configuration

// Package modules.
import { fontFamily, lineHeight, spacing } from 'tailwindcss/defaultTheme';

// Helpers.
const fontSizeTuple = (fontSize, baseline = lineHeight.normal) => {
  const unitless = parseFloat(fontSize);
  return [
    fontSize,
    Math.ceil(unitless / baseline) * (baseline / unitless)
  ];
};

// Exports.
module.exports = {
  purge: false, // Managed by PostCSS.
  theme: {
    container: (theme) => ({
      // @see https://tailwindcss.com/docs/container/#centering-by-default
      center: true,

      // @see https://tailwindcss.com/docs/container/#horizontal-padding
      padding: theme('spacing.md')
    }),
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
        handwriting: ['LuxusBrut', 'cursive'],
        title: ['droid-serif', ...fontFamily.serif],
        typewriter: ['CatalinaTypewriter', ...fontFamily.mono]
      },

      // @see https://tailwindcss.com/docs/font-size/#font-sizes
      // @see https://tailwindcss.com/docs/font-size/#providing-a-default-line-height-v1-3-0
      // @see https://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/
      fontSize: {
        kilo: fontSizeTuple('7.478em'),
        mega: fontSizeTuple('5.61em'),
        giga: fontSizeTuple('4.209em'),
        alpha: fontSizeTuple('3.157em'),
        beta: fontSizeTuple('2.369em'),
        gamma: fontSizeTuple('1.777em'),
        delta: fontSizeTuple('1.333em'),
        epsilon: fontSizeTuple('1em'),
        zeta: fontSizeTuple('0.75em')
      },

      // @see https://tailwindcss.com/docs/margin/
      margin: (theme) => ({
        // @see https://tailwindcss.com/docs/margin/#negative-values
        '-md': `-${theme('spacing.md')}`
      }),

      // @see https://tailwindcss.com/docs/customizing-spacing/#extending-the-default-spacing-scale
      spacing: {
        xs: '0.375rem',
        sm: spacing['3'],
        md: spacing['6'],
        lg: spacing['12'],
        xl: spacing['24']
      }
    }
  }
};
