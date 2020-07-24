module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    'react-native-paper/babel',
    'lodash',
  ],
  env: {
    production: {
      plugins: [],
    },
  },
};
