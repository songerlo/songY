module.exports = {
  // 选项...
  lintOnSave: false,
  publicPath: '/songY',
  devServer: {
    port: 8085, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': 'http://apis.juhe.cn'
        }
      }
    }
  }
}
