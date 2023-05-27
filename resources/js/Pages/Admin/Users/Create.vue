<template>
  <div class="text-gray-500">
    <user-page-tab />
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
    >
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red text-xs italic">Please fill out this field.</p>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-last-name"
            type="text"
            placeholder="Doe@io"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-grey-dark text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="role"
          >
            Role
          </label>
          <select
            class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            id="grid-state"
          >
            <option>Select Role</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="address"
          >
            Address
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button class="px-5 py-2 rounded-md text-white bg-green-600">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
import UserPageTab from "@/Pages/Admin/Users/components/UserPageTab.vue";
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
