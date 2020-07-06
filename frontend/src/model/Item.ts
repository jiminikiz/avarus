import { Attributes } from '@/model/Attributes';

export enum ItemType {
  Weapon,
  Armor,
  Gear,
}

export interface Item {
  cost: number;
  level: number; // techLevel
  type: ItemType;
  attributes: Attributes;
}

export interface Weapon extends Item {
  type: ItemType.Weapon;
}

export interface Armor extends Item {
  type: ItemType.Armor;
}

export interface Gear extends Item {
  type: ItemType.Gear;
}
