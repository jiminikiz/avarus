export enum GameEventType {
  Command = 'Command',
  Sector = 'Sector',
  Deck = 'Deck',
  Dice = 'Dice',
  Game = 'Game',
  Gang = 'Gang',
}

export enum GameEventLogLevel {
  error = 'error',
  log = 'log',
  info = 'info',
  warning = 'warning',
  debug = 'debug',
}

export enum GameEventText {
  CommandExecuted = '{player} has executed command {command}.',
  SectorsCreated = 'All Sectors have been created.',
  SectorCreated = 'Sector {sector} has been created.',
  GangsPlaced = 'Initial Gangs placed randomly on the board.',
  NewGame = 'New game has been created.',
  CardsDealt = 'Players have been dealt their cards.',
}

export interface GameEventShape {
  type: GameEventType;
  level?: GameEventLogLevel;
  text: string;
  data?: any;
}

export class GameEvent {
  public type: GameEventType;
  public text: string;
  public level: GameEventLogLevel;
  public data?: any;

  constructor({
    type,
    text,
    level = GameEventLogLevel.info,
    data,
  }: GameEventShape) {
    this.type = type;
    this.text = text;
    this.level = level;
    this.data = data;
  }
}

