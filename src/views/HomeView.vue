<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent />
  <div class="view">
    <RouterView />
  </div>
</template>

<style scoped>
.view {
  margin-top: 63px;
}
</style>