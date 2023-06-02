<template>
  <div>
    <div class="text-gray-500 mt-3">
      <role-page-tab/>
      <div
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div class="-mx-3 md:flex mb-6">
          <TextField :id="0" placeholder="Admin" label="Role" :value="role"/>
        </div>
        <div class="mb-5">
          <h4 class="text-xs font-bold text-grey-darker mb-2">User Permissions</h4>
          <div class="grid grid-cols-6">
            <switch-button label="Create User"/>
            <switch-button label="Edit User"/>
            <switch-button label="Show User"/>
            <switch-button label="Delete User"/>
          </div>
        </div>
        <div class="mb-5">
          <h4 class="text-xs font-bold text-grey-darker mb-2">Cinema Permissions</h4>
          <div class="grid grid-cols-6">
            <switch-button label="Create Cinema"/>
            <switch-button label="Edit Cinema"/>
            <switch-button label="Show Cinema"/>
            <switch-button label="Delete Cinema"/>
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
import {ref} from 'vue'
import AdminLayout from "@/PageLayout/AdminLayout.vue";
import TextField from '@/components/TextField.vue'
import SwitchButton from '@/components/SwitchButton.vue'
import { useToast } from "vue-toastification";
import RolePageTab from "@/Pages/Admin/Roles/components/RolePageTab.vue";
export default {
  layout: AdminLayout,
};
</script>
<script setup>
const toast = useToast();
const role =  ref()
const createCinema = () => {
  toast.success("Hello Toast", {});
};
</script>
