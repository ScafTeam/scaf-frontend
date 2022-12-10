<template>
  <el-row>
    <el-menu
      style="width: 100%"
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      >
      <template
        v-for="item of barItem.items"
        :key="item.id"
      >
        <el-col :span="item.span" :offset="item.offset ? item.offset : 0">
          <template v-if="item.to">
            <RouterLink :to="item.to">
              <nav-bar-item :data="item.data"></nav-bar-item>
            </RouterLink>
          </template>
          <template v-else>
            <nav-bar-item :data="item.data"></nav-bar-item>
          </template>
        </el-col>
      </template>
    </el-menu>
  </el-row>
</template>

<script lang="ts" setup>
import NavBarItem from './NavBarItem.vue'
import { ref, toRefs, defineProps } from 'vue'

const activeIndex = ref('1')
const props = defineProps({
  barItem: {
    type: Object,
    default: () => {}
  }
})
const { barItem } = toRefs(props)
</script>

<style scoped>
* {
  text-decoration: none;
}
</style>