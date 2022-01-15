import webpack from 'webpack';
import path from 'path';

const webpackPreprocessorLoader = {
  loader: 'webpack-preprocessor-loader',
  options: {
    directives: {
      secret: true
    },
    params: {
      target: 'base',
      mode: 'production'
    }
  }
};

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    'index': [
      './src/index.ts'
    ],
    'use-toggle': [
      './src/use-toggle/index.ts'
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'ts-loader',
          webpackPreprocessorLoader
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          webpackPreprocessorLoader
        ],
        exclude: /node_modules/
      }
    ]
  },
};

export default config;
