const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: '/dist/'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
