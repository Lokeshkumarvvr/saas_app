// webpack environment.js

const { environment } = require('@rails/webpacker');

// Get the Babel loader from the environment
const babelLoader = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
      // Add other Babel options or plugins here if needed
    }
  }
};

// Append Babel loader to the environment
environment.loaders.append('babel', babelLoader);

module.exports = environment;
