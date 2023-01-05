<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { Folder } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import { useUserStore } from '@/stores'
import api from '@/api'

const userStore = useUserStore()
const router = useRouter()
const projects = computed(() => userStore.projects)
const isLoading = ref(true)
const ProjectDialog = ref(false)
const ProjectForm = reactive({
  name: '',
  devTools: [],
  devMode: 'waterfall'
})

const createProject = () => {
  api.createProject(userStore.email, ProjectForm).then((res) => {
    router.push(`/${userStore.email}/${ProjectForm.name}/`)
    ElMessage.success('Project created successfully')
  })
}

userStore.getUserInfo().then(() => {
  isLoading.value = false
})
</script>

<template>
  <el-container>
    <el-main>
      <el-card>
        <template #header>
          <div class="header">
            <h1 class="title">My Projects</h1>
            <el-button :icon="Folder" type="primary" size="large" @click="ProjectDialog = true">
              New Project
            </el-button>
          </div>
        </template>
        <template v-if="isLoading">
          <div>Loading...</div>
        </template>
        <template v-else>
          <div v-for="project, idx in projects" :key="project">
            <router-link :to="`/${project}/`">
              <div class="project">
                <el-icon><Folder /></el-icon>
                {{ project }}
              </div>
            </router-link>
            <el-divider v-if="idx < projects.length - 1" />
          </div>
        </template>
      </el-card>
    </el-main>
    <el-dialog v-model="ProjectDialog" title="New Project">
      <el-form v-model="ProjectForm" label-width="100px">
      <el-form-item label="Project Name">
        <el-input v-model="ProjectForm.name" />
      </el-form-item>
      <el-form-item label="Dev Tools">
        <el-checkbox-group v-model="ProjectForm.devTools">
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Dev Mode">
        <el-radio-group v-model="ProjectForm.devMode">
          <el-radio label="waterfall">Waterfall</el-radio>
          <el-radio label="scrum">Scrum</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createProject">Create</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  </el-container>

</template>

<style scoped>
.title {
  font-size: 2rem;
}

.project {
  width: 100%;
  font-size: 1.2em;
  color: rgb(6, 45, 153);
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>