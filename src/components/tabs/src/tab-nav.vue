<template>
  <div class="wq-tabs__nav-wrap">
    <div class="wq-tabs__nav">
      <div class="wq-tabs__item is-active">用户管理1      </div>
      <div class="wq-tabs__item">配置管理1      </div>
      <div class="wq-tabs__item">角色管理1      </div>
      <div class="wq-tabs__item">定时润物管理1      </div>
    </div>
  </div>
</template>
<script>
import TabBar from './tab-bar'
// noop 无操作
function noop() {}

export default {
  name: 'TabNav',

  // components: {
  //   TabBar
  // },

  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
      default: noop
    },
    type: String
  },

  data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false
    }
  },
 methods: {
   changeTab(e) {
     const keyCode = e.keyCode
     let nextIndex
     let currentIndex, tabList
     if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
       tabList = e.currentTarget.querySelectorAll('[role=tab]')
       currentIndex = Array.prototype.indexOf.call(tabList, e.target)
     } else {
       return
     }
     if (keyCode === 37 || keyCode === 38) {
       if (currentIndex === 0) {
         nextIndex = tabList.length - 1
       } else {
         nextIndex = currentIndex - 1
       }
     } else {
       if (currentIndex < tabList.length - 1) {
         nextIndex = currentIndex + 1
       } else {
         nextIndex = 0
       }
     }
     tabList[nextIndex].focus() // 改变焦点元素
     tabList[nextIndex].click() // 选中下一个tab
   },
   setFocus() {
     this.isFocus = true
   },
   removeFocus() {
     this.isFocus = false;
   }

 },

 render(h) {
   const {
     type,
     panes,
     onTabClick,
     changeTab,
     setFocus,
     removeFocus
   } = this

   const tabs = this._l(panes, (pane, index) => {
     let tabName = pane.name || pane.index || index

     pane.index = `${index}`

     const tabLabelContent = pane.$slots.label || pane.label
     const tabindex = pane.active ? 0 : -1

     return (
      <div 
        class={{
          'el-tabs__item': true,
          'is-active': pane.active,
          'is-focus': this.isFocus
        }}
        id={`tab-${tabName}`}
        aria-controls= {`pane-${tabName}`}
        role= 'tab'
        aria-selected= {pane.active}
        ref= 'tabs'
        tabindex= {tabindex}
        refInFor
        on-focus = { () => { setFocus() }}
        on-blur = { () => { removeFocus() }}
        on-click = { (ev) => { removeFocus(); onTabClick(pane, tabName, ev); }}
      >
        {tabLabelContent}
      </div>
     )
   })

   return (
    <div class='el-tabs__nav-wrap'>
      <div class={['el-tabs__nav-scroll']} ref='navScroll'>
        <div class='el-tabs__nav' ref='nav' style={navStyle} role="tablist" on-keydown={ changeTab }>
          {!type ? <tab-bar tabs={panes}></tab-bar> : null }
          { tabs }
        </div>
      </div>
    </div>
   )
 }

}
</script>

