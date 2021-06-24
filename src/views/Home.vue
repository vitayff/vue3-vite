<template>
  <div class="app-wrapper">
    <Menu1 class="sidebar-container"></Menu1>
  </div>

  <div class="home">
    <HelloWorld msg="移动应用开发大作业" />
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Menu1 from '../components/Menu.vue';
</script>
<style scoped>
.app-wrapper {
  display: table;
  position: relative;
  height: 100%;
  width: 100%;
}
.home {
  height: 100%;
  background-image: url("../assets/aaa.jpg");
}
</style>
