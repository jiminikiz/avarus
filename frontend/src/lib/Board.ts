export interface BoardTile {
  row: number;
  col: number;
}

export interface BoardShape {
  rows: number;
  cols: number;
  tiles?: BoardTile[];
}

export class Board implements BoardShape {

  public static generate(board: BoardShape):
  BoardTile[] {
    let { rows, cols } = board;
    const numCols = cols;
    const tiles = [];

    while (rows--) {
      while (cols--) {
        tiles.push({ row: rows, col: cols });
      }
      cols = numCols;
    }

    return tiles;
  }

  public rows: number = 0;
  public cols: number = 0;
  public tiles: BoardTile[];

  constructor({ rows, cols, tiles }: BoardShape) {
    this.rows = rows;
    this.cols = cols;
    this.tiles = tiles || Board.generate({ rows, cols });
  }
}
