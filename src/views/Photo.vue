<template>
  <gallery :photos="photos"></gallery>
</template>

<script lang="ts">
// @Options({
//   components: {
//     Gallery,
//   },
// })
import "../assets/css/style.css";
import Gallery from "../components/Gallery.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Photo",
  components: {
    Gallery,
  },

  setup() {
    const photos = ref([
      "lordea-home-01-min.jpg",
      "lordea-home-02-min.jpg",
      "lordea-home-03-min.jpg",
      "lordea-home-04-min.jpg",
      "lordea-home-05-min.jpg",
      "lordea-home-06-min.jpg",
      "lordea-home-07-min.jpg",
      "lordea-home-08-min.jpg",
    ]);
    return {
      photos,
    };
  },
});
</script>

<style>
</style>
