import { Player } from './Player';
import Data from '@/data';
import Tools from '@/lib/Tools';
import { Site } from './Sector';
import { Board } from '@/lib/Board';

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
    this.board = new Board({
      rows: 8,
      cols: 8,
    });
  }

  // private generateSectors(board: Board) {}

  private generateSites(
    cardinality: number = 3,
  ): Site[] {
    return Tools.random.elements(cardinality, Data.sites) as Site[];
  }
}
