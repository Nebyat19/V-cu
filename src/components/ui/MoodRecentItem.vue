<template>
     <div class="relative flex p-2">
        <span class="flex  flex-col items-center justify-center pr-3   border-r border-gray-400">
          <h1 class="text-2xl text-slate-700">{{ computedRecentMood.date }}</h1>
          <Date>{{computedRecentMood.month}}</Date></span
        >

      <div class="flex flex-col w-full gap-1 ml-4">
        <div class="flex items-center justify-between ">
          <h2 class="text-lg font-semibold text-slate-800">{{ computedRecentMood.head }}</h2>
          <h1 class="text-md">{{ computedRecentMood.emoji }}</h1>
        </div>
        <h3 class="text-xs text-textLight line-clamp-1">{{computedRecentMood.text}}...</h3>
       
      </div>
      
    <span class=" absolute right-0 -bottom-8 mt-1 text-xs text-gray-500 flex justify-end mr-2">{{ computedRecentMood.dayOfWeek }} {{ computedRecentMood.time }}</span>
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