<!--
 * @Description: 
 * @Author: weiqinl
 * @Date: 2019-08-04 12:39:08
 * @LastEditTime: 2021-01-10 23:34:09
 * @LastEditors: weiqinl
 * @FilePath: \vue-element-admin\src\views\components\directives.vue
-->
<template>
  <div>
    <el-card>
      <template slot="header">
        水波纹 v-ripple
      </template>
      <el-button v-ripple class="c-button c-button--blue" type="button" >
        ripple Button
      </el-button>
      <el-button type="primary" class="c-button1" v-ripple>水波纹</el-button>
      <button class="c-button c-button--blue" type="button">
        <div class="c-ripple js-ripple is-active">
          <span class="c-ripple__circle"></span>
        </div>
        Short Button
      </button>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
$color: blue;
.c-button {
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: 0;
  vertical-align: middle;
  overflow: visible;
  color: #fff;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  user-select: none;
  box-shadow: 2px 2px 0 0 darken(#434A54, 5%);
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    outline: 0;
    text-decoration: none;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  
    background: $color;
    text-shadow: 2px 2px 0 darken($color, 10%);
    &:hover {
      background: darken($color, 5%);
    }
}


/**
 * Utility: Ripple
 * --------------------------------------------------
 */

.c-ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}

.c-ripple__circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .25);
  .c-ripple.is-active & {
    animation: a-ripple .4s infinite;
  }
}

/**
 * Animation: Ripple
 * --------------------------------------------------
 */

@keyframes a-ripple {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 200%;
    padding-bottom: 200%;
    opacity: 0;
  }
}
</style>