<template>
   <div class="py-3 px-4 h-screen bg-[#fcfbfa]">

  <NavHeader />
  <h-1>{{ greeting }}</h-1>
  <h3 class="text-textLight tracking-wide leading-6 text-sm mt-3">
    Don't let a bad day make you feel like you have a bad life
  </h3>

  <div class="h-96 pb-16 scrollbar-hidden">
    <MoodRecentList v-for="recentMoods in AllrecentMoods" :key="recentMoods" :recentMoods />
  </div>
  <NavBottom />
   </div>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue'
import NavBottom from '@/components/NavBottom.vue'
import MoodRecentList from '@/components/ui/MoodRecentList.vue'
import { getGreeting } from '@/utils/getGreeting'
import { computed } from 'vue'
import { useMoodStore } from '@/stores/MoodStore'
const greeting = getGreeting()
const moodStore = useMoodStore()
const AllrecentMoods = computed(()=> moodStore.getRecentMoods)
console.log(AllrecentMoods.value)
</script>
