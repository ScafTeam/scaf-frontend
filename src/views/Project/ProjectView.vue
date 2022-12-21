<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">{{
      user.get_user_email
    }}</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: 'project' }">{{
      projects.get_now_project_name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
  <NavBar :barItem="barItem" />
  <RouterView />
</template>

<script lang="ts" setup>
import { useProjectStore, useUserStore } from "@/stores/project";
import NavBar from "@/components/Navbar/NavBar.vue";

const projects = useProjectStore();
const user = useUserStore();

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
