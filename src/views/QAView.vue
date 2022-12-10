<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/QA' }">Q&A</el-breadcrumb-item>
    <!-- <el-breadcrumb-item :to="{ path: 'project'}">{{ project_name }}</el-breadcrumb-item> -->
  </el-breadcrumb>
  <NavBar :barItem="barItem" />
  <RouterView />
</template>

<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";
import NavBar from "@/components/Navbar/NavBar.vue";

const project = useProjectStore();
const project_name = project.nowproject;
const barItem = {
  items: [
    {
      id: 1,
      span: 3,
      to: "/project",
      offset: 0,
      data: {
        size: 18,
        value: "Repositories",
      },
    },
    {
      id: 2,
      span: 3,
      to: "/project/documents",
      data: {
        size: 18,
        value: "Documents",
      },
    },
    {
      id: 3,
      span: 3,
      to: "/project/kanban",
      data: {
        size: 18,
        value: "Kanban",
      },
    },
    {
      id: 4,
      span: 3,
      to: "/project/setting",
      data: {
        size: 18,
        value: "Settings",
      },
    },
  ],
};
</script>

<style>
.el-breadcrumb {
  margin: 12px 76px;
  font-size: 32px;
}
</style>
