import { Attributes } from '@/model/Attributes';

export enum EquipmentType {
  Weapon,
  Armor,
  Gear,
}

export interface Equipable {
  name: string;
  cost: number;
  level: number; // techLevel
  type: EquipmentType;
  attributes: Attributes;
}

export interface Weapon extends Equipable {
  type: EquipmentType.Weapon;
}

export interface Armor extends Equipable {
  type: EquipmentType.Armor;
}

export interface Gear extends Equipable {
  type: EquipmentType.Gear;
}

export interface Researchable extends Equipable {
  researched: boolean;
  progress: number;
}
