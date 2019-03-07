import Vue from 'vue'
import Router from 'vue-router'
import modules from './modules'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [ ...modules ]
})

export default router