# webpack-examples
Different configurations using webpack because I can't keep all of this straight.

## CSS - Integration vs Separate Files
While it's common to integrate your CSS in with your JavaScript bundle, this seems to remove the ability to install your React Components server-side because Node cannot interpret the CommonJS modules that have been created. Instead, create separate CSS files.

## Webpack 2
[Migration guide] from Webpack 1 to Webpack 2.

[webpack.config.js]

## Webpack 1
[webpack.config.v1.js]

[Migration guide]: https://webpack.js.org/guides/migrating/
[webpack.config.js]: https://github.com/carinashipley/webpack-examples/blob/master/webpack.config.js
[webpack.config.v1.js]: https://github.com/carinashipley/webpack-examples/blob/master/webpack/webpack.config.v1.js
