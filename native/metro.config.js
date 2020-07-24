/**
 * Metro Bundler configuration
 * https://facebook.github.io/metro/docs/en/configuration
 *
 * eslint-env node, es6
 */

const blacklist = require('metro-config/src/defaults/blacklist');
const { getDefaultConfig } = require('metro-config');

const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');
const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

require('../sync')('native', process.env.NODE_ENV === 'development');

async function getConfig(appDir) {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();

  const workspaces = getWorkspaces(appDir);
  const absoluteImports = {};
  getDirectories(path.join(__dirname, 'src')).map((name) => {
    absoluteImports[name] = path.join(__dirname, 'src', name);
    return null;
  });

  const watchFolders = [
    ...workspaces.filter((workspaceDir) => !(workspaceDir === appDir)),
    path.resolve(appDir, '../node_modules'),
  ];

  return {
    watchFolders,
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      blacklistRE: blacklist([
        /^((?!native).)+[/\\]node_modules[/\\]react-native[/\\].*/,
        /common[/\\]node_modules[/\\]react-native-svg[/\\].*/,
      ]),
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      extraNodeModules: {
        ...absoluteImports,

        /**
         * Resolve all dependency
         * which can clash
         */
        'react-redux': path.resolve(appDir, 'node_modules', 'react-redux'),
        'react-native': path.resolve(appDir, 'node_modules', 'react-native'),
        react: path.resolve(appDir, 'node_modules', 'react'),
        'react-native-svg': path.resolve(appDir, 'node_modules', 'react-native-svg'),
        'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
      },
    },
  };
}

module.exports = getConfig(__dirname);
