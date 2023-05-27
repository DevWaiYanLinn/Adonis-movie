<template>
  <div class="text-gray-500">
    <div class="flex flex-wrap justify-center gap-2 my-4">
      <button
        type="button"
        class="text-white flex items-end rounded-lg bg-purple-400 hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm"
      >
        <span class="mr-1">Create</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="text-gray-400 flex items-end rounded-lg bg-white hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm"
      >
        <span class="ml-1">Lists</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="text-gray-400 flex items-end rounded-lg bg-white hover:bg-indigo-50 focus:border-indigo-300 px-2 py-1 text-sm"
      >
        <span class="mr-1">Trash</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <form
        @submit.prevent="createCinema"
        href="#"
        class="p-6 bg-white border rounded-lg shadow -mb-3"
      >
        <div class="mb-2">
          <label for="" class="text-sm">Name</label>
          <input
            placeholder="Enter Cinema Name"
            type="text"
            class="w-full py-3 px-3 focus:outline-none rounded-lg border-2"
          />
          <span class="text-red-500 text-xs"></span>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label for="" class="text-sm">City</label>
            <input
              placeholder="Enter Cinema Name"
              type="text"
              class="w-full py-3 px-3 focus:outline-none rounded-lg border-2"
            />
            <span class="text-red-500 text-xs"></span>
          </div>
          <div>
            <label for="" class="text-sm">Country</label>
            <input
              placeholder="Enter Cinema Name"
              type="text"
              class="w-full py-3 px-3 focus:outline-none rounded-lg border-2"
            />
            <span class="text-red-500 text-xs"></span>
          </div>
        </div>
        <div class="w-full mb-3">
          <label for="" class="text-sm">Address</label>
          <textarea
            class="w-full py-3 px-3 focus:outline-none rounded-lg border-2"
            rows="8"
            placeholder="Cinmea's Full Address"
          ></textarea>
          <span class="text-red-500 text-xs"></span>
        </div>
        <div class="flex justify-end items-center gap-4">
          <button
            class="bg-gray-500 rounded-lg text-white py-2 px-5 text-center"
          >
            Back
          </button>
          <button
            class="bg-purple-500 rounded-lg text-white py-2 px-5 text-center"
          >
            Create
          </button>
        </div>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
import { useToast } from "vue-toastification";
export default {
  layout: AdminLayout,
};
</script>
<script setup>
const toast = useToast();
const createCinema = () => {
  toast.success("Hello Toast", {});
};
</script>
