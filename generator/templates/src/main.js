import Vue from 'vue'
import App from './App'
import router from './routes'
import './plugins/dove.js'
import './scss/reset.scss'
import './scss/global.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})