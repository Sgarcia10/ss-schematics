const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/server/main.ts'],
  target: 'node',
  externals: ['newrelic'],
  node: {
    __dirname: false,
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, ],
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist/server']),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(`${process.env.ENV}`)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({
      configFile: "./src/server/tsconfig.json"
    })]
  },
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: '[name].js',
    publicPath: 'dist',
    libraryTarget: 'commonjs',
  },
};
