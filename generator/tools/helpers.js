// adapted from https://github.com/vuetifyjs/vue-cli-plugin-vuetify/blob/dev/generator/helpers.js
const fs = require('fs')

module.exports = api => {
  return {
    getMain() {
      const tsPath = api.resolve('src/main.ts')
      return fs.existsSync(tsPath) ? 'src/main.ts' : 'src/main.js'
    }
  }
}