// 这里处理proxy
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://www.xiongmaoyouxuan.com',
        ws: true,
        changeOrigin: true
      }
    }
    // overlay:{
    //   warnings:true,
    //   errors:true
    // }
  }
}
