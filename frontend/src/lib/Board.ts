import { use } from 'vue/types/umd';

export interface BoardTile {
  row: number;
  col: number;
}

export interface BoardShape {
  rows: number;
  cols: number;
  useAlpha?: boolean;
  tiles?: Map<string, BoardTile>;
}

export class Board implements BoardShape {
  public rows: number = 0;
  public cols: number = 0;
  public initialCharCode: number = 65;
  public useAlpha: boolean;

  public tiles: Map<string, BoardTile>;

  constructor({ rows, cols, useAlpha = true, tiles}: BoardShape) {
    this.rows = rows;
    this.cols = cols;
    this.useAlpha = useAlpha;
    this.tiles = tiles || this.generate({ rows, cols });
  }

  public generate(board: BoardShape): Map<string, BoardTile> {
    const numCols = board.cols;
    const tiles = new Map();

    let rows = board.rows;
    let cols = board.cols;

    while (rows--) {
      while (cols--) {
        const code = (rows + this.initialCharCode);
        const char = String.fromCharCode(code);
        const row = this.useAlpha ? char : (rows + 1);
        const col = (cols + 1);

        tiles.set(`${row}${col}`, { row, col });
      }
      cols = numCols;
    }

    return tiles;
  }
}
