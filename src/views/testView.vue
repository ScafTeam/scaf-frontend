<template>
  <el-row class="row-bg" justify="center">
    <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
      <el-tab-pane label="Config">
        <el-col :span="6">
          <template #label>
            <span class="setting-item">
              <span>general</span>
            </span>
          </template>
        </el-col>
        <el-col :span="6">
          General
          <el-button type="primary" plain class="setting-button margin-right-10">
            <el-icon class="margin-right-10">
              <Refresh />
            </el-icon>
            update
          </el-button>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </el-row>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 0px;
  color: #6b778c;
  font-size: 50px;
  font-weight: 500;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
  font-size: 100px;
  font-weight: 500;
}
</style>
