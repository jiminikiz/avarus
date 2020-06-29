<template>
  <nav class="menu">
    <ul>
      <li
        v-for="({ label, path }, key) in links"
        :key="key"
      >
        <router-link :to="path">
          {{ label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationMenu extends Vue {
  @Prop() private links!: [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
