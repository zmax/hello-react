## Hello React with webpack [![Build Status](https://travis-ci.org/zmax/hello-react.svg?branch=master)](https://travis-ci.org/zmax/hello-react)

This is just my personal boilerplate, it may or may not be a good fit for your project(s).

### Contains:

- [x] [Babel](https://babeljs.io/)
- [x] [Webpack](https://github.com/webpack/webpack) with [HMR](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html) (hot-reloading)
- [x] [React](https://facebook.github.io/react/)
- [x] Style loader ([Sass](https://github.com/jtangelder/sass-loader))
- [x] [Jest](https://github.com/facebook/jest) + [Enzyme](https://github.com/airbnb/enzyme) <del>or teaspoon</del>
- [x] Redux and Router
- [ ] Server Rendering

<hr/>

#### Packages Installation

```
npm install
```
or
```
npm install --save-dev webpack webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-es2015 style-loader css-loader node-sass sass-loader extract-text-webpack-plugin
```

#### Production Build

```
npm run build
```

#### Develop with hot module replacement

```
npm run dev
```

Then, open your browser on `http://localhost:8888/`


#### Redux and Router

###### Dependencies:

- redux
- react-redux
- react-router-redux
- redux-devtools
- redux-devtools-dock-monitor
- redux-devtools-log-monitor


#### Unit Testing

```
npm test
```

###### Dependencies:

- jest-cli
- babl-polyfill
- react-addons-test-utils
- enzyme
- sinon
