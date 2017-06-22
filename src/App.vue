<template>
  <div id="app">
    <router-view></router-view>
    <rd-modal></rd-modal>
    <rd-notification></rd-notification>
    <rd-loadingbar></rd-loadingbar>
    <rd-preview></rd-preview>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
