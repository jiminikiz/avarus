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
    this.tiles = tiles || this.generateTiles({ rows, cols });
  }

  public generateTiles(board: BoardShape): Map<string, BoardTile> {
    const tiles = new Map();
    let rows = board.rows;

    while (rows--) {
      let cols = board.cols;
      let row: any = (rows + 1 - board.rows) * (-1);

      if (this.useAlpha) {
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
