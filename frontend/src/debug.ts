import { Dice } from '@/lib/Dice';
import { Board } from '@/lib/Board';
import { attributes } from '@/model/Attributes';
import { Player, Color, Trait } from '@/model/Player';
import { Gang } from '@/model/Gang';
import { Sector } from '@/model/Sector';
import { Game, GameMode, GameDifficulty } from '@/model/Game';

export interface Debugery {
  prefix?: string;
  label: string;
  postfix?: string;
  dump: any;
}

export default () => {
  const player = new Player({
    color: Color.Black,
    kingpin: {
      trait: Trait.Pride,
      henchmen: new Gang({
        name: 'Raincoat University',
        attributes,
      }),
    },
  });

  debug({
    label: 'Roll four, six-sided die',
    dump: Dice.shaker({
      numberOfDice: 4,
      numberOfSides: 6,
    }),
  });

  debug({
    label: 'A 8x8 game board',
    dump: new Board({
      rows: 8,
      cols: 8,
    }),
  });

  debug({
    label: 'A new Player',
    dump: player,
  });

  debug({
    label: 'A new Sector',
    dump: new Sector({}),
  });

  debug({
    label: 'A new Game',
    dump: new Game({
      players: [ player ],
      mode: GameMode.Acceptance,
      difficulty: GameDifficulty.Easy,
      board: {
        rows: 8,
        cols: 8,
      },
    }),
  });
};

function debug({
  prefix = '===(',
  label = 'DEBUG',
  postfix = ')===',
  dump,
}: Debugery): void {
  console.debug(prefix, label, postfix);
  console.debug(dump);
}
