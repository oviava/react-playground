var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname,'node_modules');
var resolvePaths = {
  react: path.resolve(node_modules, 'react/dist/react.min.js'),
  react_dom: path.resolve(node_modules, 'react-dom/dist/react-dom.min.js'),
  redux: path.resolve(node_modules, 'redux/dist/redux-min.js'),
  react_redux: path.resolve(node_modules, 'react-redux/dist/react-redux.min.js'),
  redux_thunk: path.resolve(node_modules, 'redux-thunk/dist/redux-thunk.min.js')
}

module.exports = {
  context: path.join(__dirname,'..','src'),
  devtool: 'source-map',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './index.js'
    ],
    vendors: [
      'history','react','redux','react-dom',
      'react-router','react-redux','redux-router','redux-thunk',
      'redux-devtools','redux-devtools-dock-monitor','redux-devtools-log-monitor'
    ]
  },
  resolve: {
    alias: {
    'react': resolvePaths.react,
    'react-dom': resolvePaths.react_dom,
    'redux': resolvePaths.redux,
    'react-redux': resolvePaths.react_redux,
    'redux-thunk': resolvePaths.redux_thunk
  }},
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js")
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
