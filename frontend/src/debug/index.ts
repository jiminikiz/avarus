import {
  player,
  diceRoll,
  board,
  sector,
  game,
} from './fodder';

export const DebugRoutine = () => {
  Logger.debug('Roll four, six-sided die', diceRoll);
  Logger.debug('A 8x8 game board', board);
  Logger.debug('A new Player', player);
  Logger.debug('A new Sector', sector);
  Logger.debug('A new Game', game);
};

export const Logger = {
  prefix: '===(',
  postfix: ')===',
  debug: (label = 'DEBUG', dump: any): void => {
    console.debug(Logger.prefix, label, Logger.postfix);
    console.debug(dump);
  },
};

export default {
  DebugRoutine,
  Logger,
};
