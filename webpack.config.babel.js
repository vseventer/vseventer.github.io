// Standard lib.
import {
  dirname,
  relative as relativePath,
  resolve as resolvePath
} from 'path';
import { parse as parseUrl } from 'url';

// Package modules.
import globby from 'globby';
import imageminMozjpeg from 'imagemin-mozjpeg';
import ImageminPlugin from 'imagemin-webpack-plugin';
import { parseQuery } from 'loader-utils';
import sharp from 'responsive-loader/sharp';
import {
  DefinePlugin,
  EnvironmentPlugin
} from 'webpack';

// Local modules.
import { config } from './package.json';
import settings from './src/_data/settings.json';

// Constants.
const INPUT_DIRECTORY = resolvePath(__dirname, config.input);
const INTERMEDIATE_DIRECTORY = resolvePath(__dirname, config.intermediate);
const NODE_MODULE_DIRECTORY = resolvePath(__dirname, 'node_modules');
const OUTPUT_DIRECTORY = resolvePath(__dirname, config.output);
const PRODUCTION = process.env.NODE_ENV === 'production';
const STAGING = process.env.NODE_ENV === 'staging';

// Helpers.
const generateName = (defaultName, defaultPath = '') => (
  (resourcePath, resourceQuery) => {
    const { name } = parseQuery(resourceQuery || '?');
    const result = name || defaultName;

    // If resource is a module, simplify [path] to avoid /_/node_modules/....
    if (resourcePath.includes('/node_modules/')) {
      return result.replace(/\[path\]/g, defaultPath);
    }
    return result;
  }
);

// Exports.
module.exports = {
  // Dynamic entry with all files in intermediate.
  context: INPUT_DIRECTORY,
  entry: () => globby('*', {
    absolute: true,
    baseNameMatch: true,
    cwd: INTERMEDIATE_DIRECTORY,
    onlyFiles: true
  }),

  mode: 'development',
  output: {
    path: OUTPUT_DIRECTORY,
    publicPath: '/',
    filename: 'scripts/runtime.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: INTERMEDIATE_DIRECTORY,
              name: generateName('[path][name].[ext]')
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  { tag: 'img', attribute: 'src', type: 'src' },
                  { tag: 'img', attribute: 'srcset', type: 'srcset' },
                  { tag: 'link', attribute: 'href', type: 'src' },
                  { tag: 'script', attribute: 'src', type: 'src' }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: generateName(
                PRODUCTION ? '[path][name].[contenthash:8].[ext]' : '[path][name].[ext]',
                'styles/'
              )
            }
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: { esModule: true, import: false, sourceMap: !PRODUCTION }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !PRODUCTION }
          }
        ]
      },
      {
        test: /\.js$/i,
        exclude: NODE_MODULE_DIRECTORY,
        use: [
          {
            loader: 'spawn-loader',
            options: {
              // @see https://webpack.js.org/configuration/output/#outputfilename
              name: (chunkData) => {
                const { resource } = chunkData.chunk.entryModule;
                const path = dirname(relativePath(INPUT_DIRECTORY, resource));
                return generateName(
                  PRODUCTION ? `${path}/[name].[contenthash:8].js` : `${path}/[name].js`,
                  'scripts/'
                )(resource, parseUrl(resource).search);
              }
            }
          },
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(heic|jpe?g|png|tiff|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: sharp,
            name: PRODUCTION ? '[path][name].[contenthash:8].[ext]' : '[path][name].[ext]',
            quality: 100
          }
        }
      },
      {
        test: /\.(eot|gif|otf|svg|ttf|woff2?)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: generateName(
              PRODUCTION ? '[path][name].[contenthash:8].[ext]' : '[path][name].[ext]',
              'fonts/'
            )
          }
        }
      },
      {
        test: /\.txt$/i,
        use: {
          loader: 'file-loader',
          options: {
            context: INTERMEDIATE_DIRECTORY,
            name: generateName('[path][name].[ext]')
          }
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({ settings: JSON.stringify(settings) }),
    new EnvironmentPlugin({ WEBPACK_DEV_SERVER: false }),
    new ImageminPlugin({
      disable: !PRODUCTION,
      gifsicle: { optimizationLevel: 3 },
      jpegtran: null, // Disabled because we're using mozjpeg.
      optipng: null, // Disabled because we're using pngquant.
      plugins: [
        imageminMozjpeg({ quality: 80, progressive: true })
      ],
      pngquant: { speed: 1, strip: true },
      test: '**/*.{gif,jpeg,jpg,png,svg}'
    })
  ],
  resolve: {
    modules: [INPUT_DIRECTORY, NODE_MODULE_DIRECTORY]
  },
  devServer: {
    ...STAGING && { host: '0.0.0.0' }
  },
  stats: {
    children: false,
    entrypoints: false,
    hash: false,
    modules: false
  }
};
