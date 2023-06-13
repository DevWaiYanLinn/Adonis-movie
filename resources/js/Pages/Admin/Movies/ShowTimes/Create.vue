<template>
  <div class="text-gray-500">
    <div class="flex flex-wrap justify-center gap-2 my-4">
      <page-tab
        label="Create"
        url="/admin/movies/create"
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
        url="/admin/movies"
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
    </div>
  </div>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-1/2 mx-3 mb-6 md:mb-0">
        <TextField
          label="Movie ID"
          :disabled="true"
          :placeholder="movie.id"
        />
      </div>
      <div class="md:w-1/2 mx-3">
        <TextField
          label="Title"
          :disabled="true"
          :placeholder="movie.title"
        />
      </div>
    </div>
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-1/2 mx-3 mb-6 md:mb-0">
        <SelectOptions label="Cinemas" v-model="form.cinemaID">
          <option value="">Select Cinema</option>
          <option v-for="cinema in cinemas" :key="cinema.id" :value="cinema.id">{{ cinema.name }}</option>
        </SelectOptions>
      </div>
      <div class="md:w-1/2 mx-3">
        <SelectOptions label="halls">
          <option>Select Hall</option>
          <option v-for="hall in getHalls" :key="hall.id">{{ hall.name }}</option>
        </SelectOptions>
      </div>
    </div>
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-1/2 mx-3 mb-6 md:mb-0">
        <DatePicker label="Show Date" :range="true"/>
      </div>
      <div class="md:w-1/2 mx-3">
        <TextField
          label="Show Time"
          placeholder="11:00 AM, 01:00 PM"
        />
      </div>
    </div>
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-full mx-3 mb-6 md:mb-0">
        <TextArea label="Description" placeholder="Something you want to describe"/>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <button
        type="submit"
        class="px-5 py-2 rounded-md text-white bg-purple-500 focus:bg-purple-400"
      >
        CREATE
      </button>
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
import PageTab from "@/components/PageTab.vue";
import TextField from "@/components/TextField.vue";
import SelectOptions from "@/components/SelectOptions.vue";
import {useForm} from "@inertiajs/vue3";
import {computed} from "vue";
import DatePicker from "@/components/DatePicker.vue";
import TextArea from "@/components/TextArea.vue";

const {movie, halls, cinemas, qs} = defineProps({
  movie: {
    type: Object,
  },
  cinemas: {
    type: Array
  },
  halls: {
    type: Array
  },
  qs: {
    type: Object
  }
})

const form = useForm({
  cinemaID: ''
})

const getHalls = computed(() => {
  return halls?.filter(h => h.cinemaID === form.cinemaID)
})

</script>
