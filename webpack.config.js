var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'react-responsive-audio-player',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ["> 2%"] })];
  },
  externals: ['react'],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ],
  watch: true
};

module.exports = webpackConfig;
