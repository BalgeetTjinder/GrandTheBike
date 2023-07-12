const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../static'), to: 'static' }],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html'),
    }),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    modules: [Path.resolve(__dirname, '../src'), Path.resolve(__dirname, '../node_modules')],
    alias: {
      Src: Path.resolve(__dirname, '../src'),
      Img: Path.resolve(__dirname, '../src/img'),
      Style: Path.resolve(__dirname, '../src/style/'),
      Services: Path.resolve(__dirname, '../src/services'),
      Store: Path.resolve(__dirname, '../src/store/'),
      Pages: Path.resolve(__dirname, '../src/pages/'),
      Hooks: Path.resolve(__dirname, '../src/hooks/'),
      Components: Path.resolve(__dirname, '../src/components/'),
      Utils: Path.resolve(__dirname, '../src/utils/'),
      Static: Path.resolve(__dirname, '../src/static/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
