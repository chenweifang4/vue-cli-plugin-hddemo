/**
 * 内建插件的对话
 * 1. 只有内建插件可以定制创建新项目时的初始化对话
 * 2. 一个对话模块应该导出一个函数
 */
module.exports = [
  {
    name: `initLayout`,
    type: 'confirm',
    message: '是否初始化布局？',
    default: true,
  },
]

/**
 * api: 这个函数接收一个 PromptModuleAPI 实例
 */
/**
module.exports = api => {
  // 一个特性对象应该是一个有效的 inquirer 选择对象
  api.injectFeature({
    name: 'Some great feature',
    value: 'my-feature'
  })

  // injectPrompt 期望接收一个有效的 inquirer 对话对象
  api.injectPrompt({
    name: 'someFlag',
    // 确认对话只在用户已经选取了特性的时候展示
    when: answers => answers.features.include('my-feature'),
    message: 'Do you want to turn on flag foo?',
    type: 'confirm'
  })

  // 当所有的对话都完成之后，将你的插件注入到
  // 即将传递给 Generator 的 options 中
  api.onPromptComplete((answers, options) => {
    if (answers.features.includes('my-feature')) {
      options.plugins['vue-cli-plugin-my-feature'] = {
        someFlag: answers.someFlag
      }
    }
  })
}
 */