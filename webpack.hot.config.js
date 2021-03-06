
const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, 'dist/assets');
const devServerRootPath = path.join(__dirname, 'dist');
const publicPath = '/assets/';
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/client/index.js');

const srcInclude = path.join(__dirname, 'src/client');


const config = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      app: ['react-hot-loader/patch', indexFile],
    },
    resolve: {
      modules: ['src/client', 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: outputPath,
      publicPath,
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: srcInclude,
          exclude: [nodeModulesDir],
          loaders: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new ProgressBarPlugin({
        format: 'Build [:bar] :percent (:elapsed seconds)',
        clear: false,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      contentBase: devServerRootPath,
      port: 3001,
      hot: true,
      historyApiFallback: true,
    },
  };
  
  module.exports = config;