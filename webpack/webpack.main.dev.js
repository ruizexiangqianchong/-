// webpack的主进程开发环境配置
const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

/**
 * 解读一下这段代码，我们定义入口文件为
 * /app/main/electron.js，
 * 并且定义打包出来的文件目录为 dist,
 * 文件名为 electron.js。
 */
const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  // 打包出来的位置和文件名
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  // 将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development
  mode: 'development',
};
// 将baseConfig和当前页面配置合并
module.exports = webpackMerge.merge(baseConfig, mainConfig);
