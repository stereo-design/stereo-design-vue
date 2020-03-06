const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'stereo.js',
    library: 'stereo',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [new VueLoaderPlugin()]
});

module.exports = webpackConfig;
