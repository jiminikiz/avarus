<template>
  <div class="game-board">
    <section class="sector tile"
      v-for="({ 0: code, 1: sector }, key) in sectors"
      :title="code +' '+ placement(code)"
      :key="key"
      :style="sectorStyles(sector)"
    >
    {{ code }}
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Sector } from '@/model/Sector';
import { Gang } from '@/model/Gang';

@Component({
  name: 'game-board',
})
export default class GameBoard extends Vue {
  @Prop() private sectors?: Map<string, Sector>;
  @Prop() private placements?: Map<string, Gang>;

  public placement(code: string): string {
    const gang = this.placements?.get(code);
    return gang ? gang.name : '';
  }
  public sectorStyles(sector: Sector) {
    if (sector.controlledBy) {
      return {
        backgroundColor: `#${sector.controlledBy?.color}`,
      };
    }
  }
}
</script>

<style lang="stylus">
  .game-board {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    height: 720px;
    width: 720px;
    border: 2px solid color-primary;
    .tile {
      border: 2px solid color-primary;
      &:hover {
        background-color: color-glass;
        outline: 2px solid color-secondary;
      }
    }
  }
</style>
