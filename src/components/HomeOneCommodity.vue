<template>
  <div class="one-commodity">
    <div class="left" @click="goToDetailsPage">
      <img :src="imgUrl" alt="图片" />
    </div>
    <div class="right">
      <div class="text" @click="goToDetailsPage">
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
        <n-button
          color="#ff69b4"
          @click="addGoodsToCartt"
          v-show="counter === 0"
          circle
          size="large"
          ghost
        >
          <n-icon>
            <bag-icon />
          </n-icon>
        </n-button>
        <my-input-number :count="counter" v-show="counter > 0" @changeNumberEvent="getOperator"></my-input-number>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyInputNumber from "./MyInputNumber.vue";
import { BagHandle as BagIcon } from '@vicons/ionicons5'
import { computed, defineProps, reactive, ref, toRefs } from 'vue'
import store from '../store'
import router from '../router'
const props = defineProps(['itemId', 'imgUrl', 'title', 'content', 'price', 'count'])


let oneCommodity = reactive({
  id: props.itemId,
  img: props.imgUrl,
  title: props.title,
  content: props.content,
  price: props.price,
  count: props.count,
  isInCart: false,
})

ref: onedata = computed(() => {
  const cartGoods = store.state.cartGoods;
  let rr = oneCommodity
  cartGoods.some(good => {
    if (good.id === props.itemId) {
      // console.log(good, "find YYYYY")
      rr = good
    }
  })
  // console.log(oneCommodity, "find NNNNN")
  return rr

})


ref: counter = computed(() => {
  let cartGoods = store.state.cartGoods;
  let result = 0;
  cartGoods.some(good => {
    if (good.id === props.itemId) {
      result = good.count;
    }
  });
  return result;
})


const addGoodsToCartt = () => {
  oneCommodity.isInCart = true
  store.commit('addGoodsToCart', oneCommodity)
},
  getOperator = (op) => {
    let id = oneCommodity.id;
    if (op === 'plus') {
      store.commit('addGoods', id);
    } else {
      let count = store.state.cartGoods.filter(val => {
        return val.id === id;
      })[0].count;
      if (count === 1) {
        store.commit('deleteGoodsFromCart', id);
      } else {
        store.commit('reduceGoods', id);
      }
    }
  },
  goToDetailsPage = () => {
    // console.log(onedata)
    router.push({
      path: '/DetailsPage',
      query: onedata
    });
    //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
    store.state.cartCounter++;
    store.state.cartCounter--;
  }



</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.one-commodity {
  height: $OneCommodityWrapHeight;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fff;
}
.one-commodity > div {
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
  .one-commodity {
    height: $OneCommodityWrapHeight600;
  }
}
@media screen and (min-width: 800px) {
  .one-commodity {
    height: $OneCommodityWrapHeight800;
  }
}
@media screen and (min-width: 1025px) {
  .one-commodity {
    height: $OneCommodityWrapHeight1025;
  }
}
</style>
