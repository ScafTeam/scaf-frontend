<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo border-bottom-0"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-col :span="6">
      <div class="whitespace"></div>
    </el-col>
    <h1 class="margin-top-20 margin-bottom-30">Project Name</h1></el-menu
  >
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-col :span="6">
      <div class="whitespace"></div>
    </el-col>
    <el-col :span="2.5">
      <RouterLink to="/project/repositories" class="no-underline">
        <el-menu-item>repositories</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="2.5">
      <RouterLink to="/project/documents" class="no-underline">
        <el-menu-item>documents</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="2.5">
      <RouterLink to="/project/kanban" class="no-underline">
        <el-menu-item>kanban</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="2.5">
      <RouterLink to="/project/setting" class="no-underline">
        <el-menu-item>setting</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="20">
      <div class="whitespace"></div>
    </el-col>
  </el-menu>
  <RouterView />
</template>

<style>
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
