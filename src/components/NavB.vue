<template>
  <nav class="app-nav">
    <router-link to="/buy">
      <div class="nav-item">
        <div class="homeImg"></div>
      </div>
    </router-link>
    <router-link to="/Cart">
      <div class="nav-item">
        <div class="cartImg">
          <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
        </div>
      </div>
    </router-link>
    <router-link to="/Profile">
      <div class="nav-item">
        <div class="profileImg"></div>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { computed, onUpdated, ref } from "vue";
import store from '../store'

const cartCounter = computed(() => {
  return store.state.cartCounter;
})

</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #eee;
  font-size: 0;
  background-color: #fff;
  height: $NavHeight;
  z-index: 999;
}
.homeImgOn {
  background-position: 100% 100%;
}
.cartImgOn {
  background-position: 100% 100%;
}
.profileImgOn {
  background-position: 100% 100%;
}
.nav-item {
  height: 100%;
  display: inline-block;
  width: 33.33%;
  text-align: center;
}
.nav-item > div {
  display: inline-block;
  width: $NavHeight * 0.75;
  height: $NavHeight * 0.75;
  margin-top: $NavHeight * 0.125;
}
.homeImg {
  background-image: url("../../static/icon/home.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3 $NavHeight * 0.75;
}
.cartImg {
  background-image: url("../../static/icon/cart.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3 $NavHeight * 0.75;
}
.profileImg {
  background-image: url("../../static/icon/profile.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3 $NavHeight * 0.75;
}

.cart-counter {
  position: absolute;
  width: 25px;
  height: 20px;
  top: 5px;
  line-height: 20px;
  border-radius: 40%;
  background-color: $mainRed;
  color: #fff;
  font-size: 10px;
}
</style>
