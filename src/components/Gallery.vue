<template>
  <div class="vueGallery">
    <div
      class="activePhoto"
      :style="'background-image: url(image/' + photos[activePhoto] + ')'"
    >
      <button
        type="button"
        aria-label="Previous Photo"
        class="previous"
        @click="previousPhoto()"
      >
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      <button
        type="button"
        aria-label="Next Photo"
        class="next"
        @click="nextPhoto()"
      >
        <i class="fas fa-chevron-circle-right"></i>
      </button>
    </div>

    <div class="thumbnails">
      <div
        v-for="(photo, index) in photos"
        :src="`image/${photo}`"
        :key="index"
        @click="changePhoto(index)"
        :class="{ active: activePhoto === index }"
        :style="'background-image: url(image/' + photo + ')'"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Gallery",
  props: {
    photos: {
      //父组件向子组件传值,通过设置props属性
      type: Array,
      default: () => [],
      require: true,
    },
  },

  setup(props) {
    const activePhoto = ref(0);
    const changePhoto = (index: number) => {
      activePhoto.value = index;
      document.addEventListener("keydown", (event) => {
        if (event.which == 37) previousPhoto();
        if (event.which == 39) nextPhoto();
      });
    };
    const previousPhoto = () => {
      changePhoto(
        activePhoto.value - 1 >= 0
          ? activePhoto.value - 1
          : props.photos.length - 1
      );
    };
    const nextPhoto = () => {
      changePhoto(
        activePhoto.value + 1 < props.photos.length ? activePhoto.value + 1 : 0
      );
    };
    return {
      changePhoto,
      previousPhoto,
      nextPhoto,
      activePhoto,
    };
  },
});
</script>

<style>
</style>
