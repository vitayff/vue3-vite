<template>
  <header class="home-header">
    <h4 class="top-text">一小时达</h4>
    <div class="tap-menu">
      <n-tabs type="line" justify-content="space-evenly"  size="large" @update:value="changeGoodsType">
        <n-tab-pane
          v-for="panel,index in kindToType"
          :key="index"
          :tab="panel"
          :name="index"
        >{{ panel }}</n-tab-pane>
      </n-tabs>
    </div>
  </header>
</template>

<script setup>
import store from '../store'
const kindToType = ['全部', '水果', '蔬菜', '肉蛋', '速冻', '酒饮', '乳品', '零食']
const changeGoodsType = (num) => {
  store.state.GoodsCurrentSelKind = num
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  .top-text {
    height: $HomeHeaderHeight - 40px;
    line-height: $HomeHeaderHeight - 40px;
  }
}
</style>
