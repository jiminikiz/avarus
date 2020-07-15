import { Gang, GangShape } from '@/model/Gang';

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
  Greed,
  Gluttony,
  Sloth,
  Lust,
  Wrath,
  Envy,
  Pride,
}

export interface Kingpin {
  henchmen: GangShape;
  trait: Trait;
}

export interface PlayerShape {
  color: Color;
  kingpin: Kingpin;
  gangs?: Gang[];
}

class Player implements PlayerShape {
  public color: Color;
  public kingpin: Kingpin;
  public gangs: Gang[];

  public constructor({
    color,
    kingpin,
  }: PlayerShape) {
    this.color = color;
    this.kingpin = kingpin;
    this.gangs = [new Gang(kingpin.henchmen)];
  }
}

export default {
  Player,
};