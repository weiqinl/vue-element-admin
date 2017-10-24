<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/css/theme/0000ff/index.css' // 换肤版本0000ff css
  import '@/assets/css/theme/008000/index.css' // 换肤版本008000 css
  import '@/assets/css/theme/fa4f52/index.css' // 换肤版本fa4f52 css
  import '@/assets/css/theme/20a0ff/index.css' // 换肤版本20a0ff css
  import '@/assets/css/theme/00a597/index.css' // 换肤版本00a597 css
export default {
  data() {
      return {
      };
   }
}
</script>

<style  lang="scss">
  @import './assets/css/weiqinl.lib.css';
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
