<template>
  <div class="game-board">
    <section
      class="tile"
      v-for="({ 0: code, 1: tile }, key) in board.tiles"
      :key="key"
    >
      [{{code}}]
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Board } from '@/lib/Board';
import { Sector } from '@/model/Sector';

@Component({
  name: 'game-board',
})
export default class GameBoard extends Vue {
  @Prop() private board?: Board;
}
</script>

<style lang="stylus">
  .game-board {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    height: 640px;
    width: 640px;
    border: 1px solid color-primary;
    .tile {
      border: 1px solid color-primary;
      &:hover {
        background-color: color-glass;
        border-color: color-secondary;
      }
    }
  }
</style>
