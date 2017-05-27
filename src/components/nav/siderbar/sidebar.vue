<template>
  <div class="wq-sidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu theme="dark" class="menu-ul":default-active="$route.path" :unique-opened=false router @open="handleOpen" @close="handleClose" v-for="(item, index) in menuItem" :key="index">
          <el-menu-item class="menu-li"  v-if="typeof item.child === 'undefined'" :index="item.path"><i class="icon" :class="item.icon"></i><span v-text="item.title" class="text"></span>
          </el-menu-item>
          <el-submenu v-else :index="item.path" >
            <template slot="title">
              <i class="icon" :class="item.icon"></i>
              <span v-text="item.title" class="text"></span>
            </template>
            <el-menu-item class="menu-li" v-for="(child_item, child_index) in item.child" :index="child_item.path" :key="child_index"  >
            <span v-text="child_item.title" class="text"></span>
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
    },{
      title:'表格管理',
      path: '/tables',
      child: [{
        title: '基础表格',
        path: '/tables/basic'
      },{
        title: '固定标头表格',
        path: '/tables/fixedheader'
      }]
    }]
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
  .menu-ol {
  .menu-li {
    height: 45px;
    line-height: 45px;
    color: #fff;
    background-color: #fff;
  }

  }
}
</style>
