<script setup lang="ts">
import Plus from "../components/icones/Plus.vue";
import CardBase from "../components/UI/Card/CardBase.vue";
import CardService from "../components/UI/Card/CardService.vue";
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

    <section>
      <h5 class="text-text-secondary font-medium text-xs mb-2">
        Maintenance Overview
      </h5>
      <section class="row grid grid-cols-3 gap-4">
        <CardBase>
          <h6 class="text-lg font-medium text-text-primary">6</h6>
          <span class="text-xs text-success">Completed</span>
        </CardBase>
        <CardBase>
          <h6 class="text-lg font-medium text-text-primary">3</h6>
          <span class="text-xs text-warning">Upcoming</span>
        </CardBase>
        <CardBase>
          <h6 class="text-lg font-medium text-text-primary">1</h6>
          <span class="text-xs text-danger">Overdue</span>
        </CardBase>
        <button
          type="button"
          class="btn bg-primary-accent active:bg-accent-hover hover:bg-accent-hover flex items-center justify-center gap-1 col-span-3 py-2.5 rounded-2xl text-sm font-semibold text-text-primary"
        >
          <Plus class="w-4" />
          Add New Maintenance
        </button>
      </section>
    </section>
    <section>
      <section class="heading flex items-center justify-between mb-2">
        <h5 class="text-text-secondary font-medium text-xs">
          Recent Maintenance
        </h5>
        <span class="text-text-secondary text-xs">(21)</span>
      </section>
      <section class="col grid gap-4">
        <CardService
          status="Completed"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
        <CardService
          status="Completed"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
        <CardService
          status="Completed"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
      </section>
    </section>
    <section>
      <section class="heading flex items-center justify-between mb-2">
        <h5 class="text-text-secondary font-medium text-xs">
          Upcoming Maintenance
        </h5>
        <span class="text-text-secondary text-xs">(21)</span>
      </section>
      <section class="col grid gap-4">
        <CardService
          status="Upcoming"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
        <CardService
          status="Upcoming"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
        <CardService
          status="Upcoming"
          title="Engine Oil"
          :subtitle="new Date().toDateString()"
          caption="3,700,000 T"
        >
        </CardService>
      </section>
    </section>
  </main>
</template>
