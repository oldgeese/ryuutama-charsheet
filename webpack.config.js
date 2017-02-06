var path = require('path');

module.exports = {
  entry: "./js/index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
       test: /\.(jsx)$/,
       exclude: /node_modules/,
       use: 'babel-loader',
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /^.*$/,
          to: '/index.html',
        }
      ]
    }
  },
  devtool: 'inline-source-map'
};
