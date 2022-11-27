<template>
  <el-row>
    <el-col :span="6">
      <div class="whitespace"></div>
    </el-col>
    <el-col :span="18">
      <h2 class="margin-top-20 margin-bottom-30">Q&A</h2>
    </el-col>
  </el-row>
  <el-row>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-col :span="6">
        <div class="whitespace"></div>
      </el-col>
      <el-col :span="3">
        <RouterLink to="/QA/testing" class="no-underline">
          <el-menu-item>testing</el-menu-item>
        </RouterLink>
      </el-col>
      <el-col :span="3">
        <RouterLink to="/QA/deployment" class="no-underline">
          <el-menu-item>deployment</el-menu-item>
        </RouterLink>
      </el-col>
      <el-col :span="9">
        <div class="whitespace"></div>
      </el-col>
    </el-menu>
  </el-row>
  <RouterView />
</template>

<style>
.el-menu-demo {
  width: 100%;
}

.el-menu-item {
  padding: 0px;
}

.whitespace {
  background-color: white;
}

.margin-top-20 {
  margin-top: 20px;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}

.no-underline {
  text-decoration: none;
}

.border-bottom-0 {
  border-bottom: 0px;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const src = "src\\Logo.png";
</script>
