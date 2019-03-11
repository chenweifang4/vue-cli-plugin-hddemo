/**
 * 内建插件的对话
 */
const helpers = require('./generator/tools/helpers')()
const presets = require(helpers.resolve('./util/presets.js'))
module.exports = [
  {
    name: 'preset',
    message: 'Choose a preset: ',
    type: 'list',
    choices: [
      ...presets
    ],
    default: 'default'
  }
]
