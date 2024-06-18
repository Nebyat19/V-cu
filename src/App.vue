<template>
  <app-container>
    <router-view></router-view>
  </app-container>
  <tg-alert message="Hello!" />
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useConfigStore } from '@/stores/module/config.js'
import { useWebApp } from 'vue-tg'
import { useMoodStore } from '@/stores/MoodStore'

const moodStore = useMoodStore()
const configStore = useConfigStore()

const router = useRouter()

onBeforeMount(async () => {
  const userId = useWebApp().initDataUnsafe.user?.id 
  console.log(userId)

  if (!userId) {
    router.push('/change-port')
  } else {
    await configStore.init(userId)
    const isNew = configStore.isNewUser()
  
    if (!isNew) {
      await moodStore.fetchMoods(userId)
      router.push('/home')
    } 
  }
})
</script>
