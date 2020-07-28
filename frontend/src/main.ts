import Vue from 'vue';
// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import { DebugRoutine } from './debug/index';
// DebugRoutine();

// const socket = io(process.env.VUE_APP_SOCKET_ADDRESS);
// Vue.use(VueSocketIOExt, socket);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
