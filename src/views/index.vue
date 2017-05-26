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
}
</style>
