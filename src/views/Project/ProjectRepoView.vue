<template>
  <div class="repo-background">
    <el-card class="repo-box-card">
      <template #header>
        <div class="repo-card-header">
          <el-button type="primary" plain @click="dialogFormVisible = true">
            <el-icon>
              <Plus />
            </el-icon>
          </el-button>
          <el-dialog v-model="dialogFormVisible" title="github address">
            <el-form :model="form">
              <el-form-item label="name:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
              </el-form-item>
              <el-form-item label="url:" :label-width="formLabelWidth">
                <el-input v-model="form.url" autocomplete="off" />
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button
                  type="primary"
                  @click="(dialogFormVisible = false), CreateRepo()"
                >
                  Confirm
                </el-button>
              </span>
            </template>
          </el-dialog>
        </div>
      </template>
      <el-scrollbar height="575px">
        <p
          v-for="(item, index) in nowrepo"
          class="scrollbar-demo-item projects-item"
        >
          <el-button type="primary" class="repo-button" plain>
            <a class="repo-name-text" :href="item.Url">{{ item.Name }}</a>
            <a class="repo-domain-name-text">{{ item.Url }}</a>
            <el-button
              type="primary"
              size="small"
              class="margin-left-20 repo-close-button"
              plain
              @click="deleterepo(item)"
            >
              <el-icon>
                <Close />
              </el-icon>
            </el-button>
          </el-button>
        </p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {
  useProjectStore,
  get_projects,
  get_now_project_id,
  get_user_email,
} from "@/stores/project";
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";

import axios from "axios";
const projects = get_projects();

const project = useProjectStore();
const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

let nowrepo = renew();
const form = reactive({
  name: "",
  url: "",
});

function renew() {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].Id == get_now_project_id()) return projects[i].Repos;
  }
}

async function updateRepo() {
  try {
    const { data, err } = await axios.get(
      "api/" + get_user_email() + "/project/",
      {}
    );
    ElMessage({ type: "success", message: "Get Projects In Success" });
    console.log(typeof data["projects"]);
    set_projects(data["projects"]);
    console.log(get_projects());
  } catch (err) {
    ElMessage({ type: "error", message: err.response.data.message });
    console.log("ERROR");
  }
}

async function CreateRepo() {
  try {
    const { data, err } = await axios.post(
      "api/" + get_user_email() + "/project/" + get_now_project_id() + "/repo/",
      {
        Name: form.name,
        Url: form.url,
      }
    );
    ElMessage({ type: "success", message: "Add Repository In Success" });
  } catch (err) {
    ElMessage({ type: "error", message: err });
    console.log(err);
  }
  try {
    const { data, err } = await axios.get(
      "api/" + get_user_email() + "/project/",
      {}
    );
    ElMessage({ type: "success", message: "Get Projects In Success" });
    console.log(typeof data["projects"]);
    set_projects(data["projects"]);
    console.log(get_projects());
  } catch (err) {
    ElMessage({ type: "error", message: err.response.data.message });
    console.log("ERROR");
  }
  nowrepo = renew();
}

function deleterepo(name: string) {
  for (let i = 0; i < project.names.length; i++) {
    if (project.names[i].name == project.nowproject) {
      for (let j = 0; j < project.names[i].repo.length; j++) {
        if (project.names[i].repo[j] == name) {
          project.names[i].repo.splice(j, 1);
          // try {
          //   const { data, err } = await axios.delete("api/projects/:id/????", {
          //     ????: name.value
          //   });
          //   ElMessage({ type: "success", message: "Delete Repository In Success" });
          // } catch (err) {
          //   ElMessage({ type: "error", message: err.response.data.message });
          // }
          nowrepo = renew();
          console.log(nowrepo);
          return;
        }
      }
    }
  }
}
</script>

<style scoped>
.repo-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.repo-item {
  margin-bottom: 10px;
  height: 80px;
}

.repo-button {
  width: 100%;
  height: 100%;
  padding: 16px;
  justify-content: left;
}

.repo-box-card {
  width: 960px;
  margin: 20px;
  height: 100%;
}

.repo-name-text {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin-right: 0px;
  text-align: left;
  text-decoration: none;
}

.repo-domain-name-text {
  width: 100%;
  font-size: 15px;
  margin-left: 20px;
  text-align: left;
  border-style: solid;
  border-width: thin;
  border-radius: 30px;
  padding-left: 5px;
  padding-right: 5px;
}

.repo-close-button {
  padding: 5px;
  justify-content: right;
  border-style: solid;
  border-width: thin;
  border-radius: 30px;
}
</style>
