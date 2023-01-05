<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <div class="header">
        <h1>Task Card</h1>
        <div class="btn">
          <el-button type="primary" :icon="ArrowLeft" size="mini"></el-button>
          <el-button type="primary" :icon="ArrowRight" size="mini"></el-button>
        </div>
      </div>
    </template>
    <p>Task </p>
  </el-card>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>