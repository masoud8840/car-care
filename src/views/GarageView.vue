<script setup lang="ts">
import Chevron from "../components/icones/Chevron.vue";
import Plus from "../components/icones/Plus.vue";
import CardBase from "../components/UI/Card/CardBase.vue";
</script>

<template>
  <main class="home-view px-4 pb-24 space-y-6">
    <CardBase class="relative">
      <h6 class="text-text-secondary text-xs font-light">Current Vehicle</h6>
      <p class="text-text-primary font-semibold text-lg">Audi RS6</p>
      <span class="text-text-secondary text-xs font-medium">2025</span>
      <span class="text-text-secondary text-xs font-medium"> • </span>
      <span class="text-text-secondary text-xs font-medium">16,700 km</span>
      <span
        class="text-success text-xs font-medium bg-success/10 rounded-full px-2 py-0.5 absolute top-4 right-4"
        >• Healthy</span
      >

      <section class="row grid grid-cols-2 gap-4 mt-4">
        <section>
          <h6 class="text-lg font-medium text-text-primary">
            16,000 <span class="text-xs">km</span>
          </h6>
          <span class="text-text-secondary font-light text-xs"
            >Last Service</span
          >
        </section>
        <section>
          <h6 class="text-lg font-medium text-text-primary">
            20,000 <span class="text-xs">km</span>
          </h6>
          <span class="text-text-secondary font-light text-xs"
            >Next Service</span
          >
        </section>
      </section>
    </CardBase>
    <section class="space-y-4">
      <h5 class="text-text-secondary font-medium text-xs mb-2">
        Vehicles Overview
      </h5>
      <section class="row grid grid-cols-2 gap-4">
        <CardBase>
          <h6 class="text-lg font-medium text-text-primary">6</h6>
          <span class="text-xs text-text-secondary">Totla Vehicles</span>
        </CardBase>
        <CardBase>
          <h6 class="text-lg font-medium text-text-primary">133,200</h6>
          <span class="text-xs text-text-secondary">Total Mileage</span>
        </CardBase>
      </section>
      <button
        type="button"
        class="btn w-full bg-primary-accent active:bg-accent-hover hover:bg-accent-hover flex items-center justify-center gap-1 col-span-3 py-2.5 rounded-2xl text-sm font-semibold text-text-primary"
      >
        <Plus class="w-4" />
        Add New Vehicle
      </button>
    </section>

    <section class="space-y-4">
      <h5 class="text-text-secondary font-medium text-xs mb-2">
        Your Vehicles
      </h5>
      <section class="row grid gap-4">
        <RouterLink to="/vehicles/peogeut-206">
          <CardBase class="relative">
            <h6 class="font-medium text-text-primary">Peugeot 206</h6>
            <span class="text-xs text-text-secondary">2018 • 78,500 km</span>
            <Chevron
              class="absolute text-text-secondary top-1/2 -translate-y-1/2 right-3 w-6 -rotate-90"
            />
          </CardBase>
        </RouterLink>
        <RouterLink to="/vehicles/samand-lx">
          <CardBase class="relative">
            <h6 class="font-medium text-text-primary">Samand LX</h6>
            <span class="text-xs text-text-secondary">2016 • 92,300 km</span>
            <Chevron
              class="absolute text-text-secondary top-1/2 -translate-y-1/2 right-3 w-6 -rotate-90"
            />
          </CardBase>
        </RouterLink>
      </section>
    </section>
  </main>
</template>
