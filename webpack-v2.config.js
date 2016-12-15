const path = require('path')
const webpack = require('webpack')
const assetsPath = path.resolve(__dirname, 'dist')

module.exports = {
  performance: {
    hints: false,
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval',
  entry: {
    main: [
      './app.js',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
    ]
  },
}
