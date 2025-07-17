const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  // ! 配置后webpack会加上node环境下的api
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'server.entry.js',
    path: path.join(__dirname, 'public'),
  },
  optimization: {
    splitChunks: false,
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
