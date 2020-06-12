import attributes from '@/store/attributes';
import mutations from '@/store/gang/mutations';

const state = {
  ...attributes,
  equipment: {
    weapon: null,
    armor: null,
    gear: null,
  },
};

export default {
  mutations,
  state,
};
