const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }
    ],
  },
  devtool: 'source-map',

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};




// module.exports = {
//   devtool: 'inline-source-map',
//   entry: __dirname + '/app.jsx',
//   output: {
//     filename: 'bundle.js'
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         loader : 'babel',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.scss$/,
//         loaders: ['style', 'css', 'sass']
//       }
//     ]
//   },
//   devtool: 'source-map'
// }
