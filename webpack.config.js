// webpack.config.js for Webpack version 2

var path = require('path');

var PATHS = {
  //  In Node.js, __dirname is always the directory in which the currently executing script resides
  src: path.join(__dirname, 'src')
};


module.exports = {

  entry: {
    // this is the entry point of the app, where webpack will start building the JS
    // import statements tell webpack about dependencies
    // the filename is listed first, then the path and filename of the entry point
    'index': ['./src/index.js']
  },
  output: {
    // the name of the file that will be created
    filename: 'index.js',

    // where to put the created file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',  // preloader, runs before transpile
        use: [{
          loader: 'eslint-loader', // eslint requires a .eslintrc configuration file
          options: {
            failOnWarning: false, // set to true to fail the build on a warning
            failOnError: false // set to true to fail the build on an error
          },
        }]
      },
      {
        // for building LESS files into the output
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        // for building SASS files into the output
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // the transpiler
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          PATHS.src
        ]
      }
    ]
  },

  // for libraries that will be loaded separately and not as part of the bundle
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'ReactDOM': 'ReactDOM',
    'React': 'React'
  },

  // devServer allows you to run a server with all kinds of parameters
  // including proxies for different endpoints if needed
  devServer: {
    port:8080, // change the port to anything you want
    https: true, // https or http
    hot: true,
    inline: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true },
    proxy: {
      '/api/*': {
        target: 'https://api-url.com',
        changeOrigin: true,
        secure: false
      },
    }
  }
};
