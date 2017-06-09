<template>
  <div class="app-login">
    <section class="login-wrapper">
      <h1 class="logo"></h1>
      <div class="login-content">
        <el-input placeholder="请输入用户名" class="phone-number" v-model="phoneNum"></el-input>
        <el-input placeholder="请输入密码" type="password" class="password-number" v-model="password" @keyup.enter.native="login"></el-input>
        <a class="submit" href="javascript:;" @click="login">登录</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
      return {
        phoneNum: 'admin',
        password: 'admin'
      }
    },
    methods: {
      // 模拟登录
      login() {
        if (this.phoneNum && this.password) {
        this.$router.push('/home');
        } else {
          this.$message({
              message: '请输入用户名和密码,默认都为admin',
              type: 'warning',
              showClose: false
            })
        }
      }
    }
}
</script>
<style lang="scss">
@import '../assets/css/mixin.scss';
.app-login {
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(top, #00a597 45%, #fff 45%, #fff 100%);
  position: relative;
  .logo {
    position: relative;
    top: 30px;
    left: 200px;
    width: 170px;
    @include bis('../assets/images/logo.png');
  }
  .login-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 650px;
    height: 500px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 30px;
    h1 {
      height: 73px;
      line-height: 72px;
      text-align: center;
      font-size: 30px;
    }
    .login-content {
      margin: 20px 95px 0;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      input {
        display: block;
        width: 100%;
        margin-top: 30px;
        background: #f8f8f8;
      }
    }
    
    .submit {
      display: block;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 6px;
      background: $--color;
      color: #fff;
      font-size: 16px;
      margin: 30px 0;
    } 
  }
}
</style>
