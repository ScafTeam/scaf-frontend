<template>
  <div class="repo-background">
    <el-card class="repo-box-card">
      <template #header>
        <div class="repo-card-header">
          <el-button type="primary" plain>
            <el-icon class="margin-right-10"><Plus /></el-icon>
            new repository
          </el-button>
        </div>
      </template>
      <el-scrollbar height="575px">
        <p
          v-for="i in 99"
          :key="item"
          class="scrollbar-demo-item projects-item"
        >
          <el-button type="primary" class="repo-button" plain>
            <a class="repo-name-text">repository {{ i }}</a>
            <a class="repo-domain-name-text">domain name</a>
            <el-button
              type="primary"
              size="small"
              class="margin-left-20 repo-close-button"
              plain
            >
              <el-icon><Close /></el-icon
            ></el-button>
          </el-button>
        </p>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<style>
.repo-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.repo-card-header {
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
.margin-right-10 {
  margin-right: 10px;
}
.repo-name-text {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin-right: 0px;
  text-align: left;
}
.repo-domain-name-text {
  width: 100%;
  font-size: 18px;
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
