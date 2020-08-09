import { Dice, RollResults } from '@/lib/Dice';
import { GameEvent, GameEventType } from '@/lib/GameEvent';

import { Site, Sector } from './Sector';
import { Gang } from './Gang';
import { Equipable, EquipmentType } from './Equipment';
import { ResearchableEquipment } from './ResearchableEquipment';

export enum Command {
  Attack = 'Attack',
  Bribe = 'Bribe',
  Chaos = 'Chaos',
  Control = 'Control',
  Equip = 'Equip',
  Give = 'Give',
  Heal = 'Heal',
  Hide = 'Hide',
  Influence = 'Influence',
  Move = 'Move',
  None = 'None',
  Research = 'Research',
  Sell = 'Sell',
  Snitch = 'Snitch',
  Terminate = 'Terminate',
}

export enum CommandPhase {
  Instant = 'Instant',
  Combat = 'Combat',
  Transaction = 'Transaction',
  Chaos = 'Chaos',
  Movement = 'Movement',
  Control = 'Control',
}

export enum CommandDefault {
  diceSides = 6,
  healFactor = 4,
}

export default {
  [Command.Attack]: () => {
    return;
  },
  [Command.Bribe]: () => {
    return;
  },
  [Command.Chaos]: (gangs: Gang[], sector: Sector): GameEvent => {
    const result = gangs.reduce((
      accumulation: any,
      gang: Gang,
    ): RollResults => {
      const { force, chaos } = gang.statistics;
      const rollResult = Dice.shaker({
        numberOfDice: (force + chaos),
        numberOfSides: CommandDefault.diceSides,
      });
      accumulation.results.push(rollResult);
      accumulation.success += rollResult.success;

      return accumulation;
    }, {
      results: [],
      success: 0,
    });

    return new GameEvent({
      type: GameEventType.Command,
      text: `Players gangs cause ${result.success} riots at [${sector}].`,
    });
  },
  [Command.Control]: (
    gangs: Gang[],
    sector: Sector,
  ): GameEvent => {
    const controllingForce = gangs.reduce(
      (sum, { statistics: { force, control } })
      : number => sum += (force + control), 0,
    );

    const numberOfDice = controllingForce;

    return new GameEvent({
      type: GameEventType.Command,
      text: 'Control message goes here',
    });
  },
  [Command.Equip]: (
    equipable: Equipable,
    gang: Gang,
  ) => {
    gang.equip(equipable);

    return new GameEvent({
      type: GameEventType.Gang,
      text: `${gang.name} equips ${equipable}`,
    });
  },
  [Command.Give]: (
    equipmentType: EquipmentType,
    fromGang: Gang,
    toGang: Gang,
  ) => {
    fromGang.give(equipmentType, toGang);

    return new GameEvent({
      type: GameEventType.Gang,
      text: `${fromGang.name} gives ${equipmentType} to ${toGang.name}`,
    });
  },
  [Command.Heal]: (
    gang: Gang,
  ): GameEvent => {
    // roll: 4d6 + Heal Skill, each success = +1 force
    const { heal } = gang.statistics;

    const rollResult = Dice.shaker({
      numberOfDice: CommandDefault.healFactor + heal,
      numberOfSides: CommandDefault.diceSides,
    });

    gang.heal(rollResult.success);

    return new GameEvent({
      type: GameEventType.Command,
      text: `${gang.name} gains ${rollResult.success} force.`,
      data: {
        command: Command.Heal,
        gang,
        rollResult,
      },
    });
  },
  [Command.Hide]: () => {
    return;
  },
  [Command.Influence]: (
    gangs: Gang[],
    site: Site,
  ): GameEvent => {
    const multiRollResult = gangs.reduce((
      accumulation: any,
      gang: Gang,
    ): RollResults => {
      const { force, influence } = gang.statistics;
      const rollResult = Dice.shaker({
        numberOfDice: (force + influence),
        numberOfSides: CommandDefault.diceSides,
      });

      accumulation.rolls.push(rollResult);
      accumulation.success += rollResult.success;
      return accumulation;
    }, {
      results: [],
      success: 0,
    });

    return new GameEvent({
      type: GameEventType.Command,
      text: `Players gangs gain ${multiRollResult.success} influence over ${site.name}`,
      data: {
        gangs,
        result: { multiRollResult },
      },
    });
  },
  [Command.Move]: () => {
    return;
  },
  [Command.Research]: (
    gang: Gang,
    researchable: ResearchableEquipment,
  ): GameEvent => {
    const { force, research } = gang.statistics;

    const rollResult = Dice.shaker({
      numberOfDice: (force + research),
      numberOfSides: CommandDefault.diceSides,
    });

    researchable.advanceProgress(rollResult.success);

    return new GameEvent({
      type: GameEventType.Command,
      text: `${gang.name} made ${rollResult.success} research progress on ${researchable.name}.`,
      data: {
        command: Command.Research,
        gang,
        result: { rollResult },
      },
    });
  },
  [Command.Sell]: (
    gang: Gang,
    equipables: Equipable[],
  ): GameEvent => {
    const totalCost: number = equipables.reduce((
      sum: number,
      equipable: Equipable,
    ): number => sum += gang.unequip(equipable.type).cost, 0);

    const sellAmount = Math.floor(totalCost / 2);

    return new GameEvent({
      type: GameEventType.Command,
      text: `${gang.name} sold equipment for $${sellAmount} cash.`,
      data: {
        command: Command.Sell,
        gang,
        result: { sellAmount },
      },
    });
  },
  [Command.Snitch]: () => {
    return;
  },
  [Command.None]: () => {
    return;
  },
  [Command.Terminate]: () => {
    return;
  },
};
