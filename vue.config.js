module.exports = {
  publicPath:'./',
  devServer: {
    disableHostCheck: true,//webpack4.0 开启热更新
  },
  chainWebpack: config => {
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = "none";
      return args;
    });
  }
};