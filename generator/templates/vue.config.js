module.exports = {
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[local]-[hash:8]'
      },
      sass: {
        data: `@import "~@/scss/variables.scss";`
      }
    }
  },
  // 生产环境下关闭sourceMap
  productionSourceMap: false
}
