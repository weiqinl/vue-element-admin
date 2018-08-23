<template>
  <div class="wq-tabs">
    <tab-nav></tab-nav>
    <tab-pane></tab-pane>
  </div>
</template>
<script>
import TabNav from './src/tab-nav.vue'
import TabPane from './src/tab-pane.vue'
export default {
  components: {
    TabNav,
    TabPane
  },
  watch: {
    activeName(value) {
      this.setCurrentName(value)
    },
    value(value) {
      this.setCurrentName(value)
    },
    currentName(value) {
      if (this.$refs.nav) {
        this.$nextTick(_ => {
          this.$refs.nav.scrollToActiveTab()
        })
      }
    }
  },

  methods: {
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    setCurrentName(value) {
      this.currentName = value
      this.$emit('input', value)
    }
  }
}
</script>

