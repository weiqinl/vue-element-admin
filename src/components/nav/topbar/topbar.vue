<template>
  <div class="wq-topbar h60">
    <a href="#"><img src="../../../assets/images/logo.png" class="logo"></a>
    <div class="top-menu-box">
      <el-menu router :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
        <el-menu-item index="">
          <el-input placeholder="搜索"></el-input>
        </el-menu-item>
        <el-submenu index="sysset">
          <template slot="title">weiqinl</template>
          <el-menu-item index="">设置</el-menu-item>
          <el-menu-item index="/login" >退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
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
  background-color: #eef1f6;
  .logo {
    height: 50px;
    padding-top: 6px;
    padding-left: 60px;
  }
  .person {
    width: 30px;

  }
}
</style>
