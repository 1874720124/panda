import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  mutations,
  actions,
  getters
})
store.subscribe((mutations, state) => {
  window.localStorage.setItem('cart', JSON.stringify(state.cart))
})
store.subscribe((mutations, state) => {
  if (mutations.type === 'login') {
    window.localStorage.setItem(' userinfo', JSON.stringify(state.userinfo))
  }
})
export default store
