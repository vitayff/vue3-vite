<template>
  <n-menu @update:value="handleUpdateValue" :options="menuOptions" />
</template>

<script>
import { h } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import {
  BagHandle as CartIcon,
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

import router from '../router'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '菜单',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '购物',
            key: 'buy',
            icon: renderIcon(CartIcon)
          }
        ]
      },
      {
        label: '相册',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '图片',
            key: 'pic'
          }
        ]
      }
    ]
  }
]

export default {
  setup() {
    const message = useMessage()
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        router.push(key)
      }
    }
  }
}
</script>
