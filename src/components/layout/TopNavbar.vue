<script setup lang="ts">
import Bell from "../icones/Bell.vue";
import Chevron from "../icones/Chevron.vue";
</script>

<template>
  <header class="p-4 flex items-center justify-between">
    <h1 class="branding text-text-primary text-xl font-bold">
      Car <span class="text-accent-hover">Care</span>
    </h1>
    <nav class="flex items-center gap-4">
      <!--
      <ul>
        <li>
          <RouterLink to="/" class="text-text-primary text-sm">Home</RouterLink>
        </li>
      </ul> 
      -->
      <button class="btn text-text-secondary relative">
        <span
          class="notification-badge w-1.5 h-1.5 bg-danger rounded-full absolute right-0 top-0"
        ></span>
        <Bell class="w-6" />
      </button>
      <button class="btn rounded-full text-text-primary gap-1">
        <img
          src="/images/userprofile.png"
          alt="user-profile"
          class="w-6 rounded-full"
        />
        <Chevron class="w-5" />
      </button>
    </nav>
  </header>
</template>
