var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname,'..','src'),
  devtool: 'source-map',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function(module, count) {
        return module.resource && module.resource.indexOf(path.join(__dirname,'..','node_modules')) === 0;
    }}),
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
      loader: 'style!css',
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules','styles']
  },
};
