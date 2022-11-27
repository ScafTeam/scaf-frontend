<template>
  <div class="setting-background">
    <el-row class="row-bg" justify="center">
      <el-tabs tab-position="left" style="height: 725px" class="demo-tabs setting-tabs">
        <el-tab-pane>
          <template #label>
            <span class="setting-item">
              <span>general</span>
            </span>
          </template>
          <div class="setting-box">
            General
            <el-button type="primary" plain class="setting-button margin-right-10">
              <el-icon class="margin-right-10">
                <Refresh />
              </el-icon>
              update
            </el-button>
          </div>
          <el-form :model="form" label-width="120px">
            <el-form-item label="Project name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="development mode">
              <el-select v-model="form.development" placeholder="please select your zone">
                <el-option label="Waterfall" value="shanghai" />
                <el-option label="Agile" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>  
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="setting-item">
              <span>members</span>
            </span>
          </template>
          <div class="setting-box">Members</div>
          <div class="setting-box margin-top-30 margin-bottom-30">
            <el-input v-model="memberInput" class="w-150 m-2 width-300" size="medium" placeholder="new member name" />
            <el-button type="primary" plain class="setting-button margin-right-10">
              <el-icon class="margin-right-10">
                <Plus />
              </el-icon>
              invite
            </el-button>
          </div>
          <p v-for="o in 4" :key="o" class="setting-members-item">
            <el-button type="primary" class="setting-members-button" plain>
              <div class="setting-members-name-text">member {{ o }}</div>
              <el-button type="primary" size="small" class="margin-left-20 justify-content-right" circle>
                <el-icon>
                  <Close />
                </el-icon>
              </el-button>
            </el-button>
          </p>
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span type="button" class="setting-item" @click="open">
              <span>delete project</span>
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";
import { reactive } from 'vue'
import { Search } from "@element-plus/icons-vue";
const projectNameInput = ref("");
const memberInput = ref("");
const open = () => {
  ElMessageBox.confirm(
    "proxy will permanently delete the project. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "Delete completed",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
};

// do not use same name with ref
const form = reactive({
  name: '',
  development: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.setting-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
}

.setting-tabs {
  padding-top: 30px;
}

.setting-item {
  font-size: 20px;
  height: 200px;
}

.setting-button {
  padding: 16px;
}

.setting-box {
  display: flex;
  /*�ŧi���u�ʧG������*/
  justify-content: space-between;
  /*�ۦP���Z*/
  align-items: center;
  /*�����m��*/
}

.font-size-20 {
  font-size: 20px;
}

.margin-top-30 {
  margin-top: 30px;
}

.width-300 {
  width: 300px;
}

.justify-content-right {
  justify-content: right;
}

.margin-left-20 {
  margin-left: 20px;
}

.setting-members-item {
  margin-bottom: 10px;
  height: 50px;
}

.setting-members-button {
  width: 100%;
  height: 100%;
  padding: 16px;
  justify-content: left;
}

.setting-members-name-text {
  width: 100%;
  font-size: 25px;
  margin-right: 0px;
  text-align: left;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}
</style>
