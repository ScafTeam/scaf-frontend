<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['title'])
const emit = defineEmits(['confirm'])

const dialogVisible = ref(false)

const confirmHandler = () => {
  emit('confirm', true)
}
</script>

<template>
  <el-button>123</el-button>
  <el-dialog v-model="dialogVisible" title="Tips" width="300px">
    <span>props.title</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmHandler">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>