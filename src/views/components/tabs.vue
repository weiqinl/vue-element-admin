<template>
 <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理content用户管理content" name="first">el-tabs-用户管理content</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">el-tabs-配置管理content</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">el-tabs-角色管理content</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">el-tabs-定时任务补偿content</el-tab-pane>
  </el-tabs>
  <div class="cs-tabs" id='wqtabs1' >
    <div class="cs-tabs-header">
      <div class="cs-tabs-nav-wrap">
        <div class="cs-tabs-nav-scroll">
          <div class="cs-tabs-nav" @click="csHandleClick">      
            <div class="wq-tabs__item is-active" name='yhgl'>用户管理用户管理content--1</div>
            <div class="wq-tabs__item"  name='pzgl'>配置管理</div>
            <div class="wq-tabs__item"  name='jsgl'>角色管理</div>
            <div class="wq-tabs__item"  name='dsgl'>定时润物管理</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cs-tabs-content">
        <div class="wq-tabs-pane"  name='yhgl'>cs-tabs-用户管理content--1      </div>
        <div class="wq-tabs-pane"  name='pzgl' style="display: none">cs-tabs-配置管理content--1      </div>
        <div class="wq-tabs-pane"  name='jsgl' style="display: none">cs-tabs-角色管理content--1      </div>
        <div class="wq-tabs-pane"  name='dsgl' style="display: none">cs-tabs-定时润物管理content--1      </div>
    </div>
  </div>
  <div class="menu-left" id='menuleft' >
    <div class="menu">
      <div class="menu-group db">
        <div class="cs-tabs-left" id='wqtabs2' >
          <div class="cs-tabs-header">
            <div class="cs-tabs-nav-wrap">
              <div class="cs-tabs-nav-scroll">
                <div class="cs-tabs-nav" @click="csHandleClick_left">
                  <div class="wq-tabs__active-bar"></div>
                  <div class="wq-tabs__item is-active" name='yhgl'>1</div>
                  <div class="wq-tabs__item"  name='pzgl'>配置</div>
                <div class="wq-tabs__item"  name='pzgl'>定时润物管定时润物管理理</div>
                  <div class="wq-tabs__item"  name='jsgl'>角色管理</div>
                  <div class="wq-tabs__item"  name='dsgl'>定时润物管定时润物管理理</div>
                </div>
              </div>
            </div>
          </div>
          <div class="cs-tabs-content">
              <div class="wq-tabs-pane"  name='yhgl'>用户管理content--1      </div>
              <div class="wq-tabs-pane"  name='pzgl' style="display: none">配置管理content--1      </div>
              <div class="wq-tabs-pane"  name='pzgl' style="display: none">配置管理content--1      </div>
              <div class="wq-tabs-pane"  name='jsgl' style="display: none">角色管理content--1      </div>
              <div class="wq-tabs-pane"  name='jsgl' style="display: none">角色管理content--1      </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
 </div>
</template>
<style lang="scss">
@import '../../../src/assets/css/weiqinl.lib.css';
$main-color: #20a0ff;
.cs-tabs {
  .cs-tabs-nav {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #d1dbe5;
    margin: 0 0 15px;
    .wq-tabs__item {
      color: gray;
      padding: 5px 16px;
      cursor: pointer;
      margin-bottom: -1px;
    }
    .is-active {
      color: $main-color;
      border-bottom: 3px solid $main-color;
    }
  }
}
.menu-left {
  border: 1px solid #20a0ff;
  .menu {
    cursor: pointer;
  }
}
.cs-tabs-left {
  display: flex;
  // box-sizing: border-box;
  .cs-tabs-nav-wrap {
    cursor: pointer;
    .cs-tabs-nav {
      padding-left: 1px;
      .wq-tabs__item {
        padding: 5px 10px;
        text-align: end;
        &:hover {
          color: $main-color;
        }
      }
    }
    .is-active {
      color: $main-color;
      border: 1px solid #d1dbe5;
      border-right: 0;
      border-radius: 5px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      margin: -1px;
      margin-right: 0px;

      // margin-bottom: -1px;
    }
  }
  .cs-tabs-content {
    flex: 1;
    margin-left: 10px;
  }
}
</style>

<script>
import WqTabs from '@/components/tabs/index.vue'
export default {
  components: {
    WqTabs
  },
  data() {
    return {
      activeName: 'second',
      tabPosition: 'left'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('select')
      console.log(key)
      console.log(keyPath)
      console.log('select')
      let oTabs = document.getElementById('wqtabs2')
      let aTabsNav = oTabs.querySelectorAll('.cs-tabs-nav .wq-tabs__item')
      let aTabsCnt = oTabs.querySelectorAll('.cs-tabs-content .wq-tabs-pane')
      for (let j = 0; j < aTabsNav.length; j++) {
        if (j === key) {
          aTabsCnt[j].style.display = ''
          aTabsNav[j].classList.add('is-active')
        } else {
          aTabsCnt[j].style.display = 'none'
          aTabsNav[j].classList.remove('is-active')
        }
      }

      console.log('selecthandle')
    },
    handleClick(e) {
      console.log('handleClick ' + e.name)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    csHandleClick(e) {
      let tagEl = e.target
      let oTabs = document.getElementById('wqtabs1')
      let aTabsNav = oTabs.querySelectorAll('.cs-tabs-nav .wq-tabs__item')
      let aTabsCnt = oTabs.querySelectorAll('.cs-tabs-content .wq-tabs-pane')
      for (let j = 0; j < aTabsNav.length; j++) {
        if (aTabsNav[j] === tagEl) {
          aTabsCnt[j].style.display = ''
          aTabsNav[j].classList.add('is-active')
        } else {
          aTabsCnt[j].style.display = 'none'
          aTabsNav[j].classList.remove('is-active')
        }
      }
    },
    csHandleClick_left(e) {
      let tagEl = e.target
      let oTabs = document.getElementById('wqtabs2')
      let aTabsNav = oTabs.querySelectorAll('.cs-tabs-nav .wq-tabs__item')
      let aTabsCnt = oTabs.querySelectorAll('.cs-tabs-content .wq-tabs-pane')
      for (let j = 0; j < aTabsNav.length; j++) {
        if (aTabsNav[j] === tagEl) {
          aTabsCnt[j].style.display = ''
          aTabsNav[j].classList.add('is-active')
        } else {
          aTabsCnt[j].style.display = 'none'
          aTabsNav[j].classList.remove('is-active')
        }
      }
    }
  }
}
</script>
