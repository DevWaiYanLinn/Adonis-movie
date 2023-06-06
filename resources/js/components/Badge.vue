<template>
  <span
    v-if="props.status"
    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
  >
    <span
      aria-hidden
      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
    ></span>
    <span class="relative">Active</span>
  </span>
  <span
    v-else
    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
  >
    <span
      aria-hidden
      class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
    ></span>
    <span class="relative">Inactive</span>
  </span>
  <!-- <span
    v-if="props.status === 'Suspended'"
    class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
  >
    <span
      aria-hidden
      class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
    ></span>
    <span class="relative">Suspended</span>
  </span> -->
</template>
<script setup>
const props = defineProps({
  status: {
    type: Boolean,
    default: true,
  },
});
</script>
