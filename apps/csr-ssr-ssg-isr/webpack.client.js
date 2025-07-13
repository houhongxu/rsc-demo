const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './client.js',
  output: {
    filename: 'client.entry.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
    ],
  },
}
