import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import http from './http';
import * as change from './change' 

import 'element-ui/lib/theme-chalk/index.css';
import './style.css'

Vue.use(element);
Vue.use(router);

Vue.config.productionTip = false

Vue.prototype.$http = http //這樣在任何地方都可以用 this.$http 來拿到這個東西
Vue.prototype.$change = change // 這樣在任何地方都可以用 this.$change 來拿到這個東西

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
