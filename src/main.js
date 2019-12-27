import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用elements-ui
// 引入elementui的css库
// 这是es6的引入方法 如果没有返回值 就直接引入 则代表引入整个文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入elementui的组件库
import elementUi from 'element-ui'

// 把elementUi的组件 引入到vue中 使其变成全局组件
Vue.use(elementUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')