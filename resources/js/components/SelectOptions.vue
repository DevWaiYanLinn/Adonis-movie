<template>
  <div class="md:w-full">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      for="role"
    >
      {{ props.label }}
    </label>
    <select
      @change="$emit('update:modelValue', $event.target.value)"
      class="block focus:outline-none focus:border-purple-400 appearance-none w-full bg-grey-lighter border-2 border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
      id="grid-state"
    >
      <slot />
    </select>
    <p class="text-red text-xs italic">{{ props.error }}</p>
  </div>
</template>

<script setup>
import { toRef } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});
const value = toRef(props, "value");
</script>
