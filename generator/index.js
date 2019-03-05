module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api)

  api.injectImports(utils.getMain(), `import './plugins/dove.js'`)

  api.render({
    './src/plugins/dove.js': './templates/src/plugins/dove.js',
    './src/App.vue': './templates/src/App.vue'
  })

  api.extendPackage({
    dependencies: {
      "@yy/dove": "^0.3.1",
      "axios": "^0.18.0"
    }
  })
}