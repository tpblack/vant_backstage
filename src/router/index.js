import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入router-config.js
import routes from '@/config/router-config.js' 

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
