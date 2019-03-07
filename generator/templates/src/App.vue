<template>
  <div id="app">
    <navbar></navbar>
    <dv-button type="primary">Dove Button</dv-button>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
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