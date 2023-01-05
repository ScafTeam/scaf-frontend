<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const active = ref('')

const signHandler = () => {
  if (authStore.isAuthenticated) {
    authStore.signOut()
  } else {
    router.push('/signin')
  }
}
</script>

<template>
  <el-menu style="width: 100%" :default-active="active" mode="horizontal" class="el-menu" router>
    <el-menu-item index="/">
      <img src="@/assets/logo.png" alt="logo" style="height: 60px">
    </el-menu-item>
    <el-menu-item index="/">
      My Project
    </el-menu-item>
    <el-menu-item index="">
      <a href="https://tang-shao-xiansorganization.gitbook.io/ruan-ti-gong-cheng/" target="_blank">Q&A</a>
    </el-menu-item>
    <el-menu-item index="/setting" style="margin-left: auto;">
      Setting
    </el-menu-item>
    <el-menu-item index="/signin" @click="signHandler">
      <template v-if="authStore.isAuthenticated">
        SignOut
      </template>
      <template v-else>
        SignIn
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
a {
  text-decoration: none;
}

.el-menu {
  z-index: 1000;
  position: fixed;
  top: 0px;
}

.is-active {
  border: none !important;
}
</style>