const path = require('path')
const webpack = require('./node_modules/webpack/lib/webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
if(!process.env.NODE_ENV) process.env.NODE_ENV = 'production'
const envPath = '.env' + (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== undefined ? '.' + process.env.NODE_ENV : '');
require('dotenv-expand')(require('dotenv').config({path: envPath}));

const mixEnvKeys = Object.keys(process.env).filter(k => k.indexOf('MIX_') === 0);

let mixEnv = {};
mixEnvKeys.forEach(k => {
  let val = process.env[k];
  val = "'" + val + "'";
  mixEnv['process.env.' + k] = val;
})

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'resources/js/app.js'),
      path.resolve(__dirname, 'resources/css/app.css')
    ],
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.DefinePlugin(mixEnv),
    new webpack.EnvironmentPlugin(mixEnvKeys)
  ],
  mode: 'production',
  resolve: {
    extensions: ['.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
};

