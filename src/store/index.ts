import Vue from 'vue';
import Vuex from 'vuex';

import game from '@/store/game';
import settings from '@/store/game/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  // global app state
  state: {
    players: {},
  },
  mutations: {},
  modules: {
    // sub state goes here
    game,
    settings,
  },
});
