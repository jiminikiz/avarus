export enum GameEventType {
  Command,
}

export interface GameEventShape {
  type: GameEventType;
  text: string;
  data?: any;
}

export class GameEvent implements GameEventShape {
  public type: GameEventType;
  public text: string;
  public data?: any;

  constructor(event: GameEventShape) {
    this.type = event.type;
    this.text = event.text;
    this.data = event.data;
  }
}

