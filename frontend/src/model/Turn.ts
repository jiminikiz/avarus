import { GameEvent } from '@/lib/GameEvent';

export enum TurnPhase {
  Upkeep,
  Command,
  Execution,
  Hire,
  Elimination,
}

export interface TurnShape {
  count: number;
  events?: GameEvent[];
}

export class Turn {
  public count: number;
  public events: GameEvent[] = [];

  constructor(turn: TurnShape) {
    this.count = turn.count;
    if (turn.events) {
      this.events = turn.events;
    }
  }

  public addGameEvent(event: GameEvent): void {
    this.events.push(event);
  }

  public undoLastEvent(): void {
    this.events.pop();
  }
}
