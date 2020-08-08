import { Gang } from '@/model/Gang';

export enum Color {
  Black = '000',
  Red = 'F00',
  Green = '0F0',
  Blue = '00F',
  Yellow = 'FF0',
  Cyan = '0FF',
  Magenta = 'F0F',
  White = 'FFF',
  Grey = '888',
}

export enum Trait {
  Greed = 'Greed',
  Gluttony = 'Gluttony',
  Sloth = 'Sloth',
  Lust = 'Lust',
  Wrath = 'Wrath',
  Envy = 'Envy',
  Pride = 'Pride',
}

export interface Kingpin {
  // trait: Trait;
  henchmen: Gang;
}

export interface PlayerOptions {
  name: string;
  color: Color;
  kingpin: Kingpin;
}

export class Player {
  public static henchKey: string = 'henchmen';

  public name: string;
  public color: Color;
  public kingpin: Kingpin;
  public hired: Map<string, Gang> = new Map();
  public hand: Gang[] = [];
  public placements: Map<string, Gang> = new Map();

  public constructor({
    name,
    color,
    kingpin,
  }: PlayerOptions) {
    const { henchmen } = kingpin;
    this.hired.set(Player.henchKey, henchmen);

    this.name = name;
    this.color = color;
    this.kingpin = kingpin;
  }
}
