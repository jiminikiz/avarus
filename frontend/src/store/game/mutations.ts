import { Game } from '@/model/Game';
import { GameState } from './index';

export default {
  setGame: (state: GameState, game: Game) => {
    state.game = game;
  },
  setOptions: () => {
    return;
  },
  save: () => {
    return;
  },
  load: () => {
    return;
  },
  quit: () => {
    return;
  },
};
