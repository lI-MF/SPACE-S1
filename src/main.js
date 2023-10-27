import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import '@/static/css/index.scss' // global css
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import mavonEditor from "mavon-editor"
import "mavon-editor/dist/css/index.css"

Vue.use(ElementUI)
// use
Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
