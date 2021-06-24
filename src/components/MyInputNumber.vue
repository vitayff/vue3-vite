<template>
  <div class="my-input-number" @click.stop>
    <n-button size="tiny" @click="minus">
      <n-icon>
        <remove-icon />
      </n-icon>
    </n-button>
    <span class="inputText">{{ count }}</span>
    <n-button size="tiny" @click="plus">
      <n-icon>
        <add-icon />
      </n-icon>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmit, defineProps } from "vue";
import { Remove as RemoveIcon, Add as AddIcon } from '@vicons/ionicons5'

defineProps({ count: Number })
// props: ['count'],


ref: operator = ''

// computed: {
//   number() {
//     return this.count;
//   }
// },

const minus = () => {
  operator = 'minus',
    changeNumber();
},
  plus = () => {
    operator = 'plus'
    changeNumber();
  }
const emit = defineEmit(['changeNumberEvent'])
const changeNumber = () => {
  emit('changeNumberEvent', operator);
}


</script>

<style lang="scss" scoped>
.my-input-number {
  display: inline-block;
  user-select: none;
  .inputText {
    display: inline-block;
    width: 20px;
    text-align: center;
  }
}
</style>
