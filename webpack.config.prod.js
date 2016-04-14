'use strict';

var path = require('path'),
    webpack = require('webpack'),
    pkg = require('./package.json');

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
    })
  ]
};

module.exports = Object.assign(require('./webpack.config.js'), config);
