<template>
  <div class="new-game">
    <h1>New Game</h1>
    <section>
      <fieldset>
        <label>Player Name</label>
        <input type="text" v-model="player.name" placeholder="Kage Chax">
        <button class="button" @click="generateName()">
          Random
        </button>
        <label>Color</label>
        <select v-model="player.color">
          <option v-for="(hex, color) in colors" :value="hex" :key="hex">
            <span>{{ color }}</span>
          </option>
        </select>
        <label>Henchmen</label>
        <select v-model="player.kingpin.henchmen">
          <option v-for="(gang, index) in gangs" :value="gang" :key="index">
            <span>{{ gang.name }}</span>
          </option>
        </select>
        <label>Mode</label>
        <select v-model="game.mode">
          <option v-for="(key, mode) in modes" :value="key" :key="key">
            {{ mode }}
          </option>
        </select>
        <label>Difficulty</label>
        <select v-model="game.difficulty">
          <option v-for="(difficulty, key) in difficulties" :value="difficulty" :key="key">
            {{ difficulty }}
          </option>
        </select>
      </fieldset>
      <button class="button" @click="newGame()">
        Start Game
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { Gangs, Names } from '@/data';

import { Game, GameMode, GameDifficulty } from '@/model/Game';
import { Color, Player } from '@/model/Player';
import { Gang } from '@/model/Gang';

import NavigationMenu from '@/components/NavigationMenu.vue';
import Tools from '../lib/Tools';

export default {
  name: 'new-game-screen',
  components: {
    NavigationMenu,
  },
  // sockets: {
  //   connect() {
  //     console.log('socket:connected');
  //   },
  //   custom(value) {
  //     console.log('emit:', value);
  //   }
  // },
  created() {
    this.generateName();
  },
  data: () => {
    return {
      modes: GameMode,
      colors: Color,
      gangs: Gangs,
      difficulties: GameDifficulty,
      player: {
        name: '',
        color: Color.Red,
        kingpin: {
          henchmen: Gangs[0],
        },
      },
      game: {
        mode: GameMode.Greed,
        difficulty: GameDifficulty.Medium,
      },
    };
  },
  methods: {
    generateName(): void {
      this.player.name = Tools.random.elements(2, Names).map(({ name }) => name).join(' ');
    },
    newGame(): void {
      const game = new Game({
        ...this.game,
        players: [new Player(this.player)],
        board: { rows: 8, cols: 8 },
      });

      console.log(game);
    },
  },
};
</script>

<style>

</style>