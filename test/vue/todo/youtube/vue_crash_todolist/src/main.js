import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.config.productionTip = false
Vue.use(VuejsDialog);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
