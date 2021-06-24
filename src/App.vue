<template>
  <n-dialog-provider>
    <n-message-provider>
      <router-view />
      <nav-b />
    </n-message-provider>
  </n-dialog-provider>
</template>

<script setup lang="ts">
import NavB from "./components/NavB.vue"
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
