<template>
  <el-row>
    <el-col :span="6">
      <div class="whitespace"></div>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Deployment</span>
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
        </template>
        <el-empty description="description" />
      </el-card>
    </el-col>
    <el-col :span="6">
      <div class="whitespace"></div>
    </el-col>
  </el-row>
</template>
<style>
.whitespace {
  background-color: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

.background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;

  display: flex;
  /* justify-content: center;
  align-items: center; */
}
</style>

