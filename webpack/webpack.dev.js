// const webpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const common = require('./webpack.common.js');

// webpackDevServer
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../../dist',
    hot: true
  }
});
