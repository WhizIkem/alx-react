const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // Image handling rule configuration for .jpg files
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              bypassOnDebug: true,
            },
          },
        ],
      },
      // CSS rule configuration
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  performance: {
    hints: false, // Suppress the performance warning
  },
};