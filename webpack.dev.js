const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/frontend/js/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          'presets': [
            ['react'],
          ],
          'plugins': [
            'transform-class-properties',
            'transform-object-rest-spread',
          ]
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' }, 
          { loader: 'less-loader' },
        ]
      },      
      {
        test: /\.woff$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template: './src/frontend/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
