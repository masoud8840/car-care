<script setup lang="ts">
import Close from "../components/icones/Close.vue";
import Search from "../components/icones/Search.vue";
import Wallet from "../components/icones/Wallet.vue";
import Wrench from "../components/icones/Wrench.vue";
import CardBase from "../components/UI/Card/CardBase.vue";
import CardService from "../components/UI/Card/CardService.vue";
</script>

<template>
  <main class="services-view px-4 pb-24 space-y-6">
    <section class="row grid grid-cols-2 gap-4">
      <CardBase class="text-text-primary flex flex-col text-center">
        <Wrench class="w-9 mb-1 mx-auto" />
        <span class="font-medium text-lg">21</span>
        <h5 class="text-xs text-text-secondary">Services</h5>
      </CardBase>
      <CardBase class="text-text-primary flex flex-col text-center">
        <Wallet class="w-9 mb-1 mx-auto" />
        <span class="font-medium text-lg">$12,247</span>
        <h5 class="text-xs text-text-secondary">Spending</h5>
      </CardBase>
    </section>
    <section class="services-history space-y-4">
      <form @submit.prevent class="input-container relative">
        <Search
          class="w-7 absolute top-1/2 left-6 -translate-1/2 text-text-primary"
        />
        <button
          class="btn absolute right-0 w-4 text-text-primary -translate-1/2 top-1/2"
          type="reset"
        >
          <Close />
        </button>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search services..."
          class="bg-secondary-surface w-full rounded-xl ps-11 px-4 py-3 text-text-primary text-xs font-medium"
        />
      </form>

      <ul class="quick-filter flex items-center gap-2">
        <li
          class="border border-primary-accent bg-secondary-surface textdar rounded-lg"
        >
          <button class="text-primary-accent px-4 py-1 text-xs font-medium">
            All
          </button>
        </li>
        <li class="border bg-secondary-surface textdar rounded-lg">
          <button class="text-text-secondary px-4 py-1 text-xs font-medium">
            Engine
          </button>
        </li>
        <li class="border bg-secondary-surface textdar rounded-lg">
          <button class="text-text-secondary px-4 py-1 text-xs font-medium">
            Gearbox
          </button>
        </li>
      </ul>

      <ul class="space-y-4">
        <li v-for="i in 4" :key="i">
          <CardService
            status="Completed"
            title="Engine Oil"
            :subtitle="new Date().toDateString()"
            caption="2,700,000 T"
          >
          </CardService>
        </li>
      </ul>
    </section>
  </main>
</template>
