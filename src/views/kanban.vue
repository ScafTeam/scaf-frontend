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

<style>

.box-card{
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: center !important;/*被其他样式覆盖了 */
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
