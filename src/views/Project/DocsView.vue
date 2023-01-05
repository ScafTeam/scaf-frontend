<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import api from '@/api'

interface Doc {
  id: string
  title: string
  content: string
}

const route = useRoute()
const authorEmail = route.params.email as string
const projectName = route.params.pname as string

const tabs = ref<Doc[]>([])
const addDocDialog = ref(false)
const isLoading = ref(true)
const addDocForm = reactive({
  name: '',
})

const getProjecDocs = async () => {
  const { data } = await api.getProjectDocs(
    authorEmail,
    projectName
  )

  tabs.value = data.docs.docs
  isLoading.value = false
}

const addDocHandler = async () => {
  await api.addProjectDocs(
    authorEmail,
    projectName,
    {
      title: addDocForm.name,
      content: ' '
    }
  )
  addDocDialog.value = false
  addDocForm.name = ''
  getProjecDocs()
}

const saveDocHandler = async (id: string) => {
  const doc = tabs.value.find((doc) => doc.id === id)
  if (!doc) return

  await api.updateProjectDocs(
    authorEmail,
    projectName,
    doc
  )
  
  ElMessage.success('Save successfully')
}

const deleteDocHandler = (id: string) => {
  ElMessageBox.confirm('This will permanently delete the document. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }).then(async () => {
    await api.deleteProjectDocs(
      authorEmail,
      projectName,
      id
    )
    getProjecDocs()
  })
}

getProjecDocs()
</script>

<template>
  <el-button class="doc-btn" @click="addDocDialog = true">New Doc</el-button>
  <el-tabs tab-position="left" class="tabs" v-loading="isLoading">
    <template v-for="item in tabs" :key="item.id">
      <el-tab-pane :label="item.title">
        <div class="docs">
          <el-input v-model="item.content" :autosize="{ minRows: 20 }" type="textarea" placeholder="Please input" />
          <el-button type="primary" class="save-btn" @click="saveDocHandler(item.id)">Save</el-button>
          <el-button type="danger" class="del-btn" @click="deleteDocHandler(item.id)">Delete</el-button>
        </div>
      </el-tab-pane>
    </template>
  </el-tabs>
  <el-dialog v-model="addDocDialog" title="Add Repo">
    <el-form v-model="addDocForm">
      <el-form-item label="Name">
        <el-input v-model="addDocForm.name" />
      </el-form-item>
      <el-form-item>
        <el-button @click="addDocDialog = false">Cancel</el-button>
        <el-button type="primary" @click="addDocHandler">Add</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped>
.doc-btn {
  margin-bottom: 10px;
}

.tabs {
  padding-left: 40px;
  width: 100%;
}

.docs {
  position: relative;
  width: 60vw;
  min-width: 300px;
  min-height: 400px;
  margin-left: 20px;
}

.save-btn {
  position: absolute;
  bottom: 0;
  right: -80px;
}

.del-btn {
  position: absolute;
  bottom: 0;
  right: -160px;
}
</style>

<style>
.el-tabs__nav.is-left {
  width: 130px;
}
</style>