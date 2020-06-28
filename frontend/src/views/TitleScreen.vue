<template>
  <div class="home">
    <button @click="buttonClicked">BUTTON</button>
    <Menu :links="menuOptions" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'TitleScreen',
  components: {
    Menu,
  },
  sockets: {
    connect() {
      console.log('socket:connected');
    },
    custom(value) {
      console.log('emit:', value);
    }
  },
  data: () => {
    return {
      menuOptions: [
        {
          label: 'New Game',
          path: '/',
        },
        {
          label: 'Settings',
          path: '/settings',
        },
        {
          label: 'Quit',
          path: '/',
        },
      ],
    };
  },
  methods: {
    buttonClicked() {
      this.$socket.client.emit('message', 'Button Clicked');
    }
  }
};
</script>
