<template>
  <div
    v-if="show"
    @click.self="$emit('close-modal')"
    class="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-gray-200 bg-opacity-50 z-20"
  >
    <div
      class="min-w-[450px] grid grid-cols-5 rounded-lg border shadow-md relative overflow-hidden employee-card before:bg-purple-500"
    >
      <div
        class="relative col-span-2 h-full bg-white flex justify-start items-center employee-profile"
      >
        <div
          class="p-2 text-white h-full flex flex-col justify-center font-medium font-mono bg-purple-500"
        >
          A<br />
          D<br />
          O<br />
          N<br />
          I<br />
          S<br />
        </div>
        <div class="w-full">
          <img
            alt="image"
            :src="require('../../assets/image/businessman.png')"
            class="w-[100px] ml-8 rounded-full border-white z-10"
          />
        </div>
      </div>
      <div class="col-span-3 bg-white px-5 py-10">
        <ul class="flex -mb-3 flex-col">
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Name:</span
            >
            <span class="text-xs">{{
              userInfo.firstName + " " + userInfo.lastName
            }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Eamil:</span
            >
            <span class="text-xs">{{ userInfo.email }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Gender:</span
            >
            <span class="text-xs">{{ userInfo.gender }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Role:</span
            >
            <span class="text-xs">{{ "Hidden" }}</span>
          </li>
          <li class="mb-4 flex justify-between items-end">
            <span
              class="text-gray-500 uppercase tracking-wide text-xs font-bold"
              >Address:</span
            >
            <span class="text-xs">{{ userInfo.address || 'Not registered' }}</span>
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
  top: -2px;
  width: 100px;
  height: 30px;
  rotate: 45deg;
}
</style>

<script setup>
const { show, userInfo } = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  userInfo: {
    type: Object,
    default: {},
  },
});
</script>
