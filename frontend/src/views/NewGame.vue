<template>
  <div class="new-game">
    <h1>New Game</h1>
    <p>New game configuration here</p>
    <form>
      <fieldset>
        <label>Player Name</label>
        <input type="text" placeholder="Kage Chax">
        <label>Mode</label>
        <select v-model="selected.mode">
          <option v-for="(key, mode) in modes" :value="mode" :key="key">
            {{ mode }}
          </option>
        </select>
        <div class="float-right">
          <input type="checkbox" id="confirmField">
          <label class="label-inline" for="confirmField">Send a copy to yourself</label>
        </div>
        <input class="button-primary" type="submit" value="Send">
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { GameMode } from '@/model/Game';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  name: 'NewGame',
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
  data: () => {
    return {
      modes: GameMode,
      selected: {
        mode: 'Greed'
      },
    };
  },
  methods: {

  },
};
</script>
