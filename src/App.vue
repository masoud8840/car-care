<script setup lang="ts">
import BottomNavbar from "./components/layout/BottomNavbar.vue";
import TopNavbar from "./components/layout/TopNavbar.vue";
</script>

<template>
  <TopNavbar />
  <RouterView />
  <BottomNavbar />
</template>
