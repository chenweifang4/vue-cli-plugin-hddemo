<template>
  <div :class="$style.Index">
    <dv-caution description="欢迎来到首页" type="success"></dv-caution>
    <dv-button class="mgt10" type="primary" @click="goToLoginPage">退出登录</dv-button>
  </div>
</template>
<script>
export default {
  name: 'Index',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  methods: {
    goToLoginPage () {
      this.$message.info('已退出')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" module>
@import './Index.module.scss'
</style>
