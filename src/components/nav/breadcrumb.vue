<template>
  <div class="component-breadcrumb">
    <div class="page-title" v-for="(item, index) in $route.meta" key="index" v-if="index = index">
      {{ item }}
       <el-breadcrumb separator=">" class="pr30 pt15 r">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
   
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.component-breadcrumb {
  right: 30px;
}
</style>
