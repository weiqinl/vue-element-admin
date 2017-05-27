<template>
  <div class="wq-sidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu theme="dark" default-active="1" :unique-opened=false router @open="handleOpen" @close="handleClose">
          <el-menu-item index="/home"><i class="el-icon-menu"></i> 首页
          </el-menu-item>
          <el-submenu index="tables">
            <template slot="title"><i class="el-icon-setting"></i>表格管理</template>
            <el-menu-item index="/tables/basic">普通表格</el-menu-item>
            <el-menu-item index="/tables/fixedheader">普通表格</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss">
.wq-sidebar {
  height: 100%;
  width: 200px;
}
</style>
