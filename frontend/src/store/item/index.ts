import attributes from '@/store/attributes';

const state = {
  cost: 0,
  level: 0, // techLevel
  type: null,
  ...attributes,
};

export default {
  state,
};
