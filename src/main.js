import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '@/router'
import * as ajax from '@/request'
import store from '@/store'
Vue.use(MintUI)
Vue.prototype.$http = ajax
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
Vue.mixin({
  filters: {
    tofixed2 (value) {
      if (typeof value === 'number') {
        return value.toFixed(2)
      } else {
        value = Number(value)
        if (isNaN(value)) {
          return value
        } else {
          return value.toFixed(2)
        }
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  // console.log(store.getters)
  // console.log(to.meta)
  // 需要权限验证
  if (to.meta.isAuthRequired === true) {
    // 已经登录,回到被挡的那个页面
    if (store.getters.isLogin === true) {
      next()
      // console.log(1)
    } else {
      // console.log(2)
      console.log(to, from)
      next({
        name: 'login',
        params: {
          from: to.path
        }
      })
    }
  } else {
    next()
    // console.log(3)
  }
})
