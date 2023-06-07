<template>
  <div class="date-picker">
    <label
      v-if="propsRef.label"
      :for="propsRef.id"
      class="block text-gray-500 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    >
      {{ propsRef.label }}
    </label>
    <VueDatePicker
      v-model="date"
      :id="propsRef.id"
      type="date"
      format="yyyy-MM-dd"
    ></VueDatePicker>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, toRef } from "vue";
const date = ref(new Date());
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
});
const propsRef = toRef(props);
</script>
<style>
.date-picker .dp__input_readonly {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
  border-width: 2px;
}
</style>
