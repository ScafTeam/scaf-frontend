<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue';
import Changebar from '@/components/changebar.vue';
</script>

<template>
  <navbar></navbar>
  <Changebar></Changebar>
  <RouterView />
</template>

<style scoped>
</style>
