const { override, addWebpackResolve, fixBabelImports } = require('customize-cra');
const postcss = require('react-app-rewire-postcss');
const path = require('path');

require('../sync')('web', process.env.NODE_ENV === 'development');

module.exports = (config) => {
  override(
    fixBabelImports('import', {
      libraryName: 'lodash-es',
      libraryDirectory: '',
      'camel2DashComponentName': false,
    }),

    /**
     * Resolve all dependency
     * which can clash
     */
    addWebpackResolve({
      alias: {
        react: path.resolve(__dirname, '../', 'node_modules', 'preact/compat'),
        'react-dom/test-utils': path.resolve(__dirname, '../', 'node_modules', 'preact/test-utils'),
        'react-dom': path.resolve(__dirname, '../', 'node_modules', 'preact/compat'),
        'react-redux': path.resolve(__dirname, '../', 'node_modules', 'react-redux'),
      },
    }),
  )
  (config);
  postcss(config, true);

  return config;
};
