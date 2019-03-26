# 介绍
vue-cli-plugin-hddemo是一个基于vue-cli3、以 `dove`（基于Vue）为UI组件的一个插件

# 安装

安装准备

- 首先确保本地全局装有 [vue-cli3](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5)
- 在已有基于`vue-cli3`初始化的项目下或者通过 `vue create` 生成的项目下使用

**注意**

我们推荐你使用 `vue create` 命令初始化项目后安装该插件，如果你是在已有的项目操作，建议你先把变动的文件提交到`git`仓库，以免被覆盖（==**在安装该插件的时候会对项目目录进行修改**==）

安装

- 在确保您已经阅读并清楚上面的前提和提醒后，执行以下命令

```
vue add hddemo
```

# 更新日志

详情见 [CHANGELOG](./CHANGELOG.md)

# TODO
- [x] 使用[husky](https://github.com/typicode/husky)管理`git`钩子
- [x] 规范 `commit-msg`
- [x] [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)自动生成`CHANGELOG`
- [x] 添加[release-it](https://github.com/release-it/release-it)`CLI`发布工具
- [x] 添加登录页面样式
- [ ] 为什么`rd`不能作为`devDependencies`依赖
- [ ] 添加使用对话详情供用户选择

## 参考链接
- https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5
- https://itnext.io/how-to-build-a-simple-vue-cli-plugin-a2e1323de1a0
- https://github.com/ElementUI/vue-cli-plugin-element
- https://github.com/vuetifyjs/vue-cli-plugin-vuetify