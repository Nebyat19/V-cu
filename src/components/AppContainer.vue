<template>
  <div
    class="overflow-y-hidden min-h-screen max-h-screen relative pb-5 overflow-hidden font-main lg:rounded-xl max-w-sm mx-auto overflow-x-hidden"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { useConfigStore } from '@/stores/module/config'
import { onMounted, ref } from 'vue'
import { useWebApp } from 'vue-tg'


const username = ref('')
const { initDataUnsafe } = useWebApp()
const configStore = useConfigStore()

onMounted(() => {
  const user = initDataUnsafe?.user
  
  if (user) {
    username.value =  user.username || user.first_name || "no"
    configStore.setUsername(username.value)
   
  }
})
</script>
