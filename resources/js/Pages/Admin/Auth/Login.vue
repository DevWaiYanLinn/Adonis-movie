<template>
  <div class="h-screen flex justify-center items-center">
    <form @submit.prevent="login" class="max-w-md w-1/2 p-8 shadow-sm bg-white rounded-lg">
      <div class="text-center flex justify-center items-center">
        <img
          alt="movie"
          :src="require('../../../assets/image/tv.png')"
          class="w-[80px]"
        />
      </div>
      <div class="mt-5">
        <TextField
          id="email"
          label="Email"
          v-model="form.email"
          placeholder="Ethan@adoins.com"
        />
      </div>
      <div class="mt-5">
        <TextField
          id="password"
          label="password"
          v-model="form.password"
          placeholder="************"
          type="password"
        />
      </div>
      <div class="mt-5">
        <button type="submit" class="w-full py-2 rounded-md text-white active:bg-purple-400 bg-purple-500"> WELCOME
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import DefaultLayout from "@/PageLayout/DefaultLayout.vue";
import PageTab from "@/components/PageTab.vue";
import {useToast} from "vue-toastification";

export default {
  layout: DefaultLayout,
};
</script>
<script setup>
import TextField from '@/components/TextField.vue'
import {useForm} from '@inertiajs/vue3'
const {errors} = defineProps(['errors'])
const form = useForm({
  email: '',
  password: '',
})
const toast = useToast();
const login = () => {
  form.post('/admin/auth/login', {
    headers: {
      "accept": "application/json"
    },
    onError: errors => {
      if (errors.login) {
          toast.error('The credentials do not match our records')
      }
    }
  })
}
</script>
