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
  devtool: 'cheap-source-map',
  entry: {
    main: [
      './app.jsx',
    ],
  },
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    chunkFilename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
    ]
  },
}
