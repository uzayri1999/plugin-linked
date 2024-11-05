const PugPlugin = require('pug-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new PugPlugin({
      entry: {
        index: 'src/index.pug',
      },
    }),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ]
};