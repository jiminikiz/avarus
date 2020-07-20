import { Player } from './Player';
import { Board } from '@/lib/Board';
import { GameBoard } from './GameBoard';

export enum GameMode {
  Greed = 'Greed',
  Power = 'Power',
  Acceptance = 'Acceptance',
  Dominance = 'Dominance',
  Genocide = 'Genocide',
  Acquisition = 'Acquisition',
  Elimination = 'Elimination',
  Siege = 'Siege',
  Stronghold = 'Stronghold',
  Armageddon = 'Armageddon',
}

export interface GameOptions {
  players: Player[];
  mode: GameMode;
}

export class Game implements GameOptions {

  public players: Player[];
  public mode: GameMode;
  public board: Board;

  constructor(options: GameOptions) {
    this.players = options.players;
    this.mode = options.mode;
    this.board = new GameBoard({
      rows: 8,
      cols: 8,
      players: options.players,
    });
  }
}
