<template>
  <div class="new-game">
    <h1>New Game</h1>
    <p>New game configuration here</p>
    <form>
      <fieldset>
        <label>Player Name</label>
        <input type="text" placeholder="Kage Chax">
        <label>Mode</label>
        <select>
          <option value="0-13">0-13</option>
          <option value="14-17">14-17</option>
          <option value="18-23">18-23</option>
          <option value="24+">24+</option>
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
// @ is an alias to /src
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

    };
  },
  methods: {

  },
};
</script>
