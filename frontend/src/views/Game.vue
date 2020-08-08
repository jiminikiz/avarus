<template>
  <div class="game">
    <GameBoard
      :sectors="game.sectors"
      :placements="game.activePlayer.placements"
    />
  </div>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex';

import GameBoard from '@/components/GameBoard';

export default {
  name: 'game',
  components: {
    GameBoard,
  },
  created() {
    if (this.game === null) {
      this.newGame(this.debugGame);
    }
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState('game', [
      'game',
      'debugGame',
    ]),
  },
  methods: {
    ...mapActions('game', [
      'newGame',
    ]),
  },
};
</script>

<style lang="stylus">

</style>