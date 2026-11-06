<template>
  <section
    class="card-base bg-secondary-surface px-4 py-3 rounded-2xl relative"
  >
    <slot />
    <span :class="`status-badge ${statusBadgeClasses}`"></span>

    <h6 class="text-base font-medium text-text-primary">{{ props.title }}</h6>
    <section class="flex items-center justify-between">
      <span class="text-xs text-text-secondary">
        {{ props.subtitle }}
      </span>
      <span class="text-xs text-text-secondary">{{ props.caption }}</span>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface IProps {
  status: "Completed" | "Upcoming" | "Overdue";
  title: string;
  subtitle: string;
  caption: string;
}
const props = defineProps<IProps>();

const statusBadgeClasses = computed(
  () => `badge-${props.status.toLowerCase()}`,
);
</script>
