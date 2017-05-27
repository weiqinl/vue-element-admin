<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
      return {
      };
   }
}
</script>

<style>
@import './assets/css/weiqinl.lib.css';
@import './assets/css/common.scss';
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
