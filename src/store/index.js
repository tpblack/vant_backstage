import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    fold(state) {
      state.isCollapse = !state.isCollapse
    },
    setLoginTOKEN(key) { // state （state中的值） 调用传递的参数  参数只能传递一个 所有一般直接传递一个对象
      localStorage.setItem("TOKEN", key + '')
    },
    getLoginTOKEN() {
      return localStorage.get("TOKEN")
    }
  },
  actions: {

  },
  modules: {

  }
})