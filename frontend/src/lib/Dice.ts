export interface Roll {
  numberOfDie: number;
  numberOfSides: number;
  isSuccess?: Function;
}

export interface RollResult {
  rolls: number[];
  total: number;
  success: number;
  counts: Map<number, number>;
}

export interface RollResults {
  results: RollResult[];
  success: number;
}

export class Dice {
  /**
   * CALCULATION: a simple dice roller
   * @param sides
   */
  public static roll(
    sides: number
  ): number {
    return 1 + Math.floor(Math.random() * sides);
  }

  /**
   * METHOD: A dice shaker that rolls n-number of n-sided dice
   * @param roll: Roll
   */
  public static shaker({
    numberOfDie,
    numberOfSides,
    isSuccess,
  }: Roll): RollResult {
    const rolls: number[] = [];

    while (numberOfDie--) {
      rolls.push(Dice.roll(numberOfSides));
    }

    return {
      rolls,
      total: rolls.reduce(Dice.sum, 0),
      counts: rolls.reduce(Dice.counts, new Map()),
      success: this.success(rolls, isSuccess),
    };
  }

  /**
   * AGGREGATOR: simple sum
   * @param sum: number
   * @param roll: number
   */
  private static sum(
    sum: number,
    roll: number
  ): number {
    return sum + roll;
  }

  /**
   * GAME_RULE: default success
   * @param roll
   */
  private static defaultIsSuccess: Function = (
    roll: number
  ): boolean => roll >= 5

  /**
   * AGGREGATOR: dice roll success
   * @param rolls: number
   * @param isSuccessful: Function
   */
  private static success(
    rolls: number[],
    isSuccessful: Function = Dice.defaultIsSuccess
  ): number {
    return rolls.reduce((count: number, roll: number) => {
      return isSuccessful(roll) ? ++count : count;
    }, 0);
  }

  /**
   * AGGREGATOR: dice counts
   * @param counts Map<number, number>
   * @param roll number
   */
  private static counts(
    counts: Map<number, number>,
    roll: number
  ): Map<number, number> {
    const count = counts.get(roll) || 0;
    counts.set(roll, count + 1);
    return counts;
  }
}