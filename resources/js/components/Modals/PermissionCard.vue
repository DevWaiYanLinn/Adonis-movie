<template>
  <div @click.self="$emit('close-modal')" v-if="show"
       class="h-screen flex justify-center items-start fixed bg-opacity-50 bg-slate-200 w-full z-10">
    <div class="border rounded-lg bg-white max-w-[800px] p-10 mt-20 gap-2">
      <div class="flex justify-center items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-10 h-10 text-green-500 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
        <h4 class="text-2xl font-mono text-slate-500">{{ role.name }}</h4>
      </div>
      <div class="-mb-5">
        <div v-for="key in Object.keys(permissions)" class="text-gray-500 mb-5" :key="key">
          <h4 class="text-xs font-bold mb-2">{{ key }} Permissions</h4>
          <div class="grid grid-cols-4 gap-10 mt-2">
            <div v-for="permission in permissions[key]" class="flex items-center"
                 :key="permission.id">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5 mr-1 text-red-500" :class="{'!text-green-500': role.permissions.find(p => p.id === permission.id) }">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
              <span class="text-xs">{{ permission.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const {show, role, permissions} = defineProps(['permissions', 'show', 'role'])
</script>
