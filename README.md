## Hello React with webpack [![Build Status](https://travis-ci.org/zmax/hello-react.svg?branch=master)](https://travis-ci.org/zmax/hello-react)

This is just my personal boilerplate, it may or may not be a good fit for your project(s).

### Contains:

- [x] Babel
- [x] Webpack with hot-loader
- [x] React
- [x] Jest
- [x] Style loader (Sass)
- [x] Enzyme <del>or teaspoon</del>

<hr/>

#### Using webpack to bundle scripts

```
npm install
```
or
```
npm install --save-dev webpack webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-es2015 style-loader css-loader  node-sass sass-loader extract-text-webpack-plugin
```

#### Build scripts

```
npm run build
```

#### Develop with hot module replacement

```
npm run dev
```

Then, open your browser on `http://localhost:8888/`


#### Unit Testing

Dependencies: `jest-cli babl-polyfill react-addons-test-utils enzyme sinon`

```
npm test
```
