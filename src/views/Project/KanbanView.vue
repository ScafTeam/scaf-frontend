<script setup lang="ts">
import workflowVue from '@/components/kanban/workflow.vue'
</script>

<template>
  <el-container>
    <el-main>
      <div class="workflows">
        <workflowVue />
        <workflowVue />
        <workflowVue />
        <workflowVue />
        <workflowVue />
        <workflowVue />
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.workflows {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  height: 450px;
}
</style>