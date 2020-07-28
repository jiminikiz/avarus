import { Gangs, Sites } from '@/data';

import { Tools } from '@/lib/Tools';
import { Board, BoardTile } from '@/lib/Board';
import { Deck } from '@/lib/Deck';

import { Player } from './Player';
import { Sector, Site } from './Sector';
import { Gang } from './Gang';

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

export enum GameDifficulty {
  Easy = 'Hood Rat',
  Medium = 'Gangsta',
  Hard = 'Henchman',
  Insane = 'King Pin',
}

export interface GameOptions {
  players: Player[];
  mode: GameMode;
  difficulty: GameDifficulty;
  timeLimit?: number;
  board: {
    rows: number;
    cols: number;
  };
}

export class Game {
  public mode: GameMode;
  public difficulty: GameDifficulty;
  public timeLimit: number;

  public players: Player[];
  public board: Board;
  public gangs: Deck;
  public sectors: Map<string, Sector> = new Map();

  constructor({
    mode,
    difficulty,
    timeLimit = Infinity,
    players,
    board: { rows, cols },
  }: GameOptions) {
    // TODO: Support dynamic loading here
    this.mode = mode;
    this.difficulty = difficulty;
    this.timeLimit = timeLimit;
    this.players = players;

    this.board = new Board({ rows, cols });
    this.gangs = new Deck({ name: 'Gangs', cards: Gangs });

    this.dealCards(players, this.gangs);
    this.generateSectors();
  }

  private dealCards(players: Player[], deck: Deck): void {
    const dealt = deck.deal({ handSize: 3, playerCount: players.length });
    players.forEach(player => player.hand = dealt.pop() as Gang[]);
  }

  private randomSites(cardinality: number = 3): Site[] {
    return Tools.random.elements(cardinality, Sites) as Site[];
  }

  private generateSector(tile: BoardTile, key: string): void {
    const sites = this.randomSites();
    const sector = new Sector({ ...tile, sites });
    this.sectors.set(key, sector);
  }

  private generateSectors(): void {
    this.board.tiles.forEach(this.generateSector.bind(this));
  }

}
