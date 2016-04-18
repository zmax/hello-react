const babelJest = require('babel-jest');
// const webpackAlias = require('jest-webpack-alias');

// https://github.com/atecarlos/webpack-babel-jest/blob/master/index.js
// https://www.npmjs.com/package/jest-webpack-alias
module.exports = {
	process: function(src, filename) {
    if (filename.indexOf('node_modules') === -1) {
  		src = babelJest.process(src, filename)
          .replace(/require\(\s*\'[a-zA-Z0-9\/\.\_\-\!]*\.(css|scss|less)\'\);/gm, '');
      // src = webpackAlias.process(src, filename);
    }
    return src;
	}
};
