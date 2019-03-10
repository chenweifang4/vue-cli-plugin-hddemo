# 介绍
vue-cli-plugin-hddemo是一个基于vue-cli3、以 `dove`（基于Vue）为UI组件的一个插件

# 安装

- 前提

首先我们需要确保已经装有 `vue-cli3`的前提下进行操作，如果你还没有安装`vue-cli3`或者没有使用过，推荐你到 [vue-cli3官网](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5)进行学习

- **提醒**

**在安装该插件的时候会对项目目录进行修改**，所以我们强烈建议执行安装命令的时机是在初始化一个项目的时候，如果你本地有更改，建议先提交到`git`仓库，以免被覆盖

- 安装

在确保你已经阅读并清楚上面的前提和提醒后，执行以下命令
```
vue add hddemeo
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