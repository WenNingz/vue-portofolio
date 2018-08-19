import Vue from 'vue'
import App from '@/App'
import router from '@/router/router'
import css from '@/assets/app.css'

Vue.config.productionTip = false

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
