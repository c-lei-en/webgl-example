import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components/lib/cuon-matrix.js'
import '@/components/lib/cuon-utils.js'
import '@/components/lib/webgl-debug.js'
import '@/components/lib/webgl-utils.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
