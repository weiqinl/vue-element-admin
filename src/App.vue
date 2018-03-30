<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "@/assets/css/theme/fa4f52/index.css"; // 换肤版本fa4f52 css
import "@/assets/css/theme/20a0ff/index.css"; // 换肤版本20a0ff css
import "@/assets/css/theme/00a597/index.css"; // 换肤版本00a597 css
export default {
  data() {
    return {};
  }
};
</script>

<style  lang="scss">
@import "./assets/css/weiqinl.lib.css";
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
