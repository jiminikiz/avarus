import Tools from '@/lib/Tools';

import { Site, Sector } from './Sector';
import { Sites } from '@/data';

import { BoardTile, Board, BoardOptions } from '@/lib/Board';
import { Deck } from '@/lib/Deck';

import { Player } from './Player';

export interface GameBoardOptions extends BoardOptions {
  players: Player[];
  decks: Deck[];
}

export class GameBoard extends Board {
  public sectors: Map<string, Sector> = new Map();
  public decks: Map<string, Deck> = new Map();

  constructor(options: GameBoardOptions) {
    super(options);
    this.setDecks(options.decks);
    console.debug('GameBoard:19', options);
    this.generateSectors();
  }

  private generateSectors(): void {
    this.tiles.forEach(this.generateSector.bind(this));
  }

  private generateSector(tile: BoardTile, key: string): void {
    const sites = this.selectRandomSites();
    const sector = new Sector({ ...tile, sites });
    this.sectors.set(key, sector);
  }

  private selectRandomSites(cardinality: number = 3): Site[] {
    return Tools.random.elements(cardinality, Sites) as Site[];
  }

  private setDecks(decks: Deck[]) {
    decks.forEach((deck: Deck) => this.decks.set(deck.name, deck));
  }
}
