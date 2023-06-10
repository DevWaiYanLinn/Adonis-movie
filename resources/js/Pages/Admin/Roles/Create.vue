<template>
  <form @submit.prevent="createRole">
    <div class="text-gray-500 mt-3">
      <role-page-tab/>
      <div
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div class="-mx-3 md:flex px-3 mb-6">
          <TextField placeholder="Admin" label="Role" v-model="form.name" :error="form.errors.name"/>
        </div>
        <div class="mb-5" v-for="key in Object.keys(formatPermissions)" :key="key">
          <h4 class="text-xs font-bold text-grey-darker mb-2">{{ key }} Permissions</h4>
          <div class="grid grid-cols-6">
            <SwitchButton @change-value="handlePermissions"  :label="permission.name" v-for="permission in formatPermissions[key]" :value="permission.id" :key="permission.id"/>
          </div>
        </div>
        <div class="flex justify-end items-center">
          <button type="submit" class="px-5 py-2 rounded-md text-white bg-purple-500 focus:bg-purple-400">
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";

export default {
  layout: AdminLayout,
};
</script>
<script setup>
import {ref, computed, reactive} from 'vue'
import TextField from '@/components/TextField.vue'
import SwitchButton from '@/components/SwitchButton.vue'
import {useToast} from "vue-toastification";
import RolePageTab from "@/Pages/Admin/Roles/components/RolePageTab.vue";
import {useForm} from "@inertiajs/vue3";
const toast = useToast();
const form = useForm({
  name:'',
  permissions:[]
})
const {permissions} = defineProps(['permissions'])
const formatPermissions = computed(() => {
  const format = {};
  permissions.forEach(function (permission) {
    const group = permission.name.split('_')[1];
    if (!format[group]) {
      format[group] = [];
    }
    format[group].push(permission)
  })
  return format;
})
const handlePermissions = ({checked, id}) => {
  if(!checked) {
    form.permissions = form.permissions.filter(permission => permission?.id !== id)
  } else {
    form.permissions.push({id})
  }
}
const createRole = () => {
  form.post('/admin/roles',{
    onError: errors => {
      console.log((errors))
    }
  })
}
const createCinema = () => {
  toast.success("Hello Toast", {});
};
</script>
