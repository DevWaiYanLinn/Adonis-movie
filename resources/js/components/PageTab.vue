<template>
  <inertia-link
    :href="url"
    type="button"
    class="text-gray-400 flex items-end rounded-lg bg-white hover:bg-indigo-50 focus:border-indigo-300 px-3 py-2 text-sm"
    :class="{
      '!text-white !bg-purple-500': props.url === $page.url.split('?')[0]
    }"
  >
    <span class="mr-1">{{ props.label }}</span>
    <slot />
  </inertia-link>
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  label: {
    url: String,
    required: true
  }
})
</script>
