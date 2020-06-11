import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // global app state
  state: {
    game: {
      options: {
        sound: true,
        detailedCombat: true,
        idleGangWarnings: true,
      },
      players: [],
      difficulty: 0,
      timeLimit: 0,
    },
    scenarios: {
      options: {
        timed: false,
        timeLimit: Infinity,
      },
      modes: {
        /**
         * Accumulate the most CASH to win.
         */
        greed: {},
        /**
         * Control the most SECTORS to win.
         */
        power: {},
        /**
         * Gain the most SUPPORT to win.
         */
        acceptance: {},
        /**
         * Get scored on Greed + Power + Acceptance, highest score wins.
         */
        dominance: {},
        /**
         * Kill 'Em All, last player standing wins.
         */
        genocide: {},
        /**
         * First player to control 2/3rds of the board wins.
         */
        acquisition: {},
        /**
         * Last player with a Right Hand wins.
         */
        elimination: {},
        /**
         * First player to control all HQs wins.
         */
        seige: {},
        /**
         * First player to control special sectors for 40 points wins (need to revise this)
         */
        stronghold: {},
        /**
         * First player to control all sectors wins.
         */
        armageddon: {},
      },
    },
  },
  mutations: {},
  actions: {
    hire: () => {
      return;
    },
    attack: () => {
      return;
    },
    bribe: () => {
      return;
    },
    chaos: () => {
      return;
    },
    control: () => {
      return;
    },
    equip: () => {
      return;
    },
    give: () => {
      return;
    },
    heal: () => {
      return;
    },
    hide: () => {
      return;
    },
    influence: () => {
      return;
    },
    move: () => {
      return;
    },
    research: () => {
      return;
    },
    sell: () => {
      return;
    },
    snitch: () => {
      return;
    },
    idle: () => {
      return;
    },
    terminate: () => {
      return;
    },
  },
  modules: {
    // sub state goes here
  },
});
