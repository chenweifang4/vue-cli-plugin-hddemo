<template>
  <div :class="$style.Login">
    <div :class="$style.LoginContainer">
      <div :class="$style.LoginContainerLogo">
        <img :src="logoIcon" alt="系统图标">
      </div>
      <dv-input :class="$style.LoginContainerInput" placeholder="请输入账号" v-model="params.username" @keyup.enter="handleLogin"></dv-input>
      <dv-input type="password" :class="$style.LoginContainerInput" placeholder="请输入密码" v-model="params.password" @keyup.enter="handleLogin"></dv-input>
      <dv-button :class="$style.LoginContainerButton" type="primary" @click="handleLogin" :loading="loading">登录</dv-button>
    </div>
  </div>
</template>
<script>
import logoIcon from '@/assets/logo.svg'
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      logoIcon,
      loading: false,
      params: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    async handleLogin () {
      this.$message.success('登录成功')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" module>
@import './Login.module.scss'
</style>
