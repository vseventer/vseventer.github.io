// Standard lib.
import { resolve as resolvePath } from 'path';
import { parse as parseQueryString } from 'querystring';

// Package modules.
import globby from 'globby';
import { DefinePlugin, EnvironmentPlugin } from 'webpack';

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
const WEBFONTS_DIRECTORY = resolvePath(INPUT_DIRECTORY, 'fonts');

// Helpers.
const generateName = (defaultName) => (
  (_, query = '?') => {
    const { name } = parseQueryString(query.substr(1));
    return name || defaultName;
  }
);

// Exports.
module.exports = {
  // Dynamic entry with all files in intermediate.
  context: INTERMEDIATE_DIRECTORY,
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
    filename: 'scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: generateName('[path][name].[ext]') }
          },
          'extract-loader',
          'html-loader'
        ]
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: generateName(
                PRODUCTION ? 'styles/[name].[contenthash:8].css' : 'styles/[name].css'
              )
            }
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: { esModule: true, sourceMap: !PRODUCTION }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !PRODUCTION }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [NODE_MODULE_DIRECTORY]
              },
              sourceMap: !PRODUCTION
            }
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
              name: generateName(
                PRODUCTION ? 'scripts/[name].[contenthash:8].js' : 'scripts/[name].js'
              )
            }
          },
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(gif|jpe?g|svg|png|webm)$/i,
        exclude: WEBFONTS_DIRECTORY,
        use: {
          loader: 'file-loader',
          options: {
            name: generateName(
              PRODUCTION ? 'images/[name].[contenthash:8].[ext]' : 'images/[name].[ext]'
            )
          }
        }
      },
      {
        test: /\.(eot|otf|svg|ttf|woff2?)$/i,
        include: WEBFONTS_DIRECTORY,
        use: {
          loader: 'file-loader',
          options: {
            name: generateName(
              PRODUCTION ? 'fonts/[name].[contenthash:8].[ext]' : 'fonts/[name].[ext]'
            )
          }
        }
      },
      {
        test: /\.txt$/i,
        use: {
          loader: 'file-loader',
          options: { name: generateName('[path][name].[ext]') }
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({ settings: JSON.stringify(settings) }),
    new EnvironmentPlugin({ WEBPACK_DEV_SERVER: false })
  ],
  resolve: {
    alias: { src: INPUT_DIRECTORY }
  },
  devServer: {
    ...STAGING && { host: '0.0.0.0' }
  }
};
