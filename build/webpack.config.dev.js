'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',

  // This is the "main" file which should include all other modules
  entry: './src/main.js',

  // This is compiled file destination
  output: {
    filename: 'build.js'
  },

  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true
  },

  // Special compilation rules
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: resolve('src/assets/img'),
      to: resolve('dist/assets/img'),
      toType: 'dir'
    }]),
    new MiniCssExtractPlugin({
    filename: 'main.css'
  })
  ],

  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // vue: 'vue/dist/vue.js',
      '@': path.join(__dirname, '..', 'src')
    }
  }
};