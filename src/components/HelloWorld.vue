<template>
  <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
    <h1>{{ msg }}</h1>
  </n-gradient-text>
  <div>
    <n-card>
      <n-image width="350" :src="pp" />
    </n-card>
  </div>
</template>

<script lang="ts">
import pp from '../assets/ccc.png'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count,pp }
  }
})
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
