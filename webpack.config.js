var path = require('path');

module.exports = {
  entry: {
    glyphedit: "./src/glyphedit/entry.js",
    settings: "./src/settings/entry.js",
    openproject: "./src/openproject/entry.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.html', '.htm']
  }
};