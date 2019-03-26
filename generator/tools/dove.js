const helpers = require('./helpers')()
const templatesDir = helpers.resolve('../templates')

/**
 * 添加依赖
 * @param {*} api
 */
const addDependencies = (api) => {
  api.extendPackage({
    dependencies: {
      '@yy/dove': '^0.3.1',
      'vue-router': '^3.0.2'
    },
    devDependencies: {
      'node-sass': '^4.9.2',
      'sass-loader': '^7.0.3'
    }
  })
}

/**
 * 注入 import 语句
 * @param {*} api
 */
// const injectImports = (api) => {
//   injectImportsToMain(api)
// }

/**
 * 注入 import 语句到 main文件
 * @param {*} api
 */
// const injectImportsToMain = (api) => {}

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

const renderFiles = (api, options) => {
  // if (options.preset === 'default') {}
  // Generator 的模板处理
  // 当你调用 api.render('./template') 时，该 generator 将会使用 EJS 渲染 ./template 中的文件 (相对于 generator 中的文件路径进行解析)
  api.render(getRenderObj(templatesDir))
}

/**
 * 根据路径删除文件
 * @param {*} path 路径
 */
const removeFile = async (path) => {
  if (!path) throw new Error('删除文件的路径不能为空')
  path = `${process.cwd()}${path}`
  const bool = helpers.existsSync(path)
  if (bool) {
    return helpers.unlink(path)
  } else {
    /* eslint-disable prefer-promise-reject-errors */
    return Promise.reject(path + '文件不存在')
  }
}

/**
 * 根据多个路径删除文件
 * @param {*} paths 路径数组
 */
const removeFiles = async (paths) => {
  if (helpers.getVariableType(paths) !== 'Array') {
    throw new Error('removeFiles 的参数必须是数组')
  }
  try {
    await Promise.all(paths.map(path => removeFile(path)))
  } catch (error) {
    console.log('removeFiles catch error ', error)
  }
}

module.exports = {
  addDependencies,
  renderFiles,
  removeFiles
}
