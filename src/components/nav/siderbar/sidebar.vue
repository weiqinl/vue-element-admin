<template>
  <div class="wq-sidebar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-row >
      <el-col :span="24">
        <el-menu :default-active="$route.path" :unique-opened=true router  @open="handleOpen" @close="handleClose" :collapse="isCollapse"
          v-for="(item, index) in menuItem" :key="index" >
          <el-menu-item v-if="typeof item.child === 'undefined'" :index="item.path">
            <i class="icon" :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path">
            <template slot="title">
              <i class="icon" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(child_item, child_index) in item.child" :index="child_item.path" :key="child_index">
              <i class="icon" :class="child_item.icon"></i>              
              <span slot="title">{{ child_item.title }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuItem: [{
          title: '首页',
          path: '/home',
          icon: 'el-icon-menu'
        }, {
          title: '表格管理',
          path: '/tables',
          icon: 'el-icon-setting',
          child: [{
            title: '基础表格',
            path: '/tables/basic',
          }, {
            title: '固定标头表格',
            path: '/tables/fixedheader'
          }]
        }, {
          title: '表单管理',
          path: '/forms',
          icon: 'el-icon-setting',
          child: [{
            title: '基础表单',
            path: '/forms/basicneed',
          }]
        }],
        isCollapse: true
      }
    },
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
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

</style>
