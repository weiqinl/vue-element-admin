<template>
  <div class="wq-topbar h60">
    <a href="#">
      <img src="../../../assets/images/logo.png" class="logo">
    </a>
    <div class="top-menu-box">
      <el-menu router :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
        <el-menu-item index="">
          <el-input placeholder="搜索"></el-input>
        </el-menu-item>
        <el-submenu index="sysset">
          <template slot="title">weiqinl</template>
          <el-menu-item index="0">设置</el-menu-item>
          <el-menu-item index="" @click="skinDialogVisible = true">换肤</el-dropdown>
          </el-menu-item>
          <el-menu-item index="/login">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-dialog title="动态换肤" :visible.sync="skinDialogVisible" size="small">
      <span>
        <el-radio-group v-model="moreTheme" @change="changeTheme">
          <el-radio label="20a0ff">默认-20a0ff</el-radio>
          <el-radio label="ff0000">红色-ff0000</el-radio>
          <el-radio label="0000ff">蓝色-0000ff</el-radio>
          <el-radio label="008000">绿色-008000</el-radio>
        </el-radio-group>
        <h2>只修改了主色调</h2>
        <div class="block">
          <span class="demonstration">Button: </span>
          <span class="wrapper">
            <el-button >默认按钮</el-button>
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
  import {
    changeClass
  } from '@/utils'
  import '@/assets/css/theme/0000ff/index.css' // 换肤版本0000ff css
  import '@/assets/css/theme/008000/index.css' // 换肤版本008000 css
  import '@/assets/css/theme/ff0000/index.css' // 换肤版本ff0000 css
  import '@/assets/css/theme/20a0ff/index.css' // 换肤版本20a0ff css
  export default {
    data() {
      return {
        moreTheme: '20a0ff',
        activeIndex: '1',
        activeIndex2: '1',
        skinDialogVisible: false
      };
    },
    mounted() {
      let themeClassName = ''
      let localTheme = localStorage.getItem('themeValue')
      themeClassName = localTheme ? localTheme : '20a0ff'
      changeClass(document.body, 'custom-' + themeClassName)
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        console.log(keyPath);
      },
      changeTheme(themeValue) {
        changeClass(document.body, 'custom-' + themeValue)
        this.moreTheme = themeValue
        localStorage.setItem("themeValue", themeValue)
      }
    },
    watch: {

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
