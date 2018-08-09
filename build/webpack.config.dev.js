'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    filename: 'build.js'
  },

  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },

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
          'vue-style-loader',
          'css-loader'
        ]
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
    })
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      app: path.resolve(__dirname, 'src')
    }
  }
};