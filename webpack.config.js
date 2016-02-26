var path = require('path');
var webpack = require('webpack');

module.exports = { 
  entry: './src/client.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  }, 
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

};