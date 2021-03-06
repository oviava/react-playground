var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname,'..','src'),
  entry: {
    index: './index.js',
    vendors: ['react','redux']
  },
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : 'production'
    }),
    new ExtractTextPlugin('../dist/style.css'),
    new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude : /node_modules/,
      include: path.join(__dirname,'..','src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader'),
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=200000' }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules','styles']
  },
};
