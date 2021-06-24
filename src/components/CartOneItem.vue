<template>
  <div class="cart-one-item">
    <div class="left">
      <img :src="imgUrl"  alt=""/>
    </div>
    <div class="right">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
        <div>
          <span class="price">
            ￥
            <span class="price-number">{{ price }}</span>
          </span>
        </div>
      </div>
      <div class="cart-btn">
        <my-input-number :count="counter" @changeNumberEvent="getOperator"></my-input-number>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import MyInputNumber from "./MyInputNumber.vue";
import store from '../store'
import { useDialog } from 'naive-ui'

const props = defineProps(['itemId', 'imgUrl', 'title', 'content', 'price', 'count'])
const dialog = useDialog()
const counter = computed(() => {
  let cartGoods = store.state.cartGoods;
  let result = 0;
  cartGoods.some(good => {
    if (good.id === props.itemId) {
      result = good.count;
    }
  });
  return result;
})
const getOperator = (op) => {
  if (op === 'plus') {
    store.commit('addGoods', props.itemId);
  } else {
    if (counter.value === 1) {
      dialog.warning({
        title: "警告",
        content: "你确定删除该商品么？",
        negativeText: "取消",
        positiveText: "删除",
        onPositiveClick: () => { store.commit('deleteGoodsFromCart', props.itemId); }
      })
    } else {
      store.commit('reduceGoods', props.itemId);
    }
  }
}


</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.cart-one-item {
  height: $OneCommodityWrapHeight;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fff;
}
.cart-one-item > div {
  font-size: $GobalFontSize;
  display: inline-block;
  vertical-align: middle;
}
.left {
  width: 40%;
  height: 100%;
}
.left > img {
  height: 80%;
  transform: translateY(10%);
}
.right {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 60%;
  text-align: left;
  padding-left: 10px;
  .text {
    position: absolute;
    line-height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .price {
    .price-number {
      color: #ff65af;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
}

@media screen and (min-width: 600px) {
  .cart-one-item {
    height: $OneCommodityWrapHeight600;
  }
}
@media screen and (min-width: 800px) {
  .cart-one-item {
    height: $OneCommodityWrapHeight800;
  }
}
@media screen and (min-width: 1025px) {
  .cart-one-item {
    height: $OneCommodityWrapHeight1025;
  }
}
</style>

