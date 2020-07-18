import { Dice } from '@/lib/Dice';

const Tools = {
  randomEnum<T>(anEnum: T): T[keyof T] {
      const enumValues = (Object.values(anEnum) as unknown) as Array<T[keyof T]>;
      const randomIndex = Dice.roll(enumValues.length);
      return enumValues[randomIndex];
  },
  randomPositiveInteger(bound: number): number {
    return Tools.randomInteger(0, bound);
  },
  randomInteger(min: number, max: number): number {
    return min + Math.floor(Math.random() * max);
  },
};

export default Tools;
