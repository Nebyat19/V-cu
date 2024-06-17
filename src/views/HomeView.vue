<template>
  <div class="py-3 px-4 h-screen bg-[#fcfbfa]">
    <NavHeader :setSearchKey />
    <h-1>{{ greeting }}</h-1>
    <h3 class="text-textLight tracking-wide leading-6 text-sm mt-3">
      Don't let a bad day make you feel like you have a bad life
    </h3>
    <span class="grid place-items-center mt-5" v-if="isLoaded"><img :src="LOADER_GIF" alt="" srcset=""></span>
    <div v-else-if="AllrecentMoods.length == 0" class="mt-5 w-full grid place-items-center">
      <h3 class="text-textLight grid place-items-center text-sm">
        <ErrorIcon />
        No moods
      </h3>
    </div>
    <div v-else class="h-96 pb-16 scrollbar-hidden">
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
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useMoodStore } from '@/stores/MoodStore'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import { useConfigStore } from '@/stores/module/config'
import {LOADER_GIF} from '@/data/constants'
const greeting = getGreeting()
const moodStore = useMoodStore()
const searchKey = ref('')
const configStore = useConfigStore()
const AllrecentMoods = ref([])
watch(searchKey, async (key) => {
  if (key.length > 0) {
    AllrecentMoods.value = await moodStore.searchByTerm(key, configStore.getUserId())
  } else {
    AllrecentMoods.value = moodStore.getRecentMoods
  }
})

const isLoaded = computed(()=> moodStore.isLoading)
onMounted(() => {
  AllrecentMoods.value =  moodStore.getRecentMoods
})
const setSearchKey = (key) => (searchKey.value = key)
</script>
