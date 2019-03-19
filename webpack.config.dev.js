import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // compilation vs. quality
  devtool: 'inline-source-map',
  // Evironment
  mode: 'development',
  //entry point
  entry: [
    path.resolve(__dirname, 'src/index'),
  ],
  target: 'web',
  // doesn't actually make these files. Only serves them from memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'src')
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
  // handles different filetypes
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
