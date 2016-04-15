'use strict';

var path = require('path'),
    webpack = require('webpack'),
    pkg = require('./package.json');

module.exports = {
  devtool: 'eval',
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    // 主程式的進入點
    app: [
      // 使用 Hot Module Replacement (HMR) 機制
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8888',
      path.resolve(__dirname, 'src/app.js')
    ],
    // 打包至 vendors.js
    vendors: ['react']
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement
    // It’s important to specify a correct `output.publicPath` otherwise the hot update chunks cannot be loaded.
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,  // 用正則來匹配文件路徑，這段意思是匹配 js 或者 jsx
      loader: 'babel',  // 加載模塊 "babel" 是 "babel-loader" 的縮寫
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    // 分離主程式與第三方函式庫
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // 等同於在 webpack-dev-server 的 --hot 參數
    new webpack.HotModuleReplacementPlugin(),
    // 若有語法錯誤時不重新整理瀏覽器
    new webpack.NoErrorsPlugin()
  ]
};
