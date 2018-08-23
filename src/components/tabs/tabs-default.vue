<template>
  <div class="tabs-default">
    <!-- // v-model @tab-click type  -->
    <ol class="tabs-def-nav">
      <li>用户管理</li>
      <li>配置管理</li>
      <li>角色管理</li>
    </ol>
    <ol class="tabs-def-panes">
      <div>
         <li>用户管理-用户管理</li>
      </div>
      <div>
        <li>配置管理-配置管理</li>
      </div>
      <div>
         <li>角色管理-角色管理</li>
      </div>
     
      
     
    </ol>
  </div>
</template>
<style lang="scss">
.tabs-default {
  color: red;
}
</style>

<script>
export default {
  name: 'tabs-deafult',
  components: 'tabs-default',
  data() {
    return {

    }
  },
  methods() {

  }
}
</script>
