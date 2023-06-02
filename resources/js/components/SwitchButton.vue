<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      :value="false"
      :name="props.label.toLowerCase().replace(' ', '_')"
      @change="$emit('change-value', { value: $event.target.value, id: props.id })"
    />
    <div
      class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
    ></div>
    <span class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300">{{ props.label }}</span>
  </label>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: '0'
  },
  value:{
    type: Boolean,
    default:false,
  }
})
</script>
