<template>
  <div class="home">
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
};
</script>
