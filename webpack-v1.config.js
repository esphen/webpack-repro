const path = require('path')
const webpack = require('webpack')
const assetsPath = path.resolve(__dirname, 'dist')

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
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
  }
}
