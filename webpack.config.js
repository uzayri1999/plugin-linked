const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            { 
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },

    optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin()
        ],
      },

    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, '.index.html')
            }
        )
    ]
};