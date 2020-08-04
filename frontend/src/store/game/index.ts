import mutations from '@/store/game/mutations';
import actions from '@/store/game/actions';
import { Game, GameMode, GameDifficulty } from '@/model/Game';
import { Player, Color } from '@/model/Player';
import { Gangs } from '@/data';

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
  debugGame: new Game({
    mode: GameMode.Greed,
    difficulty: GameDifficulty.Medium,
      board: { rows: 8, cols: 8 },
    players: [
      new Player({
        name: '',
        color: Color.Red,
        kingpin: { henchmen: Gangs[0] },
      }),
    ],
  }),
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
