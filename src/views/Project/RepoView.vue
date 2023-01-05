<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import api from '@/api'

interface Repo {
  id: string
  name: string
  url: string
}

enum REPOMODE {
  Add,
  Edit
}


const route = useRoute()
const authorEmail = route.params.email as string
const projectName = route.params.pname as string

const repoList = ref<Repo[]>([])
const isLoading = ref(true)
const RepoDialog = ref(false)
const RepoForm = reactive({
  name: '',
  url: '',
})
let RepoMode: REPOMODE = REPOMODE.Add
let nowEditId: string = ''

const getProjectRepoList = async () => {
  const res = await api.getRepositoryList(authorEmail, projectName)
  isLoading.value = false
  repoList.value = res.data.repos
}

const addRepoHandler = async () => {
  await api.addRepository(
    authorEmail,
    projectName,
    {
      name: RepoForm.name,
      url: RepoForm.url
    }
  )
  RepoDialog.value = false
  RepoForm.name = ''
  RepoForm.url = ''
  getProjectRepoList()
}

const editHandler = (id: string) => {
  const repo = repoList.value.find((repo) => repo.id === id)
  if (!repo) return

  RepoForm.name = repo.name
  RepoForm.url = repo.url
  RepoDialog.value = true
  RepoMode = REPOMODE.Edit
  nowEditId = id
}

const updateRepoHandler = async () => {
  const repo = repoList.value.find((repo) => repo.id === nowEditId)
  console.log(nowEditId, repo)
  if (!repo) return

  await api.updateRepository(
    authorEmail,
    projectName,
    {
      id: repo.id,
      name: RepoForm.name,
      url: RepoForm.url
    }
  )

  ElMessage.success('Update successfully')
  RepoDialog.value = false
  RepoForm.name = ''
  RepoForm.url = ''
  nowEditId = ''

  getProjectRepoList()
}

const dialogHandler = () => {
  console.log(RepoMode)
  if (RepoMode === REPOMODE.Add) {
    addRepoHandler()
  } else {
    updateRepoHandler()
  }
}

const dialogCloseHandler = (done: () => void) => {
  RepoForm.name = ''
  RepoForm.url = ''
  nowEditId = ''
  done()
}

const deleteRepoHandler = (id: string) => {
  ElMessageBox.confirm('This will permanently delete the Repo. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(async () => {
      await api.deleteRepository(
        authorEmail,
        projectName,
        id
      )
      getProjectRepoList()
    })
}

getProjectRepoList()
</script>

<template>
  <el-button @click="RepoDialog = true; RepoMode=REPOMODE.Add">Add Repo</el-button>
  <el-table v-loading="isLoading" :data="repoList">
    <el-table-column prop="name" label="Name" width="200" />
    <el-table-column label="URL">
      <template #default="scope">
        <a :href="scope.row.url" target="_blank">{{ scope.row.url }}</a>
      </template>
    </el-table-column>
    <el-table-column width="150">
      <template #default="scope">
        <el-button size="small" @click.prevent="editHandler(scope.row.id)">
          Edit
        </el-button>
        <el-button size="small" @click.prevent="deleteRepoHandler(scope.row.id)">
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="RepoDialog" :title="(RepoMode == REPOMODE.Add ? 'Add' : 'Edit') + ' Repo'" :before-close="dialogCloseHandler">
    <el-form v-model="RepoForm" label-width="60px">
      <el-form-item label="Name">
        <el-input v-model="RepoForm.name" />
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="RepoForm.url" />
      </el-form-item>
      <el-form-item>
        <el-button @click="RepoDialog = false">Cancel</el-button>
        <el-button type="primary" @click="dialogHandler">Add</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped>
a {
  color: #0052a5;
}
</style>