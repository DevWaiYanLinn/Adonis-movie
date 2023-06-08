<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
    >
      {{ label }}
    </label>
    <textarea
      autocomplete="off"
      :id="id"
      :rows="rows"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="resize-none focus:outline-none focus:border-purple-400 appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded py-3 px-4 mb-3"
      :class="{ 'border-red-500 focus:outline-transparent': error }"
    ></textarea>
    <p class="text-red-500 text-xs italic">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref, toRef } from "vue";
const { error, label, placeholder, rows, ...props } = defineProps({
  label: {
    type: String,
  },
  error: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  rows: {
    type: String,
    default: "6",
  },
});
</script>
