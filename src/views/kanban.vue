<template>
  <div class="background">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>TO DO</span>
          <el-button class="button" text>+</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>DOING</span>
          <el-button class="button" text>+</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>DONE</span>
          <el-button class="button" text>+</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>

<style>
.background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;

  display: flex;
  /* 水平置中 */
  justify-content: center;
  /* 垂直置中 */
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: center;
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
