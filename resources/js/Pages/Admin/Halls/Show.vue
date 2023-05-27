<template>
  <div class="mt-5">
    <h3 class="fond-bold text-gray-500 text-2xl mb-3">
      Cinema's Hall Management
    </h3>
    <div
      v-for="row in rows"
      :key="row.id"
      class="grid gap-2 mb-2 items-center"
      :style="`grid-template-columns:repeat(${
        row.seats.length + 2
      }, minmax(0,1fr))`"
    >
      <button
        class="col-span-2 transition-colors block cursor-pointer text-white border rounded-lg shadow-md p-2 text-left focus:bg-green-300 text-sm hover:bg-green-300 bg-green-400"
      >
        <span class="fond-bold text-md">
          {{ row.rowNumber }} 
        </span> :
        {{ row.price }} <br />
        MMK
      </button>
      <div
        v-for="seat in row.seats"
        :key="seat.id"
        class="p-2 border bg-white cursor-pointer rounded-lg text-center shadow-md hover:bg-green-400 hover:text-white"
      >
        {{ seat.seatNumber }}
        <!-- <div v-if="seat.seat_number > 10 && seat.seat_number <= 11"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
export default {
  layout: AdminLayout,
};
</script>
<script setup>
const { hall } = defineProps(["hall"]);
console.log(hall);
const rows = hall.rows || [];
</script>
