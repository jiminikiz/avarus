import { Dice } from '@/lib/Dice';
import { Board } from './lib/Board';
import { Player, Color, Trait } from './model/Player';
import { Gang } from './model/Gang';
import attributes from './model/Attributes';

export interface Debugery {
  prefix?: string;
  label: string;
  postfix?: string;
  dump: any;
}

export default () => {
  debug({
    label: 'Roll four, six-sided die',
    dump: Dice.shaker({
      numberOfDice: 4,
      numberOfSides: 6,
    }),
  });

  debug({
    label: 'A 9x9 game board',
    dump: new Board({
      rows: 8,
      cols: 8,
    }),
  });

  debug({
    label: 'A new Player',
    dump: new Player({
      color: Color.Black,
      kingpin: {
        trait: Trait.Pride,
        henchmen: new Gang({
          name: 'Raincoat University',
          attributes,
        }),
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
