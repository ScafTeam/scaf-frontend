<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-col :span="0.5">
      <div class="whitespace"></div>
    </el-col>
    <el-col :span="3">
      <el-menu-item style="text-align: center">
        <el-image style="width: 177px; height: 47px" :src="src" />
      </el-menu-item>
    </el-col>
    <el-col :span="2">
      <RouterLink to="/" class="no-underline">
        <el-menu-item>My project</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="2">
      <RouterLink to="/QA" class="no-underline">
        <el-menu-item>Q&A</el-menu-item>
      </RouterLink>
    </el-col>

    <el-col :span="12">
      <div class="whitespace" />
    </el-col>
    <el-col :span="2">
      <RouterLink to="/settings" class="no-underline">
        <el-menu-item>Settings</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="2">
      <RouterLink to="/sign-in" class="no-underline">
        <el-menu-item>Sign out</el-menu-item>
      </RouterLink>
    </el-col>
    <el-col :span="0.5">
      <div class="whitespace"></div>
    </el-col>
  </el-menu>
</template>

<style>
.whitespace {
  background-color: white;
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
