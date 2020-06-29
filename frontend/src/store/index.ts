import Vue from 'vue';
import Vuex from 'vuex';

import game from '@/store/game';

Vue.use(Vuex);

export default new Vuex.Store({
  // global app state
  state: {
  },
  mutations: {},
  modules: {
    // sub state goes here
    game,
  },
});
