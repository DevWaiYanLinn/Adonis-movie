<template>
  <div class="w-full">
    <label
      v-if="propsRef.label"
      :for="propsRef.id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    >
      {{ propsRef.label }}
    </label>
    <textarea
      autocomplete="off"
      v-bind="propsRef"
      v-model="inputRef"
      @input="$emit('update:modelValue', $event.target.value)"
      class="focus:outline-none focus:border-purple-400 appearance-none border-2 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
      :class="{ 'border-red-500 focus:outline-transparent': error }"
    ></textarea>
    <p class="text-red-500 text-xs italic">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref, toRef } from "vue";
const { error, ...props } = defineProps({
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
const inputRef = ref("");
const propsRef = toRef(props);
</script>
