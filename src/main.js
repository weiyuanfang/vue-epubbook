import Vue from 'vue'
import App from './App.vue'
import router from './router2'
import store from './store'
import i18n from './lang'
import './assets/styles/icon.css'
import './assets/styles/global.scss'
import './lazy'
// import './mock'
import './utils/boost'
import './utils/create-api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
// $mount 实例挂载到#app上
