const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProv = !isDev;
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/entry/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
    hot: isDev,
    watchOptions: {
      poll: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/blocks'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: 'src/js/postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
          },

        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: 'src/js/postcss.config.js' } },
          },

        ],
      },
      {
        test: /\.(gif|img|png|jpg|jpeg|svg)$/,
        exclude: [/fonts/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)/,
        loader: 'file-loader',
        exclude: [/image/],
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          minify: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].css',
      },
    ),
    new HtmlWebpackPlugin(
      {
        hash: false,
        template: './page/app.pug',
        filename: 'app.html',
        minify: {
          collapseWhitespace: isProv,
        },
        hmr: true,
        reloadAll: true,
      },
    ),
    new CopyWebpackPlugin(
      [
        {
          from: path.join(__dirname, 'src', 'assets', 'img'),
          to: path.join(__dirname, 'dist', 'assets', 'img'),
        },
        {
          from: path.join(__dirname, 'src', 'assets', 'fonts'),
          to: path.join(__dirname, 'dist', 'assets', 'fonts'),
        },

      ],
    ),
    new webpack.ProvidePlugin(
      {
        Vue: 'vue',
        vue: 'vue',

      },
    ),
  ],
};
