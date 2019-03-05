<template>
  <div id="app">
    <navbar v-show="!isLoginPage"></navbar>
    <sidebar v-show="!isLoginPage"></sidebar>
    <main-content>
      <router-view></router-view>
    </main-content>
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import MainContent from '@/components/layout/Content'
export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    MainContent
  },
  data () {
    return {
      isLoginPage: true
    }
  },
  watch: {
    '$route' (newVal) {
      this.isLoginPage = newVal.name === 'login'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
