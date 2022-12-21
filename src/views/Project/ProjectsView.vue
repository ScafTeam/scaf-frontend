<template>
  <div class="projects-background">
    <!-- <div>�Ѽ�: {{ $route.params.param }}</div> -->
    <!-- <div>{{ projects }}</div> -->
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
          v-for="(item, index) in projects.get_projects"
          class="scrollbar-demo-item projects-item"
        >
          <!-- <p
          v-for="(item, index) in project.name"
          class="scrollbar-demo-item projects-item"
        > -->
          <el-button
            type="primary"
            @click="ChosePro(item.Id, item.Name)"
            class="projects-button"
            plain
          >
            <el-row style="width: 884px">
              <el-col :span="6" style="text-align: left">
                <p class="projects-name-text">{{ item.Name }}<br /></p>
                {{ item.CreateOn }}
              </el-col>
              <el-col :span="12">
                <div class="whitespace" />
              </el-col>
              <el-col :span="6" style="text-align: right">
                <el-button
                  type="danger"
                  size="large"
                  plain
                  @click.stop="deletePro(item.Id)"
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
<<<<<<< HEAD
import { useProjectStore, getUserEmail } from "@/stores/project";
=======
import { useProjectStore, useUserStore } from "@/stores/project";
>>>>>>> lin-api
import { Delete } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

import axios from "axios";

import { useRouter } from "vue-router";

const router = useRouter();

const projects = useProjectStore();
const user = useUserStore();
const test = () => {
  console.log("test");
};
const getPro = async () => {
  try {
    const { data, err } = await axios.get("api" + getUserEmail() + "/project", {});
    ElMessage({ type: "success", message: "Get Projects In Success" });

    console.log(data["projects"]);
    projects.set_projects(data["projects"]);
    console.log(projects.projects);
    console.log(projects.get_projects);
  } catch (err) {
    ElMessage({ type: "error", message: err });
    // console(err);
    console.log("ERROR");
  }
};
function ChosePro(id: string, name: string) {
  // project.nowproject = id;
  projects.set_now_project_id(id);
  projects.set_now_project_name(name);
  router.push(`/project`);
}

async function deletePro(id: string) {
  try {
    const { data, err } = await axios.delete(
      "/api/" + user.get_user_email + "/project/" + id,
      {}
    );
    ElMessage({ type: "success", message: "delete Repository In Success" });
  } catch (err) {
    ElMessage({ type: "error", message: err });
    console.log(err);
  }
  getPro();
}
getPro();
</script>

<style scoped>
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
