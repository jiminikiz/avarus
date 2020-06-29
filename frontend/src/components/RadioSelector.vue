<template>
  <fieldset class="radio-selector">
    <ul>
      <li
        v-for="({ label, value }, key) in items"
        :key="key"
      >
      <input type="radio" v-model="selected">
      <label for="selected">{{ label }}</label>
      </li>
    </ul>
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface NavigationMenuItem {
  label: string;
  path: string;
}

@Component
export default class RadioSelector extends Vue {
  @Prop() private items!: NavigationMenuItem[];

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
