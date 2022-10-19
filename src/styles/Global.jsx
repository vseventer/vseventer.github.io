// Package modules.
import { createStitches } from '@stitches/react';

// Configure.
export const { config, css, getCssText, globalCss } = createStitches({
  theme: {
    color: {
      primary: '0 0% 87%',
      secondary: '220 14% 96%', // Tailwinds' gray.100.
      accent: '250 77% 45%',
      highlight: '250 77% 70%', // Accent + 25% lightness.
      foreground: '221 39% 11%', // Tailwinds' gray.900.
      background: '210 20% 98%', // Tailwinds' gray.50.
    },
    space: {
      sm: '0.75rem',
      md: '1.5rem',
      lg: '3rem',
    },
  },
  utils: {
    // Use the optimal amount of letter spacing (https://twitter.com/verse_/status/1561369959967621121).
    fontSize(size) {
      const a = -0.0223;
      const b = 0.185;
      const c = -0.1745;
      const tracking = a + b * Math.E ** (c * size);
      return {
        fontSize: size,
        letterSpacing: `${tracking}em`,
        lineHeight: 24 / size * Math.ceil(size / 24),
      };
    },
  },
});

// Components.
export default function Global() {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: getCssText() }}
      id="stitches"
    />
  );
}
