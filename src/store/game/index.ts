import mutations from '@/store/game/mutations';

const state = {
  options: {
    sound: true,
    detailedCombat: true,
    idleWarnings: true,
  },
  scenario: {},
  players: [],
  difficulty: 0,
  timeLimit: 0,
};

export default {
  mutations,
  state,
};
