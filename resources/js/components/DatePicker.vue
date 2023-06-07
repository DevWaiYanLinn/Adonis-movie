<template>
  <div class="date-picker">
    <VueDatePicker v-model="date"></VueDatePicker>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
const date = ref(null);
</script>
<style>

</style>
