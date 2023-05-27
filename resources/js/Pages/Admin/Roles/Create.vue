<template>
    <div class="text-gray-500 mt-3">
      <h3 class="mb-3 text-2xl font-bold font-mono">Create Role</h3>
      <div class="grid grid-cols gap-4">
        <form
          @submit.prevent="createCinema"
          href="#"
          class="p-6 bg-white border rounded-lg shadow -mb-3"
        >
          <div class="mb-2">
            <label for="" class="text-sm">Name</label>
            <input
              placeholder="Enter Role Name"
              type="text"
              class="w-full py-3 px-3 focus:outline-none rounded-lg border-2"
            />
            <span class="text-red-500 text-xs"></span>
          </div>
          <button
            class="btn-primary rounded-lg text-white py-2 w-full text-center"
          >
            Create
          </button>
        </form>
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
  