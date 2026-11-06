<script setup lang="ts">
import { useRoute } from "vue-router";

import Garage from "../icones/Garage.vue";
import Home from "../icones/Home.vue";
import Services from "../icones/Service.vue";
import Settings from "../icones/Settings.vue";

const route = useRoute();

const navLinks = [
  {
    name: "Home",
    path: "/vehicles",
    icon: Home,
  },
  {
    name: "Services",
    path: "/services",
    icon: Services,
  },
  {
    name: "Garage",
    path: "/garage",
    icon: Garage,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const isActive = (name: string) => {
  if (name === "Home") {
    return route.name === "Home" || route.name === "Vehicle";
  }

  return route.name === name;
};
</script>

<template>
  <nav
    class="navigation-bar fixed bottom-3 left-1/2 -translate-x-1/2 bg-secondary-surface rounded-full px-2"
  >
    <ul class="flex items-center justify-center">
      <li v-for="link in navLinks" :key="link.name" class="px-3 py-1">
        <RouterLink
          :to="link.path"
          class="text-xs font-medium"
          :class="isActive(link.name) ? 'text-primary-accent' : ''"
        >
          <component :is="link.icon" class="w-7 mx-auto" />
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
