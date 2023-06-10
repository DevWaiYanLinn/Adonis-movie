<template>
  <div v-if="show" class="h-screen flex justify-center items-start fixed bg-opacity-50 bg-slate-200 w-full z-10">
    <div class="border rounded-lg bg-white min-w-[450px] p-10 mt-20">
      <p class="text-slate-500 text-center text-lg font-mono">
        Are you sure you would like to do this?
      </p>
      <div class="mt-9 flex gap-4">
        <Button :disabled="processing" @click="$emit('close-modal')"
                class="bg-white border-2 border-slate-400 text-slate-500 text-sm flex-auto active:bg-slate-200">
          Cancel
        </Button>
        <Button :disabled="processing" @click="$emit('modal-action')"
                class="bg-red-500 text-white text-sm flex-auto active:bg-red-400">
          OK
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";

const {show, processing} = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  processing: {
    type: Boolean,
    default: false,
  }
})
</script>
<style scoped>
</style>
