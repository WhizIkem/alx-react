const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 8564,
    open: true,
    static: path.join(__dirname, './public'),
  },
  performance: {
    hints: false,
  },
};