<template>
  <div class="text-gray-500">
    <PageTab/>
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
import DatePicker from "@/components/DatePicker.vue";
import {useForm} from "@inertiajs/vue3";
import PageTab from "@/Pages/Admin/Movies/components/PageTab.vue";

const toast = useToast();

const form = useForm({
  title: '',
  genre: '',
  duration: '',
  director: '',
  cast: '',
  releaseDate: null,
  description: '',
})

const createMovie = () => {
  form.post('/admin/movies', {
    onError: errors => {
      console.log((errors))
    }
  })
}
</script>
