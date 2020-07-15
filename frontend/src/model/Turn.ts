import { GameEvent } from '@/model/GameEvent';
import { Command } from './Commands';

export enum TurnPhase {
  Upkeep,
  Command,
  Execution,
  Hire,
  Elimination,
}

export interface TurnShape {
  count: number;
  events: GameEvent[];
}

export class Turn implements TurnShape {
  public count: number;
  public events: GameEvent[] = [];

  constructor(turn: TurnShape) {
    this.count = turn.count;
  }

  public addGameEvent(event: GameEvent): void {
    this.events.push(event);
  }

  public undoEvent(): void {
    this.events.pop();
  }

  // TODO: Redo
  // public redoEvent(redoEvent: GameEvent): void {
  //   this.events.push(redoEvent);
  // }
}
