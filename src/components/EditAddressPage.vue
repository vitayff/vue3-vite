<template>
  <div class="edit-address-page">
    <header>
      <span class="toProfile" @click="toProfile">
        <n-icon size="40" color="#0e7a0d">
          <back-icon />
        </n-icon>
      </span>
      <h3>我的收货地址</h3>
    </header>
    <main>
      <div v-if="allAddress.length > 0">
        <n-card title size="large" v-for="(item, index) in allAddress">
          <n-space
            style="display: grid;
                    grid-template-columns:2fr 1fr;
                    grid-gap:40%;"
          >
            <div>
              <p>{{ item.name }}</p>
              <p>{{ item.phone }}</p>
              <p>{{ item.city + item.detailAdd }}</p>
            </div>
            <n-button text @click="toModifyAddress(index)">编辑</n-button>
          </n-space>
        </n-card>
      </div>
    </main>
    <footer>
      <n-button color="#ff69b4" style="width: 90%" @click="toAdressInputForm">新增收货地址</n-button>
    </footer>
  </div>
</template>

<script>
import { ChevronBack as BackIcon } from '@vicons/ionicons5'

export default {
  data() {
    return {

    }
  },
  components: {
    BackIcon
  },
  computed: {
    allAddress() {
      return this.$store.state.address;
    }
  },
  methods: {
    toProfile() {
      this.$router.push({
        path: '/Profile'
      })
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
    toAdressInputForm() {
      this.$router.push({
        path: '/Profile/AddNewAddress'
      })
    },
    toModifyAddress(index) {
      this.$router.push({
        path: '/Profile/ModifyAddress',
        query: {
          index: index
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.edit-address-page {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #f5f5f5;
  header {
    position: relative;
    height: 50px;
    border-bottom: 1px solid #eee;
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
    line-height: 23px;
    .all-address {
      background-color: #fff;
      .address {
        position: relative;
        padding: 10px;
        border-top: 1px solid #eee;
      }
    }
  }
  footer {
    position: fixed;
    width: 100%;
    bottom: 10px;
    left: 0;
  }
}
</style>
