<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      for="grid-first-name"
    >
      {{ props.label }}
    </label>
    <input
      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
      :type="type"
      v-model="value"
      @change="props.change"
      :placeholder="props.placeholder"
    />
    <p class="text-red text-xs italic">{{ props.error }}</p>
  </div>
</template>
<script setup>
import { toRef } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  change:{
    type : Function,
    default:() => {}
  },
  placeholder: {
    type: String,
    default: ''
  },
  value:{
    type: String,
    default: ''
  },
  type:{
    type:String,
    default:'text'
  }
})

const value = toRef(props, 'value')

</script>
