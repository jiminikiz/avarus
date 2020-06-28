export default {
  equip: (state: { equipment: any }, payload: { type: string }) => {
    state.equipment[payload.type] = payload;
  },
  takeDamage: () => {
    return;
  },
  heal: () => {
    return;
  },
};
