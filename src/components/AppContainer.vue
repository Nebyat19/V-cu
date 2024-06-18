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
import { useTelegram } from 'vue-tg'


const username = ref('')
const { initData } = useTelegram()
const configStore = useConfigStore()

onMounted(() => {
  const user = initData?.user
  if (user) {
    username.value =  user.username || user.first_name || ""
    configStore.setUsername(username.value)
   
  }
})
</script>
