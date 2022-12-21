<template>
  <div class="doc-background">
    <el-row class="row-bg" justify="center">
      <el-tabs tab-position="left" style="height: 100%" class="demo-tabs doc-tabs">
        <el-tab-pane>
          <template #label>
            <span class="doc-item">
              <span>requirement</span>
            </span>
          </template>
          <div class="doc-box">
            Requirement
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
          <el-button plain class="doc-hackmd"> hackmd </el-button>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="doc-item">
              <span>design</span>
            </span>
          </template>
          <div class="doc-box">
            Design
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
          <el-button plain class="doc-hackmd"> hackmd </el-button>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="doc-item">
              <span>dev environment</span>
            </span>
          </template>
          <div class="doc-box">
            Dev environment
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
          <el-button plain class="doc-hackmd"> hackmd </el-button>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="doc-item">
              <span>naming convention</span>
            </span>
          </template>
          <div class="doc-box">
            Naming convention
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
          <el-button plain class="doc-hackmd"> hackmd </el-button>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="doc-item">
              <span>git commit format</span>
            </span>
          </template>
          <div class="doc-box">
            Git commit format
            <el-button type="primary" plain class="doc-button">
              <el-icon class="margin-right-10">
                <Edit />
              </el-icon>
              edit
            </el-button>
          </div>
          <el-button plain class="doc-hackmd"> hackmd </el-button>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.doc-background {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  font-size: 60px;
}

.demo-tabs>.el-tabs__content {
  padding-left: 32px;
  padding-top: 0px;
  color: #6b778c;
  font-size: 40px;
  font-weight: normal;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

.doc-tabs {
  padding-top: 30px;
}

.doc-item {
  font-size: 20px;
  height: 200px;
}

.doc-button {
  padding: 16px;
}

.doc-hackmd {
  width: 725px;
  padding-top: 290px;
  padding-bottom: 290px;
  margin-top: 30px;
}

.doc-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
