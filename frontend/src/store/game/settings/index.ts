const state = {
  scenarios: {
    options: {
      timed: false,
      limit: Infinity,
    },
    modes: {
      /**
       * Accumulate the most CASH to win.
       */
      greed: {
        label: 'Greed',
        timed: true,
      },
      /**
       * Control the most SECTORS to win.
       */
      power: {
        label: 'Power',
      },
      /**
       * Gain the most SUPPORT to win.
       */
      acceptance: {
        label: 'Acceptance',
      },
      /**
       * Get scored on Greed + Power + Acceptance, highest score wins.
       */
      dominance: {
        label: 'Dominance',
      },
      /**
       * Kill 'Em All, last player standing wins.
       */
      genocide: {
        label: 'Genocide',
      },
      /**
       * First player to control 2/3rds of the board wins.
       */
      acquisition: {
        label: 'Acquisition',
      },
      /**
       * Last player with a Right Hand wins.
       */
      elimination: {
        label: 'Elimination',
      },
      /**
       * First player to control all HQs wins.
       */
      seige: {
        label: 'Siege',
      },
      /**
       * First player to control special sectors for 40 points wins (need to revise this)
       */
      stronghold: {
        label: 'Stronghold',
      },
      /**
       * First player to control all sectors wins.
       */
      armageddon: {
        label: 'Armageddon',
      },
    },
  },
};

export default {
  state,
};
