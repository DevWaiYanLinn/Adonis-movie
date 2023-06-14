<template>
  <div class="text-gray-500 mb-10">
  </div>
  <form @submit.prevent="createShowTime"
        class="bg-white text-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
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
        <SelectOptions label="halls" v-model="form.hallID">
          <option>Select Hall</option>
          <option v-for="hall in getHalls" :key="hall.id" :value="hall.id">{{ hall.name }}</option>
        </SelectOptions>
      </div>
    </div>
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-1/2 mx-3 mb-6 md:mb-0">
        <DatePicker label="Show Days" :range="true" @update:model-value="handleShowDays"/>
      </div>
      <div class="md:w-1/2 mx-3">
        <TextField
          label="Movie Time"
          v-model="form.movieTime"
          placeholder="11:00 AM, 01:00 PM"
        />
      </div>
    </div>
    <div class="md:flex -mx-3 mb-5">
      <div class="md:w-full mx-3 mb-6 md:mb-0">
        <TextArea
          v-model="form.description"
          label="Description"
          placeholder="Something you want to describe"/>
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
import {computed, reactive} from "vue";
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
});
const form = useForm({
  movieID: movie.id,
  hallID: '',
  cinemaID: '',
  movieTime: '',
  startDay: '',
  endDay: '',
  description: '',
});
const handleShowDays = (days) => {
  if (!days) {
    form.startDay = '';
    form.endDay = ''
  } else {
    [form.startDay, form.endDay] = days;
  }
}
const getHalls = computed(() => {
  return halls?.filter(h => h.cinemaID === form.cinemaID)
})
const createShowTime = () => {
  form.post('/admin/movies/show-times', {
    onError: errors => {
      console.log(errors)
    }
  })
}

</script>
