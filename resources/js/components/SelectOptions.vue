<template>
  <div class="md:w-full">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <select
      @change="$emit('update:modelValue', $event.target.value)"
      class="block focus:outline-none focus:border-purple-400 appearance-none w-full bg-grey-lighter border-2 border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
      :id="id"
    >
      <slot />
    </select>
    <p class="text-red text-xs italic">{{ error }}</p>
  </div>
</template>

<script setup>
import { toRef } from "vue";
const { label, error, id, ...props } = defineProps({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
  error: {
    type: String,
  },
  id: {
    type: String,
  },
});
</script>
