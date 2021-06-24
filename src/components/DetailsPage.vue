<template>
  <div class="details-page" @click="updatedNavImg">
    <header class="dp-header">
      <span class="dp-header-toRoot">
        <router-link to="/buy">
          <n-icon size="40" color="#0e7a0d">
            <back-icon />
          </n-icon>
        </router-link>
      </span>
      <h3>商品详情</h3>
    </header>
    <main class="dp-main">
      <div class="goods-img-wrap">
        <n-image :src="goods.img" />
      </div>
      <div class="goods-card">
        <h3>{{ goods.title }}</h3>
        <p>{{ goods.content }}</p>
        <div>
          <span>
            ￥
            <span class="goods-price">{{ goods.price }}</span>
          </span>
        </div>
      </div>
      <div class="goods-intruction">
        <p v-for="item in 30">这是{{ goods.title }} 的商品详细介绍</p>
      </div>
    </main>
    <footer class="dp-footer">
      <span>
        <router-link to="/Cart">
          <n-button size="large" class="cart-counter" color="#ff69b4" ghost>
            <span class="num-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
            <n-icon size="26">
              <cart-icon />
            </n-icon>
          </n-button>
        </router-link>
      </span>
      <n-button size="large" class="btn" @click="addGoodsToCart" color="#ff69b4">加入购物车</n-button>
    </footer>
  </div>
</template>

<script setup>
import { BagHandle as CartIcon, ChevronBack as BackIcon } from '@vicons/ionicons5'
import { computed, reactive } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'

const cartCounter = computed(() => {
  return store.state.cartCounter;
})
const route = useRoute()
const goods = computed(() => {
  return route.query;
})
const nn = reactive({
  id: parseInt(goods.value.id),
  img: goods.value.img,
  title: goods.value.title,
  content: goods.value.content,
  price: goods.value.price,
  count: goods.value.count,
  isInCart: false,
})
const addGoodsToCart = () => {
  // console.log(goods)
  if (goods.value.isInCart === "true" || nn.isInCart) {
    store.commit('addGoods', nn.id);
    // console.log(store.state.cartGoods,"sroreeeeeeeeeeeeeeeeeee222")
  } else {
    nn.isInCart = true
    store.commit('addGoodsToCart', nn);
    // console.log(store.state.cartGoods,"sroreeeeeeeeeeeeeeeeeee")
  }
}
const updatedNavImg = () => {
  //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
  store.state.cartCounter++;
  store.state.cartCounter--;
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.details-page {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #fff;
}
.dp-header {
  position: relative;
  text-align: center;
  height: $dpHeaderHeight;
  border-bottom: 1px solid #eee;
  line-height: $dpHeaderHeight;
  .dp-header-toRoot {
    display: block;
    position: absolute;
    top: 0;
    left: 5px;
  }
}
.dp-main {
  background-color: #fff;
  padding-bottom: $dpFooterHeight + 10px;
  .goods-card {
    border: 1px solid #eee;
    margin: 0 10px;
    line-height: 40px;
    .goods-price {
      color: $mainRed;
    }
  }
  .goods-intruction {
    margin-top: 10px;
    border: 1px solid #eee;
    padding: 10px;
    line-height: 20px;
  }
}
.dp-footer {
  width: 100%;
  height: $dpFooterHeight;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  background-color: #fff;
  font-size: 0;

  .btn {
    right: 1px;
    position: absolute;
    width: 80%;
  }

  .cart-counter {
    left: 1px;
    position: absolute;
    width: 20%;
    .num-counter {
      position: absolute;
      z-index: 2;
      width: 25px;
      height: 20px;
      top: 10px;
      left: 35px;
      line-height: 20px;
      border-radius: 40%;
      background-color: #ff65af;
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>
