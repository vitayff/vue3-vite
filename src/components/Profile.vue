<template>
  <div class="profile">
    <div class="login" v-if="!isLogin">
      <n-button @click="toLogin" type="primary">登录</n-button>
    </div>
    <div class="user" v-else>
      <header class="profile-header">
        <h3>当前用户：{{ username }}</h3>
      </header>

      <n-space vertical>
        <n-button style="width: 100%" @click.stop="toEditAddressPage">
          我的地址
          <n-icon>
            <arrow-icon />
          </n-icon>
        </n-button>
        <n-button style="width: 100%" @click="logout" type="error">退出登录</n-button>
      </n-space>
    </div>
    <router-view v-slot="{ Component }">
      <transition enter-active-class="slideInRight">
        <component :is="Component" />
      </transition>
    </router-view>

    <!--    <transition enter-active-class="slideInRight">-->
    <!--      <router-view></router-view>-->
    <!--    </transition>-->
  </div>
</template>

<script setup>
import { ChevronForward as ArrowIcon } from '@vicons/ionicons5'
import { computed } from "vue";
import store from '../store'
import router from "../router";
const
  username = computed(() => {
    return store.state.username;
  }),
  isLogin = computed(() => {
    return store.state.isLogin;
  })


const toLogin = () => {
  router.push({
    path: '/Login',
  })
},
  toEditAddressPage = () => {
    router.push({
      path: '/Profile/EditAddressPage'
    })
  },
  logout = () => {
    store.commit('logout');
    router.push({
      path: '/Profile'
    })
  }


</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.profile {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
.login {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.profile-header {
  height: 50px;
  line-height: 50px;
}

.user {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .profile-header {
    height: 50px;
    line-height: 50px;
  }
}
</style>
