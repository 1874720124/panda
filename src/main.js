import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '@/router'
import * as ajax from '@/request'
Vue.use(MintUI)
Vue.prototype.$http = ajax
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
