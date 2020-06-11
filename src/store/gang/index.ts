import actions from '@/store/gang/actions';
import mutations from '@/store/gang/mutations';

const state = {
  attributes: {
    force: 0,
    upkeep: 0,
    tech: 0,
    combat: 0,
    defense: 0,
    stealth: 0,
    detect: 0,
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
