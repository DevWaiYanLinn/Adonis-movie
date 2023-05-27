<template>
  <div>
    <div class="text-gray-500 mt-3">
      <role-page-tab/>
      <div
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div class="-mx-3 md:flex mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Role Name
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Admin"
            />
            <p class="text-red text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="mb-5">
          <h4 class="text-xs font-bold text-grey-darker mb-2">User Permissions</h4>
          <div class="grid grid-cols-6">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Create User</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Edit User</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Delete User</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Show User</span
              >
            </label>
          </div>
        </div>
        <div class="mb-5">
          <h4 class="text-xs font-bold text-grey-darker mb-2">Cinema Permissions</h4>
          <div class="grid grid-cols-6">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Create Cinema</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Edit Cinema</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Delete Cinema</span
              >
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-xs font-medium text-grey-darker dark:text-gray-300"
                >Show Cinema</span
              >
            </label>
          </div>
        </div>
        <div class="flex justify-end items-center">
          <button class="px-5 py-2 rounded-md text-white bg-green-600">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
import { useToast } from "vue-toastification";
import RolePageTab from "@/Pages/Admin/Roles/components/RolePageTab.vue";
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
