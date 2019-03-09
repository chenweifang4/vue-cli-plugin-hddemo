const fs = require('fs')
const helpers = require('../generator/tools/helpers')()

const PRESET_MAP = {
  default: 'Default (recommended)'
}

module.exports = fs.readdirSync(helpers.resolve('../presets')).map(preset => {
  const value = preset.split('.').shift()

  return { name: PRESET_MAP[value], value }
})
