<template>
  <div class="order-form">
    <header>
      <span class="toProfile" @click="toCart">
        <n-icon size="40" color="#0e7a0d">
          <back-icon />
        </n-icon>
      </span>
      <h3>填写订单</h3>
    </header>
    <main>
      <div class="order-form-item">
        <div v-for="item in cartGoods" v-if="cartGoods.length > 0" class="goods">
          <div class="left">
            <img :src="item.img" alt="图片" />
          </div>
          <div class="right">
            <p>{{ item.count }}</p>
          </div>
        </div>
      </div>
      <div class="order-form-item">
        <p>
          合计：
          <span class="price">￥{{ pay }}</span>
        </p>
      </div>
      <div class="order-form-item">
        <span>地址：</span>
        <n-select
          v-model:value="selectAddress"
          :options="address"
          placeholder="请选择地址"
          v-if="address.length > 0"
        ></n-select>
      </div>
    </main>
    <footer class="order-form-footer">
      <div>
        <span class="price-wrap">
          付款
          <span class="price">￥{{ pay }}</span>
        </span>
        <n-button color="#ff69b4" @click="toPay">
          去支付
          <n-icon size="30" color="#ffffff">
            <go-icon />
          </n-icon>
        </n-button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ChevronBack as BackIcon, ChevronForward as GoIcon } from '@vicons/ionicons5'
import store from '../store'
import { useRoute } from 'vue-router'
import router from "../router";
import { computed, reactive, ref } from "vue";
const route = useRoute()
const adds = reactive({
  arr: []
})
//vite较新，IDE支持不够，代码其实是正确的
ref: selectAddress = 0

const cartGoods = reactive(store.state.cartGoods)

ref: pay = computed(() => {
  return route.query.pay;
})
ref: address = computed(() => {
  store.state.address.forEach((item) => {
    adds.arr.push({
      label: item.name + item.phone + item.city + item.detailAdd,
      value: item.name + item.phone + item.city + item.detailAdd
    })
  })
  return adds.arr
})

const toCart = () => {
  router.push({
    path: '/Cart'
  })
  store.state.cartCounter++;
  store.state.cartCounter--;
}
const toPay = () => {
  store.state.cartGoods = [];
  store.state.cartCounter = 0;
  router.push({
    path: '/Cart'
  })
  //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
  store.state.cartCounter++;
  store.state.cartCounter--;
  alert('支付成功');
}


</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.order-form {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #f5f5f5;
  header {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #fff;

    .toProfile i {
      position: absolute;
      left: 10px;
      font-size: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main {
    margin-top: 10px;
    text-align: left;
    .order-form-item {
      padding: 10px;
      background-color: #fff;
      margin-top: 10px;
    }
    .goods {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      clear: both;
      .left {
        float: left;
        height: 100%;
        img {
          height: 100%;
        }
      }
      .right {
        float: right;
      }
    }
    .price {
      color: $mainRed;
      font-size: 18px;
      font-weight: 600;
      float: right;
    }
  }
  .order-form-footer {
    position: fixed;
    width: 100%;
    height: $cartFooterHeight;
    line-height: $cartFooterHeight;
    bottom: 0;
    border-top: 1px solid #eee;
    left: 0;
    text-align: right;
    background-color: #fff;
    .price-wrap {
      float: left;
      padding-left: 10px;
      font-size: 18px;
    }
    .price {
      color: $mainRed;
      font-weight: 600;
    }
  }
}
</style>
