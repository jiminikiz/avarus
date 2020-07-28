export interface Attributes {
  blade: number;
  chaos: number;
  combat: number;
  control: number;
  defense: number;
  detect: number;
  fighting: number;
  force: number;
  heal: number;
  influence: number;
  martialArts: number;
  range: number;
  research: number;
  stealth: number;
  strength: number;
  tech: number;
  upkeep: number;
}

export interface Entity extends Attributes {
  name: string;
}

export enum AttributeType {
  Information,
  Statistics,
  CommandSkills,
  CombatSkills,
}

export const attributes: Attributes = {
  blade: 0,
  chaos: 0,
  combat: 0,
  control: 0,
  defense: 0,
  detect: 0,
  fighting: 0,
  force: 0,
  heal: 0,
  influence: 0,
  martialArts: 0,
  range: 0,
  research: 0,
  stealth: 0,
  strength: 0,
  tech: 0,
  upkeep: 0,
};

export const attributeFields: Map<AttributeType, string[]> = new Map([
  [ AttributeType.Information, ['force', 'upkeep', 'tech'] ],
  [ AttributeType.Statistics, ['combat', 'defense', 'stealth', 'detect'] ],
  [ AttributeType.CommandSkills, ['chaos', 'control', 'heal', 'influence', 'research'] ],
  [ AttributeType.CombatSkills, ['strength', 'blade', 'range', 'fighting', 'martialArts'] ],
]);

export default {
  attributes,
  attributeFields,
};

