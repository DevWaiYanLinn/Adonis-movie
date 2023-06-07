<template>
  <div class="w-full">
    <label
      v-if="propsRef.label"
      :for="propsRef.id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    >
      {{ propsRef.label }}
    </label>
    <input
      autocomplete="off"
      v-bind="propsRef"
      @input="$emit('update:modelValue', $event.target.value)"
      class="focus:outline-none focus:border-purple-400 appearance-none block w-full border rounded py-3 px-4 mb-3"
      :class="{'border-red-500 focus:outline-transparent': error}"
    />
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
});
const propsRef = toRef(props);
</script>
