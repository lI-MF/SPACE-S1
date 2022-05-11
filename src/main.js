import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 这是一个包含router vuex的vue项目,准备上传到Git远程仓库上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
