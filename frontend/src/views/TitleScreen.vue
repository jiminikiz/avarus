<template>
  <div class="home">
    <NavigationMenu :links="menuOptions" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  name: 'TitleScreen',
  components: {
    NavigationMenu,
  },
  data: () => {
    return {
      menuOptions: [
        {
          label: 'New Game',
          path: '/new-game',
        },
        // {
        //   label: 'Settings',
        //   path: '/settings',
        // },
        // {
        //   label: 'Quit',
        //   path: '/',
        // },
      ],
    };
  },
  methods: {

  },
};
</script>
