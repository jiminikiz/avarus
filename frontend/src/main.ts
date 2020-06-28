import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const socket = io(process.env.VUE_APP_SOCKET_ADDRESS);

Vue.config.productionTip = false;
Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
