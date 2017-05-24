<template>
	<div class="component-header">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
 	 <el-submenu index="2">
    <template slot="title">伟勤</template>
    <el-menu-item index="2-1">个人中心</el-menu-item>
    <el-menu-item index="2-2">退出</el-menu-item>
  </el-submenu>
		</el-menu>

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
        console.log(key, keyPath);
      }
    }
  }
</script>