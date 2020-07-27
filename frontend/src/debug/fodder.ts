import { Dice } from '@/lib/Dice';
import { Board } from '@/lib/Board';

import { attributes } from '@/model/Attributes';
import { Player, Color, Trait } from '@/model/Player';
import { Gang } from '@/model/Gang';
import { Sector } from '@/model/Sector';
import { Game, GameMode, GameDifficulty } from '@/model/Game';

export const diceRoll = Dice.shaker({
  numberOfDice: 4,
  numberOfSides: 6,
});

export const player = new Player({
  color: Color.Black,
  kingpin: {
    trait: Trait.Pride,
    henchmen: new Gang({
      name: 'Raincoat University',
      attributes,
    }),
  },
});

export const board = new Board({ rows: 8, cols: 8 });

export const sector = new Sector({});

export const game = new Game({
  players: [ player ],
  mode: GameMode.Acceptance,
  difficulty: GameDifficulty.Easy,
  board: {
    rows: 8,
    cols: 8,
  },
});
