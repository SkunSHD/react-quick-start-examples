var path = require('path');


module.exports = {
  context: path.join(__dirname, "src"),

  entry: "./js/entry.js",

  output: {
      path: __dirname + "/src/",
      publicPath: "/assets/",
      filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
    ]
  }

}