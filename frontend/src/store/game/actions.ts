import { Game } from '@/model/Game';

export default {
  newGame({ commit }: any, game: Game) {
    commit('setGame', game);
  },
};
