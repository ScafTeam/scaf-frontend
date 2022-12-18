<template>
  <el-row justify="center" :gutter="20">
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>TO DO</span>
            <el-button class="button" text>+</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "Task " + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>DOING</span>
            <el-button class="button" text>+</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "Task " + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>DONE</span>
            <el-button class="button" text>+</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "Task " + o }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  useProjectStore,
  get_user_email,
  set_projects,
  get_projects,
  set_now_project_id,
  get_now_project_id,
} from "@/stores/project";
import { Delete } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

import axios from "axios";

import { useRouter } from "vue-router";

const getKanban = async () => {
  try {
    const { data, err } = await axios.get(
      "api/" +
        get_user_email() +
        "/project/" +
        get_now_project_id() +
        "/kanban/",
      {}
    );
    console.log(data["kanban"]);

    ElMessage({ type: "success", message: "Get Kanban In Success" });
  } catch (err) {
    ElMessage({ type: "error", message: err });

    console.log("ERROR");
  }
};

getKanban();
</script>

<style>
.box-card {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: center !important; /*被其他样式覆盖了 */
  align-items: center;
}

.text {
  font-size: 14px;
  text-align: center;
}

.item {
  margin-bottom: 60px;
}

.box-card {
  width: 200px;
  margin: 20px;
}
</style>
