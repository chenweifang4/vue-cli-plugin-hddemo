<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <dv-button type="primary">Dove Button</dv-button>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>