<template>
  <div class="login-page">
    <header>
      <span class="toPrePage" @click="toPrePage">
        <i class="el-icon-arrow-left"></i>
      </span>
      <h3>登录</h3>
    </header>
    <main>
      <div class="login">
        <n-form>
          <n-form-item>
            <n-input :value="username" placeholder="请输入帐号"></n-input>
          </n-form-item>
          <n-form-item>
            <n-input type="password" :value="password" placeholder="请输入密码"></n-input>
          </n-form-item>
          <n-form-item style="display: inherit">
            <n-space align="baseline" style="margin: auto">
              <n-button type="success" size="large" @click="login">登录</n-button>
              <n-button size="large">注册</n-button>
            </n-space>
          </n-form-item>
        </n-form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from '../store'
import router from "../router";
const username = ref('王小明'),
  password = ref('123456')

const login = () => {
  store.commit('login', username);
  router.go(-1);
},
  toPrePage = () => {
    router.go(-1);
  }
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1001;
  header {
    position: relative;
    height: 50px;
    line-height: 50px;
    .toPrePage i {
      position: absolute;
      left: 10px;
      font-size: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }
}
</style>
