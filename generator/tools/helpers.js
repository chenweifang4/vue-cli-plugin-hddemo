const fs = require('fs')
const path = require('path')
const rd = require('rd')
const { promisify } = require('util')
const unlink = promisify(fs.unlink)
const existsSync = fs.existsSync

const fn = () => {
  return {
    resolve (file) {
      return path.resolve(__dirname, file)
    },
    getMain (api) {
      const tsPath = api.resolve('src/main.ts')
      return fs.existsSync(tsPath) ? 'src/main.ts' : 'src/main.js'
    },
    eachFile (dir) {
      let ret = []
      if (!dir || typeof dir !== 'string') return ret
      rd.eachFileFilterSync(dir, (f) => { ret.push(f) })
      return ret
    },
    /**
     * 获取变量的类型
     * @param {*} variable 变量
     */
    getVariableType (variable) {
      // Object.prototype.toString 返回的是格式像 [object Array]，Object.prototype.toString.slice(8, -1) 返回 Array
      return Object.prototype.toString.call(variable).slice(8, -1)
    },
    unlink,
    existsSync
  }
}

module.exports = fn
