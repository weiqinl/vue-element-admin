<template>
  <div class="wq-topbar">
    <el-menu router default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
      <img src="../../../assets/images/logo.png" class="logo h60">
      <div class="top-menu-item">
        <el-menu-item index="sousuo">
          <el-input placeholder="搜索"></el-input>
        </el-menu-item>
        <el-menu-item index="huanfu"  @click="skinDialogVisible = true">换肤</el-menu-item>
        <el-submenu index="sysset">
          <template slot="title">weiqinl</template>
          <el-menu-item index="grzx-bky"><a href='http://www.cnblogs.com/weiqinl' target="_blank">博客地址</a></el-menu-item>
          <el-menu-item index="grzx-xmdz"><a href='https://github.com/weiqinl/vue-element-admin' target="_blank">项目地址</a></el-menu-item>
          <el-menu-item index="/login">退出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <el-dialog title="动态换肤" :visible.sync="skinDialogVisible" size="small">
      <span>
        <el-radio-group v-model="moreTheme" @change="changeTheme">
          <el-radio label="20a0ff">默认-20a0ff</el-radio>
          <el-radio label="fa4f52">红色-fa4f52</el-radio>
          <el-radio label="00a597">绿色-00a597</el-radio>
        </el-radio-group>
        <h2>只修改了主色调</h2>
        <div class="block">
          <span class="demonstration">Button: </span>
          <span class="wrapper">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="primary" :loading="true">加载中</el-button>
          </span>
        </div>
        <div class="block">
          <el-alert class='alert-item' title="成功提示的文案" type="success">
          </el-alert>
          <el-alert class='alert-item' title="消息提示的文案" type="info">
          </el-alert>
          <el-alert class='alert-item' title="警告提示的文案" type="warning">
          </el-alert>
          <el-alert class='alert-item' title="错误提示的文案" type="error">
          </el-alert>
        </div>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      moreTheme: "20a0ff",
      skinDialogVisible: false
    };
  },
  mounted() {
    let themeClassName = "";
    let localTheme = localStorage.getItem("themeValue");
    themeClassName = localTheme ? localTheme : "20a0ff";
    this.changeClass(document.body, "custom-" + themeClassName);
    this.moreTheme = themeClassName;
  },
  methods: {
    changeClass(element, className) {
      if (!element || !className) return;
      element.className = className;
    },
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
    changeTheme(themeValue) {
      this.changeClass(document.body, "custom-" + themeValue);
      this.moreTheme = themeValue;
      localStorage.setItem("themeValue", themeValue);
    }
  }
};
</script>
<style lang="scss">
.wq-topbar {
  .el-menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      line-height: 60px;
      padding: 6px;
      padding-left: 60px;
    }
    .top-menu-item {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
