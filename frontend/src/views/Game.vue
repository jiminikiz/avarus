<template>
  <div class="game">
    <GameBoard :board="game.board" />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import GameBoard from '@/components/GameBoard';

export default {
  name: 'game',
  components: {
    GameBoard,
  },
  created() {
    console.debug(this.game);
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState('game', ['game']),
  },
};
</script>

<style lang="stylus">

</style>