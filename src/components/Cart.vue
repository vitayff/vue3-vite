<template>
  <div class="cart">
    <header class="cart-header">
      <h3>我的购物车</h3>
    </header>
    <main class="cart-body" v-if="cartGoods.length > 0">
      <div class="wrap">
        <n-card v-for="item in cartGoods" :bordered="false" title>
          <cart-one-item
            :itemId="item.id"
            :imgUrl="item.img"
            :title="item.title"
            :content="item.content"
            :price="item.price"
            :count="item.count"
          ></cart-one-item>
        </n-card>
        <div class="price-wrap">
          <div class="amount">
            商品总价：
            <span class="float-right">￥{{ amount }}</span>
          </div>
          <div class="red-packet">
            <div>
              红包：
              <n-select
                class="sele-width"
                v-model:value="redPacket"
                :options="redPackets"
                placeholder="无可用红包"
              ></n-select>
              <span class="float-right" v-show="redPacket">{{ indexx }}-￥{{ redPacket }}</span>
            </div>
          </div>
          <div class="pay">
            <div>
              商品实付：
              <span class="float-right">￥{{ amount - redPacket }}</span>
            </div>
            <div>
              <span>运费（实付满49免邮）：</span>
              <span class="float-right">
                <span class="postage" v-show="needPostage">￥{{ postage }}</span>
                <span class="postage" v-show="!needPostage">免邮</span>
              </span>
            </div>
            <div>
              <span class="text-left">
                合计：
                <span class="float-right">￥{{ pay }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="cart-footer" v-show="cartGoods.length > 0">
      <div class="toPay">
        <n-button color="#ff69b4" class="text-right" @click="toOrderForm">
          去结算
          <n-icon>
            <arrow-icon />
          </n-icon>
        </n-button>
      </div>
    </footer>
    <div v-if="cartGoods.length === 0" class="empty-wrap">你还没有添加任何商品哦~</div>
  </div>
</template>

<script setup>
import CartOneItem from './CartOneItem.vue'
import { ChevronForward as ArrowIcon } from '@vicons/ionicons5'
import { computed, reactive, ref } from 'vue'
import store from '../store'
import router from '../router'

const redPackets = reactive([
  { value: 10, label: '10元红包(满70可用)', disabled: true },
  { value: 20, label: '20元红包(满100可用)', disabled: true },
  { value: 30, label: '30元红包(满150可用)', disabled: true }
])
const redPacket = ref(null)
const postage = 6
const needPostage = ref(true)
const cartGoods = computed(() => {
  return store.state.cartGoods;
})
//商品总价
const amount = computed(() => {
  let result = 0;
  cartGoods.value.forEach(good => {
    result += good.price * good.count;
  })
  return result;
})
//合计
const pay = computed(() => {
  let result = amount.value - redPacket.value;
  needPostage.value = result < 49;
  if (needPostage.value) {
    result += postage;
  }
  return result;
})
//是否可用红包
const indexx = computed(() => {
  if (amount.value < 70) {
    redPackets[0].disabled = true
    redPackets[1].disabled = true
    redPackets[2].disabled = true
    redPacket.value = null
  }
  else if (amount.value < 100) {
    redPackets[0].disabled = false
    redPackets[1].disabled = true
    redPackets[2].disabled = true
    redPacket.value = redPackets[0].value
  }
  else if (amount.value < 150) {
    redPackets[0].disabled = false
    redPackets[1].disabled = false
    redPackets[2].disabled = true
    redPacket.value = redPackets[1].value
  }
  else {
    redPackets[0].disabled = false
    redPackets[1].disabled = false
    redPackets[2].disabled = false
    redPacket.value = redPackets[2].value
  }

})


const toOrderForm = () => {
  let isLogin = store.state.isLogin;
  if (!isLogin) {
    router.push({
      path: '/Login'
    })
    return;
  }
  if (cartGoods.value.length > 0) {
    router.push({
      path: '/OrderForm',
      query: {
        "pay": pay.value
      }
    })
  }
}


</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.float-right {
  float: right;
}
.cart {
  background-color: #fff;
  height: 100%;
}
.cart-header,
.cart-footer {
  background-color: #fff;
}
.cart-header {
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: $cartHeaderHeight;
  line-height: $cartHeaderHeight;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 999;
}
.cart-body {
  padding-top: 15px;
  padding-bottom: $NavHeight + $cartFooterHeight;
  background-color: #f5f5f5;
  .wrap {
    padding-top: 0;
    .price-wrap {
      margin-top: 10px;
      background-color: #fff;
      padding: 15px 10px;
      text-align: left;
      line-height: 40px;
      > div {
        border-bottom: 1px solid #eee;
      }
      .red-packet {
        .sele-width {
          display: inline-block;
          width: 180px;
        }
        .float-right {
          color: $mainRed;
        }
      }
    }
  }
}
.cart-footer {
  position: fixed;
  width: 100%;
  height: $cartFooterHeight;
  line-height: $cartFooterHeight;
  bottom: $NavHeight;
  border-top: 1px solid #eee;
  left: 0;
  text-align: right;
}
.empty-wrap {
  position: absolute;
  height: 50px;
  width: 100%;
  top: 50%;
  margin-top: -25px;
}
ul {
  list-style: none;
}
</style>
