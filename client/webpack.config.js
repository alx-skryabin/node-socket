const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devServer: {
    static: './build',
    port: 8090
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {from: './assets/favicon.png', to: './'},
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
};
