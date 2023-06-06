<template>
  <div class="h-screen flex justify-center items-center">
    <form @submit.prevent="login" class="max-w-md w-1/2 p-8 shadow-sm bg-white rounded-lg">
      <div class="text-center flex justify-center items-center">
        <img
          :src="require('../../../assets/image/tv.png')"
          class="w-[80px]"
        />
      </div>
      <div class="mt-5">
        <TextField
          id="email"
          label="Email"
          v-model="email"
          placeholder="Enter your email"
        />
      </div>
      <div class="mt-5">
        <TextField
          id="password"
          label="password"
          v-model="password"
          placeholder="************"
          type="password"
        />
      </div>
      <div class="mt-5">
        <button class="w-full py-2 rounded-md text-white focus:bg-purple-500 bg-purple-600"> Login </button>
      </div>
    </form>
  </div>
</template>

<script>
import DefaultLayout from "@/PageLayout/DefaultLayout.vue";
import PageTab from "@/components/PageTab.vue";
import { useToast } from "vue-toastification";
export default {
  layout: DefaultLayout,
};
</script>
<script setup>
import TextField from '@/components/TextField.vue'
import { router } from '@inertiajs/vue3'
import { ref } from 'vue';
const email = ref('');
const password  = ref('');
const login = () => {
   router.get('/admin')
}
</script>
