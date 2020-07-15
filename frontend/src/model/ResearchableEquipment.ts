import { Researchable, EquipmentType, Equipable } from './Equipment';
import { Attributes } from './Attributes';

export class ResearchableEquipment implements Researchable {
  public name: string;
  public cost: number;
  public level: number;
  public type: EquipmentType;
  public attributes: Attributes;

  public progress: number = 0;

  constructor(equipment: Equipable) {
    this.name = equipment.name;
    this.cost = equipment.cost;
    this.level = equipment.level;
    this.type = equipment.type;
    this.attributes = equipment.attributes;
  }

  public get researched(): boolean {
    return this.progress >= this.attributes.research;
  }

  public advanceProgress(progress: number): number {
    this.progress += progress;
    return progress;
  }
}
