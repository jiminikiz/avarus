import { Gang } from '@/model/Gang';
import { Site } from '@/model/Sector';

export interface BoardTile {
  sites: Site[];
  gangs: Gang[];
}

export interface BoardShape {
  rows: number;
  cols: number;
  tiles: BoardTile[];
}

export class Board implements BoardShape {
  public rows: number = 0;
  public cols: number = 0;
  public tiles: BoardTile[];

  constructor(board: BoardShape) {
    this.rows = board.rows;
    this.cols = board.cols;
    this.tiles = board.tiles || this.generate();
  }

  private generate(): BoardTile[] {
    return [{
      sites: [],
      gangs: [],
    }];
  }
}
