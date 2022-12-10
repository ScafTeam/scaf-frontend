<template>
  <template v-if="data.type === 'image'">
    <el-menu-item :class="data.class">
      <img :src="data.value" />
    </el-menu-item>
  </template>
  <template v-else-if="data.type === 'notification'">
    <el-menu-item :class="data.class">
      <el-dropdown trigger="click">
        <el-icon :size="32">
          <Bell />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu style="min-width: 200px;">
            <el-dropdown-item> Action 1 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-badge
        v-if="data.value != 0"
        :value="data.value"
        class="item"
      ></el-badge>
    </el-menu-item>
  </template>
  <template v-else>
    <el-menu-item :class="data.class">
      {{ data.value }}
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { Check, Delete } from "@element-plus/icons-vue";
import { toRefs, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const { data } = toRefs(props);
</script>

<style scoped>
* {
  --el-menu-icon-width: 32px;
}

.el-menu-item {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  color: black;
}

img {
  height: 100%;
}

.el-badge {
  position: absolute;
  left: calc(50% - 2px);
}

.el-dropdown-menu__item i {
  margin: 0 !important;
}
</style>
