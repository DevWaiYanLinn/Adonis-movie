<template>
  <div class="date-picker" :class="{ error: error.length }">
    <label
      v-if="label"
      :for="id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
    >
      {{ label }}
    </label>
    <VueDatePicker
      :enable-time-picker="timePicker"
      :range="range"
      v-model="date"
      @update:model-value="handleDate"
      :id="id"
      type="date"
      format="yyyy-MM-dd"
    ></VueDatePicker>
    <p v-if="error.length" class="text-red-500 text-xs italic mt-1">
      {{ error[0] }}
    </p>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {ref} from "vue";

const date = ref();
const emit = defineEmits(["update:modelValue"]);

const {label, id, range} = defineProps({
  label: {
    type: String,
  },
  id: {
    type: String,
  },
  error: {
    type: Array,
    default: [],
  },
  range: {
    type: Boolean,
    default: false
  },
  timePicker:{
    type: Boolean,
    default:false
  }
});

const handleDate = (date) => {
  emit("update:modelValue", date);
};
</script>
<style>
.date-picker .dp__input_readonly {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
  border-width: 2px;
}

.date-picker.error .dp__input_readonly {
  border-color: rgb(239 68 68 / 1);
  border-width: 1px !important;
}
</style>
