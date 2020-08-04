import Tools from './Tools';

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

  public alphaCode: number = 65;
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

  public get keys() {
    return Array.from(this.tiles.keys());
  }

  public generateTiles(
    board: BoardOptions,
  ): Map<string, BoardTile> {
    const tiles = new Map();
    let rows = board.rows;

    // Uses two high performance loops to create the tiles for the board:
    // - accounts for reverse looping, while still counting forwards when setting tiles.
    while (rows--) {
      let cols = board.cols;
      let row: any = (rows + 1 - board.rows) * (-1);

      if (this.alphaTiles) {
        const code = (row + this.alphaCode);
        row = String.fromCharCode(code);
      }

      while (cols--) {
        const col = (cols - board.cols) * (-1);
        tiles.set(`${row}${col}`, { row, col });
      }
    }

    return tiles;
  }

  public getRandomTiles(count: number): string[] {
    return Tools.random.elements(count, this.keys);
  }
}
