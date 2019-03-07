<template>
  <div :class="$style.Login">
    <dv-button class="mgt10" type="primary" @click="goToLoginIndex">登录</dv-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    goToLoginIndex () {
      this.$message.success('登录成功!!')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" module>
@import './Login.module.scss'
</style>
