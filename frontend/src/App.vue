<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
#app {
  input[type='color'],
  input[type='date'],
  input[type='datetime'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='url'],
  input[type='week'],
  input:not([type]),
  textarea,
  select {
    background-color: color-glass
  }
}

</style>
