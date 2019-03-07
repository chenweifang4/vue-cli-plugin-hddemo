/**
 * api: 允许 service 插件针对不同的环境扩展/修改内部的 webpack 配置，并向 vue-cli-service 注入额外的命令。
 * opts: 一个包含 vue.config.js 内指定的项目本地选项的对象，或者在 package.json 内的 vue 字段
 */
module.exports = (api, opts) => {
  /**
  api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
  })
  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
  */

  // 如果一个已注册的插件命令需要运行在特定的默认模式下，则该插件需要通过
  // 这是因为我们需要在加载环境变量之前知道该命令的预期模式，所以需要提前加载用户选项/应用插件。
  /**
  module.exports.defaultModes = {
    build: 'production'
  }
  */
}
