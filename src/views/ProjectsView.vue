<template>
  <div class="projects-background">
    <el-card class="projects-box-card">
      <template #header>
        <div class="projects-card-header">
          <a class="projects-title-text"> My Projects</a>
          <router-link to="/init-project" class="no-underline">
            <el-button type="primary" class="projects-plus-button" plain>
              <el-icon>
                <Plus />
              </el-icon>
            </el-button>
          </router-link>
        </div>
      </template>
      <el-scrollbar height="700px">
        <p
          v-for="(item, index) in project.names"
          class="scrollbar-demo-item projects-item"
        >
          <el-button
            type="primary"
            @click="ChosePro(item.name)"
            class="projects-button"
            plain
          >
            <el-row style="width: 884px">
              <el-col :span="6" style="text-align: left">
                <p class="projects-name-text">
                  {{ index + 1 }} . {{ item.name }}
                </p>
              </el-col>
              <el-col :span="12">
                <div class="whitespace" />
              </el-col>
              <el-col :span="6" style="text-align: right">
                <el-button
                  type="danger"
                  size="large"
                  plain
                  @click.sotp="deletePro(item.name)"
                >
                  <el-icon>
                    <Close />
                  </el-icon>
                </el-button>
              </el-col>
            </el-row>
          </el-button>
        </p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useProjectStore } from "@/stores/project";
import { Delete } from "@element-plus/icons-vue";
import axios from "axios";

import { useRouter } from "vue-router";

const router = useRouter();

const project = useProjectStore();

const test = () => {
  console.log("test");
};
const getPro = async () => {
  try {
    const { data, err } = await axios.get("api/projects", {});
    ElMessage({ type: "success", message: "Get Projects In Success" });
    console.log("Get Projects");
    console(data);
  } catch (err) {
    ElMessage({ type: "error", message: err.response.data.message });
    console(err);
    console.log("ERROR");
  }
};
function ChosePro(name: string) {
  project.nowproject = name;
  router.push(`/project`);
}

function deletePro(name: string) {
  for (let i = 0; i < project.names.length; i++) {
    if (project.names[i].name == name) {
      project.names.splice(i, 1);
      // try {
      //   const { data, err } = await axios.delete("api/project", {
      //     ????: name.value,
      //   });
      //   ElMessage({ type: "success", message: "Delete Project In Success" });
      // } catch (err) {
      //   ElMessage({ type: "error", message: err.response.data.message });
      // }
    }
  }
}
getPro();
</script>

<style>
.whitespace {
  background-color: white;
}

.project-button-inside {
  width: 100%;
}

.projects-background {
  background-color: #f5f5f5;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.projects-item {
  margin-bottom: 10px;
  height: 80px;
}

.projects-button {
  width: 918px;
  height: 100%;
  padding: 16px;
  justify-content: left !important;
}

.projects-box-card {
  width: 960px;
  margin: 20px;
  height: 100%;
}

.projects-name-text {
  width: 100%;
  font-size: 30px;
  margin-right: 20px;
  margin-top: 10px;
  text-align: left;
}

.projects-title-text {
  font-size: 40px;
  font-weight: bold;
  margin-right: 0px;
  text-align: left;
}

.projects-plus-button {
  float: right;
  margin-top: 10px;
}
</style>
