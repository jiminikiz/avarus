import { Game } from '@/model/Game';
import { GameState } from './index';

export default {
  newGame: (state: GameState, game: Game) => {
    state.game = game;
  },
  options: () => {
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
