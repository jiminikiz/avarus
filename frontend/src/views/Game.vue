<template>
  <div class="game">
    <GameBoard :board="game.board" />
  </div>
</template>

<script lang="ts">
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