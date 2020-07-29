import mutations from '@/store/game/mutations';
import actions from '@/store/game/actions';
import { Game } from '@/model/Game';

export interface GUI {
  sound: boolean;
  detailedCombat: boolean;
  idleWarnings: boolean;
}

export interface GameState {
  GUI: GUI;
  game: Game;
}

const state = {
  GUI: {
    sound: true,
    detailedCombat: true,
    idleWarnings: true,
  },
  game: null,
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
