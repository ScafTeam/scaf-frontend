<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Folder, Document, FolderOpened, Setting, Finished} from '@element-plus/icons-vue'

const route = useRoute()
const authorEmail = ref(route.params.email)
const projectName = ref(route.params.pname)

</script>

<template>
  <el-container>
    <el-header class="header">
      <el-breadcrumb separator="/" class="title">
        <el-breadcrumb-item>
          <el-icon><Folder /></el-icon>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">
          {{ authorEmail }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ projectName }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-menu mode="horizontal" class="menu" router>
        <el-menu-item class="menu-item" :index="`/${authorEmail}/${projectName}`">
          <el-icon><FolderOpened /></el-icon>
          Repositories
        </el-menu-item>
        <el-menu-item class="menu-item" :index="`/${authorEmail}/${projectName}/docs`">
          <el-icon><Document /></el-icon>
          Documents
        </el-menu-item>
        <el-menu-item class="menu-item" :index="`/${authorEmail}/${projectName}/kanban`">
          <el-icon><Finished /></el-icon>
          Kanban
        </el-menu-item>
        <el-menu-item class="menu-item" :index="`/${authorEmail}/${projectName}/setting`">
          <el-icon><Setting /></el-icon>
          Setting
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.header {
  padding-top: 20px;
  font-size: 24px;
  border-bottom: 1px solid #ebeef5;
  height: fit-content;
}

.title {
  font-size: 24px;
  color: #333;
}

.menu {
  margin-top: 10px;
  border-bottom: none;
  font-size: 24px;
}

.menu .menu-item {
  font-size: 16px;
}
</style>