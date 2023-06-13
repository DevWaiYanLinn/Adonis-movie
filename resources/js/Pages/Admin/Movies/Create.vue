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
    <form @submit.prevent="createMovie" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="md:flex -mx-3 mb-5">
        <div class="md:w-1/2 mx-3 mb-6 md:mb-0">
          <TextField
            v-model="form.title"
            :error="form.errors.title"
            label="Title"
            placeholder="Jhon Wick"
          />
        </div>
        <div class="md:w-1/2 mx-3">
          <TextField
            v-model="form.genre"
            :error="form.errors.genre"
            label="Genre"
            placeholder="Action"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 mx-3">
          <TextField
            v-model="form.duration"
            :error="form.errors.duration"
            label="Duration"
            placeholder="02:00"
          />
        </div>
        <div class="md:w-1/2 mx-3">
          <TextField
            v-model="form.director"
            :error="form.errors.director"
            label="Director"
            placeholder="Smith"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-1/2 mx-3">
          <TextField
            v-model="form.cast"
            label="Cast"
            placeholder=""
          />
        </div>
        <div class="md:w-1/2 mx-3">
          <DatePicker
            v-model="form.releaseDate"
            label="Release Date"
            id="release-date"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-full mx-3">
            <TextArea
              v-model="form.description"
              label="Description"
              placeholder="About the movie"
            />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-5">
        <div class="md:w-full mx-3">
          <div class="font-sans text-gray-900 bg-slate-200 border-box">
            <div class="flex justify-center w-full mx-auto sm:max-w-lg">
              <div
                class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
                <div class="mt-10 mb-10 text-center">
                  <h2 class="text-2xl font-semibold mb-2">Upload Movie Images</h2>
                  <p class="text-xs text-gray-500">File should be of format .jpg, .png, .webp</p>
                </div>
                <form action="#"
                      class="relative w-4/5 h-32 max-w-xs mb-10 bg-gray-100 rounded-lg shadow-inner">
                  <input type="file" id="file-upload" class="hidden">
                  <label for="file-upload"
                         class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button type="submit" class="px-5 py-2 rounded-md text-white bg-purple-500">
          CREATE
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AdminLayout from "@/PageLayout/AdminLayout.vue";

export default {
  layout: AdminLayout,
};
</script>
<script setup>
import {useToast} from "vue-toastification";
import TextField from '@/components/TextField.vue'
import TextArea from '@/components/TextArea.vue'
import PageTab from "@/components/PageTab.vue";
import DatePicker from "@/components/DatePicker.vue";
import {useForm} from "@inertiajs/vue3";
const toast = useToast();

const form = useForm({
  title:'',
  genre:'',
  duration:'',
  director:'',
  cast:'',
  releaseDate:'',
  description:'',
})

const createMovie = () => {
  form.post('/admin/movies', {
    onError: errors => {
      console.log((errors))
    }
  })
}
</script>
