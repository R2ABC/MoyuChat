import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入页面属性重置
import '@/style/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
