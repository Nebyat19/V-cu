<template>
     <div class="flex">
        <span class="flex  flex-col items-center justify-center pr-3   border-r border-gray-400">
          <h1 class="text-xl text-slate-700">{{ computedRecentMood.day }}</h1>
          <Date>{{computedRecentMood.month}}</Date></span
        >

      <div class="flex flex-col w-full gap-1 ml-4">
        <div class="flex items-center justify-between ">
          <h2 class="text-md font-semibold text-slate-800">{{ computedRecentMood.head }}</h2>
          <h1 class="text-md">{{ computedRecentMood.emoji }}</h1>
        </div>
        <h3 class="text-xs text-textLight line-clamp-1">{{computedRecentMood.text}}...</h3>
      </div>
      </div>
</template>

<script setup>
import { computed } from "vue"
import Date from "@/components/ui/Date.vue"


const props = defineProps({
  recentMood: {
    type: Object,
    required: true
  }
})
const computedRecentMood = computed(() => {
  return props.recentMood
})
</script>