<template>
  <div class="new-game">
    <h1>New Game</h1>

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import NavigationMenu from '@/components/NavigationMenu.vue';
import Modes from '@/model/mode';

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
  methods: {}
};
</script>
