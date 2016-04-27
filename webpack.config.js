var path = require('path');

module.exports = {
  entry: {
    frame: "./src/entry.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [
          path.join(__dirname, 'src'),
        ],
      }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.css']
  }
};