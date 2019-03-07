<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <main-content>
      <dv-button type="primary" @click="showMessage">Dove-Button</dv-button>
    </main-content>
  </div>
</template>

<script>
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
  methods: {
    showMessage () {
      this.$message.success('Hello Message')
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