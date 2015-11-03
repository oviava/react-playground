var path = require('path');
var webpack = require('webpack');
var purify = require('purify-css');
var WebpackOnBuildPlugin = require('on-build-webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname,'..','src'),
  entry: {
    index: './index.js',
    vendors: ['history','react','redux','react-dom',
    'react-router','react-redux','redux-router','redux-thunk',
    'redux-devtools','redux-devtools-dock-monitor','redux-devtools-log-monitor']
  },
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : '"production"'
    }),
    new ExtractTextPlugin('../dist/style.css'),
    new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new WebpackOnBuildPlugin(function(){
      purify(['./dist/index.html','./dist/index.js'],['./dist/style.css'],{minify: true, output: './dist/style.css'});
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude : /node_modules/,
      include: path.join(__dirname,'..','src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader'),
    },
    { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
    { test: /\.(png)$/, loader: 'file-loader?name=img/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules','styles']
  },
};
