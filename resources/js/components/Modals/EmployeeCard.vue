<template>
  <div
    v-if="showModal"
    @click.self="$emit('close-modal')"
    class="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-gray-200 bg-opacity-50 z-20"
  >
    <div
      class="min-w-[500px] grid grid-cols-5 rounded-lg border shadow-md relative overflow-hidden employee-card before:bg-purple-400"
    >
      <div
        class="relative col-span-2 h-full bg-purple-400 flex flex-col justify-center items-center employee-profile"
      >
        <img
          :src="require('../../assets/image/businessman.png')"
          class="w-[100px] rounded-full border-white z-10"
        />
      </div>
      <div class="col-span-3 bg-white px-5 py-10">
        <ul class="flex -mb-3 flex-col">
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Name:</span
            >
            <span class="text-xs">{{ "Ethan Smith" }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Eamil:</span
            >
            <span class="text-xs">{{ "ethan@gmail.com" }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Gender:</span
            >
            <span class="text-xs">{{ "Male" }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Role:</span
            >
            <span class="text-xs">{{ "Super Admin" }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Address:</span
            >
            <span class="text-xs">{{ "NewYork City, USA" }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.employee-card::before {
  content: "";
  position: absolute;
  right: -60px;
  top: -20 px;
  width: 100px;
  height: 30px;
  rotate: 45deg;
}


</style>

<script setup>
const { showModal } = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
</script>
