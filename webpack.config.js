var path = require('path');

module.exports = {
  entry:"./js/ryutama-react.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(jsx)$/, use: 'babel-loader'}
    ]
  }
};
