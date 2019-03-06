/**
 * api：一个 GeneratorAPI 实例，允许一个 generator 向 package.json 注入额外的依赖或字段，并向项目中添加文件。
 * options：这个插件的 generator 选项。这些选项会在项目创建对话过程中被解析，或从一个保存在 ~/.vuerc 中的 preset 中加载。例如，如果保存好的 ~/.vuerc 像如下的这样：
 * rootOptions：整个 preset (presets.foo) 将会作为第三个参数传入
 */
module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    // scripts: {
    //   test: 'vue-cli-service test'
    // },
    dependencies: {
      "@yy/dove": "^0.3.1",
      "axios": "^0.18.0"
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/dove.js'`)

  // Generator 的模板处理
  // 当你调用 api.render('./template') 时，该 generator 将会使用 EJS 渲染 ./template 中的文件 (相对于 generator 中的文件路径进行解析)
  api.render({
    './src/plugins/dove.js': './templates/src/plugins/dove.js',
    './src/App.vue': './templates/src/App.vue'
  })
}