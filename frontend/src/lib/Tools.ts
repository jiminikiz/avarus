import { Dice } from '@/lib/Dice';

const Tools = {
  request(url: string, options: object = {}) {
    return fetch(url, options).then((response) => response.json());
  },
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
  csvJSON(csv: string): any {
    const lines = csv.split('\n');
    const headers = (lines.shift() || '').split(',');
    return lines.map((line: string) => {
      const columns = (line.split(',') || '');
      return headers.reduce((json: any, header, i) => {
        json[header] = columns[i];
        return json;
      }, {});
    });
  },
};

export default Tools;
