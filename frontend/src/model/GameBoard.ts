import { Sites } from '@/data';
import Tools from '@/lib/Tools';
import { BoardTile, Board, BoardShape } from '@/lib/Board';

import { Site, Sector } from './Sector';
import { Gang } from './Gang';
import { Player } from './Player';


export interface GameBoardOptions extends BoardShape {
  players: Player[];
}

export class GameBoard extends Board {
  public sectors: Map<string, Sector> = new Map();
  public gangs: Map<string, Gang[]> = new Map();

  constructor(options: GameBoardOptions) {
    super(options);
    this.generateSectors();
  }

  private generateSectors(): void {
    this.tiles.forEach((tile: BoardTile, key: string) => {
      const sector = new Sector({ ...tile, sites: this.generateSites() });
      this.sectors.set(key, sector);
    });
  }

  private generateSites(
    cardinality: number = 3,
  ): Site[] {
    return Tools.random.elements(cardinality, Sites) as Site[];
  }
}
