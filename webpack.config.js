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
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        reportFiles: ['src/**/*.{ts,tsx}']
      }
    }, ],
  },
  stats: {
    warningsFilter: /Critical dependency/
  },
  mode: 'none',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['build/server']),
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
    path: path.join(__dirname, 'build/server'),
    filename: '[name].js',
    publicPath: 'build',
    libraryTarget: 'commonjs',
  },
};
