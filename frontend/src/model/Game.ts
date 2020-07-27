import { Gangs } from '@/data';
import { Deck } from '@/lib/Deck';
import { Board } from '@/lib/Board';
import { GameBoard } from './GameBoard';

import { Player } from './Player';

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
  public players: Player[];
  public mode: GameMode;
  public difficulty: GameDifficulty;
  public timeLimit: number = Infinity;
  public board: Board;
  public decks: Map<string, Deck> = new Map();

  constructor(options: GameOptions) {
    // TODO: Make Dynamic, good for now
    const { rows, cols } = options.board;
    const GangsDeck = new Deck({ name: 'Gangs', cards: Gangs });

    this.setDecks([GangsDeck]);
    this.setPlayers(options.players, GangsDeck);
    this.players = options.players;
    this.mode = options.mode;
    this.difficulty = options.difficulty;
    this.board = new GameBoard({ rows, cols });
  }

  private setDecks(decks: Deck[]): void {
    decks.forEach((deck: Deck) => this.decks.set(deck.name, deck));
  }

  private setPlayers(players: Player[], deck: Deck): void {
    const deal = deck.deal({
      handSize: 3,
      playerCount: players.length,
    });
  }
}
