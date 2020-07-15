import { Dice, RollResults } from '@/lib/Dice';
import { Gang } from './Gang';
import { GameEvent, GameEventType } from './GameEvent';
import { ResearchableEquipment } from './ResearchableEquipment';
import { Equipable } from './Equipment';
import { Site, Sector } from './Sector';

export enum Command {
  Attack,
  Bribe,
  Chaos,
  Control,
  Equip,
  Give,
  Heal,
  Hide,
  Influence,
  Move,
  None,
  Research,
  Sell,
  Snitch,
  Terminate,
}

export enum CommandPhase {
  Instant,
  Combat,
  Transaction,
  Chaos,
  Movement,
  Control,
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
        numberOfDie: (force + chaos),
        numberOfSides: CommandDefault.diceSides,
      });
      accumulation.results.push(rollResult);
      accumulation.success += rollResult.success;

      return accumulation;
    }, {
      results: [],
      success: 0,
    });


    return {
      type: GameEventType.Command,
      text: `Players gangs cause ${result.success} riots at ${sector.name}.`,
    };
  },
  [Command.Control]: () => {
    return;
  },
  [Command.Equip]: () => {
    return;
  },
  [Command.Give]: () => {
    return;
  },
  [Command.Heal]: (
    gang: Gang,
  ): GameEvent => {
    // roll: 4d6 + Heal Skill, each success = +1 force
    const { heal } = gang.statistics;

    const rollResult = Dice.shaker({
      numberOfDie: CommandDefault.healFactor + heal,
      numberOfSides: CommandDefault.diceSides,
    });

    gang.heal(rollResult.success);

    return {
      type: GameEventType.Command,
      text: `${gang.name} gains ${rollResult.success} force.`,
      data: {
        command: Command.Heal,
        gang,
        rollResult,
      },
    };
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
        numberOfDie: (force + influence),
        numberOfSides: CommandDefault.diceSides,
      });

      accumulation.rolls.push(rollResult);
      accumulation.success += rollResult.success;
      return accumulation;
    }, {
      results: [],
      success: 0,
    });

    return {
      type: GameEventType.Command,
      text: `Players gangs gain ${multiRollResult.success} influence over ${site.name}`,
      data: {
        gangs,
        result: { multiRollResult },
      },
    };
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
      numberOfDie: (force + research),
      numberOfSides: CommandDefault.diceSides,
    });

    researchable.advanceProgress(rollResult.success);

    return {
      type: GameEventType.Command,
      text: `${gang.name} made ${rollResult.success} research progress on ${researchable.name}.`,
      data: {
        command: Command.Research,
        gang,
        result: { rollResult },
      },
    };
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

    return {
      type: GameEventType.Command,
      text: `${gang.name} sold equipment for $${sellAmount} cash.`,
      data: {
        command: Command.Sell,
        gang,
        result: { sellAmount },
      },
    };
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
