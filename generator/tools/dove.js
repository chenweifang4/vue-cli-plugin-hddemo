const helpers = require('./helpers')()

const templatesDir = helpers.resolve('../templates')

/**
 * 添加依赖
 * @param {*} api 
 */
const addDependencies = function (api) {
  api.extendPackage({
    dependencies: {
      "@yy/dove": "^0.3.1",
      "axios": "^0.18.0"
    }
  })
}

/**
 * 注入 import 语句
 * @param {*} api 
 */
const injectImports = function (api) {
  api.injectImports(
    helpers.getMain(api),
    `
      import './plugins/dove.js';
      import './scss/variables.scss';
      import './scss/reset.scss'
    `
  )
}

/**
 * 获取渲染的对象
 * @param {*} dir 
 * @param {*} cutout 
 */
const getRenderObj = (dir, cutout = 'templates') => {
  let ret = {}
  helpers
    .eachFile(dir)
    .forEach(item => {
      let key = `.${item.split(cutout)[1]}`
      ret[key] = item
    })
  return ret
}

const renderFiles = function (api, options) {
  if (options.preset === 'default') {
    // Generator 的模板处理
    // 当你调用 api.render('./template') 时，该 generator 将会使用 EJS 渲染 ./template 中的文件 (相对于 generator 中的文件路径进行解析)
    api.render(getRenderObj(templatesDir))
  }
}

module.exports = {
  addDependencies,
  injectImports,
  renderFiles
}