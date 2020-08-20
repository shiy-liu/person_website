const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,// 是否需要生产环境的 source map
  css: {
    sourceMap: false, // 是否为 CSS 开启 source map
  },
  devServer: {
    disableHostCheck: true,//webpack4.0 开启热更新
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    mode: 'production',
    externals: {
      echarts: 'echarts'
    },
    module: {
      rules: [
        {
          //js文件才使用babel
          test: /\.js$/,
          loader: 'babel-loader',
          //只在src文件夹下查找
          include: [path.resolve(__dirname, 'src')],
          //不会去查找的路径
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name][hash].css',
        chunkFilename: '[id][hash].css'
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
  },
  chainWebpack: config => {
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = "none";
      return args;
    });
    config.module
      .rule('font')
      .test('/\.(woff2?|eot|ttf|otf)(\?.*)$/')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
};