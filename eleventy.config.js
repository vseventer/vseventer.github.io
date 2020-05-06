// @see https://www.11ty.io/docs/config/

// Standard lib.
import {
  join as joinPath,
  relative as relativePath
} from 'path';
import { URL as NodeURL } from 'url';
import { inspect } from 'util';

// Package modules.
import { format as dateFormat } from 'date-fns';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';
import fetch from 'node-fetch';
import { sprintf } from 'sprintf-js';

// Local modules.
import { config, homepage } from './package.json';
import NunjucksEvalExtension from './lib/nunjucks/tags/eval';
import NunjucksLinkExtension from './lib/nunjucks/tags/link';

// Constants.
const INPUT_DIRECTORY = config.input;
// const INTERMEDIATE_DIRECTORY = config.intermediate;
// const OUTPUT_DIRECTORY = config.output;

// Configure.
// @see https://github.com/markdown-it/markdown-it#init-with-presets-and-options
const markdownRenderer = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}).use(markdownItFootnote);

// Exports.
module.exports = (eleventyConfig) => {
  // Customize Front Matter parsing.
  // @see https://www.11ty.io/docs/data-frontmatter-customize/
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->'
  });

  // Customize Markdown parsing.
  // @see https://www.11ty.dev/docs/languages/markdown/
  eleventyConfig.addFilter('markdown', (value) => markdownRenderer.render(`${value}`));
  eleventyConfig.setLibrary('md', markdownRenderer);

  // Add previous and next post references to blog collection.
  // @see https://brycewray.com/posts/2019/12/previous-next-eleventy/
  eleventyConfig.addCollection('blog', (collection) => {
    const blogCollection = collection.getFilteredByTag('blog');
    return blogCollection.map((page, index) => {
      page.data.prevPost = blogCollection[index - 1];
      page.data.nextPost = blogCollection[index + 1];
      return page;
    });
  });

  // Manual passthrough file copy.
  // @see https://www.11ty.io/docs/copy/
  eleventyConfig.addPassthroughCopy(joinPath(INPUT_DIRECTORY, '**/*.txt'));

  // Add plugins.
  // @see https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add universal filters.
  // @see https://www.11ty.io/docs/filters/
  eleventyConfig.addFilter('date', dateFormat);
  eleventyConfig.addFilter('debug', inspect);
  eleventyConfig.addFilter('format', sprintf);
  eleventyConfig.addFilter('parseUrl', (input) => (new NodeURL(input, homepage)).href);

  // Add custom tags.
  // @see https://www.11ty.io/docs/shortcodes/
  eleventyConfig.addNunjucksTag('eval', NunjucksEvalExtension.singleton);
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
