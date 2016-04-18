'use strict';

var path = require('path'),
    webpack = require('webpack'),
    pkg = require('./package.json'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/app.js')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("app.css")
  ]
};

module.exports = Object.assign(require('./webpack.config.js'), config);
