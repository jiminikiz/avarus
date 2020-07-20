import Tools from './Tools';

export interface Roll {
  numberOfDice: number;
  numberOfSides: number;
  isSuccess?: (roll: number) => boolean;
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
    sides: number,
  ): number {
    return Tools.random.number(1, sides);
  }

  /**
   * METHOD: A dice shaker that rolls n-number of n-sided dice
   * @param roll: Roll
   */
  public static shaker({
    numberOfDice,
    numberOfSides,
    isSuccess,
  }: Roll): RollResult {
    const rolls: number[] = [];

    while (numberOfDice--) {
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
    roll: number,
  ): number {
    return sum + roll;
  }

  /**
   * GAME_RULE: default success
   * @param roll
   */
  private static defaultIsSuccess: (
    roll: number,
  ) => boolean = (
    roll: number,
  ): boolean => roll >= 5

  /**
   * AGGREGATOR: dice roll success
   * @param rolls: number
   * @param isSuccessful: Function
   */
  private static success(
    rolls: number[],
    isSuccessful: (roll: number) => boolean = Dice.defaultIsSuccess,
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
    roll: number,
  ): Map<number, number> {
    const count = counts.get(roll) || 0;
    counts.set(roll, count + 1);
    return counts;
  }
}
