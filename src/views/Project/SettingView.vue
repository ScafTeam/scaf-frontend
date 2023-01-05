<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

import api from '@/api'
import { useAuthStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const authorEmail = route.params.email as string
const projectName = route.params.pname as string

const form = reactive({
  devTools: [],
  devMode: ''
})

const getProjectData = async () => {
  const { data } = await api.getProjectSetting(
    authorEmail,
    projectName
  )
  form.devTools = data.project.devTools
  form.devMode = data.project.devMode
}

const updateProjectData = async () => {
  const { data } = await api.updateProject(
    authorEmail,
    projectName,
    {
      devTools: form.devTools,
      devMode: form.devMode
    }
  )

  ElMessage.success('Update Success')
}

const deleteProject = () => {
  ElMessageBox.confirm(`This will permanently delete the ${projectName} Project. Continue?`, 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }).then(async () => {
    await api.deleteProject(
      authorEmail,
      projectName
    )

    ElMessage.success('Delete Success')
    router.push(`/`)
  })
}

getProjectData()
</script>

<template>
  <el-card>
    <template #header>
      <span>Project Setting</span>
    </template>
    <el-form v-model="form" label-width="100px">
      <el-form-item label="Dev Tools">
        <el-checkbox-group v-model="form.devTools">
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Dev Mode">
        <el-radio-group v-model="form.devMode">
          <el-radio label="waterfall">Waterfall</el-radio>
          <el-radio label="scrum">Scrum</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateProjectData">Save</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin-top: 20px;" v-if="authStore.email == authorEmail">
    <template #header>
      <span>Author Project Setting</span>
    </template>
    <el-button type="danger" @click="deleteProject">Delete Project</el-button>
  </el-card>
</template>

<style scoped>

</style>