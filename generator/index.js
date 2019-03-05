module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "@yy/dove": "^0.3.1",
      "axios": "^0.18.0"
    }
  })
}