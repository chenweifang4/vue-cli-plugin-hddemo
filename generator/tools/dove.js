const addDependencies = function (api) {
  api.extendPackage({
    dependencies: {
      "@yy/dove": "^0.3.1",
      "axios": "^0.18.0"
    }
  })
}

const injectImports = function (api) {
  const utils = require('./helpers')(api)
  api.injectImports(utils.getMain(), `import './plugins/dove.js'`)
}

const renderFiles = function (api, options) {
  console.log('options.preset ', options.preset)
  if (options.preset === 'default') {
    // Generator 的模板处理
    // 当你调用 api.render('./template') 时，该 generator 将会使用 EJS 渲染 ./template 中的文件 (相对于 generator 中的文件路径进行解析)
    api.render({
      './src/plugins/dove.js': '../templates/src/plugins/dove.js',
      './src/App.vue': '../templates/src/App.vue'
    })
  }
}

module.exports = {
  addDependencies,
  injectImports,
  renderFiles
}