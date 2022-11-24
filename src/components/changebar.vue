<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-col :span="6">
        <div class="whitespace"></div>
      </el-col>
      <el-col :span="2">
        <el-menu-item>repositories</el-menu-item>
      </el-col>
      <el-col :span="2">
        <el-menu-item>documents</el-menu-item>
      </el-col>
      <el-col :span="2">
        <el-menu-item>kanban</el-menu-item>
      </el-col>
      <el-col :span="2">
        <el-menu-item>setting</el-menu-item>
      </el-col>
      <el-col :span="20">
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
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  
  const src = 'src\\Logo.png'
  </script>