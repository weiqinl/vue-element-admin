<template>
  <div class="component-sidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="1" :unique-opened=false router @open="handleOpen" @close="handleClose">
          <el-menu-item index="/console/home"><i class="el-icon-menu"></i> 首页
          </el-menu-item>
          <el-submenu index="sysset">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item index="/console/sysset/index">主页面设置</el-menu-item>
            <el-menu-item index="/console/sysset/region">地区设置</el-menu-item>
            <el-menu-item index="/console/sysset/industry">行业设置</el-menu-item>
            <el-menu-item index="/console/sysset/tag">标签设置</el-menu-item>
            <el-menu-item index="/console/sysset/activityType">活动类型设置</el-menu-item>
          </el-submenu>
          <el-submenu index="enterprise">
            <template slot="title"><i class="el-icon-setting"></i>企业帐户</template>
            <el-menu-item index="/console/tenantManage">租户管理</el-menu-item>
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
.component-sidebar {
  height: 100%;
  width: 200px;
}
</style>
