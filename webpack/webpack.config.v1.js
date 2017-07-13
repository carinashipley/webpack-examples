// webpack.config.js for Webpack version 1

var path = require('path');
const webpack = require('webpack');

var PATHS = {
  //  In Node.js, __dirname is always the directory in which the currently executing script resides
  src: path.join(__dirname, 'src/')
};


module.exports = {

  entry: {
    'client': ['react-hot-loader/patch', PATHS.src + 'index.js'],

    // this is the entry point of the app, where webpack will start building the JS
    // import statements tell webpack about dependencies
    // the filename is listed first, then the path and filename of the entry point
    'index-v1': [PATHS.src + 'index.js']
  },
  output: {
    // uses the name specificed above in 'entry'
    filename: '/[name].js',

    // where to put the final bundled file
    path: './dist',
    publicPath: '/dist/'
  },

  // Externalize React and ReactDOM, for using a CDN instead of bundling them in with your file(s).
  // This pattern can be used for externalizing anything.
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  resolve: {
    alias: {
      React: 'react',
      ReactDOM: 'react-dom'
    }
  },

  module: {
    preLoaders: [
      {
        // automatically runs eslint everytime you build
        // it will report warnings and errors that you should fix
        test: /\.js$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        // stylesheet loaders, SASS is nicer than plain CSS because it allows 'programming'
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: [PATHS.src]
      },
      {
        // json-loader allows us to easily import json files for testing or
        // working without the database
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        // babel-loader transpiles React JSX into plain JavaScript
        test: /\.js$/,
        loader: 'babel-loader',
        include: [PATHS.src]
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: false
  },

  // devServer allows you to run a server with all kinds of parameters
  // you can even create proxies for different endpoints if needed
  devServer: {
    port:8080,
    https: false,
    hot: true,
    inline: true,
    quiet: false,
    noInfo: false,
    progress: true,
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
