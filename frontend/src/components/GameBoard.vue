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
    console.debug(sector.controlledBy);
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
