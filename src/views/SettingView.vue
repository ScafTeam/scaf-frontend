<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <el-container>
    <el-main>
      <el-card>
        <template #header>
          <h1>Personal Settings</h1>
        </template>
        <el-form label-width="120">
          <el-form-item label="Email">
            <el-input v-model="userStore.email" disabled />
          </el-form-item>
          <el-form-item label="Nickname">
            <el-input v-model="userStore.nickname" />
          </el-form-item>
          <el-form-item label="Bio">
            <el-input v-model="userStore.bio" type="textarea" :autosize="{ minRows: 2 }" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Save</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card style="margin-top: 20px">
        <template #header>
          <h1>Update Password</h1>
        </template>
        <el-form label-width="120">
          <el-form-item label="Old Password">
            <el-input type="password" />
          </el-form-item>
          <el-form-item label="New Password">
            <el-input type="password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Save</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>