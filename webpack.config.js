const path = require('path');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'build');

config = {
  entry: {
    content: path.join(src, 'content'),
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: [ /\.js$/ ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
};

module.exports = config
