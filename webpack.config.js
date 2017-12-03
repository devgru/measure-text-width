module.exports = {
  context: __dirname,
  entry: './lib/index.js',

  output: {
    path: __dirname,
    filename: 'dist.js',
    libraryTarget: 'umd',
    library: 'MeasureTextWidth'
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  }
};
