import { Deck } from './Deck';

export interface BoardTile {
  row: number;
  col: number;
}

export interface BoardOptions {
  rows: number;
  cols: number;
  alphaTiles?: boolean;
}

export class Board {
  public rows: number = 0;
  public cols: number = 0;

  public initialCharCode: number = 65;
  public alphaTiles: boolean;
  public tiles: Map<string, BoardTile>;

  constructor({
    rows,
    cols,
    alphaTiles = true,
  }: BoardOptions) {
    this.rows = rows;
    this.cols = cols;
    this.alphaTiles = alphaTiles;
    this.tiles = this.generateTiles({ rows, cols });
  }

  public generateTiles(board: BoardOptions): Map<string, BoardTile> {
    const tiles = new Map();
    let rows = board.rows;

    while (rows--) {
      let cols = board.cols;
      let row: any = (rows + 1 - board.rows) * (-1);

      if (this.alphaTiles) {
        const code = (row + this.initialCharCode);
        row = String.fromCharCode(code);
      }

      while (cols--) {
        const col = (cols - board.cols) * (-1);
        tiles.set(`${row}${col}`, { row, col });
      }
    }

    return tiles;
  }
}
