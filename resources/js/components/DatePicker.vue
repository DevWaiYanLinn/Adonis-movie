<template>
  <div class="date-picker">
    <label
      v-if="label"
      :for="id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
    >
      {{ label }}
    </label>
    <VueDatePicker
      v-model="date"
      @update:model-value="handleDate"
      :id="id"
      type="date"
      format="yyyy-MM-dd"
    ></VueDatePicker>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, toRef, watch } from "vue";
const date = ref(new Date());
const emit = defineEmits(["update:modelValue"]);

const { label, id } = defineProps({
  label: {
    type: String,
  },
  id: {
    type: String,
  },
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
</style>
