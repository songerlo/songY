import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Elment from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import plug from '../src/assets/plug/ax.js'

Vue.prototype.$m = axios
Vue.use(Elment)
Vue.use(plug)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
