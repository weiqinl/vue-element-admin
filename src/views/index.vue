<template>
  <div class="viewFramework">
      <header class="viewFrame-header">
        <topbar></topbar>
      </header>
      <nav class="viewFrame-nav l">
        <sidebar></sidebar>
      </nav>
      <section class="viewFrame-section">
        <div class="section-frame">
          <div class="section-border">
            <breadcrumb></breadcrumb>
            <router-view></router-view>
          </div>
        </div>
        <footbar></footbar>
      </section>
  </div>
</template>
<script>
import  footbar from '../components/footer/footer.vue'
import  breadcrumb from '../components/nav/breadcrumb.vue'
import topbar from '../components/nav/topbar/topbar.vue'
import  sidebar from '../components/nav/siderbar/sidebar.vue'

export default {
  components: {
    topbar,
    sidebar,
    footbar,
    breadcrumb
  }
}
</script>
<style lang="scss">
.viewFramework {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .viewFrame-nav {
    height: 100%;  
    background: #324157;
  }
  .viewFrame-section {
    height: calc(100% - 58px);
    overflow-y: scroll;
    .section-frame {
      min-height: calc(100% - 33px);
    }
  }
}
</style>
