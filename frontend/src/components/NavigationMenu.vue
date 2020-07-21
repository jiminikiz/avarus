<template>
  <nav class="avarus-menu">
    <ul>
      <li
        v-for="({ label, path }, key) in links"
        :key="key"
      >
        <router-link class="button" :to="path">
          {{ label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface NavigationLinkItem {
  label: string;
  path: string;
}

@Component({
  name: 'nav-menu',
})
export default class NavigationMenu extends Vue {
  @Prop() private links?: NavigationLinkItem[];
}
</script>


<style scoped lang="stylus">
  .avarus-menu {
    li {
      list-style: none;
    }
  }
</style>
