<template>
  <div class="wq-topbar">
   <img src="../../../assets/images/logo.png" class="logo">
    <div class="top-menu">
      <el-menu theme="dark" router :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">
          <el-input placeholder="搜索"></el-input>
        </el-menu-item>
        <el-menu-item index="/console/home">处理中心</el-menu-item>
        <el-menu-item index="/console/sysset/tag">订单管理</el-menu-item>
        <el-submenu index="sysset">
          <template slot="title">个人中心</template>
          <el-menu-item index="/console/home">选项1</el-menu-item>
          <el-menu-item index="/console/sysset/tag">选项2</el-menu-item>
          <el-menu-item index="/login" >退出</el-menu-item>
        </el-submenu>
      </el-menu>
      </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        console.log(keyPath);
      }
    }
}
</script>
<style lang="scss">
@import '../../../assets/css/mixin.scss';
.wq-topbar {
  display: flex;
  justify-content: space-between;
  background-color: $--color;
  .logo {
    height: 50px;
    padding-top: 6px;
    padding-left: 60px;
  }
  .el-menu {
    background-color: $--color;
  }
}
</style>
