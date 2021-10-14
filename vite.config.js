// Standard lib.
import {
  extname,
  resolve,
} from 'path';

// Package modules.
import globby from 'globby';

// Local modules.
import { config } from './package.json';

// Constants.
const INPUT_DIRECTORY = resolve(__dirname, config.input);
const INTERMEDIATE_DIRECTORY = resolve(__dirname, config.intermediate);
const OUTPUT_DIRECTORY = resolve(__dirname, config.output);

// Output map.
const ASSET_MAP = {
  'css': 'styles',
};

// Helpers.
function getEntryPoints(dir) {
  return globby('*', {
    absolute: true,
    baseNameMatch: true,
    cwd: dir,
    onlyFiles: true
  });
}

// Exports.
module.exports = async () => {
  const files = await getEntryPoints(INTERMEDIATE_DIRECTORY);

  return {
    assetsInclude: ['**/*.txt'],
    root: INTERMEDIATE_DIRECTORY,

    build: {
      assetsDir: 'scripts',
      outDir: OUTPUT_DIRECTORY,
      rollupOptions: {
        input: files,
        output: {
          assetFileNames({ name }) {
            if (name.includes('node_modules/')) {
              return 'vendor/[name].[hash][extname]';
            }
            const dir = ASSET_MAP[extname(name).substr(1)] ?? 'assets';
            return `${dir}/[name].[hash][extname]`;
          }
        }
      }
    },
    resolve: {
      alias: {
        '/src': INPUT_DIRECTORY,
        '/~': resolve(__dirname, 'node_modules/'),
      }
    },
  };
};
