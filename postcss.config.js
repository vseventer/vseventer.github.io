// @see https://github.com/postcss/postcss-loader#configuration

// Standard lib.
import { join as joinPath } from 'path';

// Package modules.
import cssnano from 'cssnano';
import atImport from 'postcss-import';
import presetEnv from 'postcss-preset-env';
import purgecss from '@fullhuman/postcss-purgecss';
import reporter from 'postcss-reporter';
import url from 'postcss-url';
import stylelint from 'stylelint';
import tailwind from 'tailwindcss';

// Local modules.
import { config } from './package.json';

// Constants.
// const INPUT_DIRECTORY = config.input;
const INTERMEDIATE_DIRECTORY = config.intermediate;
// const OUTPUT_DIRECTORY = config.output;

// @see https://www.11ty.io/docs/languages/
// const ELEVENTY_TEMPLATE_LANGUAGES = [
//   'html', 'md', '11ty.js', 'liquid', 'njk', 'hbs', 'mustache', 'ejs', 'haml', 'pug', 'jstl'
// ];

// Exports.
module.exports = ({ file, env }) => {
  // Runtime constants.
  const PRODUCTION = env === 'production';

  // Build list of plugins.
  const plugins = [
    atImport({
      plugins: [
        // @see https://stylelint.io/user-guide/usage/postcss-plugin
        stylelint(),

        // Rebase asset URLs to work after inlining imported file.
        // @see https://github.com/postcss/postcss-import/blob/master/README.md
        url({ assetsPath: file.dirname })
      ]
    }),
    tailwind(),
    presetEnv({
      // Use stage 3 features + CSS nesting rules.
      features: { 'nesting-rules': true },
      preserve: !PRODUCTION,
      stage: 3
    }),

    // Production plugins.
    ...PRODUCTION ? [
      purgecss({
        // Purge using full output (more precise, but slow).
        content: [joinPath(INTERMEDIATE_DIRECTORY, '**/*.html')],

        // Purge using templates (fast, but lots of false negatives).
        // content: [joinPath(INPUT_DIRECTORY, `**/*.{${ELEVENTY_TEMPLATE_LANGUAGES}}`)],

        // Match all of the non-standard characters Tailwind uses by default.
        // @see https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],

        fontFace: true,
        keyframes: true,
        variables: true
      }),
      cssnano()
    ] : [],

    reporter({ clearReportedMessages: true })
  ];

  // Return the configuration.
  return { plugins };
};
