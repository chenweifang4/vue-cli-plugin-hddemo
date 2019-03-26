/**
 * api：一个 GeneratorAPI 实例，允许一个 generator 向 package.json 注入额外的依赖或字段，并向项目中添加文件。
 * options：这个插件的 generator 选项。这些选项会在项目创建对话过程中被解析，或从一个保存在 ~/.vuerc 中的 preset 中加载。例如，如果保存好的 ~/.vuerc 像如下的这样：
 * rootOptions：整个 preset (presets.foo) 将会作为第三个参数传入
 */

const dove = require('./tools/dove')

// 删除使用 vue create 初始化目录时候多余的文件
dove.removeFiles([
  '/src/components/HelloWorld.vue'
])

module.exports = (api, options, rootOptions) => {
  // 添加依赖
  dove.addDependencies(api)
  // 渲染文件
  dove.renderFiles(api, options)
}
