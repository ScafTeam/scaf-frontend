<script setup lang="ts">
import { ref } from 'vue'
import taskcardVue from '@/components/kanban/taskcard.vue'
</script>

<template>
  <div class="workflow">
    <taskcardVue />
  </div>
</template>

<style scoped>
.workflow {
  margin: 0px 10px;
  min-width: 300px;
  width: 300px;
  padding: 5px;
  height: 400px;
  background-color: aqua;
}
</style>