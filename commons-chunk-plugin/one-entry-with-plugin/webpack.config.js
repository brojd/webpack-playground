const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'entry1.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ]
};
