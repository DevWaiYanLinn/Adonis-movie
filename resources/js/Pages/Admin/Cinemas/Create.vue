<template>
  <div class="text-gray-500">
    <div class="flex flex-wrap justify-center gap-2 my-4">
      <page-tab
        label="Create"
        url="/admin/cinemas/create"
      >
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
          ></path>
        </svg>
      </page-tab>
      <page-tab
        label="Lists"
        url="/admin/cinemas/lists"
      >
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
          ></path>
        </svg>
      </page-tab>
      <page-tab
        :class="['pointer-events-none opacity-50']"
        label="Trash"
        url="/admin/trash"
      >
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
          ></path>
        </svg>
      </page-tab>
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 px-3 md:mb-0">
          <TextField label="name" placeholder="Enter Cinema Name"/>
        </div>
        <div class="md:w-1/2 px-3">
          <TextField label="Phone Number" placeholder="09979*********"/>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 px-3">
          <TextField label="city" placeholder="Enter City Name"/>
        </div>
        <div class="md:w-1/2 px-3">
          <SelectOptions label="Status">
              <option value="">Select Status</option>
              <option value="0">Close</option>
              <option value="0">Open</option>
          </SelectOptions>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 px-3">
          <TextField label="Opening Hours" type="time" value="09:00" id="opening-hours"/>
        </div>
        <div class="md:w-1/2 px-3">
          <TextField label="Closing Hours" type="time" value="20:00" id="closing-hours"/>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 px-3 md:mb-0">
          <TextArea label="address" placeholder="Yangon,....."/>
        </div>
        <div class="md:w-1/2 px-3 md:mb-0">
          <TextArea label="description" placeholder="About...."/>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button class="px-5 py-2 rounded-md text-white bg-purple-500">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";
import TextField from '@/components/TextField.vue'
import SelectOptions from '@/components/SelectOptions.vue'
import TextArea from '@/components/TextArea.vue'
import PageTab from "@/components/PageTab.vue";
import DatePicker from "@/components/DatePicker.vue";
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
