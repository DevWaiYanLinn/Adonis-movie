<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
      :class="{'text-red-500': error.length}"
    >
      {{ label }}
    </label>
    <input
      autocomplete="off"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="focus:outline-none focus:border-purple-400 appearance-none block w-full rounded py-3 px-4 border-2"
      :class="{ 'border-red-500 !border focus:outline-transparent': error.length }"
    />
    <p v-if="error.length" class="text-red-500 text-xs italic mt-1">{{ error[0] }}</p>
  </div>
</template>
<script setup>
const { label, error, id, placeholder, ...props } = defineProps({
  label: {
    type: String,
  },
  error: {
    type: Array,
    default:[]
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
  value: {
    type: String,
  },
});
</script>
