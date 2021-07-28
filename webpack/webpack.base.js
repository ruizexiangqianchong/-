// webpack的基础公共配置
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * 解释这段代码，webpack会在启动后从配置的入口模块出发，
 * 找到所有依赖的模块，resolve配置Webpack如何寻找模块对应的文件，
 * 我们配置了extensions，表示在导入语句中没带文件后缀时，Webpack
 * 会自动带上后缀去尝试访问文件是否存在
 */
module.exports = {
  resolve: {
    /**
     * 我们配置了['.js', '.jsx', '.ts', '.tsx']，意味着当遇到
     * import A from './A'时，会先寻找A.js，找不到就找A.jsx，
     * 找不到就A.ts，最后都找不到，就会报错。
     */
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    /**
     * alias代表别名，因为我们经常写 import A from ....这种
     * 路径，特别恶心，
     */
    alias: {
      '@src': path.join(__dirname, '../', 'app/src'),
      '@renderer': path.join(__dirname, '../', 'app/renderer'),
      '@coomon': path.join(__dirname, '../', 'app/src/coomon'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          /**
           * 将css样式用style标签插入页面head中
           */
          'style-loader',
          'css-loader',
          /**
           * 捏妈妈的，安装调试node-sass快吐了，
           * node-sass和这几个loader版本千万别改！！！
           * node-sass安装不了就用cnpm装
           */
          {
            loader: 'fast-sass-loader',
            options: {
              implementation: require('node-sass'),
            },
          },
        ],
      },
      {
        /**
         * 处理图片
         */
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        /**
         * 当匹配到 /\.(js|jsx|ts|tsx)$/ 文件时，
         * 使用 babel-loader 去处理一下。
         * */
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
