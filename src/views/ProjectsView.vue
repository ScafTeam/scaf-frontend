<template>
  <div class="projects-background">
    <el-card class="projects-box-card">
      <template #header>
        <div class="projects-card-header">
          <a class="projects-title-text"> My Projects</a>
          <router-link to="/init-project" class="no-underline">
            <el-button type="primary" class="projects-plus-button" plain>
              <el-icon><Plus /></el-icon>
            </el-button>
          </router-link>
        </div>
      </template>
      <el-scrollbar height="700px">
        <p
          v-for="i in 99"
          :key="item"
          class="scrollbar-demo-item projects-item"
        >
          <router-link to="/project" class="no-underline">
            <el-button type="primary" class="projects-button" plain>
              <a class="projects-name-text">my project {{ i }}</a>
            </el-button>
          </router-link>
        </p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<style>
.projects-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.projects-item {
  margin-bottom: 10px;
  height: 80px;
}
.projects-button {
  width: 100%;
  height: 100%;
  padding: 16px;
  justify-content: left;
}
.projects-box-card {
  width: 960px;
  margin: 20px;
  height: 100%;
}
.projects-name-text {
  width: 100%;
  font-size: 30px;
  margin-right: 0px;
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
