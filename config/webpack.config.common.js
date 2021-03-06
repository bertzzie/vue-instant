var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'vue-instant'
var globalName = 'VueInstant'

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: outputFile + '.common.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
