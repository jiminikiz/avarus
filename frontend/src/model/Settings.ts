export interface GameMode {
  label: string;
  timed?: boolean;
}

const modes: GameMode[] = [
  /**
   * Accumulate the most CASH to win.
   */
  {
    label: 'Greed',
    timed: true,
  },
  /**
   * Control the most SECTORS to win.
   */
  {
    label: 'Power',
  },
  /**
   * Gain the most SUPPORT to win.
   */
  {
    label: 'Acceptance',
  },
  /**
   * Get scored on Greed + Power + Acceptance, highest score wins.
   */
  {
    label: 'Dominance',
  },
  /**
   * Kill 'Em All, last player standing wins.
   */
  {
    label: 'Genocide',
  },
  /**
   * First player to control 2/3rds of the board wins.
   */
  {
    label: 'Acquisition',
  },
  /**
   * Last player with a Right Hand wins.
   */
  {
    label: 'Elimination',
  },
  /**
   * First player to control all HQs wins.
   */
  {
    label: 'Siege',
  },
  /**
   * First player to control special sectors for 40 points wins (need to revise this)
   */
  {
    label: 'Stronghold',
  },
  /**
   * First player to control all sectors wins.
   */
  {
    label: 'Armageddon',
  },
];


export default {
  modes,
};


