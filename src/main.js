import Vue from 'vue'
import App from './App.vue'
import { Button,Toast } from 'vant';
Toast.setDefaultOptions({ duration: 300 });
import router from './route.js'
Vue.use(Button);
Vue.use(Toast);
Vue.config.productionTip = false
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
  // 聚焦元素
  el.focus()
  }})
  
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
