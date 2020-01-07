import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    // localStorageKey: "TOKEN",
    // 存储token
    localStorageKey: localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : ''
  },
  mutations: {
    fold(state) {
      state.isCollapse = !state.isCollapse
    },
    // setLoginTOKEN(state, key) { // state （state中的值） 调用传递的参数  参数只能传递一个 所有一般直接传递一个对象
    //   localStorage.setItem(state.localStorageKey, key + '')
    // },
    // getLoginTOKEN(state) {
    //   console.log(state)
    //   return localStorage.get(state.localStorageKey)
    // },
    // 修改token，并将token存入localStorage
    changeLogin(state, tokenValue) { //这里的state对应上面状态state
      state.localStorageKey = tokenValue;
      localStorage.setItem("TOKEN", tokenValue);
    }
  },
  actions: {

  },
  modules: {

  }
})