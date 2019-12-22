// @see https://www.11ty.io/docs/config/

// Standard lib.
import {
  existsSync,
  readFileSync
} from 'fs';
import {
  join as joinPath,
  relative as relativePath
} from 'path';
import { URL as NodeURL } from 'url';

// Package modules.
import fetch from 'node-fetch';
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';
import moment from 'moment';
import { sprintf } from 'sprintf-js';

// Local modules.
import { config, homepage } from './package.json';
import inspect from './lib/filters';
import NunjucksLinkExtension from './lib/nunjucks/tags/link';

// Constants.
const INPUT_DIRECTORY = config.input;
// const INTERMEDIATE_DIRECTORY = config.intermediate;
const OUTPUT_DIRECTORY = config.output;
const STAGING = process.env.NODE_ENV === 'staging';

// Exports.
module.exports = (eleventyConfig) => {
  // @see https://www.11ty.io/docs/config/#override-browsersync-server-options
  eleventyConfig.setBrowserSyncConfig({
    // Redirect to 404 page, like gh-pages.
    // @see https://www.11ty.io/docs/quicktips/not-found/#with---serve
    callbacks: {
      ready: (err, bs) => {
        // Read file inside middleware so live updates to the page reflect.
        const notFoundPage = joinPath(OUTPUT_DIRECTORY, '404.html');
        bs.addMiddleware('*', (req, res, next) => {
          if (existsSync(notFoundPage)) {
            res.statusCode = 404;
            res.end(readFileSync(notFoundPage));
          } else {
            next();
          }
        });
      }
    },

    // Configure server to use Parcel output.
    server: OUTPUT_DIRECTORY,

    // Enable Instant Previews in Forestry.
    // @see https://forestry.io/docs/previews/instant-previews/
    ...STAGING && {
      host: '0.0.0.0',
      ui: false
    }
  });

  // Customize Front Matter parsing.
  // @see https://www.11ty.io/docs/data-frontmatter-customize/
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->'
  });

  // Add Markdown plugins.
  // @see https://www.11ty.io/docs/languages/markdown/
  eleventyConfig.setLibrary('md', markdownIt({ html: true }).use(markdownItFootnote));

  // Parcel needs any linter configuration.
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/.*rc*'));

  // Manual passthrough file copy.
  // @see https://www.11ty.io/docs/copy/
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/*.{css,scss,txt}'));
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/*.{eot,ttf,woff,woff2}'));
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/*.{gif,jpeg,jpg,png,svg,webp}'));

  // Copy vanilla JavaScript, but excludes Template Language extensions.
  // @see https://www.11ty.io/docs/languages/javascript/
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/!(*.11ty.js).js'));

  // Add universal filters.
  // @see https://www.11ty.io/docs/filters/
  eleventyConfig.addFilter('date', (date, format) => moment(date).format(format));
  eleventyConfig.addFilter('debug', inspect);
  eleventyConfig.addFilter('format', sprintf);
  eleventyConfig.addFilter('parseUrl', (input) => (new NodeURL(input, homepage)).href);

  // Add custom tags.
  // @see https://www.11ty.io/docs/shortcodes/
  eleventyConfig.addNunjucksTag('link', NunjucksLinkExtension.singleton);

  // Add shortcode.
  // @see https://www.11ty.io/docs/languages/nunjucks/#asynchronous-shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('tweet', async (id) => {
    const res = await fetch(`https://api.twitter.com/1/statuses/oembed.json?id=${id}&omit_script=true`);
    const { html } = await res.json();
    return html;
  });

  // Return configuration options.
  // @see https://www.11ty.io/docs/config/
  return {
    // @see https://www.11ty.io/docs/config/#input-directory
    dir: {
      layouts: relativePath(INPUT_DIRECTORY, joinPath(INPUT_DIRECTORY, '_layouts/'))
    },

    // @see https://www.11ty.io/docs/config/#default-template-engine-for-markdown-files
    markdownTemplateEngine: 'njk'
  };
};
