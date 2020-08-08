import { Turn } from './Turn';

export interface SavedTurns {
  turns: Turn[];
}

export class Timeline {
  public turns: Turn[] = [];
  public get count() {
    return this.turns.length;
  }

  constructor(saved?: SavedTurns) {
    if (saved) {
      this.turns = saved.turns;
    }
  }

  public nextTurn() {
    const { count } = this;
    this.turns.push(new Turn({ count }));
  }
}
