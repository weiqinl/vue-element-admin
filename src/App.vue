<template>
  <div id="app">
    <Header></Header>
    <Siderbar></Siderbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Siderbar from './components/Siderbar'
  import Footer from './components/Footer'
export default {
  components: {
    Header,
    Siderbar,
    Footer
  },
  name: 'app',
  data() {
      return {
       
      };
    } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
