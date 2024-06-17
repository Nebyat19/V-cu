<template>
  <div class="flex flex-col gap-16 items-center justify-between h-screen bg-pageBackground">
    <img class="w-full h-96 object-cover bg-pageBackground" :src="ONBOARDING_IMAGE" alt="" />

    <div class="w-full h-96 px-4 bg-white -mt-20 rounded-3xl flex flex-col pt-10">
      <h1 class="text-2xl font-h1 text-textBlack">Master your emotional wellness.</h1>
      <h3 class="text-textLight text-xs mt-5">Track your mood and productivity</h3>
      <span v-if="!isLoaded">loading ...</span>
      <router-link
        v-else
        to="/home"
        class="w-full text-center hover:bg-gray-700 py-3 mt-9 borde bg-gray-800 text-white rounded-2xl"
      >
        <button>Get started</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ONBOARDING_IMAGE } from '@/data/constants.js'
import { useMoodStore } from '@/stores/MoodStore'
import { computed } from 'vue'

const moodStore = useMoodStore()
const isLoaded = computed(() => moodStore.isLoaded)
</script>
