const fs = require('fs')
const path = require('path')
const rd = require('rd')

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
    }
  }
}

module.exports = fn
