<template>
  <div class="grid grid-cols-4 gap-4 mt-5">
    <a
      href=""
      class="col-span-1 block border-r-4 border-r-orange-300 p-6 bg-white rounded-lg shadow-lg"
    >
      <div class="text-gray-500">
        <div class="flex items-center">
          <div class="p-2 border shadow-lg bg-orange-300 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span class="font-md ml-2 font-bold">Today's Gross Sale</span>
        </div>
        <p class="text-xl font-bold mt-3">20000 MMK</p>
      </div>
    </a>
    <a
      href="#"
      class="col-span-1 border-r-4 border-r-green-300 block p-6 bg-white border rounded-lg shadow-lg"
    >
      <div class="text-gray-500">
        <div class="flex items-center">
          <div class="p-2 border bg-green-300 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
          </div>
          <span class="font-md ml-2 font-bold">Total Ticket Sold</span>
        </div>
        <p class="text-xl font-bold mt-3">200 Tickets</p>
      </div>
    </a>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
export default {
  layout: AdminLayout,
};
</script>
