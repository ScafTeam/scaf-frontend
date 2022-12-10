<template>
  <Narbar :barItem="barItem" />
  <RouterView />
</template>

<script lang="ts" setup>
import Narbar from "@/components/Navbar/NavBar.vue";

const barItem = {
  items: [
    {
      id: 1,
      span: 3,
      to: "/",
      offset: 1,
      data: {
        type: "image",
        value: "src/Logo.png",
      },
    },
    {
      id: 2,
      span: 2,
      to: "/",
      data: {
        value: "My project",
      },
    },
    {
      id: 3,
      span: 2,
      to: "/QA",
      data: {
        value: "Q&A",
      },
    },
    {
      id: 4,
      span: 2,
      to: "/settings",
      offset: 9,
      data: {
        value: 'Settings',
      },
    },
    {
      id: 5,
      span: 2,
      offset: 0,
      data: {
        type: 'notification',
        value: 0,
      },
    },
    {
      id: 6,
      span: 2,
      offset: 0,
      to: "/sign-in",
      data: {
        value: 'Sign Out',
      },
    }
  ],
};
</script>
